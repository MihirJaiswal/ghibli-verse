'use client'
// Import necessary modules and components
import React from 'react';
import { sidebarLinks } from '../../constant/index';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';

function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="sticky left-0 top-0 h-screen max-sm:hidden lg:w-[200px]">
            <section className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-700 h-full overflow-y-auto p-6 pt-24 text-white">
                <div className="flex flex-col items-center mb-4">
                    <Image src="/log.png" alt="Sidebar Image" width={80} height={80} className="rounded-full mb-4" />
                    <h1 className="text-xl font-bold text-black">Ghibli-Verse</h1>
                </div>
                <div className="flex flex-col gap-5">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route;

                        return (
                            <Link key={link.label} href={link.route}>
                                <div className={cn("flex gap-3 items-center justify-start relative bg-transparent py-2.5 px-4 text-white transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white/50 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100", { 'bg-purple-1': isActive, 'bg-white': isActive })}>
                                    <Image src={link.imgUrl} alt={link.label} width={20} height={20} />
                                    <p className="text-md text-black font-semibold max-lg:hidden">{link.label}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}

export default Sidebar;
