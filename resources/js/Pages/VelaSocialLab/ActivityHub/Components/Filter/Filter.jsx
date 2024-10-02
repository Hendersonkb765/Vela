import { useState } from "react";
import FilterForm from "./FilterForm";
import { useForm } from "@inertiajs/react";
import FilterModal from "./FilterModal";
import PrimaryButton from "@/FigmaComponents/Button/PrimaryButton";
import { GoFilter } from "react-icons/go";
import SecondaryButton from "@/FigmaComponents/Button/SecondaryButton";


export default function Filter() {
    const minDate = "1900-01-01";
    const maxDate = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];

    // Estado do formulário utilizando useForm
    const { data, setData } = useForm({
        name: '',
        startDate: '',
        endDate: '',
    });

    // Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir o modal
    const openModal = () => setIsModalOpen(true);

    // Função para fechar o modal
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <form action="" className='w-full px-4 sm:px-8 -translate-y-5'>
                <div className="hidden sm:block">
                    <FilterForm
                        data={data}
                        setData={setData}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>

                <div className='w-11/12 sm:hidden bg-white h-20 rounded-lg dark:bg-slate-800 flex items-center justify-between p-4  fullhd:h-28'>
                    <PrimaryButton
                        type="button"
                        onClick={openModal}
                        className="px-4 py-2 w-32 h-12 justify-between"
                    >
                        Filtros <GoFilter className="w-8 h-8"/>
                    </PrimaryButton>
                    <SecondaryButton
                        className="px-4 py-2 w-32 h-12 border-danger !text-black dark:!text-gray-100  "
                    >
                        Limpar
                    </SecondaryButton>
                </div>
            </form>

            {isModalOpen && (
                <FilterModal
                    isOpen={isModalOpen}
                    data={data}
                    setData={setData}
                    minDate={minDate}
                    maxDate={maxDate}
                    onClose={closeModal}
                />
            )}
        </>
    );
}
