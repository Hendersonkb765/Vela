import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head } from '@inertiajs/react';
import { FileUploadDragDrop } from './components/FileUploadDragDrop';
import FileCard from './components/FileCard';

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
    ];

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} // auth.user
            imgUrl={'storage/Images/PerfilExemplo.jpg'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Meus Uploads" />
            <section className='min-h-fit overflow-y-scroll pb-4'>
                <form className="relative flex flex-col justify-center items-center h-80 bg-primary dark:bg-primary-300">
                    <FileUploadDragDrop />
                </form>
                <section className='w-full p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4'>
                    {files.map((file) => (
                        <FileCard key={file.id} file={file} />
                    ))}
                </section>
            </section>
        </VelaSocialLayout>
    );
}
