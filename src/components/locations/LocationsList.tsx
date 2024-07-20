'use client';

import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../../services/ghibli';
import LocationCard from './LocationCard';
import { locationImages } from '../../../constant/index';

interface Location {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
}

const LocationsList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getLocations = async () => {
      setLoading(true);
      try {
        const data = await fetchLocations();
        setLocations(data);
      } catch (error) {
        setError('Failed to fetch locations');
      } finally {
        setLoading(false);
      }
    };

    getLocations();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
   <div className='mx-2 md:mx-6 relative bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-black md:mt-16 mt-28 p-2'>
     <div className="container mx-auto p-4 ">
      <h1 className="text-3xl font-bold mb-4 mt-12">Studio Ghibli Locations</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {locations.map((location) => (
          <LocationCard
            key={location.id}
            id={location.id}
            name={location.name}
            climate={location.climate}
            terrain={location.terrain}
            surface_water={location.surface_water}
            image={locationImages[location.name] || '/path/to/default.jpg'} // Ensure locationImages is used properly
          />
        ))}
      </div>
    </div>
   </div>
  );
};

export default LocationsList;
