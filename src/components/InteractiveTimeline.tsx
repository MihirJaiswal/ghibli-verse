'use client';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getMovies } from '../services/ghibli'; 

const InteractiveTimeline = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    afterChange: (index: number) => setSelectedIndex(index),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black px-4 py-12 md:px-8 md:ml-8 md:mr-6 relative mx-2 mb-12">
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4 relative">
          Timeline of Movies
        </h1>
        <p className="text-md text-gray-700 max-w-2xl mx-auto relative">
          Discover the magic of Studio Ghibli with our interactive timeline. 
        </p>
      </motion.div>

      <Slider {...settings} className="w-full relative">
        {movies.map((movie, index) => (
          <div
            key={movie.id}
            className={`cursor-pointer p-4 rounded-lg transition-transform transform ${selectedIndex === index ? 'scale-110' : 'scale-100'}`}
            onClick={() => setSelectedIndex(index)}
          >
            <div className='flex items-center justify-center flex-col'>
              <Image
                src={movie.image}
                alt={movie.title}
                width={500}
                height={200}
                className="object-cover w-48 h-auto"
              />
              <p className="text-center text-lg font-semibold text-gray-900 pb-16 pt-4 md:py-6">{movie.release_date}</p>
            </div>
          </div>
        ))}
      </Slider>

      {movies.length > 0 && (
        <div 
          className="mt-16 flex flex-col md:flex-row items-center relative justify-center space-y-8 md:space-y-0 md:space-x-8 bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm border border-gray-200 p-8 shadow-lg"
          style={{ backgroundImage: `url(${movies[selectedIndex].movie_banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm"></div>
          <Image
            src={movies[selectedIndex].image}
            alt={movies[selectedIndex].title}
            width={300}
            height={450}
            className="object-cover shadow-lg relative z-10"
          />
          <div className="flex flex-col items-center md:items-start relative z-10">
            <h2 className="text-3xl font-semibold text-white mt-4 md:mt-0 text-center md:text-left relative">{movies[selectedIndex].title}</h2>
            <p className="text-sm text-gray-100 mb-2 py-2">{movies[selectedIndex].release_date}</p>
            <p className="text-md text-gray-300 max-w-2xl text-justify md:text-left">{movies[selectedIndex].description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveTimeline;
