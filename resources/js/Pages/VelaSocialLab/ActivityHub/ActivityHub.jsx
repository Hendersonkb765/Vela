import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import ActivityUpload from './Components/ActivityUpload';
import ActivityCard from './Components/ActivityCard';
import Filter from './Components/Filter/Filter';
import React, { useEffect, useState, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';
import { ContextMenu } from 'primereact/contextmenu'; // Importando o ContextMenu do PrimeReact
import './CustomUl.css'
import { GoClock, GoCalendar } from "react-icons/go";

export default function ActivityHub({ auth, activities, isConnectedToGoogleDrive }) {
    const { props } = usePage();
    const { status, message } = props;
    const [filteredActivities, setFilteredActivities] = useState([]);
    const [noMatchFilter, setNoMatchFilter] = useState(false);
    
    // Controle do ContextMenu
    const contextMenu = useRef(null); // Referência para o ContextMenu do PrimeReact
    const [selectedCard, setSelectedCard] = useState(null);

    // Itens do ContextMenu
    const menuItems = [
        { label: 'Ver Detalhes', className: 'w-full text-red', icon: 'pi pi-search', command: () => viewDetails(selectedCard) },
        { label: 'Editar', className: '', icon: 'pi pi-pencil', command: () => editCard(selectedCard) },
        { label: 'Deletar', className: '', icon: 'pi pi-times', command: () => deleteCard(selectedCard) }
    ];

    const viewDetails = (card) => {
        alert(`Exibindo detalhes da atividade: ${card.id}`);
    };

    const editCard = (card) => {
        alert(`Editando a atividade: ${card.id}`);
    };

    const deleteCard = (card) => {
        alert(`Deletando a atividade: ${card.id}`);
    };

    const handleContextMenu = (event, activity) => {
        event.preventDefault();
        setSelectedCard(activity); // Define o card selecionado
        contextMenu.current.show(event); // Mostra o ContextMenu nas coordenadas do clique
    };

    const fetchFilteredActivities = async (title = '', startDate = '1990-01-01', endDate = new Date().toISOString().split('T')[0]) => {
        if (!startDate) {
            startDate = '1990-01-01';
        }
        if (!endDate) {
            endDate = new Date().toISOString().split('T')[0];
        }
        const filters = { title, startDate, endDate };

        try {
            const response = await axios.post('/atividades/filtro', filters);
            const activitiesList = response.data.activities;
            if (response.data.status === 200 && activitiesList.length > 0) {
                setFilteredActivities(activitiesList);
                setNoMatchFilter(false);
            } else {
                setNoMatchFilter(true);
                setFilteredActivities([]);
            }
        } catch (error) {
            console.error("Erro ao buscar atividades: ", error);
        }
    };

    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Minhas Atividades</h2>}
        >
            <Head title="Minhas tarefas" />
            <section className="py-16 sm:py-8 flex flex-col min-h-fit h-screen overflow-x-hidden">
                <div className="relative flex flex-col justify-center items-center min-h-64 bg-primary dark:bg-primary-200 fullhd:h-3/4">
                    <ActivityUpload />
                </div>
                <section className="w-full px-4 mx-4 grid grid-cols-1 gap-6 relative">
                    <Filter onFilter={fetchFilteredActivities} />
                    <aside className="flex h-full absolute mx-4 border-l-2 border-primary dark:border-primary-200"></aside>
                    <div className="px-4 lg:px-12 flex flex-col space-y-12 pb-8">
                        
                        {/* Context Menu PrimeReact */}
                        <ContextMenu className='customul flex text-gray-800 dark:text-gray-200 justify-center w-40 h-fit py-2 shadow-sm dark:shadow-slate-950 shadow-slate-400 dark:bg-slate-800 bg-white rounded-md ' model={menuItems} ref={contextMenu} />

                        {/* Renderização das atividades */}
                        {!(filteredActivities.length > 0 || noMatchFilter) &&
                            activities.map((activity) => (
                                <ActivityCard
                                    key={activity.id}
                                    data={activity}
                                    onContextMenu={(event) => handleContextMenu(event, activity)} // Mostra o ContextMenu no clique direito
                                />
                            ))
                        }

                        {filteredActivities.length > 0 &&
                            filteredActivities.map((activity) => (
                                <ActivityCard
                                    key={activity.id}
                                    data={activity}
                                    onContextMenu={(event) => handleContextMenu(event, activity)} // Mostra o ContextMenu no clique direito
                                />
                            ))
                        }

                        {noMatchFilter && (
                            <h3 className="text-gray-800 dark:text-gray-200 animate-enter text-2xl font-medium">
                                Sem resultados
                            </h3>
                        )}
                    </div>
                </section>
            </section>
        </VelaSocialLayout>
    );
}




























































// import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
// import { Head } from '@inertiajs/react';
// import ActivityUpload from './Components/ActivityUpload';
// import ActivityCard from './Components/ActivityCard';
// import Filter from './Components/Filter/Filter';
// import React, { useEffect, useState } from 'react';
// import { usePage } from '@inertiajs/react';
// import axios from 'axios';


// export default function ActivityHub({ auth, activities, isConnectedToGoogleDrive}) {
//     // console.log(activities)
//     // [texto](qualquerArquivo.md#<L1>)
//     const { props } = usePage();
//     const { status, message } = props;
//     const [filteredActivitys, setFilteredActivitys] = useState([])
//     const [noMatchFilter, setNoMatchFilter] = useState(false)
//     // Sobre o menu
//     const [menuVisible, setMenuVisible] = useState(false);
//     const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
//     const [selectedCard, setSelectedCard] = useState(null); // Guarda o card que foi clicado



//     const handleContextMenu = (event, card) => {
//         console.log("Função chamada")
//         event.preventDefault();
//         setSelectedCard(card); // Define o card que foi clicado
//         setMenuVisible(true);
//         setMenuPosition({ x: event.pageX, y: event.pageY });
//     };
    
//     // Função para fechar o menu de contexto
//     const handleClickOutside = () => {
//         setMenuVisible(false);
//     };
    
//     // Fecha o menu quando o usuário clica fora
//     useEffect(() => {
//         if (menuVisible) {
//           document.addEventListener('click', handleClickOutside);
//         } else {
//           document.removeEventListener('click', handleClickOutside);
//         }
//         return () => {
//           document.removeEventListener('click', handleClickOutside);
//         };
//     }, [menuVisible]);



//     const fetchFiltredActivitys = async (title = '', startDate = '1990-01-01', endDate = new Date().toISOString().split('T')[0]) => {

//         if(!startDate){
//             startDate = '1990-01-01'
//         }
//         if(!endDate){
//             endDate = new Date().toISOString().split('T')[0]
//         }
//         const filters = { 'title': title, 'startDate': startDate, 'endDate': endDate };
    
//         try {
//             const response = await axios.post('/atividades/filtro', filters);
//             console.log(filters)
//             const activitiesList = response.data.activities
//              if (response.data.status == 200 && activitiesList.length > 0){
//                 setFilteredActivitys(activitiesList)
//                 console.log('Dentro de filteredactivitys temos: ', filteredActivitys)
//                 setNoMatchFilter(false)
//                 // console.log("Status 200: ", response.data.activities)
//             } else{
//                 setNoMatchFilter(true)
//                 setFilteredActivitys([])
//                 console.log("Status 404")
//             }
//         } catch (error) {
//             console.error("Erro ao buscar atividades: ", error);
//         }
//     };


    
//     return (
//         <VelaSocialLayout
//             header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Minhas Atividades</h2>}
//         >
//             {status ? DashboardMessage():null}
//             <Head title="Minhas tarefas"/>
//             <section className='py-16 sm:py-8 flex flex-col min-h-fit h-screen overflow-x-hidden '>
//                 <div className="relative flex flex-col justify-center items-center min-h-64 bg-primary dark:bg-primary-200 fullhd:h-3/4">
//                     <ActivityUpload />
//                 </div>
//                 <section className='w-full px-4 mx-4 grid grid-cols-1 gap-6 relative'>
//                     <Filter onFilter={fetchFiltredActivitys} />
//                     <aside className='flex h-full absolute mx-4 border-l-2 border-primary dark:border-primary-200 '></aside>
//                     <div className='px-4 lg:px-12 flex flex-col space-y-12 pb-8'>
//                         {!(Object.keys(filteredActivitys).length > 0 || noMatchFilter) &&(
//                             activities.map((activity) => (
//                                 <ActivityCard key={activity.id} data={activity}
//                                 onContextMenu={(event) => handleContextMenu(event, card)}/>
//                             ))
//                         )}
//                         {Object.keys(filteredActivitys).length > 0 &&(

//                             filteredActivitys.map((activity) => (
                                
//                                 <ActivityCard key={activity.id} data={activity}
//                                 onContextMenu={(event) => handleContextMenu(event, activity.id)}/>
//                             ))
//                         )}  

//                         {menuVisible &&(
//                             <div className='absolute top-1/2 w-40 h-40 bg-primary'>

//                             </div>
//                         )}

//                         {noMatchFilter&&(

//                             <h3 className='text-gray-800 dark:text-gray-200 animate-enter text-2xl font-medium'>Sem resultados</h3>

//                         )}

                        
//                     </div>
//                 </section>

//             </section>
//         </VelaSocialLayout>
//     );
// }
