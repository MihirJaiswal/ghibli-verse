// src/app/page.tsx or src/pages/index.tsx

import LandingPage from "@/components/LandingPage";
import HomePage from "@/components/Movie";
import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className='fixed h-screen inset-0 bg-bg2 bg-cover bg-center opacity-30 blur-sm pointer-events-none flex items-center justify-center'></div>
        <LandingPage/>
        <HomePage/>
    </div>
  );
}
