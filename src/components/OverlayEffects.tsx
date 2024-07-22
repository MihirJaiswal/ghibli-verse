'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const OverlayEffects = () => {
  return (
    <div className="relative overflow-hidden">
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
    </div>
  );
};

export default OverlayEffects;
