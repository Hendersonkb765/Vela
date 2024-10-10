import { Head } from '@inertiajs/react';
import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import DriveInfo from '../../../FigmaComponents/GoogleDrive/DriveInfo';
import AddMemberCard from '../../../FigmaComponents/Members/AddMemberCard';

export default function Settings({ auth, mustVerifyEmail, status,storageDrive }) {
    const usedSpace = 5//storageDrive['storageUsage'];
    const totalSpace = 10//storageDrive['storageLimit'];

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} // userName={auth.user}
            imgUrl={'storage/Images/PerfilExemplo.jpg'} // imgUrl={auth.imgUrl}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Perfil</h2>}
        >
            <Head title="Profile" />

            <section className=" px-4 gap-9 mt-10 mb-16 lg:mb-0 lg:mt-0 w-screen sm:w-full pb-8 overflow-y-auto items-start flex flex-col-reverse lg:flex-row lg:justify-start lg:space-x-12 lg:py-8 lg:pb-0 ">
                <div className="w-full xl:max-w-[640px] mb-5 lg:w-2/3 h-fit rounded-xl bg-white dark:bg-gray-800  space-y-6 lg:space-y-0 divide-y-2 divide-neutral-300/20 dark:divide-gray-200/5 lg:mx-4">  {/*// max-w-7xl mx-auto lg:px-6 lg:px-8 space-y-6 */}
                    <div className="p-4 lg:p-8">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="lg:p-8 pt-8 lg:pt-0">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 lg:p-8 pt-8 lg:pt-0 ">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>

                <aside className='w-full h-40 flex-col items-center space-y-4 lg:w-fit mb-36 xl:mb-0 lg:ml-auto pt-8 lg:pt-0  '>
                    <div>
                        <h3 className='font-headers text-neutral-800 dark:text-gray-100 mb-2 lg:px-4'>Meu armazenamento</h3>
                        <DriveInfo storageDrive={storageDrive} isPresident={auth.user.role=='Presidente'?true :false} />
                        <AddMemberCard />
                    </div>
                </aside>
            </section>
        </VelaSocialLayout>
    );
}
