import React, { useEffect, useState } from 'react';

const DriveInfo = ({ usedSpace, totalSpace }) => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark');

    // Atualiza o estado do tema ao montar o componente
    useEffect(() => {
        setIsDarkMode(localStorage.getItem('theme') === 'dark');
    }, []);

    const usedPercentage = (usedSpace / totalSpace) * 100;
    let color;

    if (usedPercentage >= 85) {
        color = '#dc3545';
    } else if (usedPercentage >= 70) {
        color = '#ffc107';
    } else {
        color = '#057EE8';
    }

    return (
        <div
            className={`w-full sm:w-80 min-w-fit fullhd:w-96 bg-white dark:bg-slate-800 transition-colors flex items-center p-4 space-x-4 text-white cursor-pointer  dark:hover:bg-slate-800/85`}
            onClick={() => {
                const newTheme = isDarkMode ? 'light' : 'dark';
                localStorage.setItem('theme', newTheme);
                setIsDarkMode(newTheme === 'dark');
            }}
        >
            <img src="../storage/Images/google-drive.png" alt="Drive Icon" className='w-8 h-8' />
            <div className='w-full h-full flex flex-col space-y-1 '>
                <span className='font-headers text-xs text-neutral-600 dark:text-gray-300'>
                    {usedSpace} GB de {totalSpace} GB usados
                </span>
                <div className='w-full h-full bg-neutral-100 dark:bg-slate-900 rounded-full relative overflow-hidden '>
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
                            background: `linear-gradient(to right, ${color} 0% ${(usedSpace / totalSpace) * 100}%, ${isDarkMode ? "#0F172A" : "#f0efed"} ${(usedSpace / totalSpace) * 100}% 100%)`,
                            borderRadius: '9999px',
                            boxShadow: '0 0 8px rgba(5, 126, 232, 0.5)',
                        }}

                    />
                </div>
            </div>
        </div>
    );
};

export default DriveInfo;
