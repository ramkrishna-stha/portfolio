// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import Image from 'next/image';

// gsap.registerPlugin(ScrollTrigger);

// interface Project {
//   id: number;
//   name: string;
//   tags: string[];
//   image: string;
//   alt: string;
// }

// const projects: Project[] = [
//   {
//     id: 1,
//     name: 'Victoria',
//     tags: ['Logo', 'Identity'],
//     image:
//       'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36710ba6a7d6ceac69b45_pexels_googledeepmind_18069365.webp',
//     alt: '3D render of miniature landscape',
//   },
//   {
//     id: 2,
//     name: 'Zabania',
//     tags: ['Frontend', 'Guideline'],
//     image:
//       'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36703dfab5aff806ba0ce_pexels_googledeepmind_17485678.webp',
//     alt: '3D render of green crystal fragment',
//   },
//   {
//     id: 3,
//     name: 'Moxies',
//     tags: ['SEO', 'Logo'],
//     image:
//       'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36811c403862b9dc4b19a_pexels_googledeepmind_25626428_1.webp',
//     alt: 'Art photo of dried flowers on soft background',
//   },
//   {
//     id: 4,
//     name: 'Foxtly',
//     tags: ['Ads'],
//     image:
//       'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36710d23e7c312bb1362b_pexels_googledeepmind_17485683.webp',
//     alt: '3D render of moss-covered geometric shape',
//   },
// ];

// export default function ProjectsSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const containerRef = useRef<HTMLDivElement>(null);
//   const frameRef = useRef<HTMLDivElement>(null);
//   const textRef = useRef<HTMLDivElement>(null);
//   const [activeProject, setActiveProject] = useState(0);

//   useEffect(() => {
//     const section = sectionRef.current;
//     const container = containerRef.current;
//     const frame = frameRef.current;
//     const textElement = textRef.current;

//     if (!section || !container || !frame || !textElement) return;

//     const ctx = gsap.context(() => {
//       // Calculate the total scroll distance
//       const totalWidth = frame.scrollWidth - container.offsetWidth;

//       // Horizontal scroll animation
//       const horizontalScroll = gsap.to(frame, {
//         x: -totalWidth,
//         ease: 'none',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top top',
//           end: () => `+=${totalWidth}`,
//           scrub: 1,
//           pin: true,
//           anticipatePin: 1,
//           onUpdate: (self) => {
//             // Update active project based on scroll progress
//             const progress = self.progress;
//             const newActive = Math.min(
//               Math.floor(progress * projects.length),
//               projects.length - 1
//             );
//             setActiveProject(newActive);
//           },
//         },
//       });

//       // Animate the background text blur based on scroll
//       gsap.to(textElement, {
//         filter: 'blur(0px)',
//         scrollTrigger: {
//           trigger: section,
//           start: 'top center',
//           end: 'top top',
//           scrub: 1,
//         },
//       });

//       // Animate each letter of "projects"
//       const letters = textElement.querySelectorAll('.letter');
//       letters.forEach((letter, index) => {
//         gsap.from(letter, {
//           y: '100%',
//           duration: 0.8,
//           delay: index * 0.05,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: section,
//             start: 'top 80%',
//             toggleActions: 'play none none reverse',
//           },
//         });
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       id="projects"
//       className="relative min-h-screen overflow-hidden"
//       style={{ backgroundColor: 'rgb(225, 225, 225)' }}
//     >
//       <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8 relative h-screen">
//         {/* Background "projects" text */}
//         <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
//           <div
//             ref={textRef}
//             className="flex justify-center overflow-hidden"
//             style={{ filter: 'blur(5px)' }}
//           >
//             {'projects'.split('').map((char, index) => (
//               <span
//                 key={index}
//                 className="letter inline-block text-[12vw] md:text-[15vw] lg:text-[18vw] font-light tracking-tighter leading-none text-black"
//                 style={{
//                   fontFamily: "'Inter Tight', sans-serif",
//                   fontStyle: 'italic',
//                 }}
//               >
//                 {char}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Main wrapper */}
//         <div
//           ref={containerRef}
//           className="relative h-full flex flex-col items-center justify-center z-10"
//         >
//           {/* Camera/Frame for horizontal scroll */}
//           <div className="w-full overflow-hidden">
//             <div
//               ref={frameRef}
//               className="flex gap-8 md:gap-12"
//               style={{ width: 'fit-content' }}
//             >
//               {projects.map((project, index) => (
//                 <ProjectCard
//                   key={project.id}
//                   project={project}
//                   isActive={activeProject === index}
//                   index={index}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// interface ProjectCardProps {
//   project: Project;
//   isActive: boolean;
//   index: number;
// }

// function ProjectCard({ project, isActive, index }: ProjectCardProps) {
//   const cardRef = useRef<HTMLDivElement>(null);
//   const [isHovered, setIsHovered] = useState(false);

//   useEffect(() => {
//     const card = cardRef.current;
//     if (!card) return;

//     const ctx = gsap.context(() => {
//       // Animate name appearance
//       gsap.to(card.querySelector('.project-name'), {
//         y: isActive ? '0%' : '100%',
//         duration: 0.5,
//         ease: 'power3.out',
//       });

//       // Animate tags appearance
//       gsap.to(card.querySelector('.project-tags'), {
//         opacity: isActive ? 1 : 0,
//         y: isActive ? 0 : 20,
//         duration: 0.4,
//         ease: 'power2.out',
//       });

//       // Animate overlay
//       gsap.to(card.querySelector('.overlay'), {
//         y: isActive ? '-100%' : '0%',
//         duration: 0.6,
//         ease: 'power3.out',
//       });
//     });

//     return () => ctx.revert();
//   }, [isActive]);

//   return (
//     <div
//       ref={cardRef}
//       className="flex flex-col items-center"
//       style={{ width: '70vw', maxWidth: '940px', minWidth: '300px' }}
//     >
//       {/* Project name */}
//       <div className="mb-4 overflow-hidden">
//         <h3
//           className="project-name text-4xl md:text-6xl lg:text-8xl font-light tracking-tight text-black"
//           style={{
//             fontFamily: "'Inter Tight', sans-serif",
//             fontStyle: 'italic',
//             transform: 'translateY(100%)',
//           }}
//         >
//           {project.name}
//         </h3>
//       </div>

//       {/* Image wrapper */}
//       <a
//         href="#"
//         className="relative block w-full aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer group"
//         onMouseEnter={() => setIsHovered(true)}
//         onMouseLeave={() => setIsHovered(false)}
//       >
//         {/* Main image */}
//         <div className="relative w-full h-full">
//           <img
//             src={project.image}
//             alt={project.alt}
//             className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//             sizes="(max-width: 768px) 70vw, 940px"
//           />

//           {/* Dark overlay */}
//           <div
//             className="overlay absolute inset-0 bg-black/40"
//             style={{ transform: 'translateY(0%)' }}
//           />

//           {/* View more button */}
//           <div
//             className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
//               isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
//             }`}
//           >
//             <div className="flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg">
//               <span className="text-black font-medium text-sm md:text-base">
//                 View more
//               </span>
//             </div>
//           </div>
//         </div>
//       </a>

//       {/* Tags */}
//       <div
//         className="project-tags flex gap-3 mt-6"
//         style={{ opacity: 0, transform: 'translateY(20px)' }}
//       >
//         {project.tags.map((tag) => (
//           <span
//             key={tag}
//             className="px-5 py-2 bg-black text-white text-sm font-medium rounded-full"
//           >
//             {tag}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// }
'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    id: 1,
    title: 'VICTORIA',
    subtitle: 'PROJECTS',
    image: '/hero02.png',
    tags: ['Logo', 'Identity'],
    bgColor: '#f3f3f3',
  },
  {
    id: 2,
    title: 'ZABANIA',
    subtitle: 'PROJECTS',
    image: '/hero04.png',
    tags: ['Frontend', 'Guideline'],
    bgColor: '#ffffff',
  },
  {
    id: 3,
    title: 'MOXIES',
    subtitle: 'PROJECTS',
    image: '/minimalist-forest-landscape-foggy.jpg',
    tags: ['SEO', 'Logo'],
    bgColor: '#d4d8cf',
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cardElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const bgTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !cardsRef.current || !bgTextRef.current)
      return;

    const sections = gsap.utils.toArray('.project-slide') as HTMLElement[];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        pin: true,
        scrub: 1,
        end: () =>
          `+=${containerRef.current!.offsetHeight * sections.length * 1.5}`,
      },
    });

    sections.forEach((section, i) => {
      const project = PROJECTS[i];
      const card = cardElementsRef.current[i];

      tl.to('body', { backgroundColor: project.bgColor, duration: 0.5 }, i);

      if (i > 0) {
        tl.to(
          cardsRef.current,
          { xPercent: -100 * i, ease: 'none', duration: 1 },
          i
        );
      }

      tl.fromTo(
        bgTextRef.current,
        { filter: 'blur(0px)', opacity: 0.3 },
        {
          filter: 'blur(20px)',
          opacity: 0.08,
          duration: 0.8,
          ease: 'none',
        },
        i
      );

      if (card) {
        tl.fromTo(
          card,
          { filter: 'blur(30px)', y: 250, opacity: 0, scale: 0.8 },
          {
            filter: 'blur(0px)',
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'power2.out',
          },
          i + 0.1
        );

        const onMouseEnter = () => {
          gsap.to(card, {
            y: -25,
            x: -10,
            rotateX: 2,
            rotateY: -2,
            duration: 0.8,
            ease: 'expo.out',
          });
          gsap.to(card.querySelector('.view-more-btn'), {
            opacity: 1,
            y: 0,
            duration: 0.5,
          });
        };

        const onMouseLeave = () => {
          gsap.to(card, {
            y: 0,
            x: 0,
            rotateX: 0,
            rotateY: 0,
            duration: 0.8,
            ease: 'expo.out',
          });
          gsap.to(card.querySelector('.view-more-btn'), {
            opacity: 0,
            y: 20,
            duration: 0.4,
          });
        };

        card.addEventListener('mouseenter', onMouseEnter);
        card.addEventListener('mouseleave', onMouseLeave);

        return () => {
          card.removeEventListener('mouseenter', onMouseEnter);
          card.removeEventListener('mouseleave', onMouseLeave);
        };
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen overflow-hidden">
      <div
        ref={bgTextRef}
        className="bg-text-container absolute inset-0 z-0 flex flex-col items-center justify-center select-none pointer-events-none"
      >
        <div className="text-[20vw] font-bold leading-none tracking-tighter text-black uppercase will-change-filter">
          PROJECTS
        </div>
      </div>

      <div ref={cardsRef} className="flex h-full w-[300%]">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="project-slide relative flex h-full w-screen items-center justify-center"
          >
            <div
              ref={(el) => {
                cardElementsRef.current[index] = el;
              }}
              className="project-card-container relative z-10 flex w-full max-w-[600px] max-h-[400px] flex-col items-center px-4"
            >
              <div className="group relative aspect-[1.3/1] w-full overflow-hidden rounded-[2rem] bg-muted shadow-2xl">
                <div className="project-image relative h-full w-full overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={index === 0}
                  />
                </div>
                <div className=" absolute -top-20 z-50 ">
                  <h3 className="text-3xl font-bold text-black tracking-tight">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="mt-8 flex flex-col items-center gap-4">
                <div className="flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-black/10 bg-white/50 px-5 py-1.5 text-xs font-semibold backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
