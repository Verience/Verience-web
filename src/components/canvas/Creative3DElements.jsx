import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Torus, Sphere, MeshTransmissionMaterial } from '@react-three/drei';

export function Atom3D() {
  return (
    <div className="absolute w-[300px] h-[300px] pointer-events-none z-0 mix-blend-screen dark:mix-blend-normal opacity-60">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#0ec4f1" />
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
          <group>
            <Sphere args={[0.3, 32, 32]}>
              <meshStandardMaterial color="#3b82f6" emissive="#1072eb" emissiveIntensity={0.5} />
            </Sphere>
            <Torus args={[1, 0.05, 16, 100]} rotation={[Math.PI/2, 0, 0]}>
              <meshStandardMaterial color="#0ec4f1" />
            </Torus>
            <Torus args={[1, 0.05, 16, 100]} rotation={[0, Math.PI/2, Math.PI/4]}>
              <meshStandardMaterial color="#0ec4f1" />
            </Torus>
            <Torus args={[1, 0.05, 16, 100]} rotation={[0, Math.PI/2, -Math.PI/4]}>
              <meshStandardMaterial color="#0ec4f1" />
            </Torus>
          </group>
        </Float>
      </Canvas>
    </div>
  );
}

function HelixGroup() {
  const group = useRef();
  useFrame((state) => {
    group.current.rotation.y = state.clock.elapsedTime * 0.5;
    group.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });

  const parts = useMemo(() => {
    const arr = [];
    for(let i=0; i<16; i++) {
        const y = (i - 8) * 0.3;
        const x1 = Math.cos(i * 0.6);
        const z1 = Math.sin(i * 0.6);
        const x2 = Math.cos(i * 0.6 + Math.PI);
        const z2 = Math.sin(i * 0.6 + Math.PI);
        arr.push({ y, x1, z1, x2, z2, i });
    }
    return arr;
  }, []);

  return (
    <group ref={group} scale={0.7}>
      {parts.map((p) => (
        <group key={p.i}>
          <Sphere position={[p.x1, p.y, p.z1]} args={[0.15, 16, 16]}>
            <MeshTransmissionMaterial color="#1072eb" thickness={0.5} roughness={0.1} />
          </Sphere>
          <Sphere position={[p.x2, p.y, p.z2]} args={[0.15, 16, 16]}>
            <MeshTransmissionMaterial color="#0ec4f1" thickness={0.5} roughness={0.1} />
          </Sphere>
          <mesh position={[0, p.y, 0]} rotation={[Math.PI/2, 0, -p.i*0.6]}>
            <cylinderGeometry args={[0.02, 0.02, 2.2]} />
            <meshStandardMaterial color="#38bdf8" transparent opacity={0.3}/>
          </mesh>
        </group>
      ))}
    </group>
  );
}

export function Helix3D() {
  return (
    <div className="absolute w-[400px] h-[400px] pointer-events-none z-0 opacity-50">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
          <HelixGroup />
        </Float>
      </Canvas>
    </div>
  );
}
