import { useEffect, useMemo, useState } from 'react'
import { Background, Controls, Handle, Panel, Position, ReactFlow, useReactFlow, type Node, type NodeProps } from '@xyflow/react'
import { Network, Shield, BookOpen, Swords, Scan, Check, Lock, Layers, Trophy, PanelLeft, Cpu, Database, KeyRound, Boxes, GitBranch, Activity, Globe, HardDrive, Fingerprint, Server, Code, HeartPulse, Archive, Scale, Compass, Gauge } from 'lucide-react'
import { learningLevels } from './data/roadmap/projects'
import { createGraph, type SkillData } from './lib/learning/graph'
import { progressFor, type ChallengeProgress } from './lib/learning/progress'
import { allLearningNodes, ChallengeDetails } from './components/roadmap/ChallengeDetails'
import { Achievement } from './components/progress/Achievement'
import './SkillTree.css'

const silhouettes = {
  root: 'M44 3 85 44 44 85 3 44Z', level: 'M44 3 81 23 81 65 44 85 7 65 7 23Z',
  shield: 'M44 5 78 18V43Q77 67 44 83Q11 67 10 43V18Z',
  concept: 'M44 8a36 36 0 1 0 0 72a36 36 0 1 0 0-72',
  challenge: 'M44 5 83 44 44 83 5 44Z',
  capstone: 'M26 5H62L83 26V62L62 83H26L5 62V26Z',
}
const conceptIcons: Record<string, typeof BookOpen> = { COM: Cpu, NET: Network, WEB: Globe, IAM: Fingerprint, STO: HardDrive, DAT: Database, KEY: KeyRound, APP: Server, OBS: Activity, IAC: Code, CICD: GitBranch, CON: Boxes, HA: HeartPulse, DR: Archive, GOV: Scale, SEC: Shield, ARC: Compass, OPT: Gauge }
function SkillNode({ data, selected }: NodeProps<Node<SkillData>>) {
  const Icon = data.capstone ? Trophy : data.kind === 'level' ? Layers : data.kind === 'concept' ? conceptIcons[data.code || ''] || BookOpen : Swords
  const shape = data.capstone ? silhouettes.capstone : data.kind === 'concept' && data.code === 'SEC' ? silhouettes.shield : silhouettes[data.kind]
  const mastered = data.total > 0 && data.completed === data.total
  return <div className={`game-skill ${data.kind} ${data.capstone ? 'capstone' : ''} ${mastered ? 'mastered' : data.locked ? 'locked' : 'available'} ${selected ? 'selected' : ''}`}>
    <Handle type="target" position={Position.Left}/>
    <div className="skill-symbol"><svg viewBox="0 0 88 88" aria-hidden="true"><path d={shape}/><path className="inner-line" d={shape} transform="translate(7 7) scale(.84)"/></svg>{data.kind === 'root' ? <img className="azure-root-logo" src="/microsoft-azure.webp" alt="Microsoft Azure" width={40} height={40} draggable={false}/> : <Icon size={data.kind === 'level' ? 30 : 24} strokeWidth={1.5}/>} {mastered ? <Check className="skill-badge" size={15}/> : data.locked ? <Lock className="skill-badge" size={13}/> : null}</div>
    <strong>{data.title}</strong><small>{data.kind === 'challenge' ? data.id : `${data.kind.toUpperCase()} · ${Math.round(data.percent)}%`}</small>
    <Handle type="source" position={Position.Right}/>
  </div>
}
const nodeTypes = { skill: SkillNode }
function CanvasTools({ viewKey }: { viewKey: string }) {
  const { fitView } = useReactFlow()
  useEffect(() => { const timeout = window.setTimeout(() => void fitView({ padding: .18, duration: 350 }), 80); return () => clearTimeout(timeout) }, [viewKey, fitView])
  return <Panel position="top-right"><button className="recenter" onClick={() => void fitView({ padding: .18, duration: 450 })}><Scan size={16}/>Recenter</button></Panel>
}
function initialLevel() {
  try { const level = localStorage.getItem('cloud-abdullh:project-view'); return learningLevels.some(item => item.id === level) || level === 'all' ? level! : 'level-1' } catch { return 'level-1' }
}
export function SkillTree({ progress, onComplete, ready, saving, signedIn }: { progress: ChallengeProgress; onComplete: (id: string) => void; ready: boolean; saving: boolean; signedIn: boolean }) {
  const [levelId, setLevelId] = useState(initialLevel)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [sidebar, setSidebar] = useState(() => window.innerWidth > 700)
  const [dependencies, setDependencies] = useState(false)
  const [continuations, setContinuations] = useState(true)
  const graph = useMemo(() => createGraph(progress, levelId, selectedId, dependencies, continuations), [progress, levelId, selectedId, dependencies, continuations])
  const selected = allLearningNodes.find(node => node.id === selectedId)
  const overall = progressFor(progress)
  function selectLevel(id: string) {
    setLevelId(id)
    try { localStorage.setItem('cloud-abdullh:project-view', id) } catch { /* View preferences are optional. */ }
  }
  function select(id: string) {
    const node = allLearningNodes.find(item => item.id === id)
    if (node && levelId !== 'all') selectLevel(node.kind === 'level' ? node.id : node.levelId)
    setSelectedId(id === 'azure' ? null : id)
    setSidebar(true)
  }
  return <div className="learning-workspace">
    <nav className="level-navigation" aria-label="Learning levels">{learningLevels.map(level => { const stats = progressFor(progress, level); return <button key={level.id} className={levelId === level.id ? 'active' : ''} aria-pressed={levelId === level.id} onClick={() => { selectLevel(level.id); setSelectedId(level.id) }}><span>0{level.number}</span><b>{level.title}</b><small>{Math.round(stats.percent)}%</small></button> })}<button className={levelId === 'all' ? 'active' : ''} onClick={() => { selectLevel('all'); setSelectedId(null) }}>Full map</button></nav>
    <div className="game-tree-layout">
      {sidebar && <aside className="game-details" aria-label="Learning details"><div className="detail-scroll">{selected ? <ChallengeDetails key={selected.id} node={selected} progress={progress} onSelect={select} onClose={() => setSidebar(false)} onComplete={onComplete} ready={ready} saving={saving}/> : <div className="journey-overview"><button className="dismiss" aria-label="Close details" onClick={() => setSidebar(false)}>×</button><p className="game-kicker">PROJECT-BASED LEARNING</p><h2>Build. Operate. Evolve.</h2><p>Grow one Azure system through connected engineering missions. Choose a concept, then take on its challenges.</p><div className="derived-progress"><strong>{Math.floor(overall.percent)}%</strong><span>{overall.completed} / {overall.total} challenges completed</span><progress value={overall.completed} max={overall.total}/></div><button className="complete-skill" onClick={() => select('L1-COM-001')}>Explore your first mission</button><button className="capstone-link" onClick={() => select('CAP-AZURE-001')}><Trophy size={16}/>Final capstone<ChevronIcon/></button><p className="derived-note">{signedIn ? 'Challenge progress syncs to your account.' : 'Progress is saved in this browser. Guest and account progress are kept separate.'}</p><p className="derived-note">Your previous topic progress is preserved separately. This journey starts with challenge completion.</p></div>}</div><Achievement progress={overall.percent}/></aside>}
      <section className="game-tree-canvas" aria-label="Azure project skill tree"><ReactFlow nodes={graph.nodes} edges={graph.edges} nodeTypes={nodeTypes} onNodeClick={(_, node) => select(node.id)} nodesDraggable={false} nodesConnectable={false} fitView fitViewOptions={{ padding: .18 }} minZoom={.06} maxZoom={2} onlyRenderVisibleElements><Background color="#243346" gap={32} size={1}/><Controls showInteractive={false}/><CanvasTools viewKey={`${levelId}:${sidebar}`}/><Panel position="top-left"><div className="tree-caption">SKILL CONSTELLATION<small>Level → Concept → Challenge</small></div>{!sidebar && <button className="recenter reopen-details" onClick={() => setSidebar(true)}><PanelLeft size={15}/>Details & progress</button>}</Panel><Panel position="bottom-center"><div className="tree-key"><span>⬡ Level</span><span>○ Concept</span><span>◇ Challenge</span><label><input type="checkbox" checked={continuations} onChange={event => setContinuations(event.target.checked)}/><i className="continuation-key"/>Project paths</label><label><input type="checkbox" checked={dependencies} onChange={event => setDependencies(event.target.checked)}/><i className="dependency-key"/>Prerequisites</label></div></Panel></ReactFlow></section>
    </div>
  </div>
}
function ChevronIcon() { return <span aria-hidden="true">→</span> }

