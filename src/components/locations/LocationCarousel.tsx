'use client';

import React, { useState } from 'react';
import { featuredImages } from '../../../constant/index';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const LocationCarousel: React.FC = () => {
  // Sample location names to fetch images from locationImages
  const locationNames = Object.keys(featuredImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? locationNames.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === locationNames.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 md:mt-0 mt-16 mx-2'>
      <div className='relative bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-black p-4 shadow-md md:w-[1140px] md:h-[550px]'>
        <div>
        <h1 className="text-2xl text-center md:text-left md:text-3xl font-bold my-4">Some Locations</h1>
        </div>
        <Image
          src={featuredImages[locationNames[currentIndex]]}
          alt={locationNames[currentIndex]}
          width={1100}
          height={500}
          className='w-full h-[450px] object-cover border border-black'
        />
        <div className='absolute top-1/2 left-4 transform -translate-y-1/2'>
          <button
            onClick={handlePrevious}
            className='p-2 bg-white text-black rounded-full transition md:ml-4 ml-1'
          >
            <FaChevronLeft size={24} />
          </button>
        </div>
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2'>
          <button
            onClick={handleNext}
            className='p-2 bg-white text-black rounded-full transition md:mr-4 mr-1'
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationCarousel;
