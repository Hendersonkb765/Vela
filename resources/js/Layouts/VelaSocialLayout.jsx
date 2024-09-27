
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';
import { Link } from '@inertiajs/react';
import { useEffect, useState } from 'react';

<<<<<<< Updated upstream
export default function VelaSocialLayout({ children, imgUrl, userName }) {
=======
export default function VelaSocialLayout({children}) {
    // const imgurl = "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm90byUyMGRvJTIwcGVyZmlsfGVufDB8fDB8fHww"
    const { auth } = usePage().props;
    const { user } = auth;

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
        <div className='flex h-screen overflow-hidden'>
            <NavBar className="pr-8" imgUrl={imgUrl} userName={userName}  />
=======

        <div className='flex overflow-x-hidden'>
            <NavBar className="pr-8" imgUrl={user.profilePicture} userName={user.name} role={user.roleInOrganization} email={user.email} />
>>>>>>> Stashed changes
            <SideMenu  />
            <section className='flex-1 flex flex-col bg-neutralcolors-100 dark:bg-gray-950 py-14 lg:pb-0'>
                {children}
            </section>
        </div>
    );
}

