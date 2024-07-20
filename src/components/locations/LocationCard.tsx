import React from 'react';
import Image from 'next/image';

interface LocationCardProps {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
  image: string;
}

const LocationCard: React.FC<LocationCardProps> = ({ id, name, climate, terrain, surface_water, image }) => {
  return (
    <div className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-black mt-10 shadow- overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out p-2">
      <Image src={image} alt={name} width={400} height={250} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">{name}</h2>
        <p className="text-gray-700 mb-2">Climate: {climate}</p>
        <p className="text-gray-700 mb-2">Terrain: {terrain}</p>
        <p className="text-gray-700 mb-2">Surface Water: {surface_water}%</p>
      </div>
    </div>
  );
};

export default LocationCard;
