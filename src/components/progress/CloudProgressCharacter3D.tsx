import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useAnimations, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useRef } from 'react'
import { MathUtils } from 'three'
import type { Group } from 'three'

type Props = { progress: number }

const MODEL_URL = '/models/azure-engineer-robot.glb'

function Upgrade({ minimumStage, stage, children }: { minimumStage: number; stage: number; children: React.ReactNode }) {
  const group = useRef<Group>(null)

  useFrame((_, delta) => {
    if (!group.current) return
    const target = stage >= minimumStage ? 1 : 0.001
    const scale = MathUtils.damp(group.current.scale.x, target, 7, delta)
    group.current.scale.setScalar(scale)
  })

  return <group ref={group}>{children}</group>
}

function EngineerRobot({ progress }: Props) {
  const character = useRef<Group>(null)
  const { scene, animations } = useGLTF(MODEL_URL)
  const { actions } = useAnimations(animations, character)
  const stage = Math.min(5, Math.floor(progress / 20))
  const azureGlow = 0.3 + stage * 0.2

  useEffect(() => {
    const idle = actions.Robot_Idle
    idle?.reset().fadeIn(0.35).play()
    return () => { idle?.fadeOut(0.2) }
  }, [actions])

  useFrame(({ clock }) => {
    if (!character.current) return
    character.current.position.y = Math.sin(clock.elapsedTime * 1.25) * 0.07
  })

  return <group ref={character} scale={0.8}>
    <primitive object={scene} />
    <Upgrade minimumStage={1} stage={stage}>
      {[-1.18, 1.18].map((side) => <mesh key={side} position={[side, 2.65, 0]}>
        <sphereGeometry args={[0.38, 12, 10]} />
        <meshStandardMaterial color="#0078D4" metalness={0.86} roughness={0.22} emissive="#0078D4" emissiveIntensity={azureGlow * 0.28} />
      </mesh>)}
    </Upgrade>
    <Upgrade minimumStage={2} stage={stage}>
      <group position={[0, 2.15, 0.7]}>
        {[-0.36, 0, 0.36].map((x) => <mesh key={x} position={[x, 0, 0]}>
          <boxGeometry args={[0.22, 0.75, 0.2]} />
          <meshStandardMaterial color="#155e93" metalness={0.8} roughness={0.25} emissive="#0078D4" emissiveIntensity={azureGlow * 0.42} />
        </mesh>)}
      </group>
    </Upgrade>
    <Upgrade minimumStage={3} stage={stage}>
      <group position={[1.42, 1.55, 0.12]} rotation={[0, 0, -0.34]}>
        <mesh><cylinderGeometry args={[0.12, 0.17, 1.1, 10]} /><meshStandardMaterial color="#b7e4ff" metalness={0.9} roughness={0.18} /></mesh>
        <mesh position={[0, 0.58, 0]}><sphereGeometry args={[0.2, 12, 10]} /><meshStandardMaterial color="#0078D4" emissive="#0078D4" emissiveIntensity={azureGlow} /></mesh>
      </group>
    </Upgrade>
    <Upgrade minimumStage={4} stage={stage}>
      <group>
        {[-1.42, 1.42].map((side) => <group key={side} position={[side, 2.72, 0]}>
          <mesh><boxGeometry args={[0.26, 0.58, 0.38]} /><meshStandardMaterial color="#163b5a" metalness={0.85} roughness={0.2} /></mesh>
          <mesh position={[0, 0.38, 0]}><sphereGeometry args={[0.11, 10, 8]} /><meshStandardMaterial color="#67c8ff" emissive="#0078D4" emissiveIntensity={azureGlow} /></mesh>
        </group>)}
      </group>
    </Upgrade>
    <Upgrade minimumStage={5} stage={stage}>
      <group position={[0, 4.7, 0]}>
        <mesh rotation={[Math.PI / 2, 0, 0]}><torusGeometry args={[0.66, 0.055, 8, 28]} /><meshStandardMaterial color="#f1c84a" metalness={0.9} roughness={0.18} emissive="#d99a00" emissiveIntensity={0.8} /></mesh>
        <pointLight position={[0, 0, 0.8]} color="#67c8ff" intensity={9} distance={4} />
      </group>
    </Upgrade>
  </group>
}

export function CloudProgressCharacter3D({ progress }: Props) {
  return <Canvas className="cloud-progress-3d" aria-label={`Cloud engineer achievement progress: ${progress}%`} camera={{ position: [0, 2, 8], fov: 35 }} dpr={[1, 1.5]}>
    <ambientLight intensity={0.75} />
    <directionalLight position={[4, 6, 5]} intensity={3.2} color="#c4ecff" />
    <pointLight position={[-3, 2, 3]} intensity={7} color="#0078D4" />
    <Suspense fallback={null}><EngineerRobot progress={progress} /></Suspense>
    <OrbitControls target={[0, 2, 0]} enableZoom={false} enablePan={false} rotateSpeed={0.55} minPolarAngle={Math.PI / 3} maxPolarAngle={Math.PI * 0.7} />
  </Canvas>
}

useGLTF.preload(MODEL_URL)
