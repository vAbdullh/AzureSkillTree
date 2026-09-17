import { useEffect, useRef, useState } from 'react'
import { loadProgress, saveProgress } from '../firebase/progress'
import { completeChallenge, deserializeProgress, normalizeProgress, progressKey, serializeProgress, type ChallengeProgress } from './progress'

export function useChallengeProgress(uid: string | undefined, authReady: boolean) {
  const scope = uid || 'guest'
  const activeScope = useRef(scope)
  activeScope.current = scope
  const [snapshot, setSnapshot] = useState<{ scope: string; progress: ChallengeProgress }>({ scope: '', progress: {} })
  const [ready, setReady] = useState(false)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const [retry, setRetry] = useState(0)
  const inFlight = useRef(false)
  const progress = snapshot.scope === scope ? snapshot.progress : {}

  useEffect(() => {
    let cancelled = false
    setReady(false)
    setSaving(false)
    inFlight.current = false
    setError('')
    if (!authReady) return
    let cached: ChallengeProgress = {}
    try { cached = deserializeProgress(localStorage.getItem(progressKey(uid))) }
    catch { setError('Browser storage is unavailable. Guest progress cannot be saved.') }
    setSnapshot({ scope, progress: cached })
    if (!uid) { setReady(true); return }
    loadProgress(uid).then(raw => {
      if (cancelled) return
      const loaded = normalizeProgress(raw)
      setSnapshot({ scope, progress: loaded })
      setReady(true)
      try { localStorage.setItem(progressKey(uid), serializeProgress(loaded)) }
      catch { /* Cloud remains the source of truth if the local cache is unavailable. */ }
    }).catch(() => {
      if (!cancelled) setError('Could not load cloud progress. Cached progress is shown; retry before completing a challenge.')
    })
    return () => { cancelled = true }
  }, [uid, scope, authReady, retry])

  async function complete(id: string) {
    if (!ready || inFlight.current || snapshot.scope !== scope) return
    const next = completeChallenge(id, progress)
    if (next === progress || progress[id]?.status === 'mastered') return
    inFlight.current = true
    setSaving(true)
    setError('')
    try {
      if (uid) await saveProgress(uid, id, 'mastered')
      if (activeScope.current !== scope) return
      if (uid) {
        try { localStorage.setItem(progressKey(uid), serializeProgress(next)) } catch { /* Cloud write succeeded. */ }
      } else localStorage.setItem(progressKey(), serializeProgress(next))
      setSnapshot({ scope, progress: next })
    } catch {
      if (activeScope.current === scope) setError(uid ? 'Progress could not be saved. Your challenge is unchanged; please try again.' : 'Browser storage is unavailable or full. Progress was not saved.')
    } finally {
      if (activeScope.current === scope) { setSaving(false); inFlight.current = false }
    }
  }
  return { progress, complete, ready: ready && snapshot.scope === scope, saving, error, retry: () => setRetry(value => value + 1) }
}
