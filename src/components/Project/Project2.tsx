'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
  name: string;
  tags: string[];
  image: string;
  alt: string;
  link: string;
}

const projects: Project[] = [
  {
    name: 'Victoria',
    tags: ['Logo', 'Identity'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36710ba6a7d6ceac69b45_pexels_googledeepmind_18069365.webp',
    alt: '3D render of miniature landscape',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
  {
    name: 'Zabania',
    tags: ['Frontend', 'Guideline'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36703dfab5aff806ba0ce_pexels_googledeepmind_17485678.webp',
    alt: '3D render of green crystal fragment',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
  {
    name: 'Moxies',
    tags: ['SEO', 'Logo'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36811c403862b9dc4b19a_pexels_googledeepmind_25626428_1.webp',
    alt: 'Art photo of dried flowers on soft background',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
  {
    name: 'Foxtly',
    tags: ['Ads'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36710d23e7c312bb1362b_pexels_googledeepmind_17485683.webp',
    alt: '3D render of moss-covered geometric shape',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const bgTextRef = useRef<HTMLDivElement>(null);
  const firstCardRef = useRef<HTMLDivElement>(null);
  const titleRefs = useRef<(HTMLElement | null)[]>([]);
  const tagsRefs = useRef<(HTMLElement | null)[]>([]);
  const overlayRefs = useRef<(HTMLElement | null)[]>([]);
  const imageWrapperRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const numProjects = projects.length;
      const numSegments = numProjects - 1;
      const segmentDuration = window.innerHeight;

      // Initial states
      if (firstCardRef.current)
        gsap.set(firstCardRef.current, { yPercent: 100, filter: 'blur(10px)' });
      titleRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { yPercent: 100 });
      });
      tagsRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { opacity: 0 });
      });
      overlayRefs.current.forEach((el) => {
        if (!el) return;
        gsap.set(el, { yPercent: 0 });
      });

      // Animate "projects" letters stagger from bottom on section enter
      gsap.from('.headline-project', {
        yPercent: 100,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });

      // Animate first card from bottom with unblur when reaching top -20%
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top 80%',
        end: 'top -20%',
        onEnter: () => {
          if (firstCardRef.current) {
            gsap.to(firstCardRef.current, {
              yPercent: 0,
              duration: 1,
              ease: 'power3.out',
            });
          }
          if (titleRefs.current[0]) {
            gsap.to(titleRefs.current[0], {
              yPercent: 0,
              duration: 0.8,
              ease: 'power3.out',
            });
          }
          if (tagsRefs.current[0]) {
            gsap.to(tagsRefs.current[0], {
              opacity: 1,
              duration: 0.6,
              ease: 'power2.out',
              delay: 0.2,
            });
          }
          if (overlayRefs.current[0]) {
            gsap.to(overlayRefs.current[0], {
              yPercent: -100,
              duration: 1,
              ease: 'power3.out',
              delay: 0.4,
            });
          }
        },
        onUpdate: (self) => {
          if (firstCardRef.current) {
            const blurProgress = gsap.utils.clamp(0, 1, self.progress);
            gsap.set(firstCardRef.current, {
              filter: `blur(${10 * (1 - blurProgress)}px)`,
            });
          }
        },
      });

      // Horizontal scroll for subsequent cards from right
      if (frameRef.current) {
        const horizontalTl = gsap.to(frameRef.current, {
          xPercent: -100 * numSegments,
          ease: 'none',
        });

        ScrollTrigger.create({
          animation: horizontalTl,
          trigger: sectionRef.current,
          start: 'top -20%',
          end: `+=${segmentDuration * numSegments * 2}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const segmentSize = 1 / numSegments;

            // Start from second card (index 1)
            for (let i = 1; i < numProjects; i++) {
              let localProgress =
                (progress - (i - 1) * segmentSize) / segmentSize;
              localProgress = gsap.utils.clamp(0, 1, localProgress);
              const elTitle = titleRefs.current[i];
              const elTags = tagsRefs.current[i];
              const elOverlay = overlayRefs.current[i];
              if (elTitle)
                gsap.set(elTitle, { yPercent: 100 * (1 - localProgress) });
              if (elTags) gsap.set(elTags, { opacity: localProgress });
              if (elOverlay)
                gsap.set(elOverlay, { yPercent: localProgress * -100 });
            }
          },
        });
      }

      // Background text unblur
      if (bgTextRef.current) {
        gsap.fromTo(
          bgTextRef.current,
          { filter: 'blur(5px)' },
          {
            filter: 'blur(0px)',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'top -20%',
              scrub: true,
            },
          }
        );
      }
    });

    // Hover effects
    const handleMouseEnter = (
      wrapper: HTMLElement,
      imageCont: HTMLElement,
      viewMore: HTMLElement
    ) => {
      gsap.to(imageCont, {
        scale: 1.02,
        rotateY: 3.1622,
        duration: 0.6,
        ease: 'power3.out',
      });
      gsap.to(viewMore, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = (
      wrapper: HTMLElement,
      imageCont: HTMLElement,
      viewMore: HTMLElement
    ) => {
      gsap.to(imageCont, {
        scale: 1,
        rotateY: 0,
        duration: 0.6,
        ease: 'power3.out',
      });
      gsap.to(viewMore, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    imageWrapperRefs.current.forEach((wrapper: HTMLElement | null) => {
      if (!wrapper) return;
      const imageCont = wrapper.querySelector('.image-projects') as HTMLElement;
      const viewMore = wrapper.querySelector('.view-more') as HTMLElement;
      if (!imageCont || !viewMore) return;

      gsap.set(viewMore, { opacity: 0 });

      wrapper.addEventListener('mouseenter', () =>
        handleMouseEnter(wrapper, imageCont, viewMore)
      );
      wrapper.addEventListener('mouseleave', () =>
        handleMouseLeave(wrapper, imageCont, viewMore)
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const letters = 'projects'.split('');

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative min-h-[200vh] overflow-hidden"
      style={{
        backgroundColor: 'rgb(225, 225, 225)',
        willChange: 'background',
      }}
    >
      <div className="w-container mx-auto px-4 relative max-w-7xl h-screen sticky top-0">
        {/* Blurred background "projects" text - horizontal big size */}
        <div
          ref={bgTextRef}
          className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
          style={{ filter: 'blur(5px)', willChange: 'filter' }}
        >
          <div className="text-change-wrapp flex items-center justify-center gap-4">
            {letters.map((letter, index) => (
              <div
                key={index}
                className="headline-project font-light italic text-black leading-none tracking-tighter"
                style={{
                  fontSize: 'clamp(4rem, 12vw, 18rem)',
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
              >
                {letter}
              </div>
            ))}
          </div>
        </div>

        {/* Camera / Frame */}
        <div className="camera absolute inset-0 overflow-hidden z-10">
          <div
            ref={frameRef}
            className="frame h-full flex"
            style={{
              willChange: 'transform',
              transformStyle: 'preserve-3d',
            }}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (index === 0) firstCardRef.current = el;
                }}
                className="inner-frame w-screen h-full flex items-center justify-center px-4"
                style={{ filter: index === 0 ? 'blur(10px)' : 'none' }}
              >
                <div className="item-frame w-full max-w-[940px] mx-auto flex flex-col items-center justify-center gap-12">
                  {/* Project title */}
                  <div
                    className="text-projects-wrapp overflow-hidden"
                    style={{
                      willChange: 'transform',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div
                      ref={(el) => {
                        titleRefs.current[index] = el;
                      }}
                      className="text-projects font-light italic text-black tracking-tight"
                      style={{
                        fontSize: 'clamp(2rem, 8vw, 8rem)',
                        transformStyle: 'preserve-3d',
                        willChange: 'transform',
                      }}
                    >
                      {project.name}
                    </div>
                  </div>

                  {/* Tags */}
                  <div
                    ref={(el) => {
                      tagsRefs.current[index] = el;
                    }}
                    className="wrapper-tag-projects flex flex-wrap gap-4 justify-center"
                    style={{
                      willChange: 'transform, opacity',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {project.tags.map((tag, tIndex) => (
                      <div key={tIndex} className="inner-tag-service">
                        <div className="tag-service px-4 py-2 bg-black text-white text-xs font-medium rounded-full">
                          {tag}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Image */}
                  <a
                    ref={(el) => {
                      imageWrapperRefs.current[index] = el;
                    }}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="wrapper-image-projects w-inline-block relative"
                    style={{
                      willChange: 'transform',
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    <div
                      className="image-projects _1 relative rounded-2xl overflow-hidden"
                      style={{
                        width: '100%',
                        aspectRatio: '16/10',
                        willChange: 'transform',
                        transformStyle: 'preserve-3d',
                      }}
                    >
                      <div
                        ref={(el) => {
                          overlayRefs.current[index] = el;
                        }}
                        className="overlay _2 absolute inset-0 bg-black/30"
                        style={{
                          transformStyle: 'preserve-3d',
                          willChange: 'transform',
                        }}
                      />
                      <div
                        className="view-more opacity-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                        style={{
                          willChange: 'transform, opacity',
                          transformStyle: 'preserve-3d',
                        }}
                      >
                        <div className="text-view bg-white/90 backdrop-blur-sm shadow-lg px-6 py-3 rounded-full text-black font-medium text-sm flex items-center gap-2">
                          View more
                        </div>
                      </div>
                      <img
                        src={project.image}
                        alt={project.alt}
                        className="featured-image object-cover"
                        sizes="(max-width: 767px) 100vw, (max-width: 991px) 95vw, 940px"
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </div>
                    <div className="small-image-projects" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
