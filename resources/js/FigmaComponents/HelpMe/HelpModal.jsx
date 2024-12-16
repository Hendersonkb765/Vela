import React, { useState } from 'react';
import SecondaryIconButton from '@/FigmaComponents/Button/SecondaryIconButton';
import { GoX } from 'react-icons/go';
import { Inertia } from '@inertiajs/inertia';

export default function HelpModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        tipoProblema: '',
        descricao: '',
    });

    if (!isOpen) return null; // Se o modal não estiver aberto, não renderiza nada

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post(route('userquestion.store'), {
            data: formData,
            onSuccess: () => {
                setFormData({
                    tipoProblema: '',
                    descricao: '',
                });
            },
        });
    };

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-2 sm:px-0">
            <div className="w-11/12 bg-white p-8 rounded-lg sm:w-1/3 max-w-[448px] sm:min-w-fit relative overflow-hidden dark:bg-slate-800 dark:text-gray-100">
                <h2 className="text-lg font-bold">Reportar Problema</h2>
                <form method='post' onSubmit={handleSubmit}>
                    @csrf
                    <label className="block mt-4">
                        Tipo de Problema:
                        <input
                            name='tipoProblema'
                            type="text"
                            value={formData.tipoProblema}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border rounded p-2 dark:border-slate-500 dark:bg-gray-900"
                        />
                    </label>

                    <label className="block mt-4">
                        Descrição:
                        <textarea
                            name='descricao'
                            value={formData.descricao}
                            onChange={handleInputChange}
                            className="mt-1 block w-full border rounded p-2 dark:border-slate-500 dark:bg-gray-900"
                        />
                    </label>

                    <div className="mt-4">
                        <button type="submit" className="bg-blue-500 w-32 h-12 text-white rounded px-4 py-2">
                            Enviar
                        </button>
                        <button onClick={onClose} type="button" className="ml-2 text-gray-600 rounded px-4 py-2">
                            Cancelar
                        </button>
                    </div>
                </form>
                <SecondaryIconButton
                    onClick={onClose}
                    className='border-1 !border-danger !text-danger hover:!bg-danger absolute -top-2 -right-2 group !rounded-full'
                >
                    <GoX className='w-6 h-6 text-danger group-hover:!text-white rounded-full' />
                </SecondaryIconButton>
            </div>
        </div>
    );
}
