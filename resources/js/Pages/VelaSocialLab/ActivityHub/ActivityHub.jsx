import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import ActivityUpload from './Components/ActivityUpload';
import ActivityCard from './Components/ActivityCard';
import Filter from './Components/Filter/Filter';
import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import axios from 'axios';


export default function ActivityHub({ auth, activities, isConnectedToGoogleDrive}) {
    // console.log(activities)
    // [texto](qualquerArquivo.md#<L1>)
    const { props } = usePage();
    const { status, message } = props;
    const [filteredActivitys, setFilteredActivitys] = useState([])
    const [noMatchFilter, setNoMatchFilter] = useState(false)


    const fetchFiltredActivitys = async (title = '', startDate = '1990-01-01', endDate = new Date().toISOString().split('T')[0]) => {
        const filters = { 'title': title, 'startDate': startDate, 'endDate': endDate };
    
        try {
            const response = await axios.post('/atividades/filter', filters);
            console.log(filters)
            const activitiesList = response.data.activities
            if (response.data.status == 666){
                setNoMatchFilter(true)
                setFilteredActivitys([])
                console.log("Status 666")
            } else if (response.data.status == 200){
                setFilteredActivitys(activitiesList)
                console.log('Dentro de filteredactivitys temos: ', filteredActivitys)
                setNoMatchFilter(false)
                // console.log("Status 200: ", response.data.activities)
            }
        } catch (error) {
            console.error("Erro ao buscar atividades: ", error);
        }

    };

    
    // const fetchFiltredActivitys = async (title ='', startDate ='1990-01-01', endDate= new Date().toISOString().split('T')[0]) => {

    //     const filters = {'title': title, 'startDate': startDate, 'endDate': endDate}
        
    //     console.log(filters)
    //     console.log(document.querySelector('meta[name="csrf-token"]').getAttribute('content'))
    //     try{
    //         const response = await fetch(`/atividades/filterbydate`, {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')                
    //             },
    //             body: JSON.stringify(filters),
    //         });

    //         if (!response.ok){
    //             const errorText = await response.text();
    //             console.error("Erro na requisição:", response.status, errorText);
    //             throw new Error('Erro na requisição: ' + response.status);
    //         }

    //         const data = await response.json();

    //         if(data.status == 666){

    //             setNoMatchFilter(true)
    //             setFilteredActivitys({})

    //         }else if(data.status == 200){

    //             setFilteredActivitys(data.activities)
    //             console.log(data)
    //             console.log(filteredActivitys)
    //             setNoMatchFilter(false)

    //         }

    //         // Chame a função onSearch para passar os dados filtrados
            
    //     } catch (error) {
    //         console.error("Erro ao buscar atividades:", error);
    //     }

    // }
    
    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Minhas Atividades</h2>}
        >
            {status ? DashboardMessage():null}
            <Head title="Minhas tarefas"/>
            <section className='py-16 sm:py-8 flex flex-col min-h-fit h-screen overflow-x-hidden '>
                <div className="relative flex flex-col justify-center items-center min-h-64 bg-primary dark:bg-primary-200 fullhd:h-3/4">
                    <ActivityUpload />
                </div>
                <section className='w-full px-4 mx-4 grid grid-cols-1 gap-6 relative'>
                    <Filter onFilter={fetchFiltredActivitys} />
                    <aside className='flex h-full absolute mx-4 border-l-2 border-primary dark:border-primary-200 '></aside>
                    <div className='px-4 lg:px-12 flex flex-col space-y-12 pb-8'>
                        {!(Object.keys(filteredActivitys).length > 0 || noMatchFilter) &&(
                            activities.map((activity) => (
                                <ActivityCard key={activity.id} data={activity}/>
                            ))
                        )}
                        {Object.keys(filteredActivitys).length > 0 &&(

                            filteredActivitys.map((activity) => (
                                
                                <ActivityCard key={activity.id} data={activity}/>
                            ))
                        )}  

                        {noMatchFilter&&(

                            <h3>Sem resultados</h3>

                        )}

                        
                    </div>
                </section>

            </section>
        </VelaSocialLayout>
    );
}
