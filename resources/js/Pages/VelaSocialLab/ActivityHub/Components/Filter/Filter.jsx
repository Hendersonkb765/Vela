import { useState, useEffect } from "react";
import FilterForm from "./FilterForm";
import { useForm } from "@inertiajs/react";
import FilterModal from "./FilterModal";
import PrimaryButton from "@/FigmaComponents/Button/PrimaryButton";
import { GoFilter } from "react-icons/go";
import SecondaryButton from "@/FigmaComponents/Button/SecondaryButton";
import { GoCalendar } from "react-icons/go";
import FilterButton from "@/FigmaComponents/Button/FilterButton";
import SearchInput from "@/FigmaComponents/Inputs/SearchInput";


export default function Filter({onFilter}) {
    const minDate = "1900-01-01";
    const maxDate = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];
    const [hasDateParameters, setHasDateParameters] = useState(false)
    const [debouncedValue, setDebouncedValue] = useState('');
    const { data, setData } = useForm({
        name: '',
        startDate: '',
        endDate: '',
    });
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(data.name)

    const handleFilterSubmit = () =>{

        const { startDate, endDate } = data;
        if(startDate != '' || endDate !=''){
            onFilter(data.name, data.startDate, data.endDate);
            setHasDateParameters(true)
        }else{

            onFilter(data.name, data.startDate, data.endDate);
            setHasDateParameters(false)

        }

        if(isModalOpen){
            setIsModalOpen(false)
        }

    }

    const handleSearchChangeMobile = (value) =>{
        setData('name', value);
        
    }


    // useEffect que aplica o debounce
    useEffect(() => {
        // Configura o debounce com um tempo de espera (por exemplo, 1000ms = 1 segundo)
        const handler = setTimeout(() => {
        setDebouncedValue(data.name);
        }, 500); // Define o atraso do debounce

        // Limpa o timeout se o valor mudar antes do tempo terminar
        return () => {
        clearTimeout(handler);
        };
    }, [data.name]); // O efeito é executado sempre que o inputValue mudar

    // Efeito para acionar uma ação quando o valor debounced mudar
    useEffect(() => {
        if (debouncedValue !== undefined) {
            // Aqui você pode colocar a sua lógica, como fazer uma requisição ou qualquer outra ação
            onFilter(debouncedValue, data.startDate, data.endDate)
        
        }
    }, [debouncedValue]); // Executa quando o valor debounced é atualizado




    const handleDateParameters = () =>{

        const { startDate, endDate } = data;
        if(startDate != '' || endDate !=''){

            setHasDateParameters(true)

        }

    }

    const clenDateParametes = () =>{
        
        setData(data.startDate = '', data.endDate='')
        onFilter();
        setHasDateParameters(false)
        

    }


    // Estado do formulário utilizando useForm


    // Estado para controlar a visibilidade do modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir o modal
    const openModal = () => setIsModalOpen(true);

    // Função para fechar o modal
    const closeModal = () => setIsModalOpen(false);

    return (
        <>
            <form action="" className='min-w-fit w-full px-4 sm:px-8 -translate-y-5'>
                <div className="hidden lg:flex items-end bg-white h-20 rounded-lg dark:bg-slate-800 fullhd:h-28">
                    <FilterForm
                        data={data}
                        setData={setData}
                        minDate={minDate}
                        maxDate={maxDate}
                        onChangeFun={handleDateParameters}
                        // onFilterSubmit={onFilter}
                    />
                    <FilterButton className={' mb-2 ml-2 fullhd:mb-6'}  onClickFunFilter={handleFilterSubmit} onClickClenParam={clenDateParametes} hasParameters={hasDateParameters}/>
                </div>

                <div className='w-11/12 lg:hidden bg-white md:h-20 p-4 rounded-lg dark:bg-slate-800 flex-col md:flex-row flex items-center justify-between gap-6 fullhd:h-28'>
                   <div className="flex gap-4  w-full">
                        <PrimaryButton
                                type="button"
                                onClick={openModal}
                                className="px-4 py-2 w-32 h-12 justify-between"
                            >
                                Filtros <GoFilter className="w-8 h-8"/>
                            </PrimaryButton>
                            <SecondaryButton
                                className="px-4 py-2 w-32 h-12 border-danger !text-black dark:!text-gray-100  "
                                onClick={clenDateParametes}
                            >
                                Limpar
                            </SecondaryButton>

                   </div>

                   <div className="flex flex-col space-y-3 md:w-fit w-full  ">
                        <SearchInput
                            onSearchChange={handleSearchChangeMobile}
                            placeholder="Busque por nome..."
                            className='md:min-w-56 md:w-64 h-12 w-full min-w-full'
                        />
                    </div>

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
                    filter={handleFilterSubmit}
                />
            )}
        </>
    );
}
