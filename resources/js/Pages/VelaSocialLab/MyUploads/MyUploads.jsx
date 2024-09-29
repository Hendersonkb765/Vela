import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import { FileUploadDragDrop } from './components/FileUploadDragDrop';
import FileCard from './components/FileCard';
import Filter from './components/Filter';
import { FaTools } from "react-icons/fa";

export default function Myuploads({ auth }) {
    //Obs.: Talves adicionar informações de quem fez o upload...(Foto e nome)
    const files = [
        { id: 1, name: 'Image 1.jpg', fileType: 'image/jpeg', uploadDate: '2024-09-01' },
        { id: 2, name: 'Document 1.pdf', fileType: 'application/pdf', uploadDate: '2024-09-02' },
        { id: 3, name: 'Image 2.png', fileType: 'image/png', uploadDate: '2024-09-03' },
        { id: 4, name: 'Spreadsheet.xlsx', fileType: 'application/vnd.ms-excel', uploadDate: '2024-09-04' },
        { id: 5, name: 'Presentation.pptx', fileType: 'application/vnd.ms-powerpoint', uploadDate: '2024-09-05' },
        { id: 6, name: 'Image 3.gif', fileType: 'image/gif', uploadDate: '2024-09-06' },
        { id: 7, name: 'Text File.txt', fileType: 'text/plain', uploadDate: '2024-09-07' },
        { id: 8, name: 'Video.mp4', fileType: 'video/mp4', uploadDate: '2024-09-08' },
        { id: 9, name: 'Video.mp4', fileType: 'video/mp4', uploadDate: '2024-09-08' },
        { id: 10, name: 'Video.mp4', fileType: 'video/mp4', uploadDate: '2024-09-08' },

    ];

    return (
        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Meus Uploads" />
            <section className='flex flex-col min-h-fit overflow-x-hidden pb-8 relative'>
                <form className="relative flex flex-col justify-center items-center min-h-64 bg-primary dark:bg-primary-200 fullhd:h-3/4">
                    <FileUploadDragDrop />
                </form>
                <Filter />
                {/* Efeito de blur */}
                <div className="absolute inset-0 flex flex-col  justify-center items-center text-2xl font-bold text-gray-900 dark:text-gray-200 z-20 backdrop-blur-sm opacity-50"></div>
                <div className="absolute inset-0 flex flex-col  justify-center items-center text-2xl font-bold text-gray-900 dark:text-gray-200 z-20 backdrop-blur-sm ">
                    {/* Estamos Aperfeiçoando Esta Seção! */}
                    {/* "Em Breve, Novidades!" */}
                    Novas Funcionalidades em Desenvolvimento!
                    <div className='bg-neutral-200 shadow-sm dark:bg-slate-900 p-4 rounded-full mt-8'>
                        <FaTools className='w-10 h-10 text-primary'/>
                    </div>

                </div>

                <section className='w-full px-4 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 '>
                    {files.map((file) => (
                        <FileCard key={file.id} file={file} />
                    ))}
                </section>


            </section>
        </VelaSocialLayout>
    );
}
