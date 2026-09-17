import { useMemo, useState } from 'react'
import { Background, Controls, Handle, Panel, Position, ReactFlow, useReactFlow, type Node, type NodeProps, type Edge } from '@xyflow/react'
import { Network, Shield, BookOpen, Swords, Scan, Check, Lock, X } from 'lucide-react'
import './SkillTree.css'

type Kind = 'root' | 'gateway' | 'concept' | 'challenge'
type Skill = { title: string; kind: Kind; branch: 'azure' | 'network' | 'security'; prerequisites: string[]; description: string; mastered?: boolean; locked?: boolean }
const skills: Node<Skill>[] = [
  { id: 'azure', position: { x: 0, y: 0 }, data: { title: 'Azure', kind: 'root', branch: 'azure', prerequisites: [], description: 'Your cloud learning journey starts here.' } },
  { id: 'network', position: { x: -260, y: -170 }, data: { title: 'Networking', kind: 'gateway', branch: 'network', prerequisites: ['azure'], description: 'Gateway to the networking branch.' } },
  { id: 'security', position: { x: 260, y: -170 }, data: { title: 'Security', kind: 'gateway', branch: 'security', prerequisites: ['azure'], description: 'Gateway to the security branch.' } },
  { id: 'network-concept', position: { x: -410, y: -350 }, data: { title: 'Concept', kind: 'concept', branch: 'network', prerequisites: ['network'], description: 'Placeholder for a networking concept in your upcoming plan.' } },
  { id: 'network-challenge', position: { x: -180, y: -420 }, data: { title: 'Challenge', kind: 'challenge', branch: 'network', prerequisites: ['network-concept'], description: 'Placeholder for a practical challenge. Details will come with your plan.' } },
  { id: 'security-concept', position: { x: 410, y: -350 }, data: { title: 'Concept', kind: 'concept', branch: 'security', prerequisites: ['security'], description: 'Placeholder for a security concept in your upcoming plan.' } },
  { id: 'security-challenge', position: { x: 180, y: -420 }, data: { title: 'Challenge', kind: 'challenge', branch: 'security', prerequisites: ['security-concept'], description: 'Placeholder for a practical challenge. Details will come with your plan.' } },
]
const silhouettes = {
  root: 'M44 3 85 44 44 85 3 44Z',
  hexagon: 'M44 5 78 24 78 64 44 83 10 64 10 24Z',
  shield: 'M44 5 78 18V43Q77 67 44 83Q11 67 10 43V18Z',
  concept: 'M44 8a36 36 0 1 0 0 72a36 36 0 1 0 0-72',
  challenge: 'M24 7H64L81 24V64L64 81H24L7 64V24Z',
}
function SkillNode({ data, selected }: NodeProps<Node<Skill>>) {
  const Icon = data.kind === 'concept' ? BookOpen : data.kind === 'challenge' ? Swords : data.branch === 'security' ? Shield : Network
  const shape = data.kind === 'gateway' ? silhouettes[data.branch === 'security' ? 'shield' : 'hexagon'] : silhouettes[data.kind]
  return <div className={`game-skill ${data.kind} ${data.mastered ? 'mastered' : data.locked ? 'locked' : 'available'} ${selected ? 'selected' : ''}`}>
    <Handle type="target" position={Position.Left} />
    <div className="skill-symbol"><svg viewBox="0 0 88 88" aria-hidden="true"><path d={shape} /><path className="inner-line" d={shape} transform="translate(7 7) scale(.84)" /></svg>{data.kind === 'root' ? <img className="azure-root-logo" src="/microsoft-azure.webp" alt="Microsoft Azure" width={40} height={40} draggable={false} /> : <Icon size={25} strokeWidth={1.5} />}{data.mastered ? <Check className="skill-badge" size={15} /> : data.locked ? <Lock className="skill-badge" size={13} /> : null}</div>
    <strong>{data.title}</strong><small>{data.kind === 'gateway' ? 'CATEGORY' : data.kind.toUpperCase()}</small>
    <Handle type="source" position={Position.Right} />
  </div>
}
const nodeTypes = { skill: SkillNode }
function Recenter() {
  const { fitView } = useReactFlow()
  return <Panel position="top-right"><button className="recenter" onClick={() => void fitView({ padding: .25, duration: 450 })}><Scan size={16} />Recenter</button></Panel>
}
export function SkillTree() {
  const [completed, setCompleted] = useState<string[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const nodes = useMemo(() => skills.map(node => ({ ...node, type: 'skill', selected: node.id === selectedId, data: { ...node.data, mastered: completed.includes(node.id), locked: node.data.prerequisites.some(id => !completed.includes(id)) } })), [completed, selectedId])
  const edges: Edge[] = nodes.flatMap(node => node.data.prerequisites.map(source => ({ id: `${source}-${node.id}`, source, target: node.id, type: 'straight', animated: !node.data.locked && !node.data.mastered, style: { stroke: node.data.mastered ? '#399157' : node.data.locked ? '#293747' : '#0078D4', strokeWidth: node.data.locked ? 1.5 : 2.5 } })))
  const selected = nodes.find(node => node.id === selectedId)
  return <div className="game-tree-layout">
    {selected && <aside className="game-details"><button className="dismiss" aria-label="Close topic" onClick={() => setSelectedId(null)}><X size={18} /></button><p className="game-kicker">{selected.data.kind}</p><h2>{selected.data.title}</h2><p>{selected.data.description}</p><h3>Prerequisites</h3>{selected.data.prerequisites.length ? selected.data.prerequisites.map(id => <button className="prerequisite" key={id} onClick={() => setSelectedId(id)}>{completed.includes(id) ? <Check size={14} /> : <Lock size={14} />} {skills.find(node => node.id === id)?.data.title}</button>) : <p>No prerequisites.</p>}<button className="complete-skill" disabled={selected.data.locked || selected.data.mastered} onClick={() => setCompleted(current => [...current, selected.id])}>{selected.data.mastered ? 'Completed' : selected.data.locked ? 'Complete prerequisites first' : 'Mark complete'}</button><small>Preview only · progress resets on refresh</small></aside>}
    <section className="game-tree-canvas" aria-label="Azure skill tree"><ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} onNodeClick={(_, node) => setSelectedId(node.id)} nodesDraggable={false} nodesConnectable={false} fitView fitViewOptions={{ padding: .25 }} minZoom={.2} maxZoom={2}><Background color="#243346" gap={32} size={1} /><Controls showInteractive={false} /><Recenter /><Panel position="top-left"><div className="tree-caption">SKILL CONSTELLATION<small>Starter layout · ready for your plan</small></div></Panel><Panel position="bottom-center"><div className="tree-key"><span>◇ Root</span><span>⬡ Category</span><span>○ Concept</span><span>▣ Challenge</span></div></Panel></ReactFlow></section>
  </div>
}
