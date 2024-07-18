'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black px-4 mx-2 md:px-8 md:ml-6 md:mr-6 relative py-20 mt-2">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          About Ghibli Verse
        </h1>
        <p className="text-md text-gray-700">
          Ghibli Verse is your ultimate destination to explore the magical world of Studio Ghibli. Discover our movies, learn about us, and more!
        </p>
      </motion.div>
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/ghibli.png"
            alt="Studio Ghibli Logo"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <p className="text-md text-gray-700">
                Studio Ghibli was founded in 1985 by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki. Over the decades, Studio Ghibli has produced some of the most beloved and critically acclaimed animated films of all time.
            </p>
            <p className="text-md text-gray-700">
                Our films have captivated audiences with their imaginative worlds, beautiful animation, and heartwarming stories. From "My Neighbor Totoro" to "Spirited Away," Studio Ghibli's films continue to inspire and enchant viewers of all ages.
            </p>
            <p className="text-md text-gray-700">
                Join us on a journey through the magical world of Studio Ghibli, where every story is a treasure and every character is a friend.
            </p>
            </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
