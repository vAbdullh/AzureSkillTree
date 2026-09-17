import { useEffect, useState } from 'react'
import type { User } from 'firebase/auth'
import { createRoot } from 'react-dom/client'
import '@xyflow/react/dist/style.css'
import './styles.css'
import './overrides.css'
import { signInWithGoogle, signOutUser, watchAuth } from './lib/firebase/auth'
import { SkillTree } from './SkillTree'

function LearningApp() {
  const [user, setUser] = useState<User | null>(null)
  useEffect(() => watchAuth(setUser), [])
  return <div className="app-shell"><section className="overview"><div><p className="eyebrow">CLOUD ABDULLH</p><h1>AZURE LEARNING ROADMAP</h1></div><div className="metrics">{user ? <button className="account" onClick={signOutUser}>{user.displayName || 'Signed in'}</button> : <button className="account" onClick={signInWithGoogle}>Sign in with Google</button>}</div></section><SkillTree/></div>
}
createRoot(document.getElementById('root')!).render(<LearningApp />)
