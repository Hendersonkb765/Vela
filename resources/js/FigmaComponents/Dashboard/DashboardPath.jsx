import React from 'react';
import PrimaryButton from '../Button/PrimaryButton';
import WaveLine from './WaveLine';


export default function DashboardPath({tituloTarefa="Consultar um contador"}) {
    return (
        <div className='flex flex-col space-x-4 w-full h-64 bg-primary'>
            <WaveLine />
            <div className='card h-64 flex flex-col justify-end p-2'>
                <h4 className='font-headers text-white text-base'>Caminho planejado para você</h4>
                <div className='bg-white w-80 h-fit px-4 py-2 rounded-xl flex flex-col space-y-4'>
                    <div>
                        <span className='font-headers text-xs'>Próxima Tarefa</span>
                        <h3 className='font-headers font-semibold text-sm  -mt-1'>{tituloTarefa}</h3>
                    </div>
                    <PrimaryButton className="h-10 w-24 mb-auto" center={true} g>
                        Começar
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )

}
