'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getCharacters } from '../../services/ghibli';
import { characterImages, characterMovies } from '../../../constant';

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
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full md:w-1/3">
              <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={handleSearchChange}
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
                onChange={handleMovieFilterChange}
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
                {/* Add more movie options here */}
              </select>
              <select
                value={otherFilter}
                onChange={handleOtherFilterChange}
                className="px-4 py-2 border border-gray-600 rounded-lg"
              >
                <option value="All">All</option>
                <option value="Human">Human</option>
                <option value="Cat">Cat</option> {/* Example species */}
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {filteredCharacters.map((character) => (
              <div 
                key={character.id} 
                className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-black mt-10 shadow- overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
                onClick={() => router.push(`/characters/${character.id}`)}
              >
                <Image
                  src={characterImages[character.name] || '/path/to/default.jpg'}
                  alt={character.name}
                  width={400}
                  height={400}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{character.name}</h2>
                  {characterMovies[character.name] && (
                    <p className="text-gray-700 mb-2">Film: {characterMovies[character.name]}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterGrid;
