'use client'
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowLeft, FaArrowRight, FaPlay } from 'react-icons/fa'; // Import FaPlay icon
import { getMovies } from '../../services/ghibli'; // Adjust the import path as needed
import { youtubeLinks } from '../../../constant/index'; // Import the YouTube links

const HeroMovie: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(10);
  const [showMore, setShowMore] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

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
    setIsImageLoaded(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + movies.length) % movies.length);
    setShowMore(false);
    setIsImageLoaded(false);
  };

  if (movies.length === 0) {
    return <div></div>;
  }

  const { title, description, movie_banner, image, rt_score } = movies[currentIndex];
  const youtubeLink = youtubeLinks[currentIndex];
  const truncatedDescription = description.split(' ').slice(0, 20).join(' ') + '...';
  const mobileTruncatedDescription = description.split(' ').slice(0, 60).join(' ') + '...';

  return (
    <div className="relative md:w-[96%] h-[80vh] bg-white text-white border border-gray-900  flex items-center justify-center mx-2 md:mx-6 md:hidden">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={title}
          layout="fill"
          quality={100}
          className="opacity-100 object-cover md:hidden"
          onLoadingComplete={() => setIsImageLoaded(true)}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      {!isImageLoaded && <div className="absolute inset-0 flex items-center justify-center text-white">Loading...</div>}
      {isImageLoaded && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
           <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-red-500 to-red-700 opacity-10 z-0' 
        style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 31% 100%)' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
      ></motion.div>
          <div className="relative flex flex-col justify-center items-center bg-white border-black bg-opacity-80 border-2 p-6">
            <motion.h1
              className="text-3xl md:text-6xl font-bold text-black mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {title}
            </motion.h1>
            <motion.div
              className="text-lg md:text-2xl font-bold text-red-600 mb-2 flex items-center justify-center gap-2"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <Image src='/Rotten_Tomatoes.svg' alt='rt score' width={25} height={25} /> <span>: {rt_score}</span>
            </motion.div>
            <motion.p
              className="md:text-lg text-sm text-gray-800 mb-4 max-w-2xl mt-2 text-justify"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              {showMore ? description : window.innerWidth < 768 ? mobileTruncatedDescription : truncatedDescription}
            </motion.p>
            <motion.button
              onClick={() => setShowMore((prev) => !prev)}
              className="text-lg text-blue-800 underline mb-4 hidden md:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {showMore ? 'Show Less' : 'Show More'}
            </motion.button>
            <motion.a
              href={youtubeLink}
              className="px-6 py-3 bg-red-600 text-white text-lg font-bold rounded-lg shadow-lg flex items-center justify-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
              target="_blank" // Open link in new tab
              rel="noopener noreferrer" // Ensure security
            >
              <FaPlay size={20} /> {/* Add play icon */}
              Watch Trailer
            </motion.a>
          </div>
        </motion.div>
      )}
      <button
        onClick={handlePrevious}
        className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full"
      >
        <FaArrowLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full"
      >
        <FaArrowRight size={24} />
      </button>
    </div>
  );
};

export default HeroMovie;
