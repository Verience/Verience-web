import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, Environment, Icosahedron, Torus, Box } from '@react-three/drei';

function FloatingBlocks() {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.5;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[-3, 1, -2]}>
        <Icosahedron args={[1, 0]}>
          <MeshTransmissionMaterial thickness={0.5} roughness={0.1} transmission={1} ior={1.5} color="#1072eb" backside />
        </Icosahedron>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[3, -1, -1]}>
        <Torus args={[0.8, 0.3, 16, 32]}>
          <MeshTransmissionMaterial thickness={0.5} roughness={0.2} transmission={1} ior={1.5} color="#0ec4f1" backside />
        </Torus>
      </Float>
      <Float speed={3} rotationIntensity={1.5} floatIntensity={2} position={[0, -2, -3]}>
        <Box args={[1.2, 1.2, 1.2]}>
          <MeshTransmissionMaterial thickness={0.5} roughness={0.1} transmission={0.9} ior={1.5} color="#38bdf8" backside />
        </Box>
      </Float>
      <Float speed={2.5} rotationIntensity={2} floatIntensity={2} position={[-1, 3, -4]}>
        <Icosahedron args={[0.8, 0]}>
          <MeshTransmissionMaterial thickness={0.5} roughness={0.3} transmission={1} ior={1.5} color="#1072eb" backside />
        </Icosahedron>
      </Float>
    </group>
  );
}

export default function Services3D() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#ffffff" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#0ec4f1" />
        <FloatingBlocks />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
