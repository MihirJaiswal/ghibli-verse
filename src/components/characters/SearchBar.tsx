'use client';
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  movieFilter: string;
  genderFilter?: string;
  speciesFilter?: string;
  otherFilter?: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMovieFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onGenderFilterChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onSpeciesFilterChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onOtherFilterChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  movieFilter,
  genderFilter,
  speciesFilter,
  otherFilter,
  onSearchChange,
  onMovieFilterChange,
  onGenderFilterChange,
  onSpeciesFilterChange,
  onOtherFilterChange,
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center mb-4 space-y-4 md:space-y-0 md:space-x-4">
      <div className="relative w-full md:w-1/3">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={onSearchChange}
          className="w-full px-4 py-2 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M16.65 10.65A6.65 6.65 0 1110 4a6.65 6.65 0 016.65 6.65z"></path>
          </svg>
        </span>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-auto space-y-4 md:space-y-0 md:space-x-4">
        <select
          value={movieFilter}
          onChange={onMovieFilterChange}
          className="px-4 py-2 border border-gray-600 rounded-lg w-full md:w-auto"
        >
          <option value="All">All Movies</option>
          <option value="Castle in the Sky">Castle in the Sky</option>
          <option value="Grave of the Fireflies">Grave of the Fireflies</option>
          <option value="My Neighbor Totoro">My Neighbor Totoro</option>
          <option value="Kiki&apos;s Delivery Service">Kiki&apos;s Delivery Service</option>
          <option value="Only Yesterday">Only Yesterday</option>
          <option value="Porco Rosso">Porco Rosso</option>
          <option value="Pom Poko">Pom Poko</option>
          <option value="Whisper of the Heart">Whisper of the Heart</option>
          <option value="Princess Mononoke">Princess Mononoke</option>
          <option value="My Neighbors the Yamadas">My Neighbors the Yamadas</option>
          <option value="Spirited Away">Spirited Away</option>
          <option value="The Cat Returns">The Cat Returns</option>
          <option value="Howl&apos;s Moving Castle">Howl&apos;s Moving Castle</option>
          <option value="Tales from Earthsea">Tales from Earthsea</option>
          <option value="Ponyo">Ponyo</option>
          <option value="Arrietty">The Secret World of Arrietty</option>
          <option value="From Up on Poppy Hill">From Up on Poppy Hill</option>
          <option value="The Wind Rises">The Wind Rises</option>
          <option value="The Tale of the Princess Kaguya">The Tale of the Princess Kaguya</option>
          <option value="When Marnie Was There">When Marnie Was There</option>
          <option value="The Red Turtle">The Red Turtle</option>
        </select>
        {genderFilter !== undefined && onGenderFilterChange !== undefined && (
          <select
            value={genderFilter}
            onChange={onGenderFilterChange}
            className="px-4 py-2 border border-gray-600 rounded-lg w-full md:w-auto"
          >
            <option value="All">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        )}
        {speciesFilter !== undefined && onSpeciesFilterChange !== undefined && (
          <select
            value={speciesFilter}
            onChange={onSpeciesFilterChange}
            className="px-4 py-2 border border-gray-600 rounded-lg w-full md:w-auto"
          >
            <option value="All">All Species</option>
            <option value="Human">Human</option>
            <option value="Cat">Cat</option>
            <option value="Animal">Animal</option>
            <option value="Other">Other</option>
          </select>
        )}
        {otherFilter !== undefined && onOtherFilterChange !== undefined && (
          <select
            value={otherFilter}
            onChange={onOtherFilterChange}
            className="px-4 py-2 border border-gray-600 rounded-lg w-full md:w-auto"
          >
            <option value="All">All Others</option>
            <option value="Option1">Option 1</option>
            <option value="Option2">Option 2</option>
            <option value="Option3">Option 3</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
