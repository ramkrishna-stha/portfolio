// 'use client';

// import type React from 'react';
// import Link from 'next/link';
// import { ArrowRight } from 'lucide-react';
// import { cn } from '@/lib/utils';

// interface MadeByShapeButtonProps {
//   href?: string;
//   onClick?: () => void;
//   children: React.ReactNode;
//   className?: string;
//   color?: string;
// }

// export function MadeByShapeButton({
//   href,
//   onClick,
//   children,
//   className,
//   color = '#008080',
// }: MadeByShapeButtonProps) {
//   const content = (
//     <div className="relative inline-flex items-center group isolate cursor-pointer p-5">
//       {/* SVG Filter for Liquid Gooey Effect */}
//       <svg className="absolute w-0 h-0 invisible" aria-hidden="true">
//         <defs>
//           <filter id="shapeFilter" colorInterpolationFilters="sRGB">
//             <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
//             <feColorMatrix
//               in="blur"
//               mode="matrix"
//               values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -12"
//               result="goo"
//             />
//             <feComposite in="SourceGraphic" in2="goo" operator="atop" />
//           </filter>
//         </defs>
//       </svg>

//       <div
//         className="relative inline-flex items-center"
//         style={{ filter: 'url(#shapeFilter)' }}
//       >
//         {/* Text Pill */}
//         <div
//           className="relative inline-flex items-center justify-center rounded-full py-2.5 px-6 transition-all duration-700 cubic-bezier(0.76, 0, 0.24, 1) min-h-13 z-10"
//           style={{ backgroundColor: color }}
//         >
//           <div className="relative overflow-hidden h-5.5">
//             <div className="flex flex-col transition-transform duration-700 cubic-bezier(0.76, 0, 0.24, 1) ">
//               <span className="text-white font-semibold text-[18px] tracking-tight leading-5.5 flex items-center h-5.5 whitespace-nowrap">
//                 {children}
//               </span>
//               {/* <span className="text-white font-semibold text-[18px] tracking-tight leading-5.5 flex items-center h-5.5 whitespace-nowrap">
//                 {children}
//               </span> */}
//             </div>
//           </div>
//         </div>

//         <div
//           className="shrink-0 w-10 h-10 -ml-2 flex items-center justify-center rounded-full
//              transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
//              group-hover:translate-x-4 z-0"
//           style={{ backgroundColor: color }}
//         >
//           <ArrowRight className="w-5 h-5 text-white -rotate-45" />
//         </div>
//       </div>
//     </div>
//   );

//   if (href) {
//     return (
//       <Link href={href} className={cn('inline-block outline-none', className)}>
//         {content}
//       </Link>
//     );
//   }

//   return (
//     <button
//       onClick={onClick}
//       className={cn(
//         'inline-block outline-none bg-transparent border-none p-0',
//         className
//       )}
//     >
//       {content}
//     </button>
//   );
// }

'use client';

import type React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MadeByShapeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

export function MadeByShapeButton({
  href,
  onClick,
  children,
  className,
  color = '#008080',
  type = 'button',
  ...props
}: MadeByShapeButtonProps) {
  const content = (
    <div className="relative inline-flex items-center group isolate cursor-pointer p-5">
      {/* SVG Filter for Liquid Gooey Effect */}
      <svg className="absolute w-0 h-0 invisible" aria-hidden="true">
        <defs>
          <filter id="shapeFilter" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -12"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div
        className="relative inline-flex items-center"
        style={{ filter: 'url(#shapeFilter)' }}
      >
        {/* Text Pill */}
        <div
          className="relative inline-flex items-center justify-center rounded-full py-2.5 px-6 transition-all duration-700 cubic-bezier(0.76, 0, 0.24, 1) min-h-13 z-10"
          style={{ backgroundColor: color }}
        >
          <div className="relative overflow-hidden h-5.5">
            <div className="flex flex-col transition-transform duration-700 cubic-bezier(0.76, 0, 0.24, 1)">
              <span className="text-white font-semibold text-[18px] tracking-tight leading-5.5 flex items-center h-5.5 whitespace-nowrap">
                {children}
              </span>
            </div>
          </div>
        </div>

        <div
          className="shrink-0 w-10 h-10 -ml-2 flex items-center justify-center rounded-full
             transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
             group-hover:translate-x-4 z-0"
          style={{ backgroundColor: color }}
        >
          <ArrowRight className="w-5 h-5 text-white -rotate-45" />
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className={cn('inline-block outline-none', className)}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        'inline-block outline-none bg-transparent border-none p-0',
        className
      )}
      {...props}
    >
      {content}
    </button>
  );
}
