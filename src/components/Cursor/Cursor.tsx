'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function SmoothCursor() {
  // Track actual mouse position
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Motion values for smooth following
  const x = useMotionValue(mousePos.x);
  const y = useMotionValue(mousePos.y);

  // Spring for smooth animation
  const springConfig = { stiffness: 200, damping: 25 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  // Update motion values whenever mouse moves
  useEffect(() => {
    x.set(mousePos.x);
    y.set(mousePos.y);
  }, [mousePos, x, y]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] bg-orange-400"
    />
  );
}
