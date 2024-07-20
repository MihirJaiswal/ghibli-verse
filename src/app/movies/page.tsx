import FeaturedMoviesSlider from '@/components/movies/FeaturedMoviesSection'
import Footer from '@/components/Footer'
import HomeHeader from '@/components/HomeHeader'
import Movie from '@/components/movies/Movie'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import HeroMovie from '@/components/movies/HeroMovie'

const page = () => {
  return (
    <div className='relative min-h-screen'>
           <div className='fixed h-screen inset-0 bg-bg1 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
           <div className='fixed h-screen inset-0 bg-bg3 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
        <div>
        <Sidebar />
        <HomeHeader />
        <main className="md:ml-16 md:mt-16 mt-24">
          <HeroMovie/>
          <FeaturedMoviesSlider count={5} />
          <Movie/>
          <Footer/>
        </main>
      </div>
    </div>
  )
}

export default page