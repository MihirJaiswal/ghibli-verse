import LocationsList from '@/components/locations/LocationsList'
import HomeHeader from '@/components/HomeHeader'
import Sidebar from '@/components/Sidebar'
import React from 'react'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className=''>
           <div className='fixed h-screen inset-0 bg-bg1 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
           <div className='fixed h-screen inset-0 bg-bg3 bg-cover bg-center opacity-60 blur-sm pointer-events-none flex items-center justify-center'></div>
        <div>
        <Sidebar />
        <HomeHeader />
        <main className="md:ml-16 mt-24">
          <LocationsList/>
          <Footer/>
        </main>
      </div>
    </div>
  )
}

export default page