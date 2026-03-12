// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     title: 'NextJs',
//     desc: 'We design and build modern, responsive, and user-friendly websites.',
//     image: '/nextjs.jpg',
//   },
//   {
//     title: 'NestJs',
//     desc: 'We craft a strong and consistent brand identity that captures your values.',
//     image: '/nest.jpg',
//   },

//   {
//     title: 'NodeJS',
//     desc: 'We build smart digital strategies that connect your brand with the right audience.',
//     image: '/node.webp',
//   },
//   {
//     title: 'PostgreSQl',
//     desc: 'We build smart digital strategies that connect your brand with the right audience.',
//     image: '/postgre.jpg',
//   },
//   {
//     title: 'AWS',
//     desc: 'We produce compelling visuals and storytelling assets that engage audiences.',
//     image: '/aws.png',
//   },
//   {
//     title: 'Tailwind',
//     desc: 'We build smart digital strategies that connect your brand with the right audience.',
//     image: '/tailwind.png',
//   },
// ];

// export default function ServicesStackScroll() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const images = gsap.utils.toArray<HTMLElement>('.stack-image');
//       const texts = gsap.utils.toArray<HTMLElement>('.stack-text');

//       const GAP = 25;
//       const BASE_WIDTH = 450;
//       const BASE_HEIGHT = 350;
//       const REDUCE_X = 0.03;
//       const REDUCE_Y = 0.01;
//       const ROT_FACTOR = 10;
//       const Z_FACTOR = 80;
//       const MAX_POS = services.length - 1;
//       const BELOW_Y = 600;
//       const BELOW_ROT_Y = ROT_FACTOR;
//       const BELOW_Z = -Z_FACTOR;
//       const BELOW_WIDTH = BASE_WIDTH * (0.5 - MAX_POS * REDUCE_X);
//       const BELOW_HEIGHT = BASE_HEIGHT * (0.5 - MAX_POS * REDUCE_Y);

//       gsap.set(images, {
//         y: (i) => -i * GAP,
//         width: (i) => BASE_WIDTH * (1 - i * REDUCE_X) + 'px',
//         height: (i) => BASE_HEIGHT * (1 - i * REDUCE_Y) + 'px',
//         rotationY: (i) => -i * ROT_FACTOR,
//         z: (i) => -i * Z_FACTOR,
//         zIndex: (i) => images.length - i,
//       });

//       // Text setup
//       gsap.set(texts, { opacity: 0, y: 80 });
//       gsap.set(texts[0], { opacity: 1, y: 0 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'center center',
//           end: `+=${services.length * 120}%`,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       services.forEach((_, i) => {
//         if (i === 0) return;

//         // Move current center down to below position
//         tl.to(
//           images[i - 1],
//           {
//             y: BELOW_Y,
//             width: BELOW_WIDTH + 'px',
//             height: BELOW_HEIGHT + 'px',
//             rotationY: BELOW_ROT_Y,
//             z: BELOW_Z,
//             ease: 'none',
//           },
//           '+=0.3'
//         );

//         // Bring next to center
//         tl.to(
//           images[i],
//           {
//             y: 0,
//             width: BASE_WIDTH + 'px',
//             height: BASE_HEIGHT + 'px',
//             rotationY: 0,
//             z: 0,
//             ease: 'none',
//           },
//           '<'
//         );

//         // Shift upper cards to new positions (continuous width shift)
//         for (let j = i + 1; j < services.length; j++) {
//           const k = j - i; // New relative position above center
//           tl.to(
//             images[j],
//             {
//               y: -k * GAP,
//               width: BASE_WIDTH * (1 - k * REDUCE_X) + 'px',
//               height: BASE_HEIGHT * (1 - k * REDUCE_Y) + 'px',
//               rotationY: -k * ROT_FACTOR,
//               z: -k * Z_FACTOR,
//               ease: 'none',
//             },
//             '<'
//           );
//         }

//         // Text swap
//         tl.to(texts[i - 1], { opacity: 0, y: -40 }, '<');
//         tl.to(texts[i], { opacity: 1, y: 0 }, '<0.15');
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="bg-[#e7e9e8] ">
//       <div className="relative h-screen max-w-7xl mx-auto overflow-hidden">
//         <div className="absolute inset-0 flex items-center justify-center">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="stack-image absolute rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <img
//                 src={s.image}
//                 alt={s.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* TEXT */}
//         <div className="relative z-10 h-full grid grid-cols-12 items-center px-20">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="stack-text absolute inset-0 grid grid-cols-12 items-center"
//             >
//               <h2 className="col-span-3 text-6xl  font-cinzel">{s.title}</h2>
//               <div className="col-span-6" />
//               <p className="col-span-3 text-lg max-w-lg">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

// 'use client';

// import { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// const services = [
//   {
//     title: 'NextJs',
//     desc: 'Building fast, SEO-optimized, and scalable React applications with server-side rendering and static generation.',
//     image: '/nextjs.jpg',
//   },
//   {
//     title: 'NestJs',
//     desc: 'Developing structured, scalable, and maintainable backend APIs using TypeScript and modern architecture patterns.',
//     image: '/nest.jpg',
//   },
//   {
//     title: 'NodeJS',
//     desc: 'Creating high-performance backend services and RESTful APIs with secure authentication and database integration.',
//     image: '/node.webp',
//   },
//   {
//     title: 'PostgreSQl',
//     desc: 'Designing optimized relational databases with efficient queries, indexing, and scalable schema structures.',
//     image: '/postgre.jpg',
//   },
//   {
//     title: 'AWS',
//     desc: 'Deploying and managing cloud infrastructure with scalable, secure, and production-ready environments.',
//     image: '/aws.png',
//   },
//   {
//     title: 'Tailwind',
//     desc: 'Crafting responsive, modern, and pixel-perfect UI with utility-first CSS for rapid development.',
//     image: '/tailwind.png',
//   },
// ];

// export default function ServicesStackScroll() {
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const images = gsap.utils.toArray<HTMLElement>('.stack-image');
//       const texts = gsap.utils.toArray<HTMLElement>('.stack-text');

//       const GAP = 26;
//       const BASE_WIDTH = 400;
//       const BASE_HEIGHT = 300;
//       const REDUCE_X = 0.05;
//       const REDUCE_Y = 0.01;
//       const ROT_FACTOR = 10;
//       const Z_FACTOR = 80;

//       const VISIBLE_COUNT = 4;

//       const BELOW_Y = 600;
//       const BELOW_ROT_Y = ROT_FACTOR;
//       const BELOW_Z = -Z_FACTOR;

//       // Initial stack setup
//       gsap.set(images, {
//         y: (i) => -i * GAP,
//         width: (i) => BASE_WIDTH * (1 - i * REDUCE_X),
//         height: (i) => BASE_HEIGHT * (1 - i * REDUCE_Y),
//         rotationY: (i) => -i * ROT_FACTOR,
//         z: (i) => -i * Z_FACTOR,
//         zIndex: (i) => images.length - i,
//         opacity: (i) => (i < VISIBLE_COUNT ? 1 : 0),
//         pointerEvents: (i) => (i < VISIBLE_COUNT ? 'auto' : 'none'),
//       });

//       // Text setup
//       gsap.set(texts, { opacity: 0, y: 80 });
//       gsap.set(texts[0], { opacity: 1, y: 0 });

//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'center center',
//           end: `+=${services.length * 120}%`,
//           scrub: true,
//           pin: true,
//           anticipatePin: 1,
//         },
//       });

//       services.forEach((_, i) => {
//         if (i === 0) return;

//         // Move previous center card down & out
//         tl.to(
//           images[i - 1],
//           {
//             y: BELOW_Y,
//             width: BASE_WIDTH * 0.5,
//             height: BASE_HEIGHT * 0.5,
//             rotationY: BELOW_ROT_Y,
//             z: BELOW_Z,
//             ease: 'none',
//           },
//           '+=0.3'
//         );

//         // Bring current card to center
//         tl.to(
//           images[i],
//           {
//             y: 0,
//             width: BASE_WIDTH,
//             height: BASE_HEIGHT,
//             rotationY: 0,
//             z: 0,
//             ease: 'none',
//           },
//           '<'
//         );

//         // Shift upper cards
//         for (let j = i + 1; j < services.length; j++) {
//           const k = j - i;
//           tl.to(
//             images[j],
//             {
//               y: -k * GAP,
//               width: BASE_WIDTH * (1 - k * REDUCE_X),
//               height: BASE_HEIGHT * (1 - k * REDUCE_Y),
//               rotationY: -k * ROT_FACTOR,
//               z: -k * Z_FACTOR,
//               ease: 'none',
//             },
//             '<'
//           );
//         }

//         // Visibility window (ONLY 4 CARDS)
//         images.forEach((img, index) => {
//           const isVisible = index >= i && index < i + VISIBLE_COUNT;

//           tl.to(
//             img,
//             {
//               opacity: isVisible ? 1 : 0,
//               pointerEvents: isVisible ? 'auto' : 'none',
//               ease: 'none',
//             },
//             '<'
//           );
//         });

//         // Text swap
//         tl.to(texts[i - 1], { opacity: 0, y: -40 }, '<');
//         tl.to(texts[i], { opacity: 1, y: 0 }, '<0.15');
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section ref={sectionRef} className="">
//       <div className="relative h-screen max-w-7xl mx-auto overflow-hidden">
//         {/* IMAGE STACK */}
//         <div className="absolute inset-0 flex items-center justify-center">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="stack-image absolute rounded-2xl overflow-hidden shadow-2xl"
//             >
//               <img
//                 src={s.image}
//                 alt={s.title}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* TEXT */}
//         <div className="relative z-10 h-full grid grid-cols-12 items-center px-20">
//           {services.map((s, i) => (
//             <div
//               key={i}
//               className="stack-text absolute inset-0 grid grid-cols-12 items-center"
//             >
//               <h2 className="col-span-3 text-6xl font-cinzel">{s.title}</h2>
//               <div className="col-span-6" />
//               <p className="col-span-3 text-lg max-w-lg">{s.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: 'NextJs',
    desc: 'Building fast, SEO-optimized, and scalable React applications with server-side rendering and static generation.',
    image: '/nextjs.jpg',
  },
  {
    title: 'NestJs',
    desc: 'Developing structured, scalable, and maintainable backend APIs using TypeScript and modern architecture patterns.',
    image: '/nest.jpg',
  },
  {
    title: 'NodeJS',
    desc: 'Creating high-performance backend services and RESTful APIs with secure authentication and database integration.',
    image: '/node.webp',
  },
  {
    title: 'PostgreSQl',
    desc: 'Designing optimized relational databases with efficient queries, indexing, and scalable schema structures.',
    image: '/postgre.jpg',
  },
  {
    title: 'AWS',
    desc: 'Deploying and managing cloud infrastructure with scalable, secure, and production-ready environments.',
    image: '/aws.png',
  },
  {
    title: 'Tailwind',
    desc: 'Crafting responsive, modern, and pixel-perfect UI with utility-first CSS for rapid development.',
    image: '/tailwind.png',
  },
];

export default function ServicesStackScroll() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const images = gsap.utils.toArray<HTMLElement>('.stack-image');
      const texts = gsap.utils.toArray<HTMLElement>('.stack-text');

      const GAP = 26;

      // responsive image sizes
      const BASE_WIDTH = window.innerWidth < 768 ? 260 : 400;
      const BASE_HEIGHT = window.innerWidth < 768 ? 200 : 300;

      const REDUCE_X = 0.05;
      const REDUCE_Y = 0.01;
      const ROT_FACTOR = 10;
      const Z_FACTOR = 80;

      const VISIBLE_COUNT = 4;

      const BELOW_Y = 600;
      const BELOW_ROT_Y = ROT_FACTOR;
      const BELOW_Z = -Z_FACTOR;

      gsap.set(images, {
        y: (i) => -i * GAP,
        width: (i) => BASE_WIDTH * (1 - i * REDUCE_X),
        height: (i) => BASE_HEIGHT * (1 - i * REDUCE_Y),
        rotationY: (i) => -i * ROT_FACTOR,
        z: (i) => -i * Z_FACTOR,
        zIndex: (i) => images.length - i,
        opacity: (i) => (i < VISIBLE_COUNT ? 1 : 0),
      });

      gsap.set(texts, { opacity: 0, y: 80 });
      gsap.set(texts[0], { opacity: 1, y: 0 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: `+=${services.length * 120}%`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      services.forEach((_, i) => {
        if (i === 0) return;

        tl.to(
          images[i - 1],
          {
            y: BELOW_Y,
            width: BASE_WIDTH * 0.5,
            height: BASE_HEIGHT * 0.5,
            rotationY: BELOW_ROT_Y,
            z: BELOW_Z,
            ease: 'none',
          },
          '+=0.3'
        );

        // tl.to(
        //   images[i],
        //   {
        //     y: 0,
        //     width: BASE_WIDTH,
        //     height: BASE_HEIGHT,
        //     rotationY: 0,
        //     z: 0,
        //     ease: 'none',
        //   },
        //   '<'
        // );

        tl.to(
          images[i],
          {
            y: 0,
            width: BASE_WIDTH,
            height: BASE_HEIGHT,
            rotationY: 0,
            z: 0,
            opacity: 1,
            ease: 'none',
          },
          '<'
        );
        for (let j = i + 1; j < services.length; j++) {
          const k = j - i;
          // tl.to(
          //   images[j],
          //   {
          //     y: -k * GAP,
          //     width: BASE_WIDTH * (1 - k * REDUCE_X),
          //     height: BASE_HEIGHT * (1 - k * REDUCE_Y),
          //     rotationY: -k * ROT_FACTOR,
          //     z: -k * Z_FACTOR,
          //     ease: 'none',
          //   },
          //   '<'
          // );

          tl.to(
            images[j],
            {
              y: -k * GAP,
              width: BASE_WIDTH * (1 - k * REDUCE_X),
              height: BASE_HEIGHT * (1 - k * REDUCE_Y),
              rotationY: -k * ROT_FACTOR,
              z: -k * Z_FACTOR,
              opacity: 1,
              ease: 'none',
            },
            '<'
          );
        }

        tl.to(texts[i - 1], { opacity: 0, y: -40 }, '<');
        tl.to(texts[i], { opacity: 1, y: 0 }, '<0.15');
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef}>
      <div className="relative h-screen max-w-7xl mx-auto overflow-hidden">
        {/* IMAGE STACK */}
        <div className="absolute inset-0 flex items-center justify-center">
          {services.map((s, i) => (
            <div
              key={i}
              className="stack-image absolute rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* TEXT */}
        <div className="relative z-10 h-full grid grid-cols-1 md:grid-cols-12 items-center text-center px-6 md:px-20">
          {services.map((s, i) => (
            <div
              key={i}
              className="stack-text absolute inset-0 grid grid-cols-1 md:grid-cols-12 items-center gap-72 md:gap-0"
            >
              {/* TITLE */}
              <h2 className="text-3xl md:text-6xl font-cinzel md:col-span-3">
                {s.title}
              </h2>

              <div className="hidden md:block md:col-span-6" />

              {/* DESCRIPTION */}
              <p className="text-base md:text-lg max-w-md md:col-span-3">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
