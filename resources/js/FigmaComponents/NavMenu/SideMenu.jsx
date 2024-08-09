import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link, usePage } from '@inertiajs/react';
import React, { useState } from 'react';
import { GoHome, GoTelescope, GoChecklist, GoGoal, GoUpload, GoQuestion, GoGear, GoSignOut } from "react-icons/go";



const SideMenu = ({className}) => {
    const [open, setOpen] = useState(false)
    const currentRoute = usePage();
    const Menus = [
        {title: "Dashboard", icon: <GoHome className='w-6 h-6'/>, route: 'dashboardtest'},
        {title: "Jornada", icon: <GoTelescope className='w-6 h-6'/>, route: 'resources'},
        {title: "Eixos", icon: <GoChecklist className='w-6 h-6'/>, route: 'resources'},
        {title: "Tarefas", icon: <GoGoal className='w-6 h-6'/>, route: 'resources'},
        {title: "Uploads", icon: <GoUpload className='w-6 h-6'/>, route: 'resources'},
        {title: "Suporte", icon: <GoQuestion className='w-6 h-6'/>, route: 'resources'},
        {title: "Configurações", icon: <GoGear className='w-6 h-6'/>, route: 'resources'},
        {title: "Sair", icon: <GoSignOut className='w-6 h-6 '/>, route: 'logout'}
    ]
    return (
        <div
            onMouseEnter={() => setOpen(true)}
            onMouseLeave ={() => setOpen(false)}
            className={` ${open ? 'w-60' : 'w-20'} h-screen flex flex-col py-4 border-r border-neutralcolors-100 duration-300  ${className} `}
        >

            <ApplicationLogo className='w-full mb-4 opacity-0'/>


            <ul className='flex flex-col h-full px-2 gap-y-2'>
                {Menus.map((menu, index) => (
                    <Link
                        key={index}
                        className={`
                            ${open ? 'space-x-2 pl-4' : 'justify-center'} w-full h-14 flex items-center  text-base cursor-pointer hover:bg-neutralcolors rounded-md duration-300 ease-in-out'
                            ${index == 4 && 'mb-auto'}
                            ${index === Menus.length - 1 && 'hover:!bg-danger-0 text-danger-0 hover:!text-white'}
                            ${menu.route === currentRoute.url.replace(/^\//, '') && '!bg-primary !text-white hover:!bg-primary-200'}
                        `}
                                                                         // adicionar lógica para deslogar
                        href={index === Menus.length ? route('register') : route(menu.route) }

                    >
                        <div >{menu.icon}</div>
                        <span className={`${!open && 'hidden'} origin-left duration-400  text-body`}>{menu.title}</span>
                    </Link>
                ))}
            </ul>
        </div>
    )

}


export default SideMenu
