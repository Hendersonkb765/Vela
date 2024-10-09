import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import React, { useState } from 'react';
import { GoPeople } from "react-icons/go";
import Members from './ManageTeamMembers';

const AddMemberCard = () => {
    // Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir e fechar o modal
    const openModal = () => {
        setIsModalOpen(true);
        get(route('invitation.list'));
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <div
                onClick={openModal}  // Evento de clique para abrir o modal
                className="w-full sm:h-40 my-4 relative lg:w-80 min-w-fit fullhd:w-96 sm:rounded-xl bg-white dark:bg-slate-800 flex flex-col items-start justify-start px-6 py-4 space-y-4 text-white cursor-pointer lg:hover:scale-110 transition group overflow-hidden rounded-lg"
            >
                <div>
                    <h2 className="font-headers font-medium text-neutral-900 dark:text-white">Membros</h2>
                    <p className="font-body text-sm dark:text-gray-200 text-neutral-600">Veja todos os membros da organização</p>
                </div>
                <PrimaryButton className='h-10'>Ver Membros</PrimaryButton>
                <GoPeople className="w-24 h-24 absolute -bottom-4 right-0 z-0 brightness-75 rounded-full lg:group-hover:text-primary lg:group-hover:brightness-125 transition-colors" />
            </div>


            <Members isOpen={isModalOpen} onClose={closeModal}/>

        </>
    );
};

export default AddMemberCard;
