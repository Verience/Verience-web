import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function WarpParticles() {
  const ref = useRef();
  
  // Generate particles in a cylinder forming a tunnel
  const count = 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const radius = 2 + Math.random() * 3;
      const z = (Math.random() - 0.5) * 20; // Length of tunnel
      
      pos[i * 3] = Math.cos(theta) * radius;
      pos[i * 3 + 1] = Math.sin(theta) * radius;
      pos[i * 3 + 2] = z;
    }
    return pos;
  }, [count]);

  useFrame((state, delta) => {
    if (ref.current) {
      // Rotate the tunnel slowly
      ref.current.rotation.z += delta * 0.1;
      // Move particles towards camera to simulate warp
      const positions = ref.current.geometry.attributes.position.array;
      for(let i = 0; i < count; i++) {
        positions[i * 3 + 2] += delta * 5; // speed
        if (positions[i * 3 + 2] > 10) {
          positions[i * 3 + 2] = -10; // reset to back
        }
      }
      ref.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <group rotation={[0, 0, 0]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial transparent color="#0ec4f1" size={0.05} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} />
      </Points>
    </group>
  );
}

export default function Contact3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen dark:mix-blend-normal">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={['#000', 2, 15]} />
        <ambientLight intensity={0.5} />
        <WarpParticles />
      </Canvas>
      {/* Radial overlay to blend tunnel edges */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg)] via-transparent to-[var(--bg)] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--bg)] via-transparent to-[var(--bg)] pointer-events-none" />
    </div>
  );
}
