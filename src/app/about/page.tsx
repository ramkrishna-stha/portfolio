'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import LeftSidebar from '@/components/Navigation/LeftSidebar';

export default function About() {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header animation
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out', delay: 0.3 }
      );
    }

    // Content animation
    if (contentRef.current) {
      const elements = contentRef.current.querySelectorAll('p, a');
      gsap.fromTo(
        elements,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.8,
        }
      );
    }
  }, []);

  return (
    <div className="flex min-h-screen">
      <LeftSidebar />
      {/* Left Content */}
      <div className="flex-1 max-w-4xl">
        <h1
          ref={headerRef}
          className="header-large text-gray-800 mb-12"
          style={{ fontSize: 'clamp(3rem, 8vw, 8rem)' }}
        >
          About
        </h1>

        <div ref={contentRef} className="space-y-8">
          <p className="text-4xl font-cormorant text-gray-800 leading-relaxed">
            I'm Lauren. A designer, maker and problem solver.
          </p>

          <p className="description-text text-gray-700">
            The cusp of art and technology has always fascinated me and I've
            never been afraid to just jump in and give it a go, whether it's
            Paint, Photoshop, Sketch or CSS. I've been designing with computers
            since the day I first opened Microsoft Paint.
          </p>

          <p className="description-text text-gray-700">
            Fast forward to 2023 and I've tried it all, from Digital Campaign
            Design and Flash Actionscript to Web Design, Animation, HTML/CSS,
            No-Code Web Development, Product Design and Product Management.
            Everything I have done, small or big, has been a vital stepping
            stone for where I am today.
          </p>

          <p className="description-text text-gray-700">
            What excites me most about being a Product Designer is being able to
            design and create things that have purpose and solve real problems.
            It goes beyond designing buttons and websites and involves having a
            passion for designing experiences and solutions that help people,
            whether it's helping them make better videos, market themselves
            online, or buy something online. Leaning into customer insight and
            understanding their needs, finding the right problems to solve,
            delivering solutions as quickly as possible, learning from those and
            then iterating and improving that value over time is the key to
            great product design.
          </p>

          <p className="description-text text-gray-700">
            This is one of my favourite quotes (by Peter Drucker):
          </p>

          <blockquote className="text-3xl font-cormorant text-gray-800 leading-relaxed my-8">
            "There is nothing so useless as doing efficiently that which should
            not be done at all."
          </blockquote>

          <p className="description-text text-gray-700">
            This resonates so deeply with me because I have no desire to make
            pretty things just for the sake of it. Some people love that! But
            it's not for me. I only want to make, design or build ideas and
            products that are real, that matter and have an impact in the world.
          </p>

          <div className="pt-8">
            <h2 className="text-2xl font-cormorant text-gray-800 mb-6">
              EXPERIENCE
            </h2>

            <p className="description-text text-gray-700 mb-4">
              - Degree in Brand Communications
              <br />- 15 years experience in Digital Design, Web Development,
              Advertising and Product Development
            </p>

            <p className="description-text text-gray-700 mb-4">
              Within those 15 years, I have:
            </p>

            <ul className="description-text text-gray-700 space-y-2 ml-4">
              <li>- 12 years experience in Web Design</li>
              <li>- 10 years experience in Software Design</li>
              <li>- 3 years experience in Front-end Web Development</li>
              <li>- 5 years experience in Webflow Development</li>
              <li>- 1 year experience in Framer Development</li>
              <li>- 4 years experience in Product Management</li>
            </ul>
          </div>

          <div className="pt-8">
            <h2 className="text-2xl font-cormorant text-gray-800 mb-6">
              SKILLS
            </h2>

            <p className="description-text text-gray-700">
              UI/UX Design / Strategy / Product Management / User Research /
              Agile Methodologies / Collaboration / Design Sprints / Design
              Systems / HTML and CSS / CMS Design & Architecture / Webflow
              Development / Framer Development / Photography / Graphic Design
            </p>
          </div>

          <div className="pt-8 flex space-x-4">
            <a
              href="https://cdn.prod.website-files.com/5343bca08039b78d170002c4/620953e18255891c95514868_My%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-montserrat text-sm hover:bg-gray-700 transition-colors"
            >
              My CV
            </a>
          </div>

          <div className="pt-8">
            <h2 className="text-2xl font-cormorant text-gray-800 mb-6">
              KUDOS
            </h2>

            <p className="description-text text-gray-700">
              Most of what is in this portfolio is team work, it's very rare
              these days to make anything great all on your own. I have only
              included work that I had a large contribution to, but whether it's
              design, ideas, UX, process, engineering, mentorship, advice or
              creative direction, the following people have influenced my growth
              and career path in a massive way:{' '}
              <a
                href="http://shawnroos.com/"
                className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
              >
                Shawn Roos
              </a>
              ,{' '}
              <a
                href="https://github.com/wayneashleyberry"
                className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
              >
                Wayne Berry
              </a>
              ,{' '}
              <a
                href="https://dribbble.com/Betraydan"
                className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
              >
                Daniel Klopper
              </a>
              ,{' '}
              <a
                href="https://www.userx.co.za/"
                className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
              >
                Michael Thorne
              </a>
              ,{' '}
              <a
                href="https://www.linkedin.com/in/kobusbrummer"
                className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
              >
                Kobus Brummer
              </a>
              ,{' '}
              <a
                href="https://pascal-righini.format.com/"
                className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
              >
                Pascal Righini
              </a>
              ,{' '}
              <a
                href="https://readymag.com/u69493478/foxxyles/"
                className="link-hover text-gray-800 font-medium underline decoration-1 underline-offset-4"
              >
                Jade Scully
              </a>
              . THANK YOU.
            </p>
          </div>

          <div className="pt-8">
            <a
              href="/contact"
              className="bg-gray-800 text-white px-8 py-3 rounded-full font-montserrat text-sm hover:bg-gray-700 transition-colors"
            >
              Contact me
            </a>
          </div>
        </div>
      </div>

      {/* Right side - Profile image area */}
      <div className="flex-1 flex items-start justify-end pt-32">
        <div className="w-80 h-96 relative">
          <img
            src="https://ext.same-assets.com/1100225730/724329680.jpeg"
            alt="Lauren Waller"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
