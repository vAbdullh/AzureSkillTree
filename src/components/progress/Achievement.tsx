import { Component, lazy, Suspense, type ReactNode } from 'react'
const Character = lazy(() => import('./CloudProgressCharacter3D').then(module => ({ default: module.CloudProgressCharacter3D })))
class CharacterBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? <p className="character-fallback">Achievement progress is still saved. 3D preview is unavailable on this device.</p> : this.props.children }
}
export function Achievement({ progress }: { progress: number }) {
  return <div className="achievement"><div className="achievement-label"><span>ENGINEER EVOLUTION</span><b>{Math.floor(progress)}%</b></div><CharacterBoundary><Suspense fallback={<p className="character-fallback">Loading your engineer…</p>}><Character progress={progress}/></Suspense></CharacterBoundary></div>
}
