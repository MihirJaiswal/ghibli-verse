import FeaturedMoviesSlider from '@/components/movies/FeaturedMoviesSection'
import Footer from '@/components/Footer'
import HomeHeader from '@/components/HomeHeader'
import Movie from '@/components/movies/Movie'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import HeroMovie from '@/components/movies/HeroMovie'
import MovieC from '@/components/movies/MovieC'

const page = () => {
  return (
    <div className='relative min-h-screen'>
           <div className='fixed h-screen inset-0 bg-gray-900 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
           <div className='fixed h-screen inset-0 bg-bg2 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
        <div>

        <Sidebar />
        <HomeHeader />
        <main className="md:ml-16 mt-24">
          <HeroMovie/>
          <MovieC/>
          <FeaturedMoviesSlider count={5} />
          <Movie/>
          <Footer/>
        </main>
      </div>
    </div>
  )
}

export default page