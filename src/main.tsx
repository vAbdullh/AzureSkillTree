import { useEffect, useState } from 'react'
import type { User } from 'firebase/auth'
import { createRoot } from 'react-dom/client'
import '@xyflow/react/dist/style.css'
import './styles.css'
import './overrides.css'
import { signInWithGoogle, signOutUser, watchAuth } from './lib/firebase/auth'
import { useChallengeProgress } from './lib/learning/useChallengeProgress'
import { progressFor } from './lib/learning/progress'
import { SkillTree } from './SkillTree'

function LearningApp() {
  const [user, setUser] = useState<User | null>(null)
  const [authReady, setAuthReady] = useState(false)
  const [accountError, setAccountError] = useState('')
  useEffect(() => watchAuth(value => { setUser(value); setAuthReady(true) }), [])
  const learning = useChallengeProgress(user?.uid, authReady)
  const stats = progressFor(learning.progress)
  async function accountAction() {
    setAccountError('')
    try { if (user) await signOutUser(); else await signInWithGoogle() }
    catch { setAccountError('Sign-in could not be updated. Please try again.') }
  }
  return <div className="app-shell"><section className="overview"><div><p className="eyebrow">CLOUD ABDULLH</p><h1>AZURE LEARNING ROADMAP</h1></div><div className="metrics"><div className="progress-circle" style={{ background: `conic-gradient(#0078D4 ${stats.percent}%, #273343 0)` }} aria-label={`Overall progress: ${Math.floor(stats.percent)} percent`}><b>{Math.floor(stats.percent)}<small>%</small></b></div><div className="metric"><b>{stats.completed} / {stats.total}</b><p>Challenges completed</p></div><button className="account" onClick={() => void accountAction()} disabled={!authReady}>{user ? `${user.displayName || 'Account'} · Sign out` : 'Sign in with Google'}</button></div></section>{(learning.error || accountError) && <div className="save-error" role="alert">{learning.error || accountError}{learning.error && !learning.ready && <button onClick={learning.retry}>Retry</button>}</div>}<SkillTree progress={learning.progress} onComplete={id => void learning.complete(id)} ready={learning.ready} saving={learning.saving} signedIn={!!user}/></div>
}
createRoot(document.getElementById('root')!).render(<LearningApp />)
