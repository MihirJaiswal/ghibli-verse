'use client';
import React from 'react';
import Image from 'next/image';
import { characterImages } from '../../../constant';
import { FaBirthdayCake, FaVenusMars, FaEye, FaTint, FaPaw  } from 'react-icons/fa';
import { colorMap } from '../../lib/colorMap'; 

interface CharacterCardProps {
  id: string;
  name: string;
  image: string;
  film: string;
  age?: number;
  gender?: string;
  species?: string;
  eyeColor?: string;
  hairColor?: string;
}

const CharacterCard: React.FC<CharacterCardProps> = ({
  id,
  name,
  image,
  film,
  age,
  gender,
  species,
  eyeColor,
  hairColor,
}) => {
  const imageUrl = characterImages[name] || '/path/to/default.jpg';

  const renderColorDot = (color: string | undefined) => {
    const colorHex = color ? colorMap[color] || color : 'transparent';
    return (
      <div
        style={{
          width: '16px',
          height: '16px',
          borderRadius: '50%',
          backgroundColor: colorHex,
          display: 'inline-block',
          marginLeft: '8px',
        }}
      />
    );
  };

  return (
    <div
      key={id}
      className="bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-40 border border-black shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer p-4"
    >
      <div className="relative w-full h-56 mb-4">
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
        {age !== undefined && (
          <div className="flex items-center mb-2">
            <FaBirthdayCake className="text-md text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800">Age:</span>
            <p className="text-gray-700 ml-2">{age || 'N/A'}</p>
          </div>
        )}
        {gender && (
          <div className="flex items-center mb-2">
            <FaVenusMars className="text-md text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800">Gender:</span>
            <p className="text-gray-700 ml-2">{gender}</p>
          </div>
        )}
        {species && (
          <div className="flex items-center mb-2">
            <FaPaw className="text-md text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800">Species:</span>
            <p className="text-gray-700 ml-2">{species}</p>
          </div>
        )}
        {eyeColor && (
          <div className="flex items-center mb-2">
             <FaEye className="text-md text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800">Eye Color:</span>
            {renderColorDot(eyeColor)}
          </div>
        )}
        {hairColor && (
          <div className="flex items-center mb-2">
               <FaTint className="text-md text-gray-600 mr-2" />
            <span className="font-semibold text-gray-800">Hair Color:</span>
            {renderColorDot(hairColor)}
          </div>
        )}
      </div>
    </div>
  );
};

export default CharacterCard;
