
import HelpMe from '@/FigmaComponents/HelpMe/HelpMe';
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';
import {usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';

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
            <HelpMe />
            <section className='flex-1 flex flex-col bg-neutralcolors-100 dark:bg-gray-950 lg:py-14 lg:pb-0'>
                {children}
            </section>
        </div>
    );
}

