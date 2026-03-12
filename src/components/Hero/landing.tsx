'use client';

import { useRive } from '@rive-app/react-canvas';

export default function Home() {
  const { RiveComponent } = useRive({
    src: '/vehicles.riv',
    autoplay: true,
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-6">Hi, I'm Ram 👋</h1>
      <p className="mb-10">This is my live, interactive Rive portfolio!</p>
      <div className="w-80 h-80">
        <RiveComponent className="w-full h-full" />
      </div>
    </div>
  );
}
