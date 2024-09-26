import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import React, { useState } from 'react';
import { IoMdMore, IoIosAdd} from "react-icons/io";
import { CiImageOn } from "react-icons/ci";




const OscProfileCard = ({ OscProfilePicture, OscName, OscLevel=0, Progress}) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });


    return (
        <div className='sm:h-52 bg-white flex items-center p-4 space-x-4 dark:bg-slate-800'>
            <div className="w-20 h-20 sm:w-28 sm:h-28 relative flex items-center justify-center  rounded-full cursor-pointer "
                // Resolver bug que na troca de temas, a barra se progresso só muda ao recarregar página
                style={{
                    background: `conic-gradient(from 150deg, #057EE8 0% ${Progress * 100}%,  ${isDarkMode ? "#111827" : "#f0efed"}  ${Progress * 100}% 100%)`,
                }}
            >
                {OscProfilePicture ?
                    <img
                        src={OscProfilePicture}
                        alt="Foto de Perfil da Organização"
                        className="w-16 h-16 sm:min-w-24 sm:h-24 max-w-24 max-h-24 rounded-full bg-white dark:bg-slate-800 object-contain z-10 p-2"
                    />
                    :
                    <div className="flex justify-center items-center min-w-24 h-24 rounded-full bg-white object-cover z-10">
                        <CiImageOn className='w-12 h-12 text-neutralcolors-200'/>
                    </div>
                }

                <div className="absolute bottom-0 right-0 w-8 h-8 bg-white text-primary flex items-center justify-center rounded-full text-sm font-bold z-20 shadow-sm shadow-neutralcolors-200 dark:bg-slate-800 dark:shadow-gray-900">
                    {OscLevel}
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <h2 className='text-sm truncate font-headers sm:text-lg text-uppercase max-w-96 dark:text-gray-200 '>{OscName}</h2>
                <div className='flex space-x-2'>
                    <PrimaryButton gray rounded className='sm:h-8 text-sm '><span className='hidden sm:block'>Editar Perfil</span> <IoMdMore className='w-6 h-6 sm:w-4 sm:h-4 text-sm'/></PrimaryButton>
                    {/* Provisorio */}
                    <PrimaryButton gray rounded className='sm:!h-8 text-sm'><span className='hidden sm:block'>Adicionar Membro</span> <IoIosAdd className='w-6 h-6 sm:w-4 sm:h-4 text-sm'/></PrimaryButton>
                </div>
            </div>
        </div>
    );
}

export default OscProfileCard;
