import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import { FileUploadDragDrop } from './components/FileUploadDragDrop';


export default function Myuploads({ auth, }) {

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} //auth.user
            imgUrl={'storage/Images/PerfilExemplo.jpg'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Meus Uploads"/>
            <div className="relative flex flex-col justify-center items-center h-80 bg-primary">
                <FileUploadDragDrop />
            </div>
        </VelaSocialLayout>
    );
}

