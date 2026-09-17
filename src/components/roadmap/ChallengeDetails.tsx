import { useState } from 'react'
import { Check, ChevronRight, Copy, Lock, X } from 'lucide-react'
import { challenges, learningConcepts, learningLevels } from '../../data/roadmap/projects'
import type { LearningNode } from '../../data/roadmap/project-types'
import { challengeById, challengesFor, missingPrerequisites, progressFor, type ChallengeProgress } from '../../lib/learning/progress'

function List({ title, items }: { title: string; items: string[] }) {
  return items.length ? <section className="detail-section"><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></section> : null
}
export function ChallengeDetails({ node, progress, onSelect, onClose, onComplete, ready, saving }: {
  node: LearningNode; progress: ChallengeProgress; onSelect: (id: string) => void; onClose: () => void; onComplete: (id: string) => void; ready: boolean; saving: boolean
}) {
  const [copied, setCopied] = useState(false)
  const stats = progressFor(progress, node)
  const challenge = node.kind === 'challenge' ? node : undefined
  const missing = challenge ? missingPrerequisites(challenge, progress) : []
  const complete = stats.completed === stats.total
  const links = (ids: string[]) => ids.map(id => {
    const target = challengeById.get(id)
    return <button className="related-challenge" key={id} onClick={() => onSelect(id)}><span className="related-state">{progress[id]?.status === 'mastered' ? <Check size={14}/> : <ChevronRight size={14}/>}</span><span><small>{id}</small>{target?.title ?? id}</span></button>
  })
  return <div className="challenge-details">
    <button className="dismiss" aria-label="Close details" onClick={onClose}><X size={18}/></button>
    <p className="game-kicker">{challenge?.capstone ? 'Final capstone' : node.kind} · {node.id}</p>
    <h2>{node.title}</h2>
    {challenge ? <>
      <div className="challenge-meta"><span>{challenge.difficulty}</span><span>{challenge.estimatedHours} hours</span><span>{complete ? 'Mastered' : missing.length ? 'Prerequisites incomplete' : 'Ready to begin'}</span></div>
      <section className="detail-section"><h3>Scenario</h3><p>{challenge.scenario}</p></section>
      <section className="detail-section mission"><h3>Your mission</h3><p>{challenge.mission}</p></section>
      <List title="Guidance" items={challenge.guidance}/>
      {!!challenge.continuesFrom.length && <section className="detail-section"><h3>Continue from</h3><p>Reuse or evolve the environment from these challenges.</p>{links(challenge.continuesFrom)}</section>}
      {!!challenge.prerequisites.length && <section className="detail-section"><h3>Prerequisites</h3>{links(challenge.prerequisites)}</section>}
      <List title="Learn to complete" items={challenge.learnToComplete}/>
      <List title="Requirements" items={challenge.requirements}/>
      <List title="Done when" items={challenge.doneWhen}/>
      <List title="Failure demonstration" items={challenge.failureDemonstration ?? []}/>
      <List title="Evidence" items={challenge.evidence}/>
      {challenge.starterAsset && <section className="detail-section starter-asset"><h3>Starter asset</h3><strong>{challenge.starterAsset.type}</strong><p>{challenge.starterAsset.description}</p><details><summary>Generate asset prompt</summary><p className="asset-prompt">{challenge.starterAsset.generatePrompt}</p><button className="copy-prompt" onClick={() => { void navigator.clipboard.writeText(challenge.starterAsset!.generatePrompt).then(() => setCopied(true)).catch(() => setCopied(false)) }}><Copy size={14}/>{copied ? 'Copied' : 'Copy prompt'}</button></details></section>}
      <div className="completion-action"><p>Mark complete once you can demonstrate every “Done when” criterion. Research items do not count toward progress.</p><button className="complete-skill" disabled={!ready || saving || complete || !!missing.length} onClick={() => onComplete(challenge.id)}>{saving ? 'Saving…' : complete ? 'Challenge completed' : !ready ? 'Waiting for progress…' : missing.length ? 'Complete prerequisites first' : 'Mark challenge complete'}{complete ? <Check size={16}/> : missing.length ? <Lock size={14}/> : null}</button></div>
    </> : <>
      <p>{node.kind !== 'challenge' ? node.description : ''}</p>
      <div className="derived-progress"><strong>{Math.round(stats.percent)}%</strong><span>{stats.completed} / {stats.total} challenges completed</span><progress value={stats.completed} max={stats.total || 1}/></div>
      <p className="derived-note">Progress is earned by completing challenges.</p>
      {node.kind === 'level' ? <section className="detail-section"><h3>Concepts</h3>{learningConcepts.filter(concept => concept.levelId === node.id).map(concept => {
        const stats = progressFor(progress, concept)
        return <button className="related-challenge" key={concept.id} onClick={() => onSelect(concept.id)}><span>{concept.title}<small>{stats.completed} / {stats.total} challenges · {Math.round(stats.percent)}%</small></span><ChevronRight size={16}/></button>
      })}</section> : <section className="detail-section"><h3>Challenges</h3>{links(challengesFor(node).map(challenge => challenge.id))}</section>}
    </>}
  </div>
}
export const allLearningNodes: LearningNode[] = [...learningLevels, ...learningConcepts, ...challenges]

