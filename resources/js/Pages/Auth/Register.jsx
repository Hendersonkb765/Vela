import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/FigmaComponents/Inputs/InputError';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import TextInput from '@/FigmaComponents/Inputs/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import { FcGoogle } from "react-icons/fc";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register.store'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <section className='bg-primary h-screen flex flex-col items-center justify-center py-8'>
            <Head title="Cadastro" />
            <div className='w-2/5 flex flex-col items-center bg-white px-4 py-8  rounded-xl'>
                <h2 className='font-headers font-bold text-3xl mb-6  text-neutralcolors-400 '>Crie Sua Conta</h2>
                <form onSubmit={submit} className='flex flex-col space-y-4'>
                    <a
                        className='flex px-4 py-2 gap-2 items-center min-w-32 min-h-8 rounded-md bg-neutralcolors-100 hover:bg-neutralcolors-200 text-sm  font-body hover:bg-primary-500 transition-colors duration-300 ease-out' href={route('resources')}>
                        <FcGoogle className='w-8 h-8'></FcGoogle>Continuar com o Google
                    </a>
                    <div className='flex w-full justify-center items-center space-x-2'>
                        <div className='w-full h-0.5 bg-neutralcolors-100'/>
                        <span className='text-neutralcolors-200'>Ou</span>
                        <div className='w-full h-0.5 bg-neutralcolors-100' />
                    </div>


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

                        <InputError message={errors.email} className="mt-2" />
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
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="4">
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
                            <PrimaryButton className="h-12 w-full " type='submit' disabled={processing} center={true}>
                                Registre-se
                            </PrimaryButton>
                            <p className="text-sm text-neutralcolors-400">
                                Já tem uma conta? <Link href={route('login')} className="underline  text-primary">Entre aqui </Link>
                            </p>

                        </div>

                    </div>
                </form>
            </div>
        </section>
    );
}
