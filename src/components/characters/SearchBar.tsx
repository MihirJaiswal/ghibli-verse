'use client';
import React from 'react';

interface SearchBarProps {
  searchTerm: string;
  movieFilter: string;
  otherFilter?: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onMovieFilterChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onOtherFilterChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchTerm,
  movieFilter,
  otherFilter,
  onSearchChange,
  onMovieFilterChange,
  onOtherFilterChange,
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
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
      <div className="flex space-x-4">
        <select
          value={movieFilter}
          onChange={onMovieFilterChange}
          className="px-4 py-2 border border-gray-600 rounded-lg"
        >
          <option value="All">All Movies</option>
          <option value="Castle in the Sky">Castle in the Sky</option>
          <option value="Grave of the Fireflies">Grave of the Fireflies</option>
          <option value="My Neighbor Totoro">My Neighbor Totoro</option>
          <option value="Kiki's Delivery Service">Kiki's Delivery Service</option>
          <option value="Only Yesterday">Only Yesterday</option>
          <option value="Porco Rosso">Porco Rosso</option>
          <option value="Pom Poko">Pom Poko</option>
          <option value="Whisper of the Heart">Whisper of the Heart</option>
          <option value="Princess Mononoke">Princess Mononoke</option>
          <option value="My Neighbors the Yamadas">My Neighbors the Yamadas</option>
          <option value="Spirited Away">Spirited Away</option>
          <option value="The Cat Returns">The Cat Returns</option>
          <option value="Howl's Moving Castle">Howl's Moving Castle</option>
          <option value="Tales from Earthsea">Tales from Earthsea</option>
          <option value="Ponyo">Ponyo</option>
          <option value="Arrietty">Arrietty</option>
          <option value="From Up on Poppy Hill">From Up on Poppy Hill</option>
          <option value="The Wind Rises">The Wind Rises</option>
          <option value="The Tale of the Princess Kaguya">The Tale of the Princess Kaguya</option>
          <option value="When Marnie Was There">When Marnie Was There</option>
          <option value="The Red Turtle">The Red Turtle</option>
        </select>
        {otherFilter !== undefined && onOtherFilterChange !== undefined && (
          <select
            value={otherFilter}
            onChange={onOtherFilterChange}
            className="px-4 py-2 border border-gray-600 rounded-lg"
          >
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
