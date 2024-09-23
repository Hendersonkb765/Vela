import { Head } from '@inertiajs/react';
import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';

export default function Settings({ auth, mustVerifyEmail, status }) {
    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} // userName={auth.user}
            imgUrl={'storage/Images/PerfilExemplo.jpg'} // imgUrl={auth.imgUrl}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Perfil</h2>}
        >
            <Head title="Profile" />

            <section className="px-5 py-8 overflow-y-scroll flex justify-start">

                 <div className="sm:w-2/3 h-fit rounded-lg bg-white dark:bg-gray-800">  {/*// max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6 */}
                    <div className="sm:w-3/4p-4 sm:p-8 ">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 ">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8  ">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>

                <aside className='h-40 w-80 ml-auto bg-blue-400 rounded-lg' >

                </aside>
            </section>
        </VelaSocialLayout>
    );
}
