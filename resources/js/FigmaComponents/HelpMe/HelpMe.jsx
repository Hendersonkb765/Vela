import React, { useState } from 'react';
import { GoCopilot } from 'react-icons/go';
import { IoMdHelp } from "react-icons/io";

import HelpModal from './HelpModal'; // Certifique-se de que o caminho está correto

const HelpMe = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className='fixed z-50 bottom-24 lg:bottom-8 right-8 flex items-center justify-center'>
            <div className='group flex items-center space-x-2'>
                <span className='invisible dark:text-gray-200 group-hover:visible transition-opacity duration-1000'>Precisa de ajuda?</span>
                <div
                    className='bg-white dark:bg-slate-600 cursor-pointer p-2 rounded-full group-hover:scale-110'
                    onClick={handleOpenModal}
                >
                    {/* <GoCopilot className='w-9 h-9 dark:text-gray-100' /> */}
                    <IoMdHelp className='w-9 h-9 dark:text-gray-100'/>
                </div>
            </div>
            <HelpModal isOpen={isModalOpen} onClose={handleCloseModal}/>
        </div>
    );
};

export default HelpMe;
