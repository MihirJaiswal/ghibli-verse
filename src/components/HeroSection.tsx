'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import SparklesText from './ui/sparkles-text';
import TextShimmer from './ui/text-shimmer';
import { FaArrowRight } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div className="md:flex-1 bg-white bg-clip-padding backdrop-filter bg-opacity-40 flex flex-col items-center justify-center text-center relative mx-2 p-4 md:mx-6 md:my-16 border border-black shadow-lg">
      {/* Top Right Corner Decoration */}
      <div className='absolute top-4 right-4 z-10'>
        <Image src='/badge.svg' alt='badge' width={500} height={500} className='w-32 h-auto absolute md:top-4 top-3' />
        <motion.div
          className="relative bg-black rounded-full flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <Image src="/log.png" alt="Sparkle Icon" width={500} height={500} className='w-12 md:w-20 h-auto' />
        </motion.div>
      </div>

      {/* Inner Border */}
      <div className="absolute inset-2 md:border-2 border-dashed border-black z-10 pointer-events-none"></div>

      {/* Background Elements */}
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-50 z-0' 
        style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 31% 100%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      ></motion.div>
      
      {/* Logo */}
      <motion.div
        className="flex items-center justify-center w-full mb-6 relative z-20"
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

      {/* Heading */}
      <motion.h1 
        className="text-4xl font-bold text-gray-900 mb-3 text-left relative z-50"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <SparklesText text="Welcome to Studio Ghibli" sparklesCount={3} className='text-4xl' />
      </motion.h1>

      {/* Description */}
      <motion.p 
        className="text-md text-gray-900 mb-6 text-left relative z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Discover the magical world of Studio Ghibli. Explore our movies, learn about us, and more!
      </motion.p>

      {/* Buttons */}
      <motion.div 
        className="flex space-x-3 md:justify-center justify-start mr-14 md:mr-0 relative z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <motion.a 
          href="#movies" 
          className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg border hover:bg-blue-800 transition relative"
          whileHover={{ scale: 1.1 }}
        >
          View Movies
        </motion.a>
        <motion.a 
          href="#about" 
          className="px-4 py-2 bg-green-600 text-white font-semibold rounded-lg border hover:bg-green-800 transition relative"
          whileHover={{ scale: 1.1 }}
        >
          About Us
        </motion.a>
      </motion.div>

      {/* Inspirational Quote */}
      <motion.div 
        className="mt-8 text-gray-800 italic relative z-50 hidden md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
         <div className='backdrop-filter-[12px] relative inline-flex h-full md:h-7 items-center justify-between rounded-full border border-white/5 bg-white/20 px-3 text-xs text-white transition-all ease-in hover:cursor-pointer hover:bg-white/20 group gap-1 translate-y-[-1rem] animate-fade-in'>
          <TextShimmer className="inline-flex items-center justify-center relative">
            <span className='text-gray-800'>&quot;✨ Experience the magic of storytelling and imagination with us.&quot;</span>{" "}
            <FaArrowRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5 text-gray-700" />
          </TextShimmer>
         </div>
      </motion.div>
      <motion.div 
        className="mt-8 text-gray-900 italic relative z-50 md:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <p>&quot;✨ Experience the magic of storytelling and imagination with us.&quot;</p>
      </motion.div>
    </div>
  );
};

export default HeroSection;
