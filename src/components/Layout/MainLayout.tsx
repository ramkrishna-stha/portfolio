'use client';

import { usePathname } from 'next/navigation';
import BackgroundElements from '../Background/BackgroundElements';
import LeftSidebar from '../Navigation/LeftSidebar';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const pathname = usePathname();

  // Determine background theme based on route
  const getBackgroundClass = () => {
    switch (pathname) {
      case '/work':
      case '/contact':
        return 'bg-blue';
      case '/':
      case '/about':
      default:
        return 'bg-nude';
    }
  };

  return (
    <div
      className={`min-h-screen ${getBackgroundClass()} relative overflow-x-hidden`}
    >
      <BackgroundElements />
      <LeftSidebar />

      <div className="relative z-10 min-h-screen">
        <div className="flex min-h-screen">
          {/* Main content area */}
          <div className="w-full pl-16 md:pl-20 lg:pl-24 pr-4 md:pr-6 lg:pr-8 py-8 md:py-12 lg:py-16">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
