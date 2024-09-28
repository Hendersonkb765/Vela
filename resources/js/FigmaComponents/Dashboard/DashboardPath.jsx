import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import WaveLine from './WaveLine';


export default function DashboardPath({titleTask}) {

    return (
        <div className='h-60 relative flex flex-col  justify-center sm:items-start items-center sm:h-72 fullhd:!h-2/5 bg-primary overflow-x-scroll dark:bg-primary-200'>
            <WaveLine />
            <div className='card mt-auto px-4 py-4 sm:p-4 sm:py-2 '>
                <h4 className='hidden sm:block font-headers text-white text-base '>Caminho planejado para você</h4>
                <div className='bg-white w-80 h-fit px-4 py-2 rounded-xl flex flex-col space-y-4 dark:bg-gray-800 dark:text-gray-300'>
                    <div>
                        <span className='font-headers text-xs'>Próxima Tarefa</span>
                        <h3 className='font-headers font-semibold text-sm  -mt-1'>{titleTask}</h3>
                    </div>
                    <PrimaryButton className="h-10 w-24 mb-auto" center={true} g>
                        Começar
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )

}
