'use client';

import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';

interface Floating3DObjectProps {
  position?: [number, number, number];
  shape?: 'sphere' | 'box';
}

export default function Floating3DObject({
  position = [0, 0, 0],
  shape = 'sphere',
}: Floating3DObjectProps) {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.3;
    }
  });

  return (
    <mesh ref={meshRef} position={position}>
      {shape === 'sphere' ? (
        <sphereGeometry args={[1, 32, 32]} />
      ) : (
        <boxGeometry args={[1.5, 1.5, 1.5]} />
      )}
      <meshStandardMaterial
        color="#26d8ff"
        emissive="#26d8ff"
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

