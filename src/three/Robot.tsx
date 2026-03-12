'use client';

import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import gsap from 'gsap';
import * as THREE from 'three';

export default function Robot() {
  const head = useRef<THREE.Group>(null);
  const root = useRef<THREE.Group>(null);
  const glow = useRef<THREE.Mesh>(null);

  // Floating animation
  useEffect(() => {
    if (!root.current) return;

    gsap.to(root.current.position, {
      y: '+=0.25',
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }, []);

  // Mouse tracking (SAFE, Canvas-only)
  useFrame((state) => {
    if (!head.current) return;

    const { x, y } = state.mouse;

    head.current.rotation.y = THREE.MathUtils.lerp(
      head.current.rotation.y,
      x * 0.6,
      0.05
    );

    head.current.rotation.x = THREE.MathUtils.lerp(
      head.current.rotation.x,
      -y * 0.4,
      0.05
    );
  });

  return (
    <group ref={root} position={[0, -1.9, 0]}>
      {/* Neck */}
      {/* <mesh position={[0, -3.2, 0]}>
        <cylinderGeometry
          args={[
            0.45, // top radius
            0.55, // bottom radius
            7.0, // HEIGHT ⬆⬆⬆⬆⬆ (VERY TALL)
            64,
          ]}
        />
        <meshStandardMaterial color="#111" metalness={0.9} roughness={0.25} />
      </mesh> */}

      <group position={[0, -1.2, 0]}>
        {/* Upper metal collar */}
        <mesh position={[0, 2.3, 0]}>
          <coneGeometry args={[1.2, 2.4, 64]} />
          <meshStandardMaterial
            color="#0a0a0a"
            metalness={1}
            roughness={0.15}
          />
        </mesh>

        {/* Inner glowing core — MUCH TALLER */}
        <mesh ref={glow} position={[0, 0.2, 0]}>
          <cylinderGeometry args={[0.45, 0.45, 5.8, 32]} />
          <meshStandardMaterial
            color="#00ff66"
            emissive="#00ff66"
            emissiveIntensity={1.3}
            metalness={0.1}
            roughness={0.25}
          />
        </mesh>

        {/* Lower connector — extended */}
        <mesh position={[0, -3.4, 0]}>
          <cylinderGeometry args={[0.24, 0.32, 3.8, 32]} />
          <meshStandardMaterial
            color="#050505"
            metalness={0.9}
            roughness={0.35}
          />
        </mesh>
      </group>

      {/* Head */}
      <group ref={head} position={[0, 2.9, 0]}>
        <mesh>
          <boxGeometry args={[3.2, 2, 1.5]} />
          <meshStandardMaterial
            color="#0b5f1a"
            metalness={0.6}
            roughness={0.25}
          />
        </mesh>

        {/* Eyes */}
        <mesh position={[-0.7, 0.25, 0.8]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>

        <mesh position={[0.7, 0.25, 0.8]}>
          <sphereGeometry args={[0.2, 32, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </group>
  );
}
