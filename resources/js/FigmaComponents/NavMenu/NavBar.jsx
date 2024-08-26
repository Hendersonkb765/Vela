import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import React from 'react';
import { GoHome, GoTelescope, GoChecklist, GoGoal, GoUpload, GoQuestion, GoGear, GoSignOut } from "react-icons/go";

const NavBar = ({className, hideLogo=false, hideProfile=false, imgUrl, userName, role="Nenhum"}) => {

    return (
        <div className={`fixed h-14 w-full py-2 pr-4 bg-white flex items-center z-40 ${className}`}>
            <ApplicationLogo className={`${hideLogo && 'opacity-0'}`} />
            <div className='flex w-full space-x-4 justify-end items-center'>
                <div className='flex flex-col text-sm font-headers'>
                    <p>{userName}</p>
                    <p className='text-neutralcolors-300'>{role}</p>
                </div>

                <img
                    className={`w-12 h-12 rounded-full  flex items-center justify-center object-cover  text-primary cursor-pointer`}
                    src={imgUrl}
                />
                    {/* {!imgUrl && <span className="font-headers text-lg font-semibold">{firstletter}</span>}
                </img> */}
            </div>
        </div>
    );
}

export default NavBar;
