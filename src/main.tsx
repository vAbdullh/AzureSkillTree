import { useEffect, useMemo, useState } from 'react'
import type { User } from 'firebase/auth'
import { createRoot } from 'react-dom/client'
import { Background, Controls, Handle, MiniMap, Position, ReactFlow, type Edge, type Node, type NodeProps } from '@xyflow/react'
import '@xyflow/react/dist/style.css'
import { BookOpen, Check, ChevronRight, FlaskConical, Lock, Play, Target, X, Zap } from 'lucide-react'
import './styles.css'
import './overrides.css'
import { signInWithGoogle, signOutUser, watchAuth } from './lib/firebase/auth'
import { loadProgress, saveProgress, type UserProgress } from './lib/firebase/progress'

type Status = 'mastered' | 'learning' | 'not-started'
type Category = 'Foundations' | 'Networking' | 'Compute' | 'Storage' | 'Identity' | 'Databases' | 'Infrastructure' | 'Containers' | 'DevOps' | 'Security' | 'Observability' | 'Governance' | 'Reliability' | 'Architecture'
type Topic = { id: string; title: string; category: Category; status: Status; progress: number; x: number; y: number; prereqs: string[]; major?: boolean; locked?: boolean; description: string }
const tint: Record<Category, string> = { Foundations: '#16161a', Networking: '#101923', Compute: '#171523', Storage: '#132019', Identity: '#20191e', Databases: '#191622', Infrastructure: '#181822', Containers: '#182019', DevOps: '#151c20', Security: '#201813', Observability: '#1d1715', Governance: '#171c24', Reliability: '#20181a', Architecture: '#1d1924' }
const color: Record<Status, string> = { mastered: '#399157', learning: '#0078D4', 'not-started': '#FFFAFA' }
const name: Record<Status, string> = { mastered: 'Mastered', learning: 'Learning', 'not-started': 'Not Started' }
const mainBackground: Record<string, string> = { Foundations: '#006600', 'Core Cloud Engineer': '#002299', 'Advanced Cloud Engineer': '#331155', 'Senior Cloud Engineer': '#330D0D', 'Cloud Architect': '#B59100' }
const levels: [string, Category, string[], Status?][] = [
    ['Foundations', 'Foundations', ['Cloud Concepts', 'Shared Responsibility', 'Cloud Economics', 'Azure Core'], 'mastered'],
    ['Core Cloud Engineer', 'Networking', ['Virtual Network', 'Network Security Groups', 'Blob Storage', 'Microsoft Entra ID', 'Azure SQL'], 'learning'],
    ['Advanced Cloud Engineer', 'Compute', ['Virtual Machines', 'App Service', 'Azure Functions', 'Bicep', 'Terraform', 'Container Registry', 'AKS Cluster Operations']],
    ['Senior Cloud Engineer', 'DevOps', ['CI/CD Pipelines', 'GitOps', 'Defender for Cloud', 'Key Vault', 'Azure Monitor', 'SLOs & Alerting', 'Landing Zones']],
    ['Cloud Architect', 'Architecture', ['Well-Architected Framework', 'Reference Architectures', 'Disaster Recovery', 'Cost Management', 'Azure Policy']]
]
const initial: string[] = []
const categoryFor=(title:string,fallback:Category):Category=>({ 'Blob Storage':'Storage','Microsoft Entra ID':'Identity','Azure SQL':'Databases','Bicep':'Infrastructure','Terraform':'Infrastructure','Container Registry':'Containers','AKS Cluster Operations':'Containers','Defender for Cloud':'Security','Key Vault':'Security','Azure Monitor':'Observability','SLOs & Alerting':'Observability','Landing Zones':'Governance','Cost Management':'Governance','Azure Policy':'Governance','Disaster Recovery':'Reliability' }[title] as Category)||fallback
const topics: Topic[] = levels.flatMap(([title, category, children, state = 'not-started'], i) => { const x = i * 620; const parent = { id: `level-${i}`, title, category, status: state, progress: state === 'mastered' ? 100 : state === 'learning' ? 58 : 0, x, y: 330, prereqs: initial.slice(), major: true, description: `Develop a practical foundation in ${title} with connected Azure concepts and hands-on learning.` } as Topic; initial.splice(0, initial.length, title); return [parent, ...children.map((child, j) => ({ id: `${i}-${j}`, title: child, category:categoryFor(child,category), status: state === 'mastered' ? 'mastered' : state === 'learning' && (j === 0 || j === 1) ? 'learning' : 'not-started', progress: state === 'mastered' ? 100 : state === 'learning' && (j === 0 || j === 1) ? (j === 0 ? 100 : 70) : 0, x:x+290, y:330+(j-(children.length-1)/2)*130, prereqs: [title], description: `Learn ${child} through theory, a knowledge check, a guided Azure lab, and an independent challenge.` } as Topic))] })
// Each stage branches out to every skill, then every skill converges into the next career stage.
topics.forEach((topic, index) => {
  if (topic.major && index > 0) {
    const stage = Number(topic.id.replace('level-', ''))
    topic.prereqs = topics.filter(candidate => candidate.id.startsWith(`${stage - 1}-`)).map(candidate => candidate.title)
  }
})
function TopicNode({ data }: NodeProps<Node<Topic>>) { const t = data as unknown as Topic; return <div className={`topic-node ${t.major ? 'major' : ''}`} style={{ backgroundColor: t.major ? mainBackground[t.title] : tint[t.category], borderColor: color[t.status] }}><Handle type="target" position={Position.Left} /><div className="node-meta"><i style={{ background: color[t.status] }} />{t.category}{t.locked && <Lock size={11} />}</div><strong>{t.title}</strong><div className="node-footer"><span>{name[t.status]}</span><span>{t.progress}%</span></div><div className="node-progress"><i style={{ width: `${t.progress}%`, background: color[t.status] }} /></div><Handle type="source" position={Position.Right} /></div> }
function LearningApp() {
  const [user, setUser] = useState<User | null>(null)
  const [progress, setProgress] = useState<Record<string, UserProgress>>({})
  const [selectedId, setSelectedId] = useState(topics[0].id)
  const [open, setOpen] = useState(true)
  useEffect(() => watchAuth(setUser), [])
  useEffect(() => { if (user) loadProgress(user.uid).then(setProgress) }, [user])
  const topicWithProgress = (topic: Topic): Topic => {
    const stage = topic.major ? Number(topic.id.replace('level-', '')) : Number(topic.id.split('-')[0])
    const priorItems = stage > 0 ? topics.filter(item => item.id.startsWith(`${stage - 1}-`)) : []
    const locked = stage > 0 && priorItems.some(item => progress[item.id]?.status !== 'mastered')
    if (topic.major) {
      const items = topics.filter(item => item.id.startsWith(`${stage}-`))
      const completed = items.filter(item => progress[item.id]?.status === 'mastered').length
      const started = items.some(item => progress[item.id]?.status === 'learning' || progress[item.id]?.status === 'mastered')
      return { ...topic, locked, status: completed === items.length ? 'mastered' : started ? 'learning' : 'not-started', progress: Math.round((completed / items.length) * 100) }
    }
    const entry = progress[topic.id]
    return { ...topic, locked, status: entry?.status ?? 'not-started', progress: entry?.status === 'mastered' ? 100 : entry?.status === 'learning' ? 50 : 0 }
  }
  const selected = topicWithProgress(topics.find(topic => topic.id === selectedId) ?? topics[0])
  const nodes = useMemo<Node<Topic>[]>(() => topics.map(topic => { const data = topicWithProgress(topic); return { id: data.id, type: 'topic', position: { x: data.x, y: data.y }, data } }), [progress])
  const edges = useMemo<Edge[]>(() => topics.flatMap(topic => topic.prereqs.map(prerequisite => { const source = topics.find(item => item.title === prerequisite)?.id; return source ? { id: `${source}-${topic.id}`, source, target: topic.id, type: 'smoothstep', style: { stroke: '#3f3f46', strokeWidth: topic.major ? 2 : 1.2 } } : null })).filter(Boolean) as Edge[], [])
  const mastered = topics.filter(topic => !topic.major && progress[topic.id]?.status === 'mastered').length
  const percent = Math.round((mastered / topics.filter(topic => !topic.major).length) * 100)
  useEffect(() => { document.documentElement.style.setProperty('--roadmap-progress', `${percent}%`) }, [percent])
  useEffect(() => { document.body.dataset.canComplete = String(!selected.locked && !selected.major) }, [selected])
  const update = async (status: Exclude<Status, 'not-started'>) => { if (selected.locked || selected.major) return; if (!user) return signInWithGoogle(); await saveProgress(user.uid, selected.id, status); setProgress(current => ({ ...current, [selected.id]: { ...current[selected.id], status } })) }
  return <div className="app-shell"><section className="overview"><div><p className="eyebrow">CLOUD ABDULLH</p><h1>AZURE LEARNING ROADMAP</h1></div><div className="metrics"><div className="progress-circle"><b>{percent}<small>%</small></b></div><div className="metric"><b>{mastered}</b><p>Topics mastered</p></div>{user ? <button className="account" onClick={signOutUser}>{user.displayName || 'Signed in'}</button> : <button className="account" onClick={signInWithGoogle}>Sign in with Google</button>}</div></section><main className={open ? 'with-panel' : ''}>{open && <aside className="detail"><button className="close" onClick={() => setOpen(false)}><X size={18} /></button><div className="panel-status" style={{ color: color[selected.status] }}><i style={{ background: color[selected.status] }} />{name[selected.status]}</div><p className="panel-category">{selected.category}</p><h2>{selected.title}</h2><p className="description">{selected.description}</p><div className="prereqs"><span>To complete this topic</span><div>{selected.prereqs.length ? selected.prereqs.map(prerequisite => <button key={prerequisite}>{prerequisite}<ChevronRight size={13} /></button>) : <p>Start here — no prerequisites needed.</p>}</div></div><div className="path"><span>Learning checklist</span><div className="stage"><BookOpen size={15}/><span>Read and understand the theory</span></div><div className="stage"><Target size={15}/><span>Pass the topic quiz</span></div><div className="stage"><FlaskConical size={15}/><span>Finish a guided lab</span></div><div className="stage"><Zap size={15}/><span>Complete an independent challenge</span></div></div><button className="continue" onClick={() => update('mastered')}>{user ? 'Mark complete' : 'Sign in to track progress'}<Check size={17} /></button></aside>}<section className="canvas-wrap"><div className="canvas-title"><span>Career progression · pan left to right through each skill stage</span><div className="legend">{(['mastered', 'learning', 'not-started'] as Status[]).map(status => <i key={status}><b style={{ background: color[status] }} />{name[status]}</i>)}</div></div><ReactFlow nodes={nodes} edges={edges} nodeTypes={{ topic: TopicNode }} onNodeClick={(_, node) => { setSelectedId(node.id); setOpen(true) }} fitView minZoom={.18} maxZoom={1.4}><Background color="#27272a" gap={28} size={1}/><Controls showInteractive={false}/><MiniMap nodeColor={node => color[(node.data as Topic).status]} maskColor="rgba(9,9,11,.82)"/></ReactFlow><p className="canvas-hint">Scroll to zoom · drag to explore the roadmap</p></section></main></div>
}
createRoot(document.getElementById('root')!).render(<LearningApp />)
