'use client';
import type { Metadata } from 'next';
import './globals.css';
import { Cinzel_Decorative, Manrope, Pacifico } from 'next/font/google';
import Lenis from 'lenis';
import { useEffect } from 'react';
const cinzel = Cinzel_Decorative({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-cinzel',
});

export const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800'],
});
export const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico',
});
// export const metadata: Metadata = {
//   title: 'Ram - Developer',
//   description:
//     'Product Design, Product Management and Webflow Development. I design thoughtful user experiences that piece together a big picture with simple, impactful and shippable solutions focused on the customer',
// };

import { Righteous } from 'next/font/google';

const righteous = Righteous({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-righteous',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <html lang="en">
      <body
        className={`${cinzel.variable} ${righteous.variable} ${manrope.variable} ${pacifico.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
