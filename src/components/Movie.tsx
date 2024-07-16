// src/app/page.tsx

import React from 'react';
import MovieList from '../components/MovieList';
import { getMovies } from '../services/ghibli';

const HomePage = async () => {
  let movies = [];

  try {
    movies = await getMovies();
    console.log("Fetched movies:", movies); // Log fetched movies
  } catch (error) {
    console.error("Error fetching movies:", error);
  }

  return (
    <div>
      <main className="relative md:ml-44 p-6">
        <h1 className="text-4xl font-bold text-center mb-8">Studio Ghibli Movies</h1>
        {movies.length > 0 ? (
          <MovieList movies={movies} />
        ) : (
          <p>No movies found</p>
        )}
      </main>
    </div>
  );
};

export default HomePage;
