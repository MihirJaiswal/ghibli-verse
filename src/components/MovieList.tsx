import React from 'react';

interface Movie {
  id: string;
  title: string;
  description: string;
  release_date: string;
  director: string;
  producer: string;
  image: string;
  movie_banner: string;
}

interface MovieListProps {
  movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies = [] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {movies.map((movie) => (
        <div key={movie.id} className="bg-white shadow-md rounded-lg overflow-hidden">
          <img src={movie.image} alt={movie.title} className="w-full h-64 object-cover" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
            <p className="text-gray-700 mb-2">{movie.description}</p>
            <p className="text-gray-600">Release Date: {movie.release_date}</p>
            <p className="text-gray-600">Director: {movie.director}</p>
            <p className="text-gray-600">Producer: {movie.producer}</p>
            <img src={movie.movie_banner} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
