import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';


export default function Timeline({ auth, }) {

    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Timeline"/>
            <div className="flex flex-col justify-center h-72 bg-yellow-600">

            </div>
        </VelaSocialLayout>
    );
}

