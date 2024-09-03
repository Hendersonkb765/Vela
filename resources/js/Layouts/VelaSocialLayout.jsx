
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';
import { Link } from '@inertiajs/react';

export default function VelaSocialLayout({ children, imgUrl, userName }) {
    return (
        <div className='flex h-screen overflow-hidden'>
            <NavBar className="pr-8" imgUrl={imgUrl} userName={userName}  />
            <SideMenu  />
            <section className='flex-1 flex flex-col bg-neutralcolors-100 pt-14'>
                {children}
            </section>
        </div>
    );
}

