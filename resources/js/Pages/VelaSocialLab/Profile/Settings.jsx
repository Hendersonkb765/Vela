import { Head } from '@inertiajs/react';
import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import DriveInfo from '../../../FigmaComponents/GoogleDrive/DriveInfo';
import AddMemberCard from './Partials/AddMemberCard';

export default function Settings({ auth, mustVerifyEmail, status }) {
    const usedSpace = 5//storageDrive['storageUsage'];
    const totalSpace = 10//storageDrive['storageLimit'];

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} // userName={auth.user}
            imgUrl={'storage/Images/PerfilExemplo.jpg'} // imgUrl={auth.imgUrl}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Perfil</h2>}
        >
            <Head title="Profile" />

            <section className="mt-10 mb-16 lg:mb-0 lg:mt-0 w-screen sm:w-full pb-8 overflow-y-auto items-start flex flex-col-reverse sm:flex-row sm:justify-start sm:space-x-12 sm:py-8 sm:pb-0 sm:px-5">
                <div className="w-screen mb-5 sm:w-2/3 h-fit sm:rounded-lg bg-white dark:bg-gray-800 space-y-6 sm:space-y-0 divide-y-2 divide-neutral-300/20 dark:divide-gray-200/5">  {/*// max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 */}
                    <div className="p-4 sm:p-8">
                        <UpdateProfileInformationForm rofileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="sm:p-8 pt-8 sm:pt-0">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 pt-8 sm:pt-0 ">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>

                <aside className='h-40 flex-col space-y-4 w-screen sm:w-1/3 sm:ml-auto pt-6 sm:pt-0'>
                    <div>
                        <h3 className='font-headers text-neutral-800 dark:text-gray-100 mb-2 px-4'>Meu armazenamento</h3>
                        <DriveInfo storageDrive={true} usedSpace={usedSpace} totalSpace={totalSpace} />
                    </div>
                    <AddMemberCard />
                </aside>
            </section>
        </VelaSocialLayout>
    );
}
