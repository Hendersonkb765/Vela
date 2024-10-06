import PrimaryButton from "../Button/PrimaryButton";
import { GoPersonAdd } from "react-icons/go";
import AddMemberModal from "./AddMemberModal";
import { useState } from "react";

const AddMember = ({}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir o modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <PrimaryButton onClick={openModal} gray rounded className='sm:!h-10 text-sm px-4'><GoPersonAdd className='w-6 h-6 sm:w-4 sm:h-4 text-sm'/><span className='text-xs sm:text-sm'>Adicionar Membro</span> </PrimaryButton>
            <AddMemberModal isOpen={isModalOpen} onClose={closeModal}/>
        </>


    );
};

export default AddMember;
