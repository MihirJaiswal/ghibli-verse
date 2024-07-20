// src/pages/index.tsx or src/app/page.tsx

import AboutUs from "@/components/About";
import Footer from "@/components/Footer";
import HomeHeader from "@/components/HomeHeader";
import InteractiveTimeline from "@/components/InteractiveTimeline";
import LandingPage from "@/components/LandingPage";
import Sidebar from "@/components/Sidebar";
import VideoGallery from "@/components/VideoGallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-bg1 bg-cover bg-center bg-no-repeat">
      {/* Background overlays */}
      <div className='fixed inset-0 bg-bg2 bg-cover bg-center opacity-30 blur-sm pointer-events-none'></div>
      <div className="fixed inset-0 bg-bg2 bg-cover bg-center opacity-80 blur-sm pointer-events-none"></div>
      <div className="fixed inset-0 bg-blue-500 bg-cover bg-center opacity-30 blur-sm pointer-events-none"></div>
      
      <div className="">
        <Sidebar />
        <HomeHeader />
        <main className="md:ml-20 md:mt-6 mt-24">
         
          <LandingPage />
          <AboutUs />
          <VideoGallery />
          <InteractiveTimeline />
          <Footer />
        </main>
      </div>
    </div>
  );
}
