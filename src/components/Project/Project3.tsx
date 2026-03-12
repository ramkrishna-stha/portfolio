'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Victoria',
    tags: ['Logo', 'Identity'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36710ba6a7d6ceac69b45_pexels_googledeepmind_18069365.webp',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
  {
    name: 'Zabania',
    tags: ['Frontend', 'Guideline'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36703dfab5aff806ba0ce_pexels_googledeepmind_17485678.webp',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
  {
    name: 'Moxies',
    tags: ['SEO', 'Logo'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36811c403862b9dc4b19a_pexels_googledeepmind_25626428_1.webp',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
  {
    name: 'Foxtly',
    tags: ['Ads'],
    image:
      'https://cdn.prod.website-files.com/68da09a4259b4ed4655511f6/68e36710d23e7c312bb1362b_pexels_googledeepmind_17485683.webp',
    link: 'https://webflow.com/templates/designers/kitpro-studio',
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectCardsRef = useRef<HTMLDivElement[]>([]);
  const cameraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Initial setup
    gsap.set(titleRef.current, { autoAlpha: 0, y: 50 });
    gsap.set(projectCardsRef.current, {
      autoAlpha: 0,
      scale: 0.8,
      filter: 'blur(10px)',
    });
    gsap.set(projectCardsRef.current[0], { yPercent: 100 }); // First from bottom
    gsap.set(projectCardsRef.current.slice(1), { xPercent: 100 }); // Others from right
    gsap.set([cameraRef.current], { scale: 1 });

    // Horizontal "projects" title animation
    ScrollTrigger.create({
      trigger: container,
      start: 'top 60%',
      onEnter: () => {
        gsap.to(titleRef.current, {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
        });
      },
    });

    // Main scroll timeline - SEQUENTIAL card reveals
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 0%',
        end: '+=300%', // Extended duration for sequential reveals
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    // PHASE 1: First card (bottom → center → zoom out → fade)
    tl.to(
      projectCardsRef.current[0],
      {
        autoAlpha: 1,
        yPercent: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
      },
      0
    )

      .to(
        projectCardsRef.current[0].querySelectorAll(
          '.text-projects, .wrapper-tag-projects'
        ),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.4'
      )

      .to(
        projectCardsRef.current[0],
        {
          scale: 0.9,
          autoAlpha: 0.3, // Start fading current card
          duration: 0.8,
        },
        '+=0.3'
      );

    // PHASE 2: Second card (right → center) - waits until first is half gone
    tl.to(
      projectCardsRef.current[1],
      {
        autoAlpha: 1,
        xPercent: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
      },
      '-=0.4'
    )

      .to(
        projectCardsRef.current[1].querySelectorAll(
          '.text-projects, .wrapper-tag-projects'
        ),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.4'
      )

      .to(
        projectCardsRef.current[1],
        {
          scale: 0.9,
          autoAlpha: 0.3,
          duration: 0.8,
        },
        '+=0.3'
      );

    // PHASE 3: Third card
    tl.to(
      projectCardsRef.current[2],
      {
        autoAlpha: 1,
        xPercent: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
      },
      '-=0.4'
    )

      .to(
        projectCardsRef.current[2].querySelectorAll(
          '.text-projects, .wrapper-tag-projects'
        ),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.4'
      )

      .to(
        projectCardsRef.current[2],
        {
          scale: 0.9,
          autoAlpha: 0.3,
          duration: 0.8,
        },
        '+=0.3'
      );

    // PHASE 4: Fourth card
    tl.to(
      projectCardsRef.current[3],
      {
        autoAlpha: 1,
        xPercent: 0,
        scale: 1,
        filter: 'blur(0px)',
        duration: 0.8,
      },
      '-=0.4'
    )

      .to(
        projectCardsRef.current[3].querySelectorAll(
          '.text-projects, .wrapper-tag-projects'
        ),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.4'
      );

    // Background blur effect
    ScrollTrigger.create({
      trigger: container,
      start: ' bottom top',
      end: 'top bottom ',
      onUpdate: (self) => {
        const blur = Math.max(0, 15 * (1 - self.progress));
        gsap.to(container, {
          filter: `blur(${blur}px)`,
          overwrite: 'auto',
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      className="section projects h-screen bg-red-50 relative overflow-hidden "
      ref={containerRef}
    >
      {/* Horizontal "projects" Title */}
      <div className="prequel-projects absolute top-[40%] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div
          ref={titleRef}
          className="text-project flex items-center gap-0 md:gap-2 text-center"
        >
          <div className="text-change-wrapp inline-flex flex-wrap justify-center gap-1 md:gap-3">
            <span className="headline-project italic text-4xl md:text-[400px] font-light text-gray-900 ">
              projects
            </span>
          </div>
        </div>
      </div>

      <div
        ref={cameraRef}
        className="camera absolute inset-0 flex items-center justify-center w-full h-screen px-4"
      >
        <div className="frame w-[95vw] md:w-[80vw] lg:w-[55vw] h-[60vh] md:h-[60vh] max-w-7xl mx-auto relative preserve-3d">
          {/* Project Cards */}
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => {
                if (el) projectCardsRef.current[index] = el;
              }}
              className="inner-frame absolute inset-0 w-full h-full"
              style={{ zIndex: 4 - index }}
            >
              <div className="item-frame absolute inset-0 w-full h-full flex flex-col justify-center items-center p-4">
                {/* Project Name */}
                <div className="text-projects-wrapp absolute top-6 md:-top-24 left-0 -translate-x-1/2 z-20 pointer-events-none">
                  <div className="text-projects text-2xl md:text-4xl lg:text-8xl font-bold text-white drop-shadow-2xl uppercase tracking-wider opacity-0 translate-y-1/2 transition-all duration-500">
                    {project.name}
                  </div>
                </div>

                {/* Tags */}
                <div className="wrapper-tag-projects absolute bottom-20 md:-bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 md:gap-4 opacity-0 translate-y-1/2 z-20 pointer-events-none">
                  {project.tags.map((tag, tagIndex) => (
                    <div key={tagIndex} className="inner-tag-service">
                      <div className="tag-service bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-200">
                        {tag}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Project Image */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="wrapper-image-projects block w-full h-full relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700"
                >
                  <div className="image-projectsrelative ">
                    <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl " />

                    <img
                      src={project.image}
                      alt={`${project.name} project`}
                      className="object-cover w-full h-full transition-all  duration-1000 ease-out group-hover:scale-[1.05] brightness-100"
                      //   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 70vw"
                    />
                  </div>
                </a>

                <div className="small-image-projects absolute -bottom-4 -right-4 w-20 h-20 bg-gray-200 rounded-full opacity-0" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
