'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OverlayEffects = () => {
  return (
    <div>
        <motion.div initial={{ opacity: 0.4 }} animate={{ opacity: 0.7 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100vw' }} // Move from left to right across the screen
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className='fixed bottom-0 left-0'
      >
        <Image src="/cloud.png" alt="Mist" height={800} width={800} quality={100} className='opacity-30 blur-lg' />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100vw' }} // Move from left to right across the screen
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className='fixed bottom-0 right-0'
      >
        <Image src="/cloud.png" alt="Mist" height={800} width={800} quality={100} className='opacity-40 blur-xl' />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: '100vw' }} // Move from left to right across the screen
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className='fixed top-0 left-0'
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
  <Image src="/land.png" alt="" height={800} width={800} quality={100} className='w-full opacity-40 z-0' />
        </motion.div>
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0 }}
            className='fixed bottom-20 md:bottom-44 right-0'
        >
        <Image src="/totoro3.png" alt="" height={800} width={800} quality={100} className='md:w-56 w-48 opacity-30 md:opacity-80 z-50' />
        </motion.div>
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0 }}
            className='fixed top-20 left-0 md:left-44'
        >
        <Image src="/fly.png" alt="" height={800} width={800} quality={100} className='w-80 opacity-80 z-50 hidden md:block' />
        </motion.div>
    </div>
  );
};

export default OverlayEffects;
