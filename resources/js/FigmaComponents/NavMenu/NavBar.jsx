import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { GoHome, GoTelescope, GoChecklist, GoGoal, GoUpload, GoQuestion, GoGear, GoSignOut } from "react-icons/go";



const NavBar = ({}) => {

    return (
        <div className='fixed h-14 w-full py-2 pr-4 bg-white flex items-center z-40'>
            <ApplicationLogo className="w-"/>
            <div className='bg-neutralcolors-100 w-12 h-12 rounded-full ml-auto border-b border-neutral-400'></div>
        </div>
    )

}


export default NavBar
