import React from 'react';
import { Head } from '@inertiajs/react';

import ProfileSetupLayout from '@/Layouts/ProfileSetupLayout';

export default function MailValidated({ auth }) {
    return (
        <ProfileSetupLayout>
            <Head title="E-mail Verificado" />
            <div className="h-full flex flex-col items-center justify-center space-y-8 py-20 mb-64">
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-gray-100 text-center mt-24">
                    E-mail Verificado com Sucesso!
                </h1>
                <img src="Images/MailboxAmico.svg" alt="Mailbox illustration"  className="w-32 h-32 sm:w-60 sm:h-60" />
                <p className="w-10/12 sm:w-3/4 font-body font-normal text-base text-center text-neutralcolors-700 dark:text-gray-300">
                    Parabéns! Seu e-mail foi verificado com sucesso. Agora você tem acesso completo à nossa plataforma e pode aproveitar
                    todos os recursos que preparamos para você. Explore nossas iniciativas, conecte-se com outros membros e descubra como
                    você pode contribuir para a nossa comunidade.
                    <br />
                    Caso precise de ajuda ou tenha alguma dúvida, nossa equipe de suporte está sempre pronta para ajudar. Estamos muito
                    felizes em tê-lo conosco e esperamos que sua experiência seja incrível!
                </p>
            </div>
        </ProfileSetupLayout>
    );
}
