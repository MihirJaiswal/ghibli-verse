'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCharacters } from '../../services/ghibli';
import SearchBar from './SearchBar';
import CharacterCard from './CharacterCard';
import ShimmerCard from './ShimmerCard';
import { characterMovies, characterImages, characterDetails } from '../../../constant';
import { motion } from 'framer-motion';

const CharacterGrid: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [movieFilter, setMovieFilter] = useState<string>('All');
  const [speciesFilter, setSpeciesFilter] = useState<string>('All');
  const [genderFilter, setGenderFilter] = useState<string>('All');
  const [visibleCount, setVisibleCount] = useState(4); // Number of characters to show initially
  const router = useRouter();

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const charactersData = await getCharacters();
        setCharacters(charactersData);
        setFilteredCharacters(charactersData);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch characters');
        setLoading(false);
      }
    };

    fetchCharacters();
  }, []);

  useEffect(() => {
    const filterCharacters = () => {
      let result = characters.filter(character =>
        character.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      if (movieFilter !== 'All') {
        result = result.filter(character => {
          const filmTitle = characterMovies[character.name];
          return filmTitle && filmTitle.includes(movieFilter);
        });
      }

      if (speciesFilter !== 'All') {
        result = result.filter(character => {
          const species = characterDetails[character.name]?.species;
          return species === speciesFilter;
        });
      }

      if (genderFilter !== 'All') {
        result = result.filter(character => character.gender === genderFilter);
      }

      setFilteredCharacters(result);
    };

    filterCharacters();
  }, [searchTerm, movieFilter, speciesFilter, genderFilter, characters]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMovieFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMovieFilter(event.target.value);
  };

  const handleSpeciesFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSpeciesFilter(event.target.value);
  };

  const handleGenderFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setGenderFilter(event.target.value);
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 4); // Increase count by 4
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 md:p-10 mx-2 md:mx-6 border border-black relative">
        <motion.div 
          className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 z-0' 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800 mt-6 md:mt-2 relative z-10">Loading Characters...</h1>
        <div className="container mx-auto md:px-4 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
            {Array(8).fill(0).map((_, index) => (
              <ShimmerCard key={index} />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 md:p-10 mx-2 md:mx-6 border border-black relative">
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800 mt-6 md:mt-2 relative z-10">Some Characters</h1>
      <div className="container mx-auto md:px-4 relative z-10">
        <SearchBar
          searchTerm={searchTerm}
          movieFilter={movieFilter}
          speciesFilter={speciesFilter}
          genderFilter={genderFilter}
          onSearchChange={handleSearchChange}
          onMovieFilterChange={handleMovieFilterChange}
          onSpeciesFilterChange={handleSpeciesFilterChange}
          onGenderFilterChange={handleGenderFilterChange}
        />
        {error ? (
          <div className="flex items-center justify-center min-h-screen text-red-500 text-xl">{error}</div>
        ) : filteredCharacters.length === 0 ? (
          <div className="flex items-center justify-center min-h-screen text-xl relative">No characters found</div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 my-8">
              {filteredCharacters.slice(0, visibleCount).map((character) => {
                const details = characterDetails[character.name] || {};
                return (
                  <CharacterCard
                    key={character.id}
                    id={character.id}
                    name={character.name}
                    image={characterImages[character.name] || '/path/to/default.jpg'}
                    film={characterMovies[character.name]}
                    age={character.age}
                    gender={character.gender}
                    species={details.species}
                    eyeColor={character.eye_color}
                    hairColor={character.hair_color}
                  />
                );
              })}
            </div>
            {filteredCharacters.length > visibleCount && (
              <div className="flex justify-center my-6">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 border"
                  onClick={handleLoadMore}
                >
                  Load More
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CharacterGrid;
