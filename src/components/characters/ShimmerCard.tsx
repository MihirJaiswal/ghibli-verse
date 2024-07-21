import React from 'react';
import { motion } from 'framer-motion';

const ShimmerCard: React.FC = () => {
  return (
    <motion.div 
      className="animate-pulse flex flex-col items-center justify-center p-4 bg-gray-300"
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="w-24 h-24 bg-gray-400 rounded-full mb-4"></div>
      <div className="w-32 h-4 bg-gray-400 rounded mb-2"></div>
      <div className="w-20 h-4 bg-gray-400 rounded mb-2"></div>
      <div className="w-28 h-4 bg-gray-400 rounded"></div>
    </motion.div>
  );
};

export default ShimmerCard;
