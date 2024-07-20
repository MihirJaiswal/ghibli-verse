import LocationsList from '@/components/locations/LocationsList'
import HomeHeader from '@/components/HomeHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Footer from '@/components/Footer'
import LocationCarousel from '@/components/locations/LocationCarousel'

const page = () => {
  return (
    <div className=''>
         <div className="fixed bottom-0 h-10 z-40 w-full bg-yellow-300 bg-clip-padding backdrop-filter bg-opacity-5 text-white shadow-md hidden md:block border-t border-gray-600"></div>
         <div className="fixed top-0 h-10 z-40 w-full bg-yellow-300 bg-clip-padding backdrop-filter bg-opacity-5 text-white shadow-md hidden md:block border-b border-gray-600"></div>
           <div className='fixed h-screen inset-0 bg-bg1 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
           <div className='fixed h-screen inset-0 bg-bg3 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
        <div className="flex h-screen">
        <Sidebar />
        <main className="flex-1 overflow-y-auto">
          <HomeHeader />
          <LocationCarousel/>
          <LocationsList/>
          <Footer/>
        </main>
      </div>
    </div>
  )
}

export default page