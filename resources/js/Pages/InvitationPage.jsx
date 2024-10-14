import React from 'react';
import { Head } from '@inertiajs/react';
import ProfileSetupLayout from '@/Layouts/ProfileSetupLayout';

export default function InvitationPage({ auth }) {
    return (
        <ProfileSetupLayout>
            <Head title="Sem OSC" />
            <div className="flex flex-col">
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700">Aguarde um convite de Organização</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700"></p>
            </div>
        </ProfileSetupLayout>
    );
}
