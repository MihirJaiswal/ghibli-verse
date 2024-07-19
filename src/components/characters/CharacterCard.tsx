'use client';
import React from 'react';
import Image from 'next/image';
import { characterImages } from '../../../constant';

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  film: string;
  onClick: () => void;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ id, name, image, film, onClick }) => {
    const imageUrl = characterImages[name] || '/path/to/default.jpg'; // Ensure characterImages is used properly
  return (
    <div
      key={id}
      className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-black mt-10 shadow- overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out"
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={name}
        width={400}
        height={400}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{name}</h2>
        {film && (
          <p className="text-gray-700 mb-2">Film: {film}</p>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
