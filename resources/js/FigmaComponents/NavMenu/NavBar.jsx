import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/FigmaComponents/Dropdown';
import React from 'react';
import DarkModeToggleicon from '../DarkMode/DarkModeToggleIcon';
import DarkModeToggle from '../DarkMode/DarkModeToggle';
import Notification from '../Notification/Notification';

const NavBar = ({className, hideLogo=false, hideProfile=false, imgUrl, userName="UserName", role="Nenhum", email="Nenhum"}) => {

    return (
        <div className={`fixed h-16 sm:h-14 w-full py-2 sm:pr-4 bg-white dark:bg-gray-900 flex items-center z-40 shadow-sm  ${className}`}>
            <ApplicationLogo className={`${hideLogo && 'opacity-0'}`} />

                <div className='flex w-full space-x-4 justify-end items-center'>
                    {!hideProfile && <Notification />}
                    <DarkModeToggleicon />
                    {!hideProfile &&
                        <>
                            <div className='hidden sm:flex flex-col text-sm font-headers '>
                                <p className='dark:text-white'>{userName}</p>
                                <p className='text-neutralcolors-300 dark:text-neutralcolors-200'>{role}</p>
                            </div>
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <img
                                        className={`w-14 h-14 sm:w-12 sm:h-12 rounded-full  flex items-center justify-center object-cover  text-primary cursor-pointer`}
                                        src={imgUrl}
                                    />
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Link href={'settings'}>Configurações</Dropdown.Link>
                                    <DarkModeToggle />
                                    <Dropdown.Link className='!text-danger' href={'logout'} method="post" as={'button'}>Sair</Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                            {/* {!imgUrl && <span className="font-headers text-lg font-semibold">{firstletter}</span>}
                            </img> */}
                        </>
                    }
                </div>


        </div>
    );
}

export default NavBar;
