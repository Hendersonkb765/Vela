import ApplicationLogo from '@/Components/ApplicationLogo';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';
import { Link } from '@inertiajs/react';

export default function ProfileSetupLayout({ children, hideProfile=true, imgUrl, userName}) {
    return (
        <div className='flex overflow-hidden'>
            <NavBar className="pr-8" hideLogo hideProfile={hideProfile} imgUrl={imgUrl} userName={userName}/>
            <SideMenu className="opacity-5 pointer-events-none"/>
            <section className='flex-1 flex flex-col pt-14 overflow-y-scroll  space-y-4 '>
                {children}
            </section>
        </div>
    );
}
