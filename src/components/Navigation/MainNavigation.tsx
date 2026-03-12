'use client';

import { useEffect, useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const MainNavigation = () => {
  const router = useRouter();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Work', path: '/work' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  useEffect(() => {
    if (navRef.current) {
      const items = navRef.current.querySelectorAll('.nav-item');

      gsap.fromTo(
        items,
        { opacity: 0, filter: 'blur(10px)', y: 50 },
        {
          opacity: 1,
          filter: 'blur(0px)',
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, [pathname]);

  const handleNavigation = (item: (typeof navItems)[0]) => {
    router.push(item.path);
  };

  const getLinkColor = () => {
    return pathname === '/work' || pathname === '/contact'
      ? 'text-pink-200'
      : 'text-gray-800';
  };

  return (
    <div ref={navRef} className="flex flex-col space-y-6">
      {navItems.map((item, index) => (
        <div key={item.name} className="nav-item">
          <button
            onClick={() => handleNavigation(item)}
            className={`nav-large ${getLinkColor()} link-hover transition-all duration-300 hover:opacity-70 cursor-pointer text-left`}
            style={{ opacity: 1, filter: 'blur(0px)' }}
          >
            {item.name.toUpperCase()}
          </button>
        </div>
      ))}
    </div>
  );
};

export default MainNavigation;
