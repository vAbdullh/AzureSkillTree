import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut, type User } from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { firebaseAuth, firestore } from './config'

export const watchAuth = (callback: (user: User | null) => void) => onAuthStateChanged(firebaseAuth, callback)

const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle() {
  const credential = await signInWithPopup(firebaseAuth, googleProvider)
  await setDoc(doc(firestore, 'users', credential.user.uid), {
    displayName: credential.user.displayName ?? '',
    email: credential.user.email ?? '',
    createdAt: serverTimestamp(),
    lastActiveAt: serverTimestamp(),
  }, { merge: true })
  return credential.user
}

export const signOutUser = () => signOut(firebaseAuth)
