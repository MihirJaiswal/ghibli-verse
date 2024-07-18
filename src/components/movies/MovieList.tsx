import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface Movie {
  id: string;
  title: string;
  release_date: string;
  image: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies = [] }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 md:p-6">
      {movies.map((movie) => (
        <Link href={`/movies/${movie.id}`} key={movie.id} passHref>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer  overflow-hidden transition-transform transform bg-white p-2 bg-opacity-40 border border-gray-600"
          >
            <div className="relative w-full md:h-96 h-56">
              <Image
                src={movie.image}
                alt={movie.title}
                layout="fill"
                objectFit="contain"
                className="rounded-t-lg"
              />
            </div>
            <div className="md:p-4">
              <h3 className="md:text-xl text-lg font-bold text-gray-900 mb-2 mt-2 text-center">{movie.title}</h3>
              <p className="text-gray-600 text-center text-sm md:text-base">Release Date: {movie.release_date}</p>
            </div>
          </motion.div>
        </Link>
      ))}
    </div>
  );
};

export default MovieList;
