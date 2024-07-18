import axios from 'axios';
export const getMovies = async () => {
  try {
    const response = await fetch('https://ghibliapi.vercel.app/films');
    if (!response.ok) {
      throw new Error('Failed to fetch movies');
    }
    const movies = await response.json();
    console.log("API response:", movies); // Log API response
    return movies;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error; // Rethrow the error to propagate it up
  }
};

export const getMovieById = async (id: string) => {
  try {
    const response = await fetch(`https://ghibliapi.vercel.app/films/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch movie');
    }
    const movie = await response.json();
    console.log("API response for movie:", movie); // Log API response for specific movie
    return movie;
  } catch (error) {
    console.error(`Error fetching movie with ID ${id}:`, error);
    throw error; // Rethrow the error to propagate it up
  }
};

export const getCharacters = async () => {
  try {
    const response = await axios.get('https://ghibliapi.vercel.app/people');
    return response.data.map((character: any) => ({
      id: character.id,
      name: character.name,
      gender: character.gender,
      age: character.age,
      eye_color: character.eye_color,
      hair_color: character.hair_color,
      species: character.species,
      // Adjust the image path as needed, or use a placeholder image if not available
      image: `/images/characters/${character.id}.jpg` // Ensure you have these images in your public folder
    }));
  } catch (error) {
    console.error('Error fetching characters:', error);
    return [];
  }
};