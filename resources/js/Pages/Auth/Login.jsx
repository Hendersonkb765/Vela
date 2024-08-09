import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/FigmaComponents/Inputs/InputError';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import TextInput from '@/FigmaComponents/Inputs/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FcGoogle } from "react-icons/fc";


export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <GuestLayout>
            <Head title="Log in" />
            <h2 className='font-headers font-bold text-3xl mb-6  text-neutralcolors-600 '>Bem vindo de volta!</h2>
            {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData('password', e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex justify-between mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                        />
                        <span className="ms-2 text-sm text-gray-600 dark:text-gray-400">Lembre-me</span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route('password.request')}
                            className="underline text-sm text-gray-600  hover:text-gray-900 dark:hover:text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                        >
                             Esqueceu sua senha?
                        </Link>
                    )}
                </div>

                <div className='flex flex-col space-y-4 mt-12'>
                    <PrimaryButton href={route('logar')} className="h-12 w-full" disabled={processing} center={true}>Entrar</PrimaryButton>
                    <PrimaryButton gray={true} icon={<FcGoogle className='w-8 h-8'></FcGoogle>} className='h-12 w-full bg-white justify-center'>Entrar com o Google</PrimaryButton>
                </div>


            </form>
        </GuestLayout>
    );
}
