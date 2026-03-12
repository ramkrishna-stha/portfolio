'use client';

import React, { useEffect, useRef } from 'react';

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const loadGsap = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const skills = skillsRef.current?.querySelectorAll('.skill-item');

        if (skills) {
          skills.forEach((skill) => {
            gsap.to(skill, {
              opacity: 1,
              duration: 0.3,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: skill,
                start: 'top center',
                end: 'bottom center',
                toggleActions: 'play reverse play reverse',
                onEnter: () => {
                  gsap.to(skills, { opacity: 0.5, duration: 0.3 });
                  gsap.to(skill, { opacity: 1, duration: 0.3 });
                },
                onEnterBack: () => {
                  gsap.to(skills, { opacity: 0.5, duration: 0.3 });
                  gsap.to(skill, { opacity: 1, duration: 0.3 });
                },
              },
            });
          });
        }
      }, sectionRef);
    };

    loadGsap();

    return () => {
      if (ctx) ctx.revert();
    };
  }, []);

  const skills = [
    'JavaScript',
    'TypeScript',
    'React.js',
    'Next.js',
    'Node.js',
    'NestJS',
    'GSAP',
    'Tailwind CSS',
    'MongoDB',
    'PostgreSQL',
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-6"
    >
      <div
        ref={skillsRef}
        className="flex flex-col gap-12 text-5xl font-semibold text-center"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-item opacity-50 transition-opacity duration-300"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
