import AllCharacters from '@/components/characters/AllCharacters'
import CharacterGrid from '@/components/characters/CharacterGrid'
import Footer from '@/components/Footer'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import { characterMovies } from '../../../constant/index';
import HomeHeader from '@/components/HomeHeader'
import CharacterCarousel from '@/components/characters/CharacterCarousel'

const page = () => {
  const characterNames = Object.keys(characterMovies);
  return (
    <div>
    <div className='fixed h-screen inset-0 bg-gray-900 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
    <div className='fixed h-screen inset-0 bg-bg2 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
    <div>
    <Sidebar />
    <HomeHeader/>
    <main className="md:ml-16 mt-24">
      <CharacterCarousel/>
      <CharacterGrid/>
      <AllCharacters names={characterNames} />
      <Footer/>
    </main>
  </div>
    </div>
  )
}

export default page