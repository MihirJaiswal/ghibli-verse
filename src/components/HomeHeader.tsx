import Image from 'next/image';
import React from 'react';
import HomeMobileNav from './HomeMobileNav';
import logo from '../../public/log.png';

const HomeHeader = () => {
  return (
    <header className='fixed bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 w-full top-0 z-50 border-b border-gray-600'>
      <div className='flex justify-between items-center px-5 lg:px-7.5 xl:px-10 py-4'>
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
