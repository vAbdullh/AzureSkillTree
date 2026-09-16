import { collection, deleteDoc, doc, getDocs, serverTimestamp, setDoc } from 'firebase/firestore'
import { firestore } from './config'
import type { RoadmapNodeStatus } from '../../data/roadmap/types'

export type UserProgress = {
  status: RoadmapNodeStatus
  startedAt?: unknown
  masteredAt?: unknown
  updatedAt?: unknown
  notes?: string
}

export async function loadProgress(uid: string): Promise<Record<string, UserProgress>> {
  const snapshot = await getDocs(collection(firestore, 'users', uid, 'progress'))
  return Object.fromEntries(snapshot.docs.map(entry => [entry.id, entry.data() as UserProgress]))
}

export async function saveProgress(uid: string, nodeId: string, status: Exclude<RoadmapNodeStatus, 'not-started'>, notes = '') {
  await setDoc(doc(firestore, 'users', uid, 'progress', nodeId), {
    status,
    startedAt: status === 'learning' ? serverTimestamp() : null,
    masteredAt: status === 'mastered' ? serverTimestamp() : null,
    updatedAt: serverTimestamp(),
    notes,
  }, { merge: true })
}

// Untouched nodes have no document; removing progress returns them to not-started.
export const clearProgress = (uid: string, nodeId: string) => deleteDoc(doc(firestore, 'users', uid, 'progress', nodeId))
