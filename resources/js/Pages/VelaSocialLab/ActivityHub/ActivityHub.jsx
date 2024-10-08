import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import ActivityUpload from './Components/ActivityUpload';
import ActivityCard from './Components/ActivityCard';
import Filter from './Components/Filter/Filter';
import React from 'react';
import { usePage } from '@inertiajs/react';


export default function ActivityHub({ auth, activities, isConnectedToGoogleDrive}) {
    // console.log(activities)
  
    const { props } = usePage();
    const { status, message } = props;
    
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
                    <Filter />
                    <aside className='flex h-full absolute mx-4 border-l-2 border-primary dark:border-primary-200 '></aside>
                    <div className='px-4 lg:px-12 flex flex-col space-y-12 pb-8'>
                        {activities.map((activity) => (
                            <ActivityCard key={activity.id} data={activity}/>
                        ))}
                    </div>
                </section>

            </section>
        </VelaSocialLayout>
    );
}
