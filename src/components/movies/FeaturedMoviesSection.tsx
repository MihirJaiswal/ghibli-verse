'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { getMovies } from '../../services/ghibli';
import { motion } from 'framer-motion';

interface Movie {
  id: string;
  title: string;
  rt_score: string;
  image: string;
}

interface FeaturedMoviesSliderProps {
  count: number; // Number of featured movies to display
}

const truncateTitle = (title: string, wordLimit: number) => {
  const words = title.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + '...' : title;
};

const FeaturedMoviesSlider: React.FC<FeaturedMoviesSliderProps> = ({ count }) => {
  const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: Movie[] = await getMovies();
        const sortedMovies = fetchedMovies.sort((a, b) => parseInt(b.rt_score) - parseInt(a.rt_score));
        const topMovies = sortedMovies.slice(0, count);
        setFeaturedMovies(topMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [count]);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-32 md:mt-20 md:mx-6 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 relative border border-black p-8 mx-2">
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-40 z-0' 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <h2 className="text-2xl md:text-left text-center font-bold mb-4 relative">Featured Movies</h2>
      <div className="">
        <Slider {...settings}>
          {featuredMovies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} passHref>
              <motion.div 
                className="p-4 mx-2 cursor-pointer" 
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full h-56 mb-2">
                  <Image
                    src={movie.image}
                    alt={`${movie.title} Poster`}
                    layout="fill"
                    objectFit="contain"
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-center">{truncateTitle(movie.title, 4)}</h3>
                <p className="text-sm text-gray-700 text-center flex items-center justify-center gap-1">
                  Rotten Tomatoes
                  <Image src='/Rotten_Tomatoes.svg' alt='rotten tomatoes svg' width={20} height={20} />
                  : <span className='font-semibold'>{movie.rt_score}</span>
                </p>
              </motion.div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedMoviesSlider;
