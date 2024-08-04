import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/FigmaComponents/InputError';
import InputLabel from '@/FigmaComponents/InputLabel';
import PrimaryButton from '@/FigmaComponents/PrimaryButton';
import TextInput from '@/FigmaComponents/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FcGoogle } from "react-icons/fc";
import SecondaryButton from '@/FigmaComponents/SecondaryButton';


export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <h2 className='font-headers font-bold text-3xl mb-6  text-neutralcolors-600 '>Crie Sua Conta</h2>
            <div className='flex flex-col space-y-8 divide-y-2'>

                <PrimaryButton gray={true} icon={<FcGoogle className='w-8 h-8'></FcGoogle>} className='h-12 bg-white '>Continuar com o Google</PrimaryButton>

                <form onSubmit={submit} className='pt-4'>
                    <div>
                        <InputLabel htmlFor="name" value="Nome" />
                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            placeholder={"Seu nome completo"}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
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

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Senha" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            placeholder={"Crie uma senha"}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
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

                        <InputError message={errors.password_confirmation} className="mt-2" />
                    </div>

                    <div className="flex flex-col  justify-center mt-4 space-y-4">
                        <p className='text-sm'>
                            Ao se cadastrar, você concorda com os
                            <Link
                                href={route('register')}
                                className="text-sm text-primary ml-1"
                            >
                            termos de serviço
                            </Link>
                        </p>

                        <div className='flex space-x-4 items-center'>
                            <PrimaryButton className="h-12 w-1/2" disabled={processing} center={true}>
                                Registre-se
                            </PrimaryButton>

                            <Link
                                href={route('login')}
                                className="underline text-sm text-gray-600  hover:text-gray-900 dark:hover:text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Já tem uma conta?
                            </Link>
                        </div>

                    </div>
                </form>
            </div>
        </GuestLayout>
    );
}
