// src/components/HeroMovie.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface HeroMovieProps {
  title: string;
  description: string;
  backgroundImage: string;
  ctaLink: string;
  ctaText: string;
}

const HeroMovie: React.FC<HeroMovieProps> = ({ title, description, backgroundImage, ctaLink, ctaText }) => {
  return (
    <div className="relative md:w-[84%] h-[82vh] bg-black/40 border border-white md:ml-56 mt-28 md:mt-16 flex items-center justify-center mx-2">
      <Image
        src={backgroundImage}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="opacity-60"
      />
      <div className="absolute inset-0 bg-white bg-opacity-30 blur"></div>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-900 mb-8 max-w-2xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          {description}
        </motion.p>
        <motion.a
          href={ctaLink}
          className="px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
        >
          {ctaText}
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroMovie;
