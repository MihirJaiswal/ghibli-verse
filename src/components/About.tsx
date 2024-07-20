'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black px-4 mx-2 md:px-8 md:ml-6 md:mr-6 relative py-20 mt-2">
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      {/* Animated Header */}
     <div className='relative'>
     <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-4xl font-bold text-black mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          About Ghibli Verse
        </motion.h1>
        <motion.p
          className="text-md text-gray-950"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          Ghibli Verse is your ultimate destination to explore the magical world of Studio Ghibli. Discover our movies, learn about us, and more!
        </motion.p>
      </motion.div>

      {/* Animated Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="flex-1 flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <Image
            src="/ghibli.png"
            alt="Studio Ghibli Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </motion.div>
        
        <motion.div
          className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="text-md text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            Studio Ghibli was founded in 1985 by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki. Over the decades, Studio Ghibli has produced some of the most beloved and critically acclaimed animated films of all time.
          </motion.p>
          <motion.p
            className="text-md text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          >
            Our films have captivated audiences with their imaginative worlds, beautiful animation, and heartwarming stories. From "My Neighbor Totoro" to "Spirited Away," Studio Ghibli's films continue to inspire and enchant viewers of all ages.
          </motion.p>
          <motion.p
            className="text-md text-gray-900"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          >
            Join us on a journey through the magical world of Studio Ghibli, where every story is a treasure and every character is a friend.
          </motion.p>
        </motion.div>
      </motion.div>
     </div>
    </div>
  );
};

export default AboutUs;
