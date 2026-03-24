import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float, Sphere } from '@react-three/drei';

function LiquidSphere() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <MeshDistortMaterial 
          color="#0ec4f1" 
          envMapIntensity={1} 
          clearcoat={1} 
          clearcoatRoughness={0.1} 
          metalness={0.5} 
          roughness={0.2}
          distort={0.4} 
          speed={2} 
        />
      </Sphere>
    </Float>
  );
}

export default function Fluid3D() {
  return (
    <div className="absolute top-0 right-0 w-full md:w-1/2 h-screen z-0 pointer-events-none opacity-70 translate-x-1/4 -translate-y-1/4">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#1072eb" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#c084fc" />
        <LiquidSphere />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
