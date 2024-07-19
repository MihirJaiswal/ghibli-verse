'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getCharacters } from '../../services/ghibli';
import SearchBar from './SearchBar';
import CharacterCard from './CharacterCard';
import { characterMovies, characterImages } from '../../../constant';

const CharacterGrid: React.FC = () => {
  const [characters, setCharacters] = useState<any[]>([]);
  const [filteredCharacters, setFilteredCharacters] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [movieFilter, setMovieFilter] = useState<string>('All');
  const [otherFilter, setOtherFilter] = useState<string>('All');
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

      if (otherFilter !== 'All') {
        result = result.filter(character => {
          const speciesMatch = character.species === otherFilter;
          const genderMatch = character.gender === otherFilter;
          return speciesMatch || genderMatch;
        });
      }

      setFilteredCharacters(result);
    };

    filterCharacters();
  }, [searchTerm, movieFilter, otherFilter, characters]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMovieFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setMovieFilter(event.target.value);
  };

  const handleOtherFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOtherFilter(event.target.value);
  };

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500 text-xl">{error}</div>;
  }

  if (filteredCharacters.length === 0) {
    return <div className="flex items-center justify-center min-h-screen text-xl">No characters found</div>;
  }

  return (
    <div className="min-h-screen bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 p-10 mx-2 md:mx-6 mt-16 border border-black relative">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 text-gray-800">Some Characters</h1>
      <div className="container mx-auto px-4">
        <SearchBar
          searchTerm={searchTerm}
          movieFilter={movieFilter}
          otherFilter={otherFilter}
          onSearchChange={handleSearchChange}
          onMovieFilterChange={handleMovieFilterChange}
          onOtherFilterChange={handleOtherFilterChange}
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {filteredCharacters.map((character) => (
            <CharacterCard
              key={character.id}
              id={character.id}
              name={character.name}
              image={characterImages[character.name] || '/path/to/default.jpg'}
              film={characterMovies[character.name]}
              onClick={() => router.push(`/characters/${character.id}`)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CharacterGrid;
