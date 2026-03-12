'use client';

import React, { useRef } from 'react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const letterARef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!letterARef.current) return;

    const { clientX, currentTarget } = event;
    const { left, width } = currentTarget.getBoundingClientRect();
    const center = left + width / 2;

    gsap.to(letterARef.current, {
      x: clientX < center ? '-10vw' : '10vw', // Move left or right
      duration: 1,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    if (!letterARef.current) return;

    gsap.to(letterARef.current, {
      x: '0vw', // Return to center
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  return (
    <div className="h-screen flex justify-center items-center text-center">
      <h1 className="uppercase flex items-center text-[200px] leading-none">
        <span className="text-[15rem] font-black">r</span>
        <div className="bg-white inline-flex items-center justify-center w-[450px] h-[200px] overflow-hidden rounded-full">
          <span
            ref={letterARef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="   text-[15rem] font-black will-change-transform cursor-pointer"
          >
            a
          </span>
        </div>

        <span className="text-[15rem] font-black">m</span>
      </h1>
    </div>
  );
};

export default Hero;
