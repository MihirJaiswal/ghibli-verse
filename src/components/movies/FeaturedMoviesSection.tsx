// src/components/FeaturedMoviesSlider.tsx
'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { getMovies } from '../../services/ghibli';

interface Movie {
  id: string;
  title: string;
  ratings: string;
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
        const randomIndexes = Array.from({ length: count }, () =>
          Math.floor(Math.random() * fetchedMovies.length)
        );
        const selectedMovies = randomIndexes.map((index) => fetchedMovies[index]);
        setFeaturedMovies(selectedMovies);
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
      <h2 className="text-2xl md:text-left text-center  font-bold mb-4">Featured Movies</h2>
      <div className="">
        <Slider {...settings}>
          {featuredMovies.map((movie) => (
            <div key={movie.id} className=" p-4 mx-2">
              <div className="relative w-full h-56 mb-2">
                <Image
                  src={movie.image} // Example: Update with actual poster URL
                  alt={`${movie.title} Poster`}
                  layout="fill"
                  objectFit=""
                  className="object-contain"
                />
              </div>
              <h3 className="text-lg font-bold mb-1 text-center">{movie.title}</h3>
              <p className="text-sm text-gray-600 text-center">Ratings: {movie.ratings}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FeaturedMoviesSlider;
