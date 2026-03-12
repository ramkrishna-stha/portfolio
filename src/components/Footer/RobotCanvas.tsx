// 'use client';

// import { Canvas } from '@react-three/fiber';
// import { Environment } from '@react-three/drei';
// import Robot from '@/three/Robot';

// export default function RobotCanvas() {
//   return (
//     <Canvas camera={{ position: [0, 0, 6], fov: 35 }} gl={{ antialias: true }}>
//       <ambientLight intensity={0.6} />
//       <directionalLight position={[5, 5, 5]} intensity={1.4} />

//       <Environment preset="city" />

//       <Robot />
//     </Canvas>
//   );
// }

'use client';

import Robot from '@/three/Robot';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

export default function RobotScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 35 }}
      gl={{ antialias: true }}
      className="z-50 w-full h-[140vh]"
    >
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.4} />
      <spotLight position={[-5, 5, 5]} intensity={0.5} />
      <Environment preset="city" />
      <Robot />
    </Canvas>
  );
}
