import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head, Link } from '@inertiajs/react';

export default function Suport({}) {



    return (

        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
            profilePicture={user.profilePicture}
        >
            <Head title="Dashboard"/>

        </VelaSocialLayout>
    );
}


