import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import React from 'react';
import { IoMdMore, IoIosAdd} from "react-icons/io";
import { CiImageOn } from "react-icons/ci";




const OscProfileCard = ({ OscProfilePicture, OscName, OscLevel=0, Progress}) => {
    
    return (
        <div className='h-52 bg-white flex items-center p-4 space-x-4 '>
            <div className="relative flex items-center justify-center w-28 h-28 rounded-full cursor-pointer"
                style={{
                    background: `conic-gradient(from 150deg, #057EE8 0% ${Progress * 100}%, #f0efed ${Progress * 100}% 100%)`,
                }}
            >
                {OscProfilePicture ?
                    <img
                        src={OscProfilePicture}
                        alt="Foto de Perfil da Organização"
                        className="min-w-24 h-24 max-w-24 max-h-24 rounded-full bg-white object-contain z-10 p-2"
                    />
                    :
                    <div className="flex justify-center items-center min-w-24 h-24 rounded-full bg-white object-cover z-10">
                        <CiImageOn className='w-12 h-12 text-neutralcolors-200'/>
                    </div>
                }

                <div className="absolute bottom-0 right-0 w-8 h-8 bg-white text-primary flex items-center justify-center rounded-full text-sm font-bold z-20 shadow-sm shadow-neutralcolors-200">
                    {OscLevel}
                </div>
            </div>
            <div className='flex flex-col space-y-2'>
                <h2 className='truncate font-headers text-lg text-uppercase  max-w-96'>{OscName}</h2>
                <div className='flex space-x-2'>
                    <PrimaryButton gray rounded className='!h-8 text-sm'>Editar Perfil <IoMdMore className='w-4 h-4 text-sm'/></PrimaryButton>
                    {/* Provisorio */}
                    <PrimaryButton gray rounded className='!h-8 text-sm'>Adicionar Membro <IoIosAdd className='w-4 h-4 text-sm'/></PrimaryButton>
                </div>
            </div>
        </div>
    );
}

export default OscProfileCard;
