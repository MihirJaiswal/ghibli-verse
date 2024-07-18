// src/app/page.tsx
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Sidebar from './Sidebar';
import HeroSection from './HeroSection';
import OverlayEffects from './OverlayEffects';

const LandingPage = () => {
  return (
    <div className="relative flex min-h-screen w-full">
      <div className="fixed bottom-0 h-10 z-40 w-full bg-yellow-300 bg-clip-padding backdrop-filter bg-opacity-5 text-white shadow-md hidden md:block border-t border-gray-600"></div>
      <div className="fixed top-0 h-10 z-40 w-full bg-yellow-300 bg-clip-padding backdrop-filter bg-opacity-5 text-white shadow-md hidden md:block border-b border-gray-600"></div>
      {/* Background Overlays */}
      <HeroSection/>
      <OverlayEffects/>
    </div>
  );
};

export default LandingPage;
