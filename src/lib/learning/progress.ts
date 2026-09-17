import { challenges } from '../../data/roadmap/projects'
import type { Challenge, LearningNode } from '../../data/roadmap/project-types'

export type ChallengeState = 'learning' | 'mastered'
export type ChallengeProgress = Record<string, { status: ChallengeState }>
export const PROGRESS_VERSION = 2
export const challengeById = new Map(challenges.map(challenge => [challenge.id, challenge]))

/** Accept only known challenge IDs and explicit supported statuses; never infer topic mappings. */
export function normalizeProgress(value: unknown): ChallengeProgress {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return {}
  const result: ChallengeProgress = {}
  for (const [id, entry] of Object.entries(value)) {
    if (!challengeById.has(id) || !entry || typeof entry !== 'object') continue
    const status = (entry as { status?: unknown }).status
    if (status === 'mastered' || status === 'learning') result[id] = { status }
  }
  return result
}
export function progressKey(uid?: string) { return `cloud-abdullh:projects:v${PROGRESS_VERSION}:${uid || 'guest'}` }
export function deserializeProgress(raw: string | null): ChallengeProgress {
  try {
    const value = JSON.parse(raw || 'null')
    return value?.schemaVersion === PROGRESS_VERSION && value?.contentVersion === 2 ? normalizeProgress(value.progress) : {}
  } catch { return {} }
}
export function serializeProgress(progress: ChallengeProgress): string {
  return JSON.stringify({ schemaVersion: PROGRESS_VERSION, contentVersion: 2, progress: normalizeProgress(progress) })
}
export function challengesFor(node?: LearningNode): Challenge[] {
  if (!node) return challenges
  if (node.kind === 'challenge') return [node]
  return challenges.filter(challenge => node.kind === 'level' ? challenge.levelId === node.id : challenge.conceptId === node.id)
}
export function progressFor(progress: ChallengeProgress, node?: LearningNode) {
  const items = challengesFor(node)
  const completed = items.filter(item => progress[item.id]?.status === 'mastered').length
  return { completed, total: items.length, percent: items.length ? completed / items.length * 100 : 0 }
}
export function missingPrerequisites(challenge: Challenge, progress: ChallengeProgress) {
  return challenge.prerequisites.filter(id => progress[id]?.status !== 'mastered')
}
export function completeChallenge(id: string, progress: ChallengeProgress): ChallengeProgress {
  const challenge = challengeById.get(id)
  if (!challenge || missingPrerequisites(challenge, progress).length) return progress
  return { ...progress, [id]: { status: 'mastered' } }
}
