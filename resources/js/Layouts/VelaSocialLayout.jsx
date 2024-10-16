
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';
import {usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { GoCopilot } from "react-icons/go";

export default function VelaSocialLayout({children}) {

    const { auth } = usePage().props;
    const { user } = auth;
    console.log(user);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    return (

        <div className='flex overflow-x-hidden'>
            <NavBar className="pr-8 z-50" imgUrl={user.profilePicture} userName={user.name} role={user.role} email={user.email} />
            <SideMenu  />
            <div className='fixed bottom-8 right-8 flex items-center justify-center space-x-2 group'>
                <span className='invisible dark:text-gray-200 group-hover:visible transition-opacity duration-1000'>Precisa de ajuda?</span>
                <div className='bg-white dark:bg-slate-600 cursor-pointer p-2 rounded-full  group-hover:scale-110 '>
                    <GoCopilot className='w-9 h-9 dark:text-gray-100'></GoCopilot>
                </div>
            </div>
            <section className='flex-1 flex flex-col bg-neutralcolors-100 dark:bg-gray-950 lg:py-14 lg:pb-0'>
                {children}
            </section>
        </div>
    );
}

