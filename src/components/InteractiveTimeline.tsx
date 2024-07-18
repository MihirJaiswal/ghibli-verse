'use client';
import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import Image from 'next/image';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { getMovies } from '../services/ghibli'; // Adjust the import path as needed

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
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    afterChange: (index : number) => setSelectedIndex(index),
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black px-4 py-12 md:px-8 md:ml-8 md:mr-6 relative mx-2">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Timeline of Movies
        </h1>
        <p className="text-md text-gray-700 max-w-2xl mx-auto">
          Discover the magic of Studio Ghibli with our interactive timeline. 
        </p>
      </motion.div>

      <Slider {...settings} className="w-full">
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
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 bg-white bg-opacity-40 backdrop-filter backdrop-blur-sm border border-gray-200  p-8 shadow-lg">
        <Image
          src={movies[selectedIndex].image}
          alt={movies[selectedIndex].title}
          width={300}
          height={450}
          className="object-cover shadow-lg"
        />
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-3xl font-semibold text-gray-900 mt-4 md:mt-0 text-center md:text-left">{movies[selectedIndex].title}</h2>
          <p className="text-sm text-gray-600 mb-2 py-2">{movies[selectedIndex].release_date}</p>
          <p className="text-md text-gray-700 max-w-2xl text-justify md:text-left">{movies[selectedIndex].description}</p>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default InteractiveTimeline;
