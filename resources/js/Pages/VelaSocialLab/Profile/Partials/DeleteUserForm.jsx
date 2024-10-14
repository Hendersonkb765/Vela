import { useRef, useState } from 'react';
import DangerButton from '@/Components/DangerButton';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import Modal from '@/Components/Modal';
import SecondaryButton from '@/Components/SecondaryButton';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

export default function DeleteUserForm({ className = '' }) {
    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: '',
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        destroy(route('profile.destroy'), {
            preserveScroll: true,
            onSuccess: () => closeModal(),
            onError: () => passwordInput.current.focus(),
            onFinish: () => reset(),
        });
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);
        reset();
    };

    return (
        <section className={`space-y-6 ${className}`}>
            <header className='sm:px-4'>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Excluir Conta</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Uma vez que sua conta for excluída, todos os seus recursos e dados serão permanentemente deletados.
                    Antes de excluir sua conta, faça o download de quaisquer dados ou informações que você deseja
                    manter.
                </p>
            </header>
            <div className='flex items-center gap-4 sm:px-4 pb-4'>
                <DangerButton onClick={confirmUserDeletion} className='justify-center h-12 w-full sm:w-56 text-lg sm:!text-base'>Excluir Conta</DangerButton>
            </div>

            <Modal show={confirmingUserDeletion} onClose={closeModal}>
                <form onSubmit={deleteUser} className="p-6">
                    <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                        Você tem certeza de que deseja excluir sua conta?
                    </h2>

                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                        Uma vez que sua conta for excluída, todos os seus recursos e dados serão permanentemente deletados.
                        Por favor, insira sua senha para confirmar que você gostaria de excluir sua conta permanentemente.
                    </p>

                    <div className="mt-6 ">
                        <InputLabel htmlFor="password" value="Senha" className="sr-only" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="mt-1 block w-full"
                            isFocused
                            placeholder="Senha"
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end ">
                        <SecondaryButton onClick={closeModal} className='h-12'>Cancelar</SecondaryButton>

                        <DangerButton className="ms-3 h-12" disabled={processing}>
                            Excluir Conta
                        </DangerButton>
                    </div>
                </form>
            </Modal>
        </section>
    );
}
