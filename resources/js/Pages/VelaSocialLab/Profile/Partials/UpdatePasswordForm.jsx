import { useRef, useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import { MdCheckBoxOutlineBlank , MdCheckBox   } from "react-icons/md";


export default function UpdatePasswordForm({ className = '' }) {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const { data, setData, errors, put, reset, processing, recentlySuccessful } = useForm({
        current_password: '',
        password: '',
        password_confirmation: '',
    });

    const updatePassword = (e) => {
        e.preventDefault();

        put(route('password.update'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.password) {
                    reset('password', 'password_confirmation');
                    passwordInput.current.focus();
                }

                if (errors.current_password) {
                    reset('current_password');
                    currentPasswordInput.current.focus();
                }
            },
        });
    };

    const [passwordValidations, setPasswordValidations] = useState({
        minLength: false,
        uppercase: false,
        specialChar: false,
    });

    const validatePassword = (password) => {
        setPasswordValidations({
            minLength: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            specialChar: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        });
    };

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900 dark:text-gray-100">Atualizar senha</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Para manter sua conta segura, use uma senha longa e aleatória
                </p>
            </header>

            <form onSubmit={updatePassword} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="current_password" value="Senha atual" />

                    <TextInput
                        id="current_password"
                        ref={currentPasswordInput}
                        value={data.current_password}
                        onChange={(e) => setData('current_password', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                    />

                    <InputError message={errors.current_password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password" value="Nova senha" />

                    <TextInput
                        id="password"
                        ref={passwordInput}
                        value={data.password}
                        onChange={(e) => {
                            setData('password', e.target.value);
                            validatePassword(e.target.value);
                        }}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />
                        <ul className="mt-2 text-sm text-neutralcolors-400 dark:text-neutralcolors-200">
                            <li className={`flex items-center gap-1 ${passwordValidations.minLength ? 'text-green-500' : ''}`}>{passwordValidations.minLength ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Mínimo de 8 caracteres</li>
                            <li className={`flex items-center gap-1 ${passwordValidations.uppercase ? 'text-green-500' : ''}`}>{passwordValidations.uppercase ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Pelo menos 1 letra maiúscula</li>
                            <li className={`flex items-center gap-1 ${passwordValidations.specialChar ? 'text-green-500' : ''}`}>{passwordValidations.specialChar ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Pelo menos 1 caractere especial (@, #, $, etc.)</li>
                        </ul>

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="password_confirmation" value="Confirme a nova senha" />

                    <TextInput
                        id="password_confirmation"
                        value={data.password_confirmation}
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        type="password"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing} className='justify-center h-12'>Salvar</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Saved.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
