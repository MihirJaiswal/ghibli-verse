// src/components/FeaturedMoviesSlider.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import Link from 'next/link';
import { getMovies } from '../../services/ghibli';

interface Movie {
  id: string;
  title: string;
  rt_score: string;
  image: string;
}

interface FeaturedMoviesSliderProps {
  count: number; // Number of featured movies to display
}

const FeaturedMoviesSlider: React.FC<FeaturedMoviesSliderProps> = ({ count }) => {
  const [featuredMovies, setFeaturedMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: Movie[] = await getMovies(); // Ensure getMovies returns Movie[]
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
      <h2 className="text-2xl md:text-left text-center font-bold mb-4">Featured Movies</h2>
      <div className="">
        <Slider {...settings}>
          {featuredMovies.map((movie) => (
            <Link href={`/movies/${movie.id}`} key={movie.id} passHref>
              <div className="p-4 mx-2 cursor-pointer">
                <div className="relative w-full h-56 mb-2">
                  <Image
                    src={movie.image}
                    alt={`${movie.title} Poster`}
                    layout="fill"
                    objectFit="contain"
                    className="object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-lg font-bold mb-1 text-center">{movie.title}</h3>
                <p className="text-sm text-gray-600 text-center flex items-center justify-center gap-1">
                  Rotten Tomatoes
                  <Image src='/Rotten_Tomatoes.svg' alt='rotten tomatoes svg' width={20} height={20} />
                  : <span className='font-semibold'>{movie.rt_score}</span>
                </p>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedMoviesSlider;
