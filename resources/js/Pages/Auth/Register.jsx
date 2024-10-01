import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/FigmaComponents/Inputs/InputError';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import TextInput from '@/FigmaComponents/Inputs/TextInput';

import { FcGoogle } from "react-icons/fc";
import { MdCheckBoxOutlineBlank , MdCheckBox   } from "react-icons/md";
import DarkModeToggleIcon from '@/FigmaComponents/DarkMode/DarkModeToggleIcon';
import ApplicationLogo from '@/Components/ApplicationLogo';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: 'Gustavo',
        email: '',
        password: '',
        password_confirmation: '',
    });

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

    const submit = (e) => {
        e.preventDefault();
        post(route('register.store'), {
            onError: (errors) => {
                alert('Ocorreu um erro no registro. Verifique os dados e tente novamente!');
                setPasswordValidations({minLength: false, uppercase: false, specialChar: false})
            },
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };


    return (
        <section className='bg-primary dark:bg-primary-300 h-screen overflow-hidden  flex flex-col items-center justify-center'>
            <Head title="Cadastro" />
            <div className='w-screen sm:min-w-fit sm:w-2/5 md:w-3/5 h-full sm:h-auto flex flex-col items-center px-4 py-8 sm:rounded-xl bg-white dark:bg-gray-900 dark:text-neutralcolors-200 relative '>
                <ApplicationLogo className="w-48 h-48" />
                <div className='absolute right-5 scale-125'>
                    <DarkModeToggleIcon/>
                </div>
                <h2 className='font-headers font-bold text-3xl  -mt-12 text-neutralcolors-600 dark:text-neutralcolors-200 text-center'>Crie sua onta</h2>
                <form onSubmit={submit} className='flex flex-col space-y-4'>
                   {/*
                    <a
                        href={route('redirect', ['google'])}
                        className='flex px-4 py-2 gap-2 items-center min-w-32 min-h-8 rounded-md bg-neutralcolors-100 hover:bg-neutralcolors-200 text-sm font-body  transition-colors duration-300 ease-out dark:bg-gray-800 dark:hover:bg-gray-800/50 dark:text-neutralcolors-200'>
                        <FcGoogle className='w-8 h-8' />Continuar com o Google
                    </a>

                    <div className='flex w-full justify-center items-center space-x-2'>
                        <div className='w-full h-0.5 bg-neutralcolors-200' />
                        <span className='text-neutralcolors-200'>Ou</span>
                        <div className='w-full h-0.5 bg-neutralcolors-200' />
                    </div>
                    */}
                    <div className="">
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            placeholder={"Digite seu email"}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />
                        <InputError message={errors.email} className="mt-2 text-danger" />
                    </div>
                    <div className="">
                        <InputLabel htmlFor="password" value="Senha" />
                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder={"Crie uma senha"}
                            onChange={(e) => {
                                setData('password', e.target.value);
                                validatePassword(e.target.value);
                            }}
                            required
                        />
                        <InputError message={errors.password} className="mt-2" />

                        <ul className="mt-2 text-sm text-neutralcolors-400 dark:text-neutralcolors-200">
                            <li className={`flex items-center gap-1 ${passwordValidations.minLength ?   'text-green-500' : ''}`}>{passwordValidations.minLength ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Mínimo de 8 caracteres</li>
                            <li className={`flex items-center gap-1 ${passwordValidations.uppercase ? 'text-green-500' : ''}`}>{passwordValidations.uppercase ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Pelo menos 1 letra maiúscula</li>
                            <li className={`flex items-center gap-1 ${passwordValidations.specialChar ? 'text-green-500' : ''}`}>{passwordValidations.specialChar ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />} Pelo menos 1 caractere especial (@, #, $, etc.)</li>
                        </ul>
                    </div>

                    <div className="">
                        <InputLabel htmlFor="password_confirmation" value="Confirme sua senha" />
                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder={"Repita a senha"}
                            onChange={(e) => setData('password_confirmation', e.target.value)}
                            required
                        />
                        <InputError message={errors.password_confirmation} className="mt-2 text-danger" />
                    </div>

                    <div className="flex flex-col justify-center space-y-4 pt-3 mb-4">
                        <p className='text-sm'>
                            Ao se cadastrar, você concorda com os
                            <Link
                                href={route('register')}
                                className="text-sm text-primary ml-1"
                            >
                                termos de serviço
                            </Link>
                        </p>

                        <div className='flex flex-col space-y-4 justify-center items-center'>
                            <PrimaryButton className="h-12 w-full" disabled={processing} center={true} type={'submit'}>
                                Registre-se
                            </PrimaryButton>
                            <p className="text-sm text-neutralcolors-400 dark:text-neutralcolors-200">
                                Já tem uma conta? <Link href={route('login')} className="underline text-primary">Entre aqui</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    );
}
