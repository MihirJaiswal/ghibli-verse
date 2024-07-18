// src/app/page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getMovies } from '../../services/ghibli';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies = await getMovies();
        setMovies(fetchedMovies);
        console.log("Fetched movies:", fetchedMovies); // Log fetched movies
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="min-h-screen md:ml-56 mx-2 md:mr-6 2">
      <main className="relative p-6 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black my-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-8 mt-2">All Studio Ghibli Movies</h1>
        </motion.div>

        {movies.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
          >
            <MovieList movies={movies} />
          </motion.div>
        ) : (
          <p className="text-center text-xl">Loading...</p>
        )}
      </main>
    </div>
  );
};

export default Movie;
