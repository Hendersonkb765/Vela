import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import TaskUpload from './Components/TaskUpload';
import Filter from './Components/Filter';
import TaskCard from './Components/TaskCard';


export default function TaskHub({ auth }) {

    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Minhas tarefas"/>
            <section className='flex flex-col min-h-fit  overflow-x-hidden '>
                <div className="relative flex flex-col justify-center items-center min-h-64 bg-primary dark:bg-primary-200 fullhd:h-3/4">
                    <TaskUpload />
                </div>

                <section className=' w-full px-4 mx-4 grid grid-cols-1 gap-6 relative'>
                    <Filter />
                    <aside className='flex h-full absolute mx-4 border-l-2 border-primary dark:border-primary-200 '></aside>
                    <div className='px-12 flex flex-col space-y-6 pb-8'>
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                        <TaskCard />
                    </div>

                </section>

            </section>

        </VelaSocialLayout>
    );
}

