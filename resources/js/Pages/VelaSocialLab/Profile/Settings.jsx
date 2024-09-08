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

            <section className="py-12 overflow-y-scroll">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </section>
        </VelaSocialLayout>
    );
}
