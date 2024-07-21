import React from 'react';
import { motion } from 'framer-motion';

const MovieCShimmer: React.FC = () => {
  return (
    <div className="hidden md:flex flex-col items-center justify-center h-[80vh] mx-2 md:mx-6 mb-6 md:mt-16">
      <div className="relative border border-black p-4 shadow-md md:w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500 opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-red-500 opacity-50 z-0" style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 31% 100%)' }}></div>
        <div className="hidden md:flex items-center justify-center">
          <div className="w-full h-full absolute left-40 top-4 inset-0 opacity-10 md:w-2/3 animate-pulse"></div>
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="absolute top-4 left-4 z-20">
          </div>
          <motion.div
            className="text-lg md:text-2xl font-bold text-red-600 mb-2 flex items-center justify-center rounded-lg gap-2 bg-white/70 w-24 absolute bottom-0 left-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full" />
            <span className='bg-gray-300 animate-pulse w-8 h-6 rounded'></span>
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full h-96 flex justify-center items-center bg-gray-300 animate-pulse rounded"></div>
            <motion.div
              className="px-6 py-3 mt-4 bg-red-600 text-white border text-lg font-bold rounded-lg shadow-lg flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full" />
              <div className="w-24 h-6 bg-gray-300 animate-pulse rounded"></div>
            </motion.div>
          </div>
          <motion.div
            className="absolute bottom-0 right-4 md:text-lg text-sm text-black mb-4 w-80 mt-2 text-justify bg-white/20 border border-black rounded-md p-2.5 h-24 bg-gray-300 animate-pulse"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
          <button
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full z-20"
            disabled
          >
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full" />
          </button>
          <button
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full z-20"
            disabled
          >
            <div className="w-6 h-6 bg-gray-300 animate-pulse rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCShimmer;
