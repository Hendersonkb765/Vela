import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import SecondaryIconButton from '@/FigmaComponents/Button/SecondaryIconButton';
import DateInput from '@/FigmaComponents/Inputs/DateInput';
import SearchInput from '@/FigmaComponents/Inputs/SearchInput';
import React from 'react';
import { GoX } from 'react-icons/go';

export default function FilterModal({ isOpen, onClose, data, setData, minDate, maxDate }) {
    if (!isOpen) return null;

    const handleSearchChange = (value) => {
        setData('name', value);
    };

    return (
        <div className=" fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-4">
            <div className="min-w-fit bg-white p-8 rounded-lg sm:w-1/3 relative overflow-hidden dark:bg-slate-800 px-2">
            <div className={`flex flex-col p-4 space-y-6`}>
                <h3 className='text-xl font-bold font-headers dark:text-white text-neutral-800'>Filtros</h3>
                <div className="flex flex-col space-y-3">
                    <label className="text-sm dark:text-gray-300">Pesquise por Nome</label>
                    <SearchInput
                        onSearchChange={handleSearchChange}
                        placeholder="Busque por nome..."
                        className='min-w-64 h-12'
                    />
                </div>
                <div className="flex flex-col space-y-6">
                    <div className="flex flex-col space-y-3">
                        <label className="text-sm dark:text-gray-300">De: </label>
                        <DateInput
                            id="startDate"
                            name="startDate"
                            value={data.startDate}
                            className="mt-1 block !min-w-48 h-12"
                            autoComplete="startDate"
                            isFocused={true}
                            onChange={(e) => setData('startDate', e.target.value)}
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                    </div>

                    <div className="flex flex-col space-y-3">
                        <label className="text-sm dark:text-gray-300">Até: </label>
                        <DateInput
                            id="endDate"
                            name="endDate"
                            value={data.endDate}
                            className="mt-1 block !min-w-48 h-12"
                            autoComplete="endDate"
                            isFocused={true}
                            onChange={(e) => setData('endDate', e.target.value)}
                            minDate={minDate}
                            maxDate={maxDate}
                        />
                    </div>

                    <PrimaryButton center className='!text-lg h-12'>
                            Filtrar
                    </PrimaryButton>
                </div>
            </div>

                <SecondaryIconButton onClick={onClose}  className=' border-1 !border-danger !text-danger hover:!bg-danger absolute -top-2 -right-3 group !rounded-full'>
                    <GoX className='w-6 h-6 text-danger group-hover:!text-white rounded-full' />
                </SecondaryIconButton>
            </div>
        </div>
    );
}
