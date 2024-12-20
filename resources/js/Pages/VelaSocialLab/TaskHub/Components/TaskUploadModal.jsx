import SecondaryIconButton from '@/FigmaComponents/Button/SecondaryIconButton';
import React from 'react';
import { GoX } from 'react-icons/go';

export default function TaskUploadModal({ isOpen, onClose, children }) {
    if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg w-1/3 relative overflow-hidden dark:bg-slate-800">
                {children}

                <SecondaryIconButton onClick={onClose}  className=' border-1 !border-danger !text-danger hover:!bg-danger absolute -top-2 -right-2 group !rounded-full'>
                    <GoX className='w-6 h-6 text-danger group-hover:!text-white rounded-full' />
                </SecondaryIconButton>
            </div>
        </div>
    );
}
