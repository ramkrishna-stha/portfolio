'use client';

import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);
  const countersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ctx: any;

    const loadGsap = async () => {
      const { default: gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Split text animation for heading - longer scroll-linked animation
        const letters = headingRef.current?.querySelectorAll('.letter');

        if (letters) {
          gsap.fromTo(
            letters,
            {
              opacity: 0.15,
              y: 0,
            },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: headingRef.current,
                start: 'top 70%',
                end: 'bottom 20%',
                scrub: 2.5,
              },
            }
          );
        }

        // Badge animations
        const badges = badgesRef.current?.querySelectorAll('.badge');
        if (badges) {
          gsap.fromTo(
            badges,
            {
              opacity: 0,
              y: 30,
              scale: 0.9,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'back.out(1.7)',
              scrollTrigger: {
                trigger: badgesRef.current,
                start: 'top 80%',
              },
            }
          );
        }

        // Counter animations
        const counterItems =
          countersRef.current?.querySelectorAll('.counter-item');
        if (counterItems) {
          counterItems.forEach((item) => {
            const counter = item.querySelector(
              '.counter-number'
            ) as HTMLElement;
            const target = parseInt(
              counter?.getAttribute('data-target') || '0'
            );

            gsap.fromTo(
              item,
              {
                opacity: 0,
                y: 30,
              },
              {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                scrollTrigger: {
                  trigger: item,
                  start: 'top 85%',
                },
              }
            );

            // Counter number animation
            const counterObj = { value: 0 };
            gsap.to(counterObj, {
              value: target,
              duration: 4,
              delay: 1,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },

              onUpdate: function () {
                if (counter) {
                  counter.textContent = Math.ceil(counterObj.value).toString();
                }
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

  const words = [
    'I’m',
    'a',
    'passionate',
    'full-stack',
    'developer',
    'building',
    'scalable',
    'web',
    'applications',
    'and',
    'digital',
    'products.',
    'I',
    'create',
    'clean',
    'UIs,',
    'optimized',
    'APIs,',
    'and',
    'turn',
    'complex',
    'problems',
    'into',
    'simple,',
    'elegant',
    'solutions.',
  ];

  return (
    <section
      ref={sectionRef}
      className="min-h-[70vh]  flex justify-center items-center  pt-40  py-20 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <div className="">
          <h2
            ref={headingRef}
            className="text-3xl md:text-5xl font-medium font-manrope text-center  leading-tight"
          >
            {words.map((word, wordIndex) => (
              <span key={wordIndex} className="word inline-block mr-4">
                {word.split('').map((letter, letterIndex) => (
                  <span
                    key={letterIndex}
                    className="letter inline-block"
                    style={{ opacity: 0.15 }}
                  >
                    {letter}
                  </span>
                ))}
              </span>
            ))}
          </h2>
        </div>
      </div>
    </section>
  );
};

export default About;
