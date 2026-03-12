// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import gsap from 'gsap';

// const menuItems = [
//   { label: 'Work', link: '/work', num: '01' },
//   { label: 'Services', link: '/services', num: '02' },
//   { label: 'About', link: '/about', num: '03' },
//   { label: 'Insights', link: '/blog', num: '04' },
//   { label: 'Contact', link: '/lets-talk', num: '05' },
// ];

// export default function NavbarExactReveal() {
//   const [open, setOpen] = useState(false);

//   const menuRef = useRef<HTMLDivElement | null>(null);
//   const infoRef = useRef<HTMLDivElement | null>(null);

//   const lineTop = useRef<HTMLDivElement | null>(null);
//   const lineMid = useRef<HTMLDivElement | null>(null);
//   const lineBot = useRef<HTMLDivElement | null>(null);

//   const tl = useRef<gsap.core.Timeline | null>(null);

//   // Lock scroll when menu is open
//   useEffect(() => {
//     document.body.style.overflow = open ? 'hidden' : 'auto';
//   }, [open]);

//   useEffect(() => {
//     if (!menuRef.current) return;

//     tl.current = gsap.timeline({ paused: true });

//     tl.current
//       // 1) Hamburger → X
//       .to(lineTop.current, {
//         y: 8,
//         duration: 0.2,
//         ease: 'power3.out',
//       })
//       .to(lineBot.current, { y: -8, duration: 0.2, ease: 'power3.out' }, '<')
//       .to(lineMid.current, { opacity: 0, duration: 0.05 }, '<')
//       .to(
//         lineTop.current,
//         { rotate: 45, duration: 0.25, ease: 'power3.out' },
//         '<0.05'
//       )
//       .to(
//         lineBot.current,
//         { rotate: -45, duration: 0.25, ease: 'power3.out' },
//         '<'
//       )

//       // 2) Circular Reveal
//       .to(
//         menuRef.current,
//         {
//           clipPath: 'circle(150% at 100% 0%)',
//           duration: 0.85,
//           ease: 'power4.out',
//         },
//         '<0.1'
//       )

//       // 3) Reveal info panel instantly (no animation on text)
//       .set(infoRef.current, { opacity: 1 }, '-=0.1');
//   }, []);

//   const toggleMenu = () => {
//     if (!tl.current) return;
//     if (open) tl.current.reverse();
//     else tl.current.play();
//     setOpen(!open);
//   };

//   return (
//     <>
//       {/* TOP BAR */}
//       <nav className="absolute top-0 right-0 w-full flex justify-end items-center px-10 py-8 z-50">
//         <button
//           onClick={toggleMenu}
//           className="w-12 h-12 flex items-center justify-center relative"
//         >
//           <div className="space-y-1">
//             <div ref={lineTop} className="w-8 h-[2px] bg-black"></div>
//             <div ref={lineMid} className="w-8 h-[2px] bg-black"></div>
//             <div ref={lineBot} className="w-8 h-[2px] bg-black"></div>
//           </div>
//         </button>
//       </nav>

//       {/* FULL SCREEN MENU */}
//       <div
//         ref={menuRef}
//         className="fixed inset-0 bg-white z-40 pointer-events-auto"
//         style={{ clipPath: 'circle(0% at 100% 0%)' }}
//       >
//         <div className="flex h-full w-full px-20 py-20 relative">
//           {/* LEFT NAV */}
//           <div className="w-2/3 flex flex-col justify-center gap-6 relative">
//             <ul className="space-y-4">
//               {menuItems.map((item, i) => (
//                 <li
//                   key={i}
//                   className="relative text-[4vw] font-bold leading-none cursor-pointer text-black"
//                 >
//                   <a href={item.link}>{item.label}</a>
//                   <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm opacity-40">
//                     {item.num}
//                   </span>
//                   <div className="absolute left-0 bottom-1 h-1 w-0 bg-black group-hover:w-full transition-all duration-500"></div>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* RIGHT INFO */}
//           <div
//             ref={infoRef}
//             className="w-1/3 flex flex-col justify-center gap-6 text-black opacity-0"
//           >
//             <a href="mailto:hello@baunfire.com" className="underline">
//               hello@baunfire.com
//             </a>
//             <a href="tel:(408)899-8998" className="underline">
//               (408) 899-8998
//             </a>

//             <div className="text-gray-800">
//               75 E Santa Clara St, Ste 1425 <br />
//               San Jose, California 95113
//             </div>

//             <div className="flex gap-5 text-xl pt-4">
//               <span>IG</span>
//               <span>FB</span>
//               <span>TW</span>
//               <span>IN</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const menuItems = [
  { label: 'Work', link: '/work', num: '01' },
  { label: 'Services', link: '/services', num: '02' },
  { label: 'About', link: '/about', num: '03' },
  { label: 'Insights', link: '/blog', num: '04' },
  { label: 'Contact', link: '/lets-talk', num: '05' },
];

export default function NavbarCircleExact() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const infoRef = useRef<HTMLDivElement | null>(null);

  const lineTop = useRef<HTMLDivElement | null>(null);
  const lineMid = useRef<HTMLDivElement | null>(null);
  const lineBot = useRef<HTMLDivElement | null>(null);

  const tl = useRef<gsap.core.Timeline | null>(null);

  // Lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  useEffect(() => {
    if (!menuRef.current) return;

    // Start menu hidden
    gsap.set(menuRef.current, { clipPath: 'circle(0% at 100% 0%)' });
    gsap.set(infoRef.current, { opacity: 0 });

    tl.current = gsap.timeline({ paused: true });

    // Hamburger to X
    tl.current
      .to(lineTop.current, { y: 8, duration: 0.2, ease: 'power3.out' })
      .to(lineBot.current, { y: -8, duration: 0.2, ease: 'power3.out' }, '<')
      .to(lineMid.current, { opacity: 0, duration: 0.05 }, '<')
      .to(
        lineTop.current,
        { rotate: 45, duration: 0.25, ease: 'power3.out' },
        '<0.05'
      )
      .to(
        lineBot.current,
        { rotate: -45, duration: 0.25, ease: 'power3.out' },
        '<'
      )

      // Circle reveal
      .to(
        menuRef.current,
        {
          clipPath: 'circle(150% at 100% 0%)',
          duration: 0.85,
          ease: 'power4.out',
        },
        '<0.05'
      )

      // Show info panel instantly after reveal
      .set(infoRef.current, { opacity: 1 }, '-=0.1');
  }, []);

  const toggleMenu = () => {
    if (!tl.current) return;

    if (open) {
      tl.current.reverse(); // Circle shrinks back to hamburger
    } else {
      tl.current.play(); // Circle expands
    }
    setOpen(!open);
  };

  return (
    <>
      {/* Navbar top bar */}
      <nav className="absolute top-0 right-0 w-full flex justify-end items-center px-10 py-8 z-50">
        <button
          onClick={toggleMenu}
          className="w-12 h-12 flex items-center justify-center relative"
        >
          <div className="space-y-1">
            <div ref={lineTop} className="w-8 h-[2px] bg-black"></div>
            <div ref={lineMid} className="w-8 h-[2px] bg-black"></div>
            <div ref={lineBot} className="w-8 h-[2px] bg-black"></div>
          </div>
        </button>
      </nav>

      {/* Fullscreen menu */}
      <div
        ref={menuRef}
        className="fixed inset-0 bg-white z-40 pointer-events-auto"
        style={{ clipPath: 'circle(0% at 100% 0%)' }}
      >
        <div className="flex h-full w-full px-20 py-20 relative">
          {/* LEFT NAV */}
          <div className="w-2/3 flex flex-col justify-center gap-6 relative">
            <ul className="space-y-4">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  className="relative text-[4vw] font-bold leading-none cursor-pointer text-black"
                >
                  <a href={item.link}>{item.label}</a>
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 text-sm opacity-40">
                    {item.num}
                  </span>
                  <div className="absolute left-0 bottom-1 h-1 w-0 bg-black group-hover:w-full transition-all duration-500"></div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT INFO */}
          <div
            ref={infoRef}
            className="w-1/3 flex flex-col justify-center gap-6 text-black opacity-0"
          >
            <a href="mailto:hello@baunfire.com" className="underline">
              hello@baunfire.com
            </a>
            <a href="tel:(408)899-8998" className="underline">
              (408) 899-8998
            </a>

            <div className="text-gray-800">
              75 E Santa Clara St, Ste 1425 <br />
              San Jose, California 95113
            </div>

            <div className="flex gap-5 text-xl pt-4">
              <span>IG</span>
              <span>FB</span>
              <span>TW</span>
              <span>IN</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
