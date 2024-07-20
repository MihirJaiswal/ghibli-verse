'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OverlayEffects = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Animated Clouds */}
      <motion.div
        className='fixed bottom-0 left-0 '
        initial={{ opacity: 0.3, x: '-100vw' }}
        animate={{ opacity: [0.3, 0.5, 0.3], x: '100vw' }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Image src="/cloud.png" alt="Mist" height={800} width={800} quality={100} className='opacity-20 blur-xl' />
      </motion.div>
      <motion.div
        className='fixed bottom-0 right-0 '
        initial={{ opacity: 0.4, x: '-100vw' }}
        animate={{ opacity: [0.4, 0.6, 0.4], x: '100vw' }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <Image src="/cloud.png" alt="Mist" height={800} width={800} quality={100} className='opacity-20 blur-xl' />
      </motion.div>
      <motion.div
        className='fixed top-0 left-0 '
        initial={{ opacity: 0.4, x: '-100vw' }}
        animate={{ opacity: [0.4, 0.6, 0.4], x: '100vw' }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <Image src="/cloud2.png" alt="Mist" height={800} width={800} quality={100} className='opacity-20 blur-xl' />
      </motion.div>
      

      {/* Static Background Elements */}
   {/*    <motion.div
        className='absolute right-0 bottom-0 z-40 right-0'
        initial={{ opacity: 0.9 }}
        animate={{ opacity: 0.9 }}
        transition={{ duration: 1 }}
      >
        <Image src="/land.png" alt="" height={800} width={800} quality={100} className='w-96 opacity-90' />
      </motion.div>
      <motion.div
        className='absolute bottom-0 right-0 z-50 md:bottom-12 '
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0.9, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image src="/welcome.png" alt="" height={800} width={800} className='w-48' />
      </motion.div>
      <motion.div
        className='absolute z-50 top-16 left-0 md:left-8'
        initial={{ opacity: 1 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
      >
        <Image src="/fly.png" alt="" height={800} width={800} className='w-72 hidden md:block' />
      </motion.div> */}
    </div>
  );
};

export default OverlayEffects;
