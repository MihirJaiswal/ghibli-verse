import Image from 'next/image'
import React from 'react'
import HomeMobileNav from './HomeMobileNav'
import logo from '../../public/log.png'

const HomeHeader = () => {
  return (
    <div className='fixed w-full top-0 z-50 bg-mainb backdrop-blur-sm border-b border-gray-600 lg:backdrop-blur-sm md:hidden'>
        <div className='flex justify-between items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4'>
        <a href="/" className='flex items-center w-[12rem] xl:mr-8'>
            <Image
            alt='logo'
            src={logo}
            width={52}
            height={42}
            className='max-sm:size-10 m-2'
            />
            <p className='text-gray-200 font-bold text-2xl max-lg:hidden uppercase'>Ghibli Verse</p>
        </a>
      <div className='flex-between gap-5'>
         <HomeMobileNav/>
      </div>
    </div>  
    </div>
  )
}

export default HomeHeader