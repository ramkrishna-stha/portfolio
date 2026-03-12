// 'use client';

// import { useEffect, useRef } from 'react';
// import { gsap } from 'gsap';
// import MainNavigation from '@/components/Navigation/MainNavigation';
// import LeftSidebar from '@/components/Navigation/LeftSidebar';

// export default function Home() {
//   const headerRef = useRef<HTMLHeadingElement>(null);
//   const descriptionRefs = useRef<HTMLParagraphElement[]>([]);

//   useEffect(() => {
//     // Header animation
//     if (headerRef.current) {
//       gsap.fromTo(
//         headerRef.current,
//         { y: 100, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
//       );
//     }

//     // Description animations
//     descriptionRefs.current.forEach((ref, index) => {
//       if (ref) {
//         gsap.fromTo(
//           ref,
//           { y: 50, opacity: 0 },
//           {
//             y: 0,
//             opacity: 1,
//             duration: 1,
//             ease: 'power2.out',
//             delay: 0.6 + index * 0.2,
//           }
//         );
//       }
//     });
//   }, []);

//   const addToDescriptionRefs = (el: HTMLParagraphElement | null) => {
//     if (el && !descriptionRefs.current.includes(el)) {
//       descriptionRefs.current.push(el);
//     }
//   };

//   return (
//     <>
//       <div className="flex flex-col lg:flex-row h-screen overflow-hidden px-32 ">
//         <div className="flex-1 flex flex-col justify-center  ">
//           <div className="mb-8 max-w-[350px]">
//             <h1
//               ref={headerRef}
//               className="header-large text-gray-800 mb-6 md:mb-8"
//             >
//               Ram
//             </h1>

//             <p
//               ref={addToDescriptionRefs}
//               className="description-text text-gray-700  mb-4 md:mb-6"
//             >
//               Software Engineer / Full Stack Developer
//             </p>

//             <p
//               ref={addToDescriptionRefs}
//               className="description-text text-gray-700"
//             >
//               Currently working full-time as a Full Stack Developer at{' '}
//               <a
//                 href=""
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
//               >
//                 The Doorway Technology
//               </a>
//             </p>
//           </div>
//         </div>

//         <div className="flex-1 flex items-center justify-center lg:justify-start lg:pl-16 mt-8 lg:mt-0">
//           <MainNavigation />
//         </div>

//         <div>
//           <LeftSidebar />
//         </div>
//       </div>
//     </>
//   );
// }

import About from '@/components/About/About';
import ContactForm from '@/components/Contact/Contact';
import Cursor from '@/components/Cursor/Cursor';
import SpiderCursor from '@/components/Cursor/Spider-Cursor';
import Footer from '@/components/Footer/Footer';
import RobotCanvas from '@/components/Footer/RobotCanvas';
import Hero from '@/components/Hero/Hero02';
import { ProjectsSection } from '@/components/Project/Project';
import Project2 from '@/components/Project/Project2';
import Project3 from '@/components/Project/Project3';
import Project4 from '@/components/Project/Project5';
import Skills from '@/components/Skills/Skills';

const page = () => {
  return (
    <div>
      <SpiderCursor />
      <Hero />
      <About />
      {/* <Footer /> */}
      {/* <About /> */}
      <Skills />
      <Project4 />

      <ContactForm />
      <Footer />
      {/* <Project2 /> */}
      {/* <ProjectsSection /> */}
    </div>
  );
};

export default page;
