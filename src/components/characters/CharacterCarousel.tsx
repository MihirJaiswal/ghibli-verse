'use client';

import React, { useState } from 'react';
import { characterImages } from '../../../constant/index'; // Ensure you have characterImages mapping
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const CharacterCarousel: React.FC = () => {
  // Sample character names to fetch images from characterImages
  const characterNames = Object.keys(characterImages);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? characterNames.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === characterNames.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 mx-2 mt-16 md:mt-0'>
      <div className='relative bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-black p-4 shadow-md md:w-[1140px] md:h-[550px]'>
      <div>
        <h1 className="text-2xl text-center md:text-left md:text-3xl font-bold my-4">Characters</h1>
        </div>
        <div className='relative w-full h-full'>
          <Image
            src={characterImages[characterNames[currentIndex]]}
            alt={characterNames[currentIndex]}
            width={1100}
            height={500}
            className='w-full h-[450px] object-contain border border-black'
          />
        </div>
        <div className='absolute top-1/2 left-4 transform -translate-y-1/2'>
          <button
            onClick={handlePrevious}
            className='p-2 bg-white text-black rounded-full transition md:ml-4 ml-1'
          >
            <FaChevronLeft size={24} />
          </button>
        </div>
        <div className='absolute top-1/2 right-4 transform -translate-y-1/2 md:mr-4 mr-1'>
          <button
            onClick={handleNext}
            className='p-2 bg-white text-black rounded-full transition'
          >
            <FaChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CharacterCarousel;
