import React, { useEffect, useState } from 'react';
import { GoSun, GoMoon } from "react-icons/go";

const DarkModeToggleIcon = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <button
            onClick={toggleDarkMode}
            className="block px-2 py-2 rounded-full bg-neutralcolors-100 text-gray-700 dark:text-yellow-300 hover:bg-gray-100 dark:bg-slate-700 focus:outline-none transition-all  "
        >
            {isDarkMode ? <GoMoon /> : <GoSun />}
        </button>
    );
};

export default DarkModeToggleIcon;
