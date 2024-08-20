import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { GoHome, GoTelescope, GoChecklist, GoGoal, GoUpload, GoQuestion, GoGear, GoSignOut } from "react-icons/go";

const NavBar = ({className, hideLogo, hideProfile, imgUrl, userName, firstletter}) => {

    return (
        <div className={`fixed h-14 w-full py-2 pr-4 bg-white flex items-center z-40 ${className}`}>
            <ApplicationLogo className={`${hideLogo && 'opacity-0'}`} />
            <div className='flex w-full space-x-2 justify-end items-center'>
                <p>{userName}</p>
                <div
                    className={`w-12 h-12 rounded-full  flex items-center justify-center bg-cover bg-center text-primary`}
                    style={{backgroundImage: imgUrl ? `url(${imgUrl}) border border-primary` : 'none', backgroundColor: imgUrl ? 'transparent' : 'transparent' }}
                >
                    {!imgUrl && <span className="font-headers text-lg font-semibold">{firstletter}</span>}
                </div>
            </div>
        </div>
    );
}

export default NavBar;
