import PrimaryButton from '@/Components/PrimaryButton';
import { Link } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { GoLock } from 'react-icons/go';

const DriveInfo = ({ storageDrive ,usedSpace=0,totalSpace=0,isPresident=false }) => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    if(storageDrive){
        usedSpace = storageDrive.storageUsage;
        totalSpace = storageDrive.storageLimit;
    }
    // Atualiza o estado do tema ao montar o componente
    useEffect(() => {
        setIsDarkMode(localStorage.getItem('theme') === 'dark');
    }, []);
    const usedPercentage = (usedSpace / totalSpace) * 100;
    let color;

    if (usedPercentage >= 85) {
        color = '#dc3545'; // Vermelho para uso acima de 85%
    } else if (usedPercentage >= 70) {
        color = '#ffc107'; // Amarelo para uso acima de 70%
    } else {
        color = '#057EE8'; // Azul para uso abaixo de 70%
    }


    const statusStorageDrive = ()=>{
        return(
        <div
        className="{w-full h-16 lg:w-80 min-w-fit fullhd:w-96 rounded-xl bg-white dark:bg-slate-800 transition-colors flex items-center p-4 space-x-4 text-white cursor-pointer dark:hover:bg-slate-800/85 }"
    >
        <>
        <img src="../storage/Images/google-drive.png" alt="Drive Icon" className='w-8 h-8' />
        <div className='w-full h-full flex flex-col space-y-1'>
            <span className='font-headers text-xs text-neutral-600 dark:text-gray-300'>
                {usedSpace} GB de {totalSpace} GB usados
            </span>
            <div className='w-full h-full bg-neutral-100 dark:bg-slate-900 rounded-full relative overflow-hidden'>
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(to right, ${isDarkMode ? "#0F172A" : "#f0efed"} 0%, ${isDarkMode ? "#0F172A" : "#f0efed"} 100%)`,
                        borderRadius: '9999px',
                    }}
                />
                <div
                    style={{
                        position: 'absolute',
                        inset: 0,
                        background: `linear-gradient(to right, ${color} 0%, ${color} ${usedPercentage}%, ${isDarkMode ? "#0F172A" : "#f0efed"} ${usedPercentage}% 100%)`,
                        borderRadius: '9999px',
                        boxShadow: '0 0 8px rgba(5, 126, 232, 0.5)',
                    }}
                />
            </div>
        </div>
    </>
    </div>);
    }
    const logarDrive = ()=>{
        return (<div
        className="{w-full h-16 lg:w-80 min-w-fit fullhd:w-96 rounded-xl bg-white dark:bg-slate-800 transition-colors flex items-center p-4 space-x-4 text-white cursor-pointer dark:hover:bg-slate-800/85}"
    ><>
        <div className='bg-gray-200 text-neutral-800 dark:text-gray-100 dark:bg-slate-900 p-2 rounded-full '>
            <GoLock className='w-6 h-6'/>
        </div>
        <a
            //as='button'
            //method='GET'
            href={route('osc.redirect')}
            className='flex px-4 py-2 text-lg items-center w-full justify-start rounded-lg h-12 min-w-60 bg-neutral-300 text-neutral-800 hover:bg-neutral-300/80  gap-4 dark:bg-slate-700 dark:!text-gray-200 dark:hover:bg-slate-900 group'
        >
            Entrar com o Google <FcGoogle className='w-6 h-6 rounded-full '></FcGoogle>
        </a>
        </>
</div>);
        }

    return <>
        { storageDrive ? statusStorageDrive() : logarDrive() }
    </>


};

export default DriveInfo;
