// src/components/HeroMovie.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { getMovies } from '../../services/ghibli'; // Adjust the import path as needed

const HeroMovie: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(10);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
    setShowMore(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    setShowMore(false);
  };

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }

  const { title, description, movie_banner, image, ctaLink, ctaText } = movies[currentIndex];
  const truncatedDescription = description.split(' ').slice(0, 20).join(' ') + '...';

  return (
    <div className="relative md:w-[84%] h-[82vh] bg-whites/40 border border-black md:ml-56 mt-28 md:mt-16 flex items-center justify-center mx-2">
      <Image
        src={movie_banner}
        alt={title}
        layout="fill"
        quality={100}
        className="opacity-100 object-cover hidden md:block"
      />
      <Image
        src={image}
        alt={title}
        layout="fill"
        quality={100}
        className="opacity-100 object-cover md:hidden"
      />
      <div className="absolute inset-0 bg-white bg-opacity-50"></div>
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative flex flex-col justify-center items-center bg-white bg-clip-padding backdrop-filter z-30 b bg-opacity-70 border border-black p-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-800 mb-4 max-w-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {showMore ? description : truncatedDescription}
          </motion.p>
          <motion.button
            onClick={() => setShowMore((prev) => !prev)}
            className="text-lg text-blue-800 underline mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            {showMore ? 'Show Less' : 'Show More'}
          </motion.button>
          <motion.a
            href={ctaLink}
            className="px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Watch here
          </motion.a>
        </div>
      </motion.div>
      <button
        onClick={handlePrevious}
        className="absolute left-4 md:left-8 md:bottom-1/2 bottom-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 md:bottom-1/2 bottom-4 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default HeroMovie;
