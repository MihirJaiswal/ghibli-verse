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
      {/* Background Overlays */}
      <OverlayEffects/>
      <HeroSection/>
   
    </div>
  );
};

export default LandingPage;
