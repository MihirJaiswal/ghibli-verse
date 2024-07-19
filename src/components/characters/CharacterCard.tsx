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
  const imageUrl = characterImages[name] || '/path/to/default.jpg';

  return (
    <div
      key={id}
      className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-black  shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer p-2"
      onClick={onClick}
    >
      <div className="relative w-full h-56">
        <Image
          src={imageUrl}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="border border-black"
        />
      </div>
      <div className="p-4">
        <h2 className="text-2xl font-semibold mb-2 text-gray-900">{name}</h2>
        {film && (
          <p className="text-gray-700 mb-2">Film: {film}</p>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
