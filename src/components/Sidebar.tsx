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
        <div className="fixed left-0 top-[70px] h-screen max-sm:hidden lg:w-16 z-50">
            <section className="bg-white bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-700 h-full overflow-y-auto pt-28">
            <div 
                className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 opacity-50 z-0'
            ></div>
                <div className="flex flex-col gap-5 relative">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route;

                        return (
                            <Link key={link.label} href={link.route}>
                                <div className={cn("flex items-center justify-center relative bg-transparent py-2.5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white/50 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100", { 'bg-purple-1': isActive, 'bg-white/60': isActive })}>
                                    <Image src={link.imgUrl} alt={link.label} width={24} height={24} />
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
