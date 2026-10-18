import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Torus } from '@react-three/drei';

function CoreOrb() {
  return <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.2}>
    <mesh position={[0, 0, 0]}>
      <icosahedronGeometry args={[1.12, 5]} />
      <MeshDistortMaterial color="#ff7a55" emissive="#a62b83" emissiveIntensity={0.8} roughness={0.18} metalness={0.62} distort={0.28} speed={2.2} />
    </mesh>
    <mesh rotation={[0.8, 0.2, 0.4]}>
      <torusGeometry args={[1.55, 0.012, 12, 180]} />
      <meshBasicMaterial color="#ffb66e" />
    </mesh>
    <Torus args={[1.78, 0.008, 8, 160]} rotation={[1.2, 0.4, 0.6]}>
      <meshBasicMaterial color="#a78bfa" />
    </Torus>
  </Float>;
}

export default function OrbScene() {
  return <div className="orb-scene" aria-hidden="true">
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={1.4} />
      <pointLight position={[3, 3, 4]} intensity={30} color="#ff9966" />
      <pointLight position={[-3, -2, 1]} intensity={18} color="#8b5cf6" />
      <Suspense fallback={null}>
        <Stars radius={30} depth={10} count={850} factor={2} saturation={0.2} fade speed={0.6} />
        <CoreOrb />
      </Suspense>
    </Canvas>
  </div>;
}
