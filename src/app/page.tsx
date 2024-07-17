// src/app/page.tsx or src/pages/index.tsx

import HomeHeader from "@/components/HomeHeader";
import LandingPage from "@/components/LandingPage";
import HomePage from "@/components/Movie";
import Sidebar from "@/components/Sidebar";
import VideoGallery from "@/components/VideoGallery";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-bg1 bg-cover bg-center bg-no-repeat">
      <div className='fixed h-screen inset-0 bg-bg2 bg-cover bg-center opacity-30 blur-sm pointer-events-none flex items-center justify-center'></div>
      <div className="fixed inset-0 h-screen bg-bg2 bg-cover bg-center opacity-80 blur-sm pointer-events-none flex items-center justify-center"></div>
      <div className="fixed inset-0 h-screen bg-blue-500 bg-cover bg-center opacity-30 blur-sm pointer-events-none flex items-center justify-center"></div>
       <HomeHeader/>
        <LandingPage/>
        <VideoGallery/>
        <HomePage/>
    </div>
  );
}
