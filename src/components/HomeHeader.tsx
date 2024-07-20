import Image from 'next/image';
import React from 'react';
import HomeMobileNav from './HomeMobileNav';
import logo from '../../public/log.png';

const HomeHeader = () => {
  return (
    <header className='fixed bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-full top-0 z-50 border-b border-gray-600'>
      <div 
        className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0'
      ></div>
      <div className='flex justify-between items-center px-5 lg:px-7.5 xl:px-10 py-4 relative'>
        <a href="/" className='flex items-center space-x-2'>
          <Image
            alt='Ghibli Verse Logo'
            src={logo}
            width={40}
            height={40}
            className='object-contain'
          />
          <p className='text-black font-bold text-2xl hidden lg:block uppercase'>
            Ghibli Verse
          </p>
        </a>
        <div className='flex items-center space-x-5'>
          <HomeMobileNav />
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
