// 'use client';
// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const projects = [
//   {
//     name: 'Club NOVA',
//     tags: ['Logo', 'Identity'],
//     image: '/logo.jpg',
//     link: 'https://theclubnova.com/',
//   },
//   {
//     name: 'Tebina',
//     tags: ['Frontend', 'Guideline'],
//     image: 'Frame.png',
//     link: 'https://tebina.com.np/',
//   },
//   {
//     name: 'Enviroleap',
//     tags: ['SEO', 'Logo'],
//     image: 'Frame2.png',
//     link: 'https://enviroleap.com.np/',
//   },
//   {
//     name: 'DogStudio Clone',
//     tags: ['Ads'],
//     image: 'dog.png',
//     link: 'https://dogstudioclone.vercel.app/',
//   },
// ];

// export default function ProjectsSection() {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const projectCardsRef = useRef<HTMLDivElement[]>([]);
//   const cameraRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     if (!container) return;

//     const cards = projectCardsRef.current;

//     // Initial setup
//     gsap.set(titleRef.current, { autoAlpha: 0, y: 50 });
//     gsap.set(cards, {
//       autoAlpha: 0,
//       scale: 0.8,
//       filter: 'blur(10px)',
//       xPercent: 0,
//       yPercent: 0,
//       rotation: 0,
//     });
//     gsap.set(
//       cards.map(
//         (card) =>
//           card?.querySelectorAll('.text-projects, .wrapper-tag-projects') || []
//       ),
//       {
//         autoAlpha: 0,
//         yPercent: 50,
//       }
//     );
//     gsap.set([cameraRef.current], { scale: 1 });

//     // Horizontal "projects" title animation
//     ScrollTrigger.create({
//       trigger: container,
//       start: 'top 60%',
//       onEnter: () => {
//         gsap.to(titleRef.current, {
//           autoAlpha: 1,
//           y: 0,
//           duration: 1,
//           ease: 'power3.out',
//         });
//       },
//     });

//     // Main scroll timeline - Stack slider reveals
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: container,
//         start: 'top 0%',
//         end: '+=800%', // Extended for phases
//         scrub: 1.5,
//         pin: true,
//         anticipatePin: 1,
//       },
//     });

//     // PHASE 0: Reveal the initial stack in center with slight fan offsets
//     const stackRevealTime = 1;
//     tl.to(
//       cards[0],
//       {
//         autoAlpha: 1,
//         scale: 1,
//         filter: 'blur(0px)',
//         duration: stackRevealTime,
//         ease: 'power2.out',
//       },
//       0
//     )
//       .to(
//         cards[1],
//         {
//           autoAlpha: 1,
//           scale: 0.98,
//           xPercent: 10,
//           yPercent: 5,
//           rotation: -2,
//           filter: 'blur(0px)',
//           duration: stackRevealTime,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         cards[2],
//         {
//           autoAlpha: 1,
//           scale: 0.96,
//           xPercent: 20,
//           yPercent: 10,
//           rotation: -4,
//           filter: 'blur(0px)',
//           duration: stackRevealTime,
//           ease: 'power2.out',
//         },
//         0
//       )
//       .to(
//         cards[3],
//         {
//           autoAlpha: 1,
//           scale: 0.94,
//           xPercent: 30,
//           yPercent: 15,
//           rotation: -6,
//           filter: 'blur(0px)',
//           duration: stackRevealTime,
//           ease: 'power2.out',
//         },
//         0
//       )
//       // Reveal text for first (top) card
//       .to(
//         cards[0].querySelectorAll('.text-projects, .wrapper-tag-projects'),
//         {
//           autoAlpha: 1,
//           yPercent: 0,
//           duration: 0.4,
//         },
//         '-=0.6'
//       )
//       // Pause to view stack
//       .to({}, { duration: 1 }, '-=0.1');

//     // PHASE 1: Peel first card to left, adjust remaining stack
//     const peelDuration = 1.2;
//     tl.to(
//       cards[0],
//       {
//         xPercent: -150,
//         yPercent: 0,
//         rotation: 0,
//         scale: 0.85,
//         duration: peelDuration,
//         ease: 'power2.inOut',
//       },
//       '-=0.4'
//     )
//       // Adjust remaining to 3-card stack
//       .to(
//         cards[1],
//         {
//           xPercent: 0,
//           yPercent: 0,
//           rotation: 0,
//           scale: 1,
//           duration: peelDuration,
//           ease: 'power2.out',
//         },
//         '<'
//       )
//       .to(
//         cards[2],
//         {
//           xPercent: 10,
//           yPercent: 5,
//           rotation: -2,
//           scale: 0.98,
//           duration: peelDuration,
//           ease: 'power2.out',
//         },
//         '<'
//       )
//       .to(
//         cards[3],
//         {
//           xPercent: 20,
//           yPercent: 10,
//           rotation: -4,
//           scale: 0.96,
//           duration: peelDuration,
//           ease: 'power2.out',
//         },
//         '<'
//       )
//       // Reveal text for new top (second card)
//       .to(
//         cards[1].querySelectorAll('.text-projects, .wrapper-tag-projects'),
//         {
//           autoAlpha: 1,
//           yPercent: 0,
//           duration: 0.4,
//         },
//         '-=0.8'
//       )
//       // Pause
//       .to({}, { duration: 1 }, '-=0.1');

//     // PHASE 2: Peel second to left, adjust to 2-card stack
//     tl.to(
//       cards[1],
//       {
//         xPercent: -150,
//         yPercent: 0,
//         rotation: 0,
//         scale: 0.85,
//         duration: peelDuration,
//         ease: 'power2.inOut',
//       },
//       '-=0.4'
//     )
//       // Adjust remaining
//       .to(
//         cards[2],
//         {
//           xPercent: 0,
//           yPercent: 0,
//           rotation: 0,
//           scale: 1,
//           duration: peelDuration,
//           ease: 'power2.out',
//         },
//         '<'
//       )
//       .to(
//         cards[3],
//         {
//           xPercent: 10,
//           yPercent: 5,
//           rotation: -2,
//           scale: 0.98,
//           duration: peelDuration,
//           ease: 'power2.out',
//         },
//         '<'
//       )
//       // Reveal text for new top (third)
//       .to(
//         cards[2].querySelectorAll('.text-projects, .wrapper-tag-projects'),
//         {
//           autoAlpha: 1,
//           yPercent: 0,
//           duration: 0.4,
//         },
//         '-=0.8'
//       )
//       // Pause
//       .to({}, { duration: 1 }, '-=0.1');

//     // PHASE 3: Peel third to left, adjust to 1-card
//     tl.to(
//       cards[2],
//       {
//         xPercent: -150,
//         yPercent: 0,
//         rotation: 0,
//         scale: 0.85,
//         duration: peelDuration,
//         ease: 'power2.inOut',
//       },
//       '-=0.4'
//     )
//       // Adjust last
//       .to(
//         cards[3],
//         {
//           xPercent: 0,
//           yPercent: 0,
//           rotation: 0,
//           scale: 1,
//           duration: peelDuration,
//           ease: 'power2.out',
//         },
//         '<'
//       )
//       // Reveal text for last
//       .to(
//         cards[3].querySelectorAll('.text-projects, .wrapper-tag-projects'),
//         {
//           autoAlpha: 1,
//           yPercent: 0,
//           duration: 0.4,
//         },
//         '-=0.8'
//       )
//       // Final pause
//       .to({}, { duration: 1.5 }, '-=0.1');

//     // Optional: Peel the last one too if desired
//     // tl.to(cards[3], {
//     //   xPercent: -80,
//     //   yPercent: 0,
//     //   rotation: 0,
//     //   scale: 0.85,
//     //   duration: peelDuration,
//     // }, '-=0.4');

//     // Background blur effect
//     ScrollTrigger.create({
//       trigger: container,
//       start: ' bottom top',
//       end: 'top bottom ',
//       onUpdate: (self) => {
//         const blur = Math.max(0, 15 * (1 - self.progress));
//         gsap.to(container, {
//           filter: `blur(${blur}px)`,
//           overwrite: 'auto',
//         });
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <section
//       id="projects"
//       className="section projects h-screen  relative overflow-hidden bg-[#e7e9e8] "
//       ref={containerRef}
//     >
//       <div className="prequel-projects absolute top-[40%] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
//         <div
//           ref={titleRef}
//           className="text-project flex items-center gap-0 md:gap-2 text-center"
//         >
//           <div className="text-change-wrapp inline-flex flex-wrap justify-center gap-1 md:gap-3">
//             <span className="headline-project italic text-4xl md:text-[400px] font-light text-gray-900 ">
//               projects
//             </span>
//           </div>
//         </div>
//       </div>

//       <div
//         ref={cameraRef}
//         className="camera absolute inset-0 flex items-center justify-center w-full h-screen px-4"
//       >
//         <div className="frame w-[95vw] md:w-[80vw] lg:w-[45vw] h-[60vh] md:h-[55vh] max-w-7xl mx-auto relative preserve-3d">
//           {/* Project Cards */}
//           {projects.map((project, index) => (
//             <div
//               key={project.name}
//               ref={(el) => {
//                 if (el) projectCardsRef.current[index] = el;
//               }}
//               className="inner-frame absolute inset-0 w-full h-full"
//               style={{ zIndex: 4 - index }}
//             >
//               <div className="item-frame absolute inset-0 w-full h-full flex flex-col justify-center items-center p-4">
//                 {/* Project Name */}
//                 <div className="text-projects-wrapp absolute top-6 md:-top-24 left-0 -translate-x-1/2 z-20 pointer-events-none">
//                   <div className="text-projects text-2xl md:text-4xl lg:text-6xl font-semiblod font-cinzel text-black drop-shadow-2xl uppercase tracking-wider opacity-0 translate-y-1/2 transition-all duration-500">
//                     {project.name}
//                   </div>
//                 </div>

//                 {/* Tags */}
//                 {/* <div className="wrapper-tag-projects absolute bottom-20 md:-bottom-10 left-1/2 -translate-x-1/2 flex flex-wrap gap-2 md:gap-4 opacity-0 translate-y-1/2 z-20 pointer-events-none">
//                   {project.tags.map((tag, tagIndex) => (
//                     <div key={tagIndex} className="inner-tag-service">
//                       <div className="tag-service bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs md:text-sm font-semibold text-gray-800 shadow-xl hover:shadow-2xl transition-all duration-200">
//                         {tag}
//                       </div>
//                     </div>
//                   ))}
//                 </div> */}

//                 {/* Project Image */}
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="wrapper-image-projects block w-full h-full relative group cursor-pointer rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700"
//                 >
//                   <div className="image-projects relative ">
//                     <div className="overlay absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl " />

//                     <img
//                       src={project.image}
//                       alt={`${project.name} project`}
//                       className="object-cover w-full h-full transition-all  duration-1000 ease-out group-hover:scale-[1.05] brightness-100"
//                       // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 70vw"
//                     />
//                   </div>
//                 </a>

//                 <div className="small-image-projects absolute -bottom-4 -right-4 w-20 h-20 bg-gray-200 rounded-full opacity-0" />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    name: 'Club NOVA',
    tags: ['Logo', 'Identity'],
    image: '/logo.jpg',
    link: 'https://theclubnova.com/',
  },
  {
    name: 'Tebina',
    tags: ['Frontend', 'Guideline'],
    image: 'Frame.png',
    link: 'https://tebina.com.np/',
  },
  {
    name: 'Enviroleap',
    tags: ['SEO', 'Logo'],
    image: 'Frame2.png',
    link: 'https://enviroleap.com.np/',
  },
  {
    name: 'DogStudio Clone',
    tags: ['Ads'],
    image: 'dog.png',
    link: 'https://dogstudioclone.vercel.app/',
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

    const cards = projectCardsRef.current;

    gsap.set(titleRef.current, { autoAlpha: 0, y: 50 });

    gsap.set(cards, {
      autoAlpha: 0,
      scale: 0.8,
      filter: 'blur(10px)',
      xPercent: 0,
      yPercent: 0,
      rotation: 0,
    });

    gsap.set(
      cards.map(
        (card) =>
          card?.querySelectorAll('.text-projects, .wrapper-tag-projects') || []
      ),
      {
        autoAlpha: 0,
        yPercent: 50,
      }
    );

    gsap.set([cameraRef.current], { scale: 1 });

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

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: 'top 0%',
        end: '+=800%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      },
    });

    const stackRevealTime = 1;

    tl.to(
      cards[0],
      {
        autoAlpha: 1,
        scale: 1,
        filter: 'blur(0px)',
        duration: stackRevealTime,
        ease: 'power2.out',
      },
      0
    )
      .to(
        cards[1],
        {
          autoAlpha: 1,
          scale: 0.98,
          xPercent: 10,
          yPercent: 5,
          rotation: -2,
          filter: 'blur(0px)',
          duration: stackRevealTime,
          ease: 'power2.out',
        },
        0
      )
      .to(
        cards[2],
        {
          autoAlpha: 1,
          scale: 0.96,
          xPercent: 20,
          yPercent: 10,
          rotation: -4,
          filter: 'blur(0px)',
          duration: stackRevealTime,
          ease: 'power2.out',
        },
        0
      )
      .to(
        cards[3],
        {
          autoAlpha: 1,
          scale: 0.94,
          xPercent: 30,
          yPercent: 15,
          rotation: -6,
          filter: 'blur(0px)',
          duration: stackRevealTime,
          ease: 'power2.out',
        },
        0
      )

      .to(
        cards[0].querySelectorAll('.text-projects, .wrapper-tag-projects'),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.6'
      )
      .to({}, { duration: 1 }, '-=0.1');

    const peelDuration = 1.2;

    tl.to(
      cards[0],
      {
        xPercent: -150,
        rotation: 0,
        scale: 0.85,
        duration: peelDuration,
        ease: 'power2.inOut',
      },
      '-=0.4'
    )
      .to(
        cards[1],
        {
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          scale: 1,
          duration: peelDuration,
          ease: 'power2.out',
        },
        '<'
      )
      .to(
        cards[2],
        {
          xPercent: 10,
          yPercent: 5,
          rotation: -2,
          scale: 0.98,
          duration: peelDuration,
        },
        '<'
      )
      .to(
        cards[3],
        {
          xPercent: 20,
          yPercent: 10,
          rotation: -4,
          scale: 0.96,
          duration: peelDuration,
        },
        '<'
      )

      .to(
        cards[1].querySelectorAll('.text-projects, .wrapper-tag-projects'),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.8'
      )
      .to({}, { duration: 1 });

    tl.to(
      cards[1],
      {
        xPercent: -150,
        scale: 0.85,
        duration: peelDuration,
      },
      '-=0.4'
    )
      .to(
        cards[2],
        {
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          scale: 1,
          duration: peelDuration,
        },
        '<'
      )
      .to(
        cards[3],
        {
          xPercent: 10,
          yPercent: 5,
          rotation: -2,
          scale: 0.98,
          duration: peelDuration,
        },
        '<'
      )
      .to(
        cards[2].querySelectorAll('.text-projects, .wrapper-tag-projects'),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.8'
      )
      .to({}, { duration: 1 });

    tl.to(
      cards[2],
      {
        xPercent: -150,
        scale: 0.85,
        duration: peelDuration,
      },
      '-=0.4'
    )
      .to(
        cards[3],
        {
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          scale: 1,
          duration: peelDuration,
        },
        '<'
      )
      .to(
        cards[3].querySelectorAll('.text-projects, .wrapper-tag-projects'),
        {
          autoAlpha: 1,
          yPercent: 0,
          duration: 0.4,
        },
        '-=0.8'
      )
      .to({}, { duration: 1.5 });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      className="section projects h-screen relative overflow-hidden bg-[#e7e9e8]"
      ref={containerRef}
    >
      {/* <div className="prequel-projects absolute top-[50%] left-1/2 -translate-x-1/2 z-0 pointer-events-none">
        <div ref={titleRef}>
          <span className="italic text-4xl md:text-[400px] font-light text-gray-900">
            projects
          </span>
        </div>
      </div> */}

      <div className="prequel-projects absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
        <div ref={titleRef}>
          <span className="italic text-8xl sm:text-7xl md:text-[400px] font-light text-gray-900">
            projects
          </span>
        </div>
      </div>

      <div
        ref={cameraRef}
        className="camera absolute inset-0 flex items-center justify-center w-full h-screen px-4"
      >
        <div className="frame w-[85vw] md:w-[80vw] lg:w-[45vw] h-[50vh] md:h-[55vh] max-w-7xl mx-auto relative">
          {projects.map((project, index) => (
            <div
              key={project.name}
              ref={(el) => {
                if (el) projectCardsRef.current[index] = el;
              }}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: 4 - index }}
            >
              <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
                {/* PROJECT TITLE */}
                <div
                  className={`absolute z-20 pointer-events-none
                  ${index % 2 === 0 ? '-top-16 left-5' : '-top-16 left-5'}
                   md:-top-24 md:left-0 md:-translate-x-1/2`}
                >
                  <div className="text-projects text-2xl md:text-4xl lg:text-6xl font-cinzel  uppercase opacity-0 translate-y-1/2">
                    {project.name}
                  </div>
                </div>

                {/* IMAGE */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full rounded-3xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
