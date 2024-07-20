// src/app/page.tsx
'use client'
import React, { useState, useEffect } from 'react';
import MovieList from './MovieList';
import { getMovies } from '../../services/ghibli';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

interface Movie {
  id: string;
  title: string;
  rt_score: string;
  release_date: string;
  image: string;
}

const Movie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortCriteria, setSortCriteria] = useState<string>('title');

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const fetchedMovies: Movie[] = await getMovies();
        setMovies(fetchedMovies);
        setFilteredMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    let filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (sortCriteria === 'rt_score') {
      filtered.sort((a, b) => parseInt(b.rt_score) - parseInt(a.rt_score));
    } else if (sortCriteria === 'release_date') {
      filtered.sort((a, b) => parseInt(b.release_date) - parseInt(a.release_date));
    } else {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    setFilteredMovies(filtered);
  }, [searchQuery, sortCriteria, movies]);

  return (
    <div className="min-h-screen mx-2 md:mx-6">
      <nav className="flex items-center justify-between p-4 bg-blue-600 text-white mb-8 h-16 md:h-20">
        <div className="flex items-center">
          <Image src="/logo.svg" alt="Logo" width={40} height={40} className="mr-2" />
          <span className="text-xl md:text-2xl font-bold">Studio Ghibli Movies</span>
        </div>
      </nav>

      <main className="relative p-6 bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 border border-black my-16">
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl md:text-4xl font-bold mb-8 mt-2 relative">All Studio Ghibli Movies</h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between mb-8 relative">
          <div className="relative flex items-center mb-4 md:mb-0 md:mr-4">
            <FaSearch className="absolute left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search by title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="p-2 pl-10 border border-gray-800 rounded-md w-full"
            />
          </div>
          <select
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}
            className="p-2 border border-gray-800 rounded-md"
          >
            <option value="title">Sort by Title</option>
            <option value="rt_score">Sort by RT Score</option>
            <option value="release_date">Sort by Release Date</option>
          </select>
        </div>

        {filteredMovies.length > 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75 }}
            className='relative'
          >
            <MovieList movies={filteredMovies} />
          </motion.div>
        ) : (
          <p className="text-center text-xl">Loading...</p>
        )}
      </main>
    </div>
  );
};

export default Movie;
