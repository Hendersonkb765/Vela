import { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import ActivityUploadModal from "./ActivityUploadModal";
import ActivityForm from "./ActivityForm";


export default function ActivityUpload({ }){
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
            <div
                onClick={openModal}
                className="w-3/4 sm:w-1/3 p-2 rounded-lg border-dashed border-2 flex items-center gap-4 cursor-pointer bg-primary-200/25 hover:bg-primary-200/10 dark:bg-primary-300/25 hover:dark:bg-primary-200/10  text-white hover:scale-105 transition-all"
            >
                <IoAddCircleOutline className="w-32 h-32 "/>
                <div className="flex flex-col">
                    <h2 className="font-headers font-bold text-lg ">Registrar Uma atividade</h2>
                    <p>
                        Registre aqui as atividades da sua organização
                        para montar sua linha do tempo
                    </p>
                </div>
            </div>
            <ActivityUploadModal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className="text-xl font-headers font-semibold mb-2 dark:text-gray-200">Registro da Atividade</h3>
                <p className="dark:text-gray-400 mb-4">Adicione as informações da sua atividade aqui.</p>
                <ActivityForm />
            </ActivityUploadModal>
        </>
    );

}
