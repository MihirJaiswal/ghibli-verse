'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight, FaPlay } from 'react-icons/fa';
import { getMovies } from '../../services/ghibli';
import { youtubeLinks } from '../../../constant/index';
import MovieCShimmer from './MovieCShimmer';

const MovieC: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    return <MovieCShimmer />;
  }

  const { title, description, image, rt_score } = movies[currentIndex];
  const youtubeLink = youtubeLinks[currentIndex];
  const truncatedDescription = description.split(' ').slice(0, 20).join(' ') + '...';
  const mobileTruncatedDescription = description.split(' ').slice(0, 60).join(' ') + '...';

  return (
    <div className="hidden md:flex flex-col items-center justify-center h-[80vh] mx-2 md:mx-6 mt-28 mb-6 md:mt-16 md:mb-16">
      <div className="relative border border-black p-4 shadow-md md:w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-blue-500 opacity-50 z-0"></div>
        <div className="absolute inset-0 bg-red-500 opacity-50 z-0" style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 31% 100%)' }}></div>
        <div className="hidden md:flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Ghibli Logo"
            width={1920}
            height={1080}
            quality={100}
            className="object-cover absolute left-40 top-4 inset-0 opacity-10 md:w-2/3"
          />
        </div>
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <div className="absolute top-4 left-4 z-20">
            <motion.h1
              className="text-4xl w-96 font-bold text-black mb-4"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              {title}
            </motion.h1>
          </div>
          <motion.div
            className="text-lg md:text-2xl font-bold text-red-600 mb-2 flex items-center justify-center rounded-lg gap-2 bg-white/70 w-24 absolute bottom-0 left-0"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Image src='/Rotten_Tomatoes.svg' alt='rt score' width={25} height={25} /> <span>: {rt_score}</span>
          </motion.div>
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-full h-96 flex justify-center items-center">
              <Image
                src={image}
                alt={title}
                layout="intrinsic"
                width={200}
                height={300}
                quality={100}
                className="object-contain"
                onLoadingComplete={() => setIsImageLoaded(true)}
              />
              {!isImageLoaded && <div className=""></div>}
            </div>
            <motion.a
              href={youtubeLink}
              className="px-6 py-3 mt-4 bg-red-600 text-white border text-lg font-bold rounded-lg shadow-lg flex items-center gap-2"
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
          <motion.p
            className="absolute bottom-0 right-4 md:text-lg text-sm text-black mb-4 w-80 mt-2 text-justify bg-white/20 border border-black rounded-md p-2.5"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            {showMore ? description : window.innerWidth < 768 ? mobileTruncatedDescription : truncatedDescription}
          </motion.p>
          <button
            onClick={handlePrevious}
            className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full z-20"
          >
            <FaChevronLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 bg-gray-100 text-black p-2 rounded-full z-20"
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieC;
