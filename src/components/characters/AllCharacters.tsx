'use client';
import React, { useState } from 'react';
import { characterMovies, characterImages, characterDetails } from '../../../constant/index'; 
import SearchBar from './SearchBar'; 
import { motion } from 'framer-motion';

interface AllCharactersProps {
  names: string[];
}

const AllCharacters: React.FC<AllCharactersProps> = ({ names }) => {
  const [filteredNames, setFilteredNames] = useState(names);
  const [searchTerm, setSearchTerm] = useState('');
  const [movieFilter, setMovieFilter] = useState('All');
  const [genderFilter, setGenderFilter] = useState('All');
  const [speciesFilter, setSpeciesFilter] = useState('All');
  const [visibleCount, setVisibleCount] = useState(8); // Number of characters to show initially

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    filterCharacters(query, movieFilter, genderFilter, speciesFilter);
  };

  const handleMovieFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMovie = event.target.value;
    setMovieFilter(selectedMovie);
    filterCharacters(searchTerm, selectedMovie, genderFilter, speciesFilter);
  };

  const handleGenderFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedGender = event.target.value;
    setGenderFilter(selectedGender);
    filterCharacters(searchTerm, movieFilter, selectedGender, speciesFilter);
  };

  const handleSpeciesFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSpecies = event.target.value;
    setSpeciesFilter(selectedSpecies);
    filterCharacters(searchTerm, movieFilter, genderFilter, selectedSpecies);
  };

  const filterCharacters = (searchTerm: string, movieFilter: string, genderFilter: string, speciesFilter: string) => {
    let filtered = names;

    if (searchTerm) {
      const lowercasedQuery = searchTerm.toLowerCase();
      filtered = filtered.filter(name =>
        name.toLowerCase().includes(lowercasedQuery)
      );
    }

    if (movieFilter !== 'All') {
      filtered = filtered.filter(name => characterMovies[name] === movieFilter);
    }

    if (genderFilter !== 'All') {
      filtered = filtered.filter(name => characterDetails[name]?.gender === genderFilter);
    }

    if (speciesFilter !== 'All') {
      filtered = filtered.filter(name => characterDetails[name]?.species === speciesFilter);
    }

    setFilteredNames(filtered);
  };

  const handleLoadMore = () => {
    setVisibleCount(prevCount => prevCount + 8); // Increase count by 8
  };

  return (
    <div className="p-6 bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 min-h-screen relative md:mx-6 mx-2 my-12 border border-black">
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-10 z-0' 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6 relative">All Characters</h1>
        <div className='mt-8 mb-12 relative'>
          <SearchBar
            searchTerm={searchTerm}
            movieFilter={movieFilter}
            onSearchChange={handleSearchChange}
            onMovieFilterChange={handleMovieFilterChange}
            onOtherFilterChange={handleGenderFilterChange} 
            onSpeciesFilterChange={handleSpeciesFilterChange}
            genderFilter={genderFilter}
            speciesFilter={speciesFilter}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredNames.slice(0, visibleCount).map((name) => {
            const movie = characterMovies[name] || 'Unknown Movie';
            const imageUrl = characterImages[name] || '/default-character.webp'; // Fallback image URL
            const gender = characterDetails[name]?.gender || 'Unknown';
            const species = characterDetails[name]?.species || 'Unknown';

            return (
              <div key={name} className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 p-4 border border-black shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-sm text-gray-800">{movie}</p>
                <p className="text-sm text-gray-700">Gender: {gender}</p>
                <p className="text-sm text-gray-700">Species: {species}</p>
              </div>
            );
          })}
        </div>
        {filteredNames.length > visibleCount && (
          <div className="flex justify-center my-6 relative">
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 border"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCharacters;
