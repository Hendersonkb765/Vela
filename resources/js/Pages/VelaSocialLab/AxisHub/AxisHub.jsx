import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';


export default function TaskHub({ auth, }) {

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} //auth.user
            imgUrl={'storage/Images/PerfilExemplo.jpg'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Eixos"/>
            <div className="flex flex-col justify-center h-72 bg-success">

            </div>
        </VelaSocialLayout>
    );
}

