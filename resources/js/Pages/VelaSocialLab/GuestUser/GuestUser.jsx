import VelaGuestLayout from '@/Layouts/VelaGuestLayout';
import { Head } from '@inertiajs/react';

export default function GuestUser({}) {
    return (

        <VelaGuestLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">GuestPage</h2>}
        >
            <Head title="Sem Organização"/>
            <section className='h-full sm:p-4 gap-4 flex flex-col justify-center items-center sm:[&>*]:rounded-lg pb-16 sm:pt-4 sm:pb-4 '>
                <div className='w-3/4 text-center'>
                    <h1 className='font-headers text-3xl font-bold mb-4 dark:text-white'>Aguardando Convite para Organização</h1>
                    <p className='font-body dark:text-gray-200'>
                        Bem-vindo ao VelaeSocialLab! Você se cadastrou como membro e, neste momento, está aguardando um convite para se juntar a uma organização.
                        Assim que receber um convite, você terá a oportunidade de colaborar em projetos e contribuir para causas sociais importantes. Enquanto isso,
                        aproveite para se preparar para a sua jornada no terceiro setor!
                    </p>
                </div>

            </section>
        </VelaGuestLayout>
    );
}

