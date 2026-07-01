import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Line, Sphere, Environment } from '@react-three/drei';
import * as THREE from 'three';

function createNetworkPoints(count) {
  const pts = [];
  for (let i = 0; i < count; i++) {
    pts.push(
      new THREE.Vector3(
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8,
        (Math.random() - 0.5) * 8
      )
    );
  }
  return pts;
}

function createNetwork() {
  const points = createNetworkPoints(20);
  const lines = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      if (points[i].distanceTo(points[j]) < 4) {
        lines.push([points[i], points[j]]);
      }
    }
  }
  return { points, lines };
}

function NetworkNodes() {
  const groupRef = useRef();
  const [{ points, lines }] = useState(createNetwork);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group ref={groupRef}>
      {points.map((pos, i) => (
        <Sphere key={`node-${i}`} position={pos} args={[0.1, 16, 16]}>
          <meshStandardMaterial color="#0ec4f1" emissive="#1072eb" emissiveIntensity={0.5} />
        </Sphere>
      ))}
      {lines.map((line, i) => (
        <Line 
          key={`line-${i}`}
          points={line}
          color="#38bdf8"
          opacity={0.2}
          transparent
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export default function About3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen dark:mix-blend-normal">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#1072eb" />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <NetworkNodes />
        </Float>
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
