'use client'
// components/AllCharacters.tsx
import React, { useState } from 'react';
import { characterMovies, characterImages } from '../../../constant/index'; // Adjust the import path accordingly
import SearchBar from './SearchBar'; // Adjust the import path accordingly

interface AllCharactersProps {
  names: string[];
}

const AllCharacters: React.FC<AllCharactersProps> = ({ names }) => {
  const [filteredNames, setFilteredNames] = useState(names);
  const [searchTerm, setSearchTerm] = useState('');
  const [movieFilter, setMovieFilter] = useState('All');
  const [otherFilter, setOtherFilter] = useState('All');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchTerm(query);
    filterCharacters(query, movieFilter, otherFilter);
  };

  const handleMovieFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedMovie = event.target.value;
    setMovieFilter(selectedMovie);
    filterCharacters(searchTerm, selectedMovie, otherFilter);
  };

  const handleOtherFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOther = event.target.value;
    setOtherFilter(selectedOther);
    filterCharacters(searchTerm, movieFilter, selectedOther);
  };

  const filterCharacters = (searchTerm: string, movieFilter: string, otherFilter: string) => {
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

    if (otherFilter !== 'All') {
      // Assuming you have gender information in `characterOtherInfo` or similar
      // filtered = filtered.filter(name => characterOtherInfo[name]?.gender === otherFilter);
    }

    setFilteredNames(filtered);
  };

  return (
    <div className="p-6 bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 min-h-screen relative md:mx-6 mx-2 mt-12 border border-black">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">All Characters</h1>
        <div className='mt-8 mb-12'>
        <SearchBar
          searchTerm={searchTerm}
          movieFilter={movieFilter}
          otherFilter={otherFilter}
          onSearchChange={handleSearchChange}
          onMovieFilterChange={handleMovieFilterChange}
          onOtherFilterChange={handleOtherFilterChange}
        />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
          {filteredNames.map((name) => {
            const movie = characterMovies[name] || 'Unknown Movie';
            const imageUrl = characterImages[name] || '/default-character.webp'; // Fallback image URL

            return (
              <div key={name} className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 p-4 border border-black shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
                <img
                  src={imageUrl}
                  alt={name}
                  className="w-full h-48 object-cover mb-4"
                />
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p className="text-sm text-gray-700">{movie}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllCharacters;
