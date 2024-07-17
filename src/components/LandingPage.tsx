// src/app/page.tsx
'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import Sidebar from './Sidebar';

const LandingPage = () => {
  return (
    <div className="relative flex min-h-screen w-full bg-bg1 bg-cover bg-center bg-no-repeat">
      <div className="fixed bottom-0 h-10 z-40 w-full bg-yellow-300 bg-clip-padding backdrop-filter bg-opacity-5 text-white shadow-md hidden md:block border-t border-gray-600"></div>
      <div className="fixed top-0 h-10 z-40 w-full bg-yellow-300 bg-clip-padding backdrop-filter bg-opacity-5 text-white shadow-md hidden md:block border-b border-gray-600"></div>
      {/* Background Overlays */}
      <div className="fixed inset-0 h-screen bg-bg2 bg-cover bg-center opacity-80 blur-sm pointer-events-none flex items-center justify-center"></div>
      <div className="fixed inset-0 h-screen bg-blue-500 bg-cover bg-center opacity-30 blur-sm pointer-events-none flex items-center justify-center"></div>

      <Sidebar />
      <div className="md:flex-1 bg-white/50 flex flex-col items-center justify-center text-cente relative z-10 mx-2 p-4 md:mx-6 md:my-16  md:ml-56 border border-black shadow-lg">
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
    className="text-4xl font-bold text-gray-900 mb-3"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    Welcome to Studio Ghibli
  </motion.h1>
  <motion.p 
    className="text-md text-gray-900 mb-6"
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
<motion.div initial={{ opacity: 0.4 }} animate={{ opacity: 0.7 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100vw' }} // Move from left to right across the screen
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }} // Adjust duration as needed
        className='fixed bottom-0 left-0'
      >
        <Image src="/cloud.png" alt="Mist" height={800} width={800} quality={100} className='opacity-30 blur-lg' />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100vw' }} // Move from left to right across the screen
        transition={{ duration: 20, repeat: Infinity, ease: "linear", }} // Adjust duration as needed
        className='fixed bottom-0 right-0'
      >
        <Image src="/cloud.png" alt="Mist" height={800} width={800} quality={100} className='opacity-40 blur-xl' />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100vw' }} // Move from left to right across the screen
        transition={{ duration: 20, repeat: Infinity, ease: "linear", }} 
        className='fixed top-0 right-0'
      >
        <Image src="/cloud2.png" alt="Mist" height={800} width={800} quality={100} className='opacity-40 blur-lg' />
      </motion.div>
    </motion.div>
    <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0 }}
                    className='fixed bottom-0 right-0'
                >
                    <Image src="/land.png" alt="" height={800} width={800} quality={100} className='w-full opacity-30 z-0' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0 }}
                    className='fixed bottom-28 right-12'
                >
                    <Image src="/totoro3.png" alt="" height={800} width={800} quality={100} className='w-full opacity-40 z-50' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0 }}
                    className='fixed bottom-0 left-0'
                >
                    <Image src="/land2.png" alt="" height={800} width={800} quality={100} className='w-full opacity-30 z-10' />
                </motion.div>
    </div>
  );
};

export default LandingPage;
