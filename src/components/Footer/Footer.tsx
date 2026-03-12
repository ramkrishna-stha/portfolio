import { div } from 'framer-motion/client';
import React from 'react';
import RobotCanvas from './RobotCanvas';

const Footer: React.FC = () => {
  return (
    <div className="bg-[#e7e9e8]">
      <RobotCanvas />
      <div className="font-cinzel flex justify-center text-[200px] text-black">
        <span>R</span>
        <span>A</span>
        <span>M</span>
      </div>
    </div>
  );
};

export default Footer;
