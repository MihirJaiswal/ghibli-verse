'use client';

import React, { useEffect, useState } from 'react';
import { fetchLocations } from '../../services/ghibli';
import LocationCard from './LocationCard';
import { locationImages } from '../../../constant/index';
import Link from 'next/link';
import { FaSearch } from 'react-icons/fa';
import {motion} from 'framer-motion'

interface Location {
  id: string;
  name: string;
  climate: string;
  terrain: string;
  surface_water: string;
}

const LocationsList: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [filteredLocations, setFilteredLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    const getLocations = async () => {
      setLoading(true);
      try {
        const data = await fetchLocations();
        setLocations(data);
        setFilteredLocations(data);
      } catch (error) {
        setError('Failed to fetch locations');
      } finally {
        setLoading(false);
      }
    };

    getLocations();
  }, []);

  useEffect(() => {
    setFilteredLocations(
      locations.filter(location =>
        location.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery, locations]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className='mx-2 md:mx-6 relative bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-black p-2 mb-12'>
      <motion.div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-40 z-0' 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeInOut" }}
      ></motion.div>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl text-center md:text-left md:text-3xl font-bold md:mt-12 mb-12 relative">Studio Ghibli Locations</h1>
        <div className="relative  mt-6">
          <input
            type="text"
            placeholder="Search Locations"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full p-2 border border-gray-800 rounded pl-10"
          />
          <FaSearch className="absolute left-2 top-2 h-6 text-gray-400" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredLocations.map((location) => (
              <div>
                <LocationCard
                  id={location.id}
                  name={location.name}
                  climate={location.climate}
                  terrain={location.terrain}
                  surface_water={location.surface_water}
                  image={locationImages[location.name] || '/path/to/default.jpg'} // Ensure locationImages is used properly
                />
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocationsList;
