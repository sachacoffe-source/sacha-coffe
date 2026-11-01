
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import {
  OrbitControls,
  ContactShadows,
  Float,
} from '@react-three/drei';
import * as THREE from 'three';

// Cada archivo corresponde a una cara específica.
const TEXTURE_PATHS = [
  '/assets/images/box/right.png',
  '/assets/images/box/left.png',
  '/assets/images/box/top.png',
  '/assets/images/box/front.png',
  '/assets/images/box/back.png',
];

function BoxModel() {
  const groupRef = useRef();

  const textures = useLoader(
    THREE.TextureLoader,
    TEXTURE_PATHS
  );

  // Configurar las cinco texturas.
  useEffect(() => {
    textures.forEach((texture) => {
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.anisotropy = 8;
      texture.needsUpdate = true;
    });
  }, [textures]);

  // Rotación automática.
  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  const green = '#0c3321';

  // Asignar cada material a un índice concreto.
  const createMaterial = (index, texture = null) => (
    <meshStandardMaterial
      key={index}
      attach={`material-${index}`}
      map={texture}
      color={texture ? '#ffffff' : green}
      roughness={0.8}
      metalness={0}
    />
  );

  return (
    <group ref={groupRef}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[2, 2.342, 1.074]} />

        {/*
          BoxGeometry:
          0 = +X: lateral derecho
          1 = -X: lateral izquierdo
          2 = +Y: tapa superior
          3 = -Y: base inferior
          4 = +Z: frente
          5 = -Z: posterior
        */}

        {createMaterial(0, textures[0])}
        {createMaterial(1, textures[1])}
        {createMaterial(2, textures[2])}
        {createMaterial(3)}
        {createMaterial(4, textures[3])}
        {createMaterial(5, textures[4])}
      </mesh>
    </group>
  );
}

export default function DripBoxCanvas() {
  return (
    <div className="relative h-64 w-full sm:h-80">
      <Canvas
        camera={{
          position: [0, 0.2, 4.5],
          fov: 40,
        }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 8, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-5, 2, -2]}
          intensity={0.8}
          color="#f9f0ea"
        />

        <Suspense fallback={null}>
          <Float
            speed={1.2}
            rotationIntensity={0.05}
            floatIntensity={0.08}
          >
            <BoxModel />
          </Float>
        </Suspense>

        <ContactShadows
          position={[0, -1.18, 0]}
          opacity={0.25}
          scale={4}
          blur={1.5}
          color="#0c3321"
        />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
    </div>
  );
}
