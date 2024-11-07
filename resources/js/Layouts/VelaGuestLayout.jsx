import HelpMe from '@/FigmaComponents/HelpMe/HelpMe';
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';
import { usePage } from '@inertiajs/react';

export default function VelaGuestLayout({ children}) {
    const { auth } = usePage().props;
    const { user } = auth;

    return (
        <div className='flex overflow-x-hidden'>
            <NavBar className="pr-8 z-50" imgUrl={user.profilePicture} userName={user.name} role={user.role} email={user.email} />
            <SideMenu className="pointer-events-none opacity-25 dark:opacity-100 [&>*]:dark:opacity-15"/>
            <HelpMe />
            <section className='flex-1 flex flex-col bg-neutralcolors-100 dark:bg-gray-950 lg:py-14 lg:pb-0'>
                {children}
            </section>
        </div>
    );
}
