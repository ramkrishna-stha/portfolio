'use client';

import { useRouter, usePathname } from 'next/navigation';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const LeftSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const isHome = pathname === '/';
  const linkClass =
    pathname === '/work' || pathname === '/contact'
      ? 'text-pink-200'
      : 'text-gray-600';

  return (
    <div className="fixed left-0 top-0 z-10 h-full flex flex-col justify-between py-4 md:py-8 pl-3 md:pl-6">
      {/* Social Links */}
      <div className="flex flex-col space-y-3 md:space-y-6 text-xs md:text-sm font-montserrat tracking-wide">
        <div className="flex flex-col space-y-2 md:space-y-3">
          <a
            href="https://www.linkedin.com/in/lauren-waller-46a95317/"
            target="_blank"
            rel="noopener noreferrer"
            className={`link-hover ${linkClass} hover:opacity-70 transition-opacity`}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/waller_texas"
            target="_blank"
            rel="noopener noreferrer"
            className={`link-hover ${linkClass} hover:opacity-70 transition-opacity`}
          >
            <FaInstagram />
          </a>
          <a
            href="https://dribbble.com/waller_texas"
            target="_blank"
            rel="noopener noreferrer"
            className={`link-hover ${linkClass} hover:opacity-70 transition-opacity`}
          >
            <FaFacebook />
          </a>
        </div>

        {/* Home Link for non-home pages */}
        {!isHome && (
          <div className="pt-2 md:pt-4">
            <button
              onClick={() => router.push('/')}
              className={`link-hover ${linkClass} hover:opacity-70 transition-opacity cursor-pointer`}
            >
              HOME
            </button>
          </div>
        )}
      </div>

      {/* Copyright */}
      <div className={`text-xs font-montserrat ${linkClass}`}>©/2024</div>

      {/* Vertical text for navigation - hidden on mobile */}
      <div className="hidden md:block absolute left-12 lg:left-16 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
        <span
          className={`text-xs font-montserrat tracking-[0.2em] ${linkClass}`}
        >
          {isHome ? 'PORTFOLIO' : pathname.slice(1).toUpperCase()}
        </span>
      </div>
    </div>
  );
};

export default LeftSidebar;
