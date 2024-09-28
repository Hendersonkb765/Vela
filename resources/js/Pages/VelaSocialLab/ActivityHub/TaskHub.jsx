import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import TaskUpload from './Components/TaskUpload';
import Filter from './Components/Filter';
import TaskCard from './Components/TaskCard';



export default function ActivityHub({ auth ,activities}) {
    console.log(activities)


    const tasks = [
        { id: 1, title: 'Juventude que limpa floresta do lixo', date: '2024-09-01', text: 'Jovens voluntários se reúnem para limpar o lixo de uma floresta, promovendo a conscientização ambiental e preservação da natureza.', img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/bk2brywu9sgsf5j5ki6l "},
        { id: 2, title: 'Juventude que limpa floresta do lixo', date: '2024-09-01', text: 'Jovens voluntários se reúnem para limpar o lixo de uma floresta, promovendo a conscientização ambiental e preservação da natureza.', img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/bk2brywu9sgsf5j5ki6l "},
        { id: 3, title: 'Juventude que limpa floresta do lixo', date: '2024-09-01', text: 'Jovens voluntários se reúnem para limpar o lixo de uma floresta, promovendo a conscientização ambiental e preservação da natureza.', img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/bk2brywu9sgsf5j5ki6l "},
        { id: 4, title: 'Juventude que limpa floresta do lixo', date: '2024-09-01', text: 'Jovens voluntários se reúnem para limpar o lixo de uma floresta, promovendo a conscientização ambiental e preservação da natureza.', img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/bk2brywu9sgsf5j5ki6l "},
        { id: 5, title: 'Juventude que limpa floresta do lixo', date: '2024-09-01', text: 'Jovens voluntários se reúnem para limpar o lixo de uma floresta, promovendo a conscientização ambiental e preservação da natureza.', img: "https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/bk2brywu9sgsf5j5ki6l "},
    ];

    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Minhas Atividades</h2>}
        >
            <Head title="Minhas tarefas"/>
            <section className='flex flex-col min-h-fit  overflow-x-hidden '>
                <div className="relative flex flex-col justify-center items-center min-h-64 bg-primary dark:bg-primary-200 fullhd:h-3/4">
                    <TaskUpload />
                </div>

                <section className='w-full px-4 mx-4 grid grid-cols-1 gap-6 relative'>
                    <Filter />
                    <aside className='flex h-full absolute mx-4 border-l-2 border-primary dark:border-primary-200 '></aside>
                    <div className='px-12 flex flex-col space-y-12 pb-8'>
                        {activities.map((activity) => (
                            <TaskCard key={activity.id} data={activity}/>
                        ))}
                    </div>
                </section>
            </section>
        </VelaSocialLayout>
    );
}

