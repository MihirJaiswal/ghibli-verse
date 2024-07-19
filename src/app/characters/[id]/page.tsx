'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation'; // Import useParams
import Image from 'next/image';
import { getCharacterById } from '../../../services/ghibli';
import { characterImages } from '../../../../constant/index';

const CharacterDetail: React.FC = () => {
  const [character, setCharacter] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams(); // Get the dynamic parameter from the URL

  useEffect(() => {
    if (!id) return;

    console.log('Fetching character with ID:', id);

    const fetchCharacter = async () => {
      try {
        const characterData = await getCharacterById(id as string);
        console.log('Fetched Character Data:', characterData);
        setCharacter(characterData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching character:', error);
        setError('Failed to fetch character');
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500 text-xl">{error}</div>;
  }

  if (!character) {
    return <div className="flex items-center justify-center min-h-screen text-xl">Character not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
            <Image
              src={characterImages[character.name] || '/path/to/default.jpg'}
              alt={character.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-10 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">{character.name}</h1>
            <p className="text-gray-700 mb-4">Age: {character.age || 'N/A'}</p>
            <p className="text-gray-700 mb-4">Gender: {character.gender || 'N/A'}</p>
            {character.films && character.films.length > 0 && (
              <p className="text-gray-700 mb-4">Film: <a href={character.films[0]} target="_blank" className="text-blue-500 underline">Link</a></p>
            )}
            <p className="text-gray-700">
              <a href={character.url} target="_blank" className="text-blue-500 underline">More Details</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
