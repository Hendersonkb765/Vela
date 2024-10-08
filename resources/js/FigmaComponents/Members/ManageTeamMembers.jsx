import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import SecondaryIconButton from '@/FigmaComponents/Button/SecondaryIconButton';
import InputError from '@/FigmaComponents/Inputs/InputError';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';
import TextInput from '@/FigmaComponents/Inputs/TextInput';
import { useForm } from '@inertiajs/react';
import React, { useState } from 'react';
import { GoPaperAirplane, GoPersonAdd, GoX } from 'react-icons/go';
import MembersList from './MembersList';

const ManageTeamMembers = ({ isOpen, onClose, children }) => {
    const { data, setData, post, processing, errors } = useForm({
        Invitemail: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('invitation.send'), {
            onSuccess: () => {
                setData('Invitemail', '');
            },
        });
    };

    const initialMembers = [
        { id: 1, name: 'Adedayo Bello', email: 'adedayo.bello@mail.com', status: 'MEMBRO', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3sqbhhfev_e_DCEWHWsZbyYh8UYSigVh8mQ&s'},
        { id: 2, name: 'Courtney Henry', email: 'courtney.henry@mail.com', status: 'PENDENTE', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX5zYaLainah5BClZST5tXxNk0u7_yJcD0KQ&s6bASBOZ8e43Ug+Jgea67mhed5rXJL7LvFum2bOUTypMyieoSsidChcVI8hRPXGEZWLXMFi04lZj54NSXELiq6s14YN/MLFi+rPnF2WJmKVIHcG7mEFim0NyxuSnGvAncvFi1rR0exG6yv6neL269f6oarY3gMF4jn+ysWIXjiEskiYYFcnXtvktX4Bcf8AzH4LFixwQSnI0ZgFUEE1XHzRl7buawa6rFiBIJsQ175w0OqR4swHvALFiWx0VQuos7zfEfNHirAc3nB9J+6xYgNmZZMOflII8yNPjC9vXS5ruYXqxcKfYf2sweYB+CEuzxWLEJyBX1Q4Q8Ho4aOH381EWU95qOPQNgnzJhYsXWNSN6d49rw9ncyiAN4y8jzVlstrqjIztzAgHu6aHmCfqsWIXCMuw45ZQ0mD3GLG8q6uLKbNTpORo9p2mrnH7IHEMQ7SoXNGVsBrG+6xoho+viSsWLoxSejs0m1sBc0b1pXqx3Rx3+CxYjEx2za7oEND43GPEcP31UAdxWLFzDjuJdf4YtmrWdAlrGiePecTH/5+CvxcsWLyfL/5Gej46+CNSVGaixYpRxqXg9FHXZCxYiRgOSsWLFph/9k=' },
        { id: 3, name: 'Blessing Olasile', email: 'blessing.olasile@mail.com', status: 'EXPIRADO', avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeeoNVMemefzDNwKGRJjQ_Wk6uXW1rg0k2Tw&s' },
    ];

    const AddMemberByMail = () => {
        return (
            <>
                <h2 className="text-neutral-800 dark:text-gray-100 text-lg mb-3 font-semibold flex items-center gap-2">
                    <div className="bg-neutralcolors-100 p-2 rounded-full dark:bg-slate-700">
                        <GoPersonAdd />
                    </div>
                    Convidar Novo Membro
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-row sm:items-center space-x-2">
                    <div>
                        <InputLabel htmlFor="Invitemail" />
                        <TextInput
                            id="Invitemail"
                            type="email"
                            name="Invitemail"
                            value={data.Invitemail}
                            className="h-12 block w-full px-4"
                            placeholder="E-mail do destinatário"
                            onChange={(e) => setData('Invitemail', e.target.value)}
                            required
                        />
                        <InputError message={errors.Invitemail} className="mt-2 text-danger" />
                    </div>

                    <PrimaryButton type="submit" center={true} className="w-12 sm:w-auto !min-w-fit h-12" disabled={processing}>
                        <span className="sm:block hidden">{processing ? 'Enviando...' : 'Enviar Convite'}</span>
                        <GoPaperAirplane className="w-4 h-4"/>
                    </PrimaryButton>
                </form>
            </>
        );
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-2 sm:px-0">
            <div className="w-full bg-white p-8 rounded-lg sm:w-1/3 max-w-[448px] min-w-fit relative overflow-hidden dark:bg-slate-800 px-4">
                <h2 className="text-xl text-neutral-800 dark:text-gray-100 mb-3 font-bold flex items-center gap-2">Gerencie sua Organização</h2>
                <div className="bg-white py-8 rounded-lg min-w-fit relative overflow-hidden dark:bg-slate-800">
                    <AddMemberByMail />
                </div>
                <div className="border-t border-neutralcolors-200 dark:border-slate-600 mt-4 pt-4">
                    <MembersList members={initialMembers} />
                </div>

                <SecondaryIconButton onClick={onClose} className='border-1 !border-danger !text-danger hover:!bg-danger absolute -top-2 -right-2 group !rounded-full'>
                    <GoX className='w-6 h-6 text-danger group-hover:!text-white rounded-full' />
                </SecondaryIconButton>
            </div>
        </div>
    );
};

export default ManageTeamMembers;
