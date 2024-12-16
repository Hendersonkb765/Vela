import { Link } from '@inertiajs/react';
import React from 'react';
// Alterar depois
import { HiOutlineDocumentPlus } from "react-icons/hi2";



const RecordActivity = ({}) => {
    return (
        <Link className=' bg-primary hover:bg-primary-200 transition-colors flex items-center p-4 space-x-2 sm:space-x-4 text-white cursor-pointer fullhd:w-1/3' href={route('activityhub')}>
            <HiOutlineDocumentPlus className='w-8 h-8'/>
            <h4 className='font-headers text-base h-6 text-white text-nowrap'>Registrar Atividade </h4>
        </Link>
    );
}

export default RecordActivity;
