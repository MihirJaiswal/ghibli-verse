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
    const response = await fetch('https://ghibliapi.vercel.app/people');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log("API response:", data); // Log API response
    return data.map((character: any) => ({
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


export const getCharacterById = async (id: string) => {
  try {
    const response = await fetch(`https://ghibliapi.vercel.app/people/${id}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const character = await response.json();
    console.log(character); // Log API response for specific character
    return {
      id: character.id,
      name: character.name,
      gender: character.gender,
      age: character.age,
      eye_color: character.eye_color,
      hair_color: character.hair_color,
      species: character.species,
      image: `/images/characters/${character.id}.jpg` // Ensure you have these images in your public folder
    };
  } catch (error) {
    console.error(`Error fetching character with ID ${id}:`, error);
    throw error; // Rethrow the error to propagate it up
  }
};

// services/ghibli.ts

export const filterCharactersByMovie = (characters: any[], movie: string) => {
  return characters.filter(character => {
    return character.films && character.films.some((film: string) => film.includes(movie));
  });
};

// services/ghibli.ts

export const getFilmByUrl = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch film data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching film data:', error);
    throw error;
  }
};

const BASE_URL = "https://ghibliapi.vercel.app";

export const fetchLocations = async () => {
  try {
    const response = await fetch(`${BASE_URL}/locations`);
    if (!response.ok) {
      throw new Error("Failed to fetch locations");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};