'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { characterData } from '../../../constant/index';

const CharacterCarousel: React.FC = () => {
  const characterNames = Object.keys(characterData);
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

  const currentCharacter = characterData[characterNames[currentIndex]];

  return (
    <div className='flex flex-col items-center justify-center h-[80vh] mx-2 md:mx-6 mt-28 mb-6 md:mt-16 md:mb-16'>
      <div className='relative border border-black p-4 shadow-md md:w-full h-full'>
        <div className='absolute inset-0 bg-blue-500 opacity-50 z-0'></div>
        <div className='absolute inset-0 bg-red-500 opacity-50 z-0' style={{ clipPath: 'polygon(75% 0, 100% 0, 100% 100%, 31% 100%)' }}></div>
       <div className='hidden md:flex items-center justify-center'>
       <Image
          src="/logo.svg"
          alt="Ghibli Logo"
          width={1920}
          height={1080}
          quality={100}
          className="object-cover absolute left-44 top-16 inset-0  opacity-10 md:w-2/3"
        />
       </div>
        <div className='relative z-10 flex flex-col items-center h-full'>
          <div className='relative flex flex-col items-start md:items-start w-full h-full'>
            <h1 className="absolute top-2 md:top-4 left-16 md:left-4 text-4xl md:text-5xl font-bold text-black z-20">
              {characterNames[currentIndex]}
            </h1>
            <p className='absolute bottom-0 w-80 right-4 text-justify text-black z-20 hidden md:block'>
              {currentCharacter.description}
            </p>
            <div className='relative w-full h-full flex justify-center items-center'>
              <Image
                src={currentCharacter.image}
                alt={characterNames[currentIndex]}
                width={400}  
                height={400} 
                className='object-contain'
              />
              <div className='absolute top-2 right-2 text-2xl z-20 font-extrabold border rounded-full px-4 py-2.5 bg-white'>
                {currentCharacter.gender === 'Female' ? '♀️' : '♂️'}
              </div>
              <div className='absolute bottom-2 left-2 text-xl bg-white bg-opacity-70 p-2 rounded z-20'>
                {currentCharacter.movie}
              </div>
            </div>
          </div>
          <div className='absolute top-1/2 md:left-4 left-0 transform -translate-y-1/2 z-10'>
            <button
              onClick={handlePrevious}
              className='p-2 bg-white text-black rounded-full transition md:ml-4 '
            >
              <FaChevronLeft size={24} />
            </button>
          </div>
          <div className='absolute top-1/2 md:right-4 right-0 transform -translate-y-1/2 z-10 md:mr-4 '>
            <button
              onClick={handleNext}
              className='p-2 bg-white text-black rounded-full transition'
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterCarousel;
