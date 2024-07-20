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
        <div className="fixed left-0 top-[70px] h-screen max-sm:hidden lg:w-16">
            <section className="bg-blue-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-700 h-full overflow-y-auto pt-28">
                <div className="flex flex-col gap-5">
                    {sidebarLinks.map((link) => {
                        const isActive = pathname === link.route;

                        return (
                            <Link key={link.label} href={link.route}>
                                <div className={cn("flex items-center justify-center relative bg-transparent py-2.5 transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-white/50 before:transition-transform before:duration-300 before:content-[''] hover:text-white before:hover:scale-x-100", { 'bg-purple-1': isActive, 'bg-white': isActive })}>
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
