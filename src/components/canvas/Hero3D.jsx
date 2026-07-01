import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, Float, Preload, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function createSpherePositions(numParticles) {
  const positions = new Float32Array(numParticles * 3);
  for (let i = 0; i < numParticles; i++) {
    const r = 15 * Math.cbrt(Math.random());
    const theta = Math.random() * 2 * Math.PI;
    const phi = Math.acos(2 * Math.random() - 1);

    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }
  return positions;
}

function Particles() {
  const ref = useRef();
  const [positions] = useState(() => createSpherePositions(2000));

  useFrame((state) => {
    ref.current.rotation.x -= 0.0005;
    ref.current.rotation.y -= 0.001;
    // slight mouse interaction
    const pointer = state.pointer;
    ref.current.rotation.x += (pointer.y * 0.1 - ref.current.rotation.x) * 0.02;
    ref.current.rotation.y += (pointer.x * 0.1 - ref.current.rotation.y) * 0.02;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#2f6bff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function AbstractShape() {
  const meshRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.2;
    meshRef.current.rotation.x = t * 0.1;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[2, 0.6, 128, 32]} />
        <meshPhysicalMaterial 
          color="#2f6bff" 
          roughness={0.15} 
          metalness={0.85}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#0a1a40"
          emissiveIntensity={0.4}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }} gl={{ antialias: true, alpha: true }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#4d8bff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#1a3a8a" />
        
        <Particles />
        <AbstractShape />
        
        <Environment preset="city" />
        <Preload all />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black pointer-events-none" />
    </div>
  );
}
