import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { GoCodeOfConduct, GoHome, GoTelescope, GoChecklist, GoGoal, GoUpload, GoQuestion, GoGear, GoSignOut } from "react-icons/go";



const SideMenu = ({className}) => {
    const [isOpen, setIsOpen] = useState(false)
    const currentRoute = usePage();
    const MenusOptions = [
        {title: "Dashboard", icon: <GoHome className='w-6 h-6'/>, route: 'dashboard'},
        // {title: "Jornada", icon: <GoTelescope className='w-6 h-6'/>, route: 'timeline'},
        {title: "Eixos", icon: <GoChecklist className='w-6 h-6'/>, route: 'axishub'},
        {title: "Atividades", icon: <GoCodeOfConduct className='w-6 h-6'/>, route: 'activityhub'},
        // {title: "Uploads", icon: <GoUpload className='w-6 h-6'/>, route: 'myuploads'},
        {title: "Configurações", icon: <GoGear className='w-6 h-6'/>, route: 'settings'},
        {title: "Suporte", icon: <GoQuestion className='w-6 h-6'/>, route: 'support'},
        {title: "Sair", icon: <GoSignOut className='w-6 h-6 '/>, route: 'logout', method: "post"}
    ]

    const MobileMenusOptions = [
        {title: "Dashboard", icon: <GoHome className='w-6 h-6'/>, route: 'dashboard'},
        // {title: "Jornada", icon: <GoTelescope className='w-6 h-6'/>, route: 'timeline'},
        {title: "Eixos", icon: <GoChecklist className='w-6 h-6'/>, route: 'axishub'},
        {title: "Atividades", icon: <GoCodeOfConduct className='w-6 h-6'/>, route: 'activityhub'},
        // {title: "Uploads", icon: <GoUpload className='w-6 h-6'/>, route: 'myuploads'},
        {title: "Configurações", icon: <GoGear className='w-6 h-6'/>, route: 'settings'},

    ]
    return (
        <>
            <div
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave ={() => setIsOpen(false)}
                className={`${isOpen ? 'w-60' : 'w-20'}  h-screen hidden lg:flex flex-col py-8 border-r dark:bg-gray-900 border-neutralcolors-100 dark:border-gray-800   duration-300 shadow-sm  ${className} `}
            >

                {/* <ApplicationLogo className='w-full mb-4 opacity-0 hidden sm:block'/> */}

                <ul className={`${isOpen ? 'w-60' : 'w-20'}  bg-white  fixed h-screen hidden lg:flex flex-col py-8 px-2 border-r dark:bg-gray-900 border-neutralcolors-100 dark:border-gray-800 duration-300 gap-y-2 ease-out z-40 ${className}`}>
                    {MenusOptions.map((menu, index) => (
                        <Link
                            key={index}
                            as='button'
                            className={`
                                dark:text-white
                                ${isOpen ? 'space-x-2 pl-4' : 'justify-center'} w-full h-14 flex items-center   text-base cursor-pointer hover:bg-neutralcolors  dark:hover:bg-gray-950 rounded-md duration-300 ease-in-out '
                                ${index == 4 && 'mb-auto'}
                                ${index === MenusOptions.length - 1 && 'hover:!bg-danger !text-danger hover:!text-white'}
                                ${menu.route === currentRoute.url.replace(/^\//, '') && '!bg-primary !text-white hover:!bg-primary-200'}
                            `}
                                                                            // adicionar lógica para deslogar
                            href={index === MenusOptions.length ? route('logout') : route(menu.route) }
                            method={menu.method ? menu.method : "get"}

                        >
                            <div >{menu.icon}</div>
                            <span className={`${!isOpen && 'hidden'} origin-left text-body transition duration-400 `}>{menu.title}</span>
                        </Link>
                    ))}
                </ul>
            </div>
            <div>
                <nav className="lg:hidden  fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-neutralcolors-100 dark:border-gray-800 duration-300 flex justify-around p-2 shadow-sm z-50">
                    <ul className='flex w-full justify-evenly space-x-2 items-center '>
                        {MobileMenusOptions.map((menu, index) => (
                            <Link
                                key={index}
                                className={` w-14 h-14 flex items-center justify-center text-base cursor-pointer dark:text-white  hover:bg-neutralcolors dark:hover:bg-gray-950 rounded-full duration-300 ease-in-out'
                                    ${menu.route === currentRoute.url.replace(/^\//, '') && 'sm:!bg-primary !text-primary sm:!text-white hover:!bg-primary-200'}
                                `}
                                href={route(menu.route) }

                            >
                                <div >{menu.icon}</div>
                                <span className={`${!isOpen && 'hidden'} origin-left duration-400  text-body`}>{menu.title}</span>
                            </Link>
                        ))}
                    </ul>
                </nav>
            </div>
        </>

    )

}


export default SideMenu
