import type { Edge, Node } from '@xyflow/react'
import { challenges, learningConcepts, learningLevels } from '../../data/roadmap/projects'
import type { LearningNode } from '../../data/roadmap/project-types'
import { missingPrerequisites, progressFor, type ChallengeProgress } from './progress'

export type SkillData = {
  title: string; kind: 'root' | LearningNode['kind']; code?: string; capstone?: boolean
  percent: number; completed: number; total: number; locked: boolean; id: string
}
export function createGraph(progress: ChallengeProgress, levelId: string, selectedId: string | null, showDependencies: boolean, showContinuations: boolean) {
  const levels = learningLevels.filter(level => levelId === 'all' || level.id === levelId)
  const nodes: Node<SkillData>[] = []
  const edges: Edge[] = []
  const overall = progressFor(progress)
  nodes.push({ id: 'azure', type: 'skill', position: { x: -310, y: 0 }, data: { id: 'azure', kind: 'root', title: 'Azure Engineering', locked: false, ...overall } })
  const add = (node: LearningNode, x: number, y: number) => nodes.push({ id: node.id, type: 'skill', position: { x, y }, selected: node.id === selectedId,
    ariaLabel: `${node.kind}: ${node.title}`, data: { id: node.id, kind: node.kind, title: node.title, ...progressFor(progress, node), locked: node.kind === 'challenge' && missingPrerequisites(node, progress).length > 0, code: node.kind === 'concept' ? node.code : undefined, capstone: node.kind === 'challenge' && node.capstone } })
  const branch = (source: string, target: string) => edges.push({ id: `group:${source}:${target}`, source, target, type: 'default', style: { stroke: '#30465c', strokeWidth: 1.3 }, zIndex: -1 })
  levels.forEach((level, index) => {
    const x = index * 1950
    add(level, x, 0)
    branch(index === 0 ? 'azure' : levels[index - 1].id, level.id)
    const concepts = learningConcepts.filter(concept => concept.levelId === level.id)
    concepts.forEach((concept, row) => {
      const y = (row - (concepts.length - 1) / 2) * 350
      add(concept, x + 300, y)
      branch(level.id, concept.id)
      challenges.filter(challenge => challenge.conceptId === concept.id).forEach((challenge, col) => {
        add(challenge, x + 560 + col * 250, y + (col % 2 ? 65 : -65))
        branch(concept.id, challenge.id)
      })
    })
  })
  const visible = new Set(nodes.map(node => node.id))
  for (const challenge of challenges) {
    if (!visible.has(challenge.id)) continue
    const sources = new Set([...(showDependencies ? challenge.prerequisites : []), ...(showContinuations ? challenge.continuesFrom : [])])
    for (const source of sources) {
      if (!visible.has(source)) continue
      const continuation = showContinuations && challenge.continuesFrom.includes(source)
      const emphasized = selectedId === challenge.id || selectedId === source
      edges.push({ id: `relationship:${source}:${challenge.id}`, source, target: challenge.id, type: 'default', label: emphasized ? continuation ? 'continues project' : 'requires' : undefined,
        labelStyle: { fill: continuation ? '#c0adff' : '#a3bdd5', fontSize: 10 }, labelBgStyle: { fill: '#0c1420' },
        style: { stroke: continuation ? '#9b87d1' : '#7a8b9f', strokeWidth: emphasized ? 2.6 : 1.4, strokeDasharray: continuation ? undefined : '5 6', opacity: emphasized ? 1 : .5 }, zIndex: emphasized ? 1 : 0 })
    }
  }
  return { nodes, edges }
}
