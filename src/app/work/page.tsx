'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LeftSidebar from '@/components/Navigation/LeftSidebar';

const workProjects = [
  {
    name: 'Okalpha',
    role: 'Webflow Development',
    isNew: false,
    href: '/work/okalpha',
  },
  {
    name: 'Superlink',
    role: 'Framer Development',
    isNew: true,
    href: '/work/superlink',
  },
  {
    name: 'Karoo',
    role: 'Webflow Development',
    isNew: true,
    href: '/work/karoo-bioscience',
  },
  {
    name: 'Ward',
    role: 'Webflow Development',
    isNew: false,
    href: '/work/paul-ward',
  },
  {
    name: 'Studio',
    role: 'Product Management',
    isNew: false,
    href: '/work/godaddy-studio',
  },
  {
    name: 'Margravine',
    role: 'Design & Webflow Development',
    isNew: false,
    href: '/work/margravine',
  },
  {
    name: 'Cssco',
    role: 'Product Development',
    isNew: false,
    href: '/work/cssco',
  },
  {
    name: 'YumYuck',
    role: 'Photography & Design',
    isNew: false,
    href: '/work/yumyuck',
  },
];

export default function Work() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const descriptionRefs = useRef<HTMLParagraphElement[]>([]);
  const projectRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
      );
    }

    // Description animations
    descriptionRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            delay: 0.6 + index * 0.2,
          }
        );
      }
    });

    // Project animations
    projectRefs.current.forEach((ref, index) => {
      if (ref) {
        gsap.fromTo(
          ref,
          { opacity: 0, filter: 'blur(10px)', y: 50 },
          {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            duration: 1,
            delay: 1 + index * 0.1,
            ease: 'power2.out',
          }
        );
      }
    });
  }, []);

  const addToDescriptionRefs = (el: HTMLParagraphElement | null) => {
    if (el && !descriptionRefs.current.includes(el)) {
      descriptionRefs.current.push(el);
    }
  };

  const addToProjectRefs = (el: HTMLDivElement | null) => {
    if (el && !projectRefs.current.includes(el)) {
      projectRefs.current.push(el);
    }
  };

  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      {/* Left Content */}
      <div className="flex-1 flex flex-col justify-center max-w-2xl">
        <div className="mb-8">
          <h1 ref={headerRef} className="header-large text-pink-100 mb-8">
            WORK
          </h1>

          <p
            ref={addToDescriptionRefs}
            className="description-text text-gray-300 mb-6"
          >
            This is a showcase of my best work in a variety of fields including
            Graphic and Web Design, No-Code Development, Product Design and
            Product Management.
          </p>

          <p
            ref={addToDescriptionRefs}
            className="description-text text-gray-300"
          >
            The world of digital design and development is constantly evolving
            and so has my role over the last 15 years. I'm still learning and
            gaining new skills every day.
          </p>
        </div>
      </div>

      {/* Right Projects Navigation */}
      <div className="flex-1 flex flex-col justify-center pl-16 space-y-6">
        {workProjects.map((project, index) => (
          <div
            key={project.name}
            ref={addToProjectRefs}
            className="nav-item"
            style={{ opacity: 0, filter: 'blur(10px)' }}
          >
            <a
              href={project.href}
              className="nav-large text-pink-200 link-hover transition-all duration-300 hover:opacity-70 cursor-pointer block"
            >
              {project.name.toUpperCase()}
            </a>
            <div className="flex items-center space-x-3 mt-2">
              <span className="text-gray-400 text-sm font-montserrat">
                – {project.role}
              </span>
              {project.isNew && (
                <span className="bg-pink-200 text-gray-900 px-2 py-1 text-xs font-montserrat font-medium rounded">
                  NEW
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
