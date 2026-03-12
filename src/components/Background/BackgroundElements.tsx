'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { usePathname } from 'next/navigation';

const BackgroundElements = () => {
  const elementRef = useRef<HTMLImageElement>(null);
  const pathname = usePathname();

  // Different background images for different pages
  const getBackgroundImage = () => {
    switch (pathname) {
      case '/':
        return 'https://ext.same-assets.com/1100225730/3547330047.png';
      case '/work':
        return 'https://ext.same-assets.com/1100225730/690735174.png';
      case '/about':
        return 'https://ext.same-assets.com/1100225730/3216645517.png';
      case '/contact':
        return 'https://ext.same-assets.com/1100225730/3112915865.png';
      default:
        return 'https://ext.same-assets.com/1100225730/3547330047.png';
    }
  };

  useEffect(() => {
    if (elementRef.current) {
      // Initial animation
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 0.15, scale: 1, duration: 2, ease: 'power2.out' }
      );

      // Subtle parallax movement
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * 30;
        const y = (clientY / window.innerHeight - 0.5) * 30;

        gsap.to(elementRef.current, {
          x: x,
          y: y,
          duration: 3,
          ease: 'power2.out',
        });
      };

      // Scroll parallax
      const handleScroll = () => {
        const scrollY = window.scrollY;
        gsap.to(elementRef.current, {
          y: scrollY * 0.5,
          duration: 1,
          ease: 'power2.out',
        });
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [pathname]);

  return (
    <div className="elements">
      <img
        ref={elementRef}
        src={getBackgroundImage()}
        alt=""
        className="element-item w-full h-full opacity-0"
        style={{
          willChange: 'transform',
          transform: 'translate3d(0px, 0px, 0px) scale3d(1.1, 1.1, 1)',
          transformStyle: 'preserve-3d',
          filter: 'blur(0.5px)',
        }}
      />
    </div>
  );
};

export default BackgroundElements;
