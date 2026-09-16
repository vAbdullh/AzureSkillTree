import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firestore } from './config'

export type UserSettings = {
  currentNodeId?: string
  selectedLevel?: string
  selectedCategory?: string
}

export const saveSettings = (uid: string, settings: UserSettings) =>
  setDoc(doc(firestore, 'users', uid, 'settings', 'main'), {
    ...settings,
    updatedAt: serverTimestamp(),
  }, { merge: true })
