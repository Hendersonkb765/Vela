import React from 'react';
import { Head } from '@inertiajs/react';
import VelaGuestLayout from '@/Layouts/VelaGuestLayout';

export default function InvitationPage({ auth }) {
    return (
        <VelaGuestLayout>
            <Head title="Sem OSC" />
            <div className="h-full flex flex-col items-center justify-center space-y-8 py-20">
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-gray-100">Aguardando seu convite!</h1>
                <p className="w-10/12 sm:w-3/4 font-body font-normal text-base text-center text-neutralcolors-700  dark:text-gray-300">
                    Bem-vindo à nossa plataforma! Estamos felizes em tê-lo aqui! Sua inscrição como membro ou voluntário está em processamento,
                    e você está aguardando um convite da organização social que já o reconhece. Assim que o convite for enviado, você receberá uma
                    notificação por e-mail. Enquanto isso, aproveite para explorar nossos recursos e iniciativas. Se precisar de ajuda, nossa equipe
                    de suporte está à disposição. Agradecemos pela sua paciência e estamos ansiosos para vê-lo ativo em nossa comunidade!


                </p>
            </div>
        </VelaGuestLayout>
    );
}
