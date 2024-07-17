'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="md:flex-1 bg-white bg-clip-padding backdrop-filter z-30 backdrop-blur-sm bg-opacity-30 flex flex-col items-center justify-center text-center relative mx-2 p-4 md:mx-6 md:my-16 md:ml-56 border border-black shadow-lg">
      <motion.div
        className="flex items-center justify-center w-full mb-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <Image
          src="/logo.svg"
          alt="Ghibli Logo"
          width={1920}
          height={1080}
          quality={100}
          className="object-cover md:w-1/2"
        />
      </motion.div>

      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-3 text-left"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to Studio Ghibli
      </motion.h1>
      <motion.p 
        className="text-md text-gray-900 mb-6 text-left"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover the magical world of Studio Ghibli. Explore our movies, learn about us, and more!
      </motion.p>
      <motion.div 
        className="flex space-x-3 md:justify-center justify-start mr-14 md:mr-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a 
          href="#movies" 
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg border hover:bg-blue-800 transition"
          whileHover={{ scale: 1.1 }}
        >
          View Movies
        </motion.a>
        <motion.a 
          href="#about" 
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg border hover:bg-green-800 transition"
          whileHover={{ scale: 1.1 }}
        >
          About Us
        </motion.a>
      </motion.div>
    </div>
  );
};

export default HeroSection;
