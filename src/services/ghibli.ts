// src/services/ghibli.ts

export const getMovies = async () => {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const movies = await response.json();
    console.log("API response:", movies); // Log API response
    return movies;
  };
  