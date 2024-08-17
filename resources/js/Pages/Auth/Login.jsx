import Checkbox from '@/Components/Checkbox';
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
        <section className='bg-primary h-screen flex flex-col items-center justify-center py-8'>
            <Head title="Entrar"/>
            <div className='w-2/5 flex flex-col items-center bg-white px-4 py-8 rounded-xl '>
                <h2 className='font-headers font-bold text-3xl mb-6  text-neutralcolors-600 '>Bem vindo de volta!</h2>
                {status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
                <form onSubmit={submit} className='flex flex-col space-y-4'>
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
                            placeholder={"Digite sua senha"}
                            onChange={(e) => setData('password', e.target.value)}
                            required
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
                
                {/* <div className='flex flex-col space-y-4 mt-12'>
                    <PrimaryButton href={route('logar')} className="h-12 w-full" disabled={processing} center={true}>Entrar</PrimaryButton>
                    <PrimaryButton gray={true} icon={<FcGoogle className='w-8 h-8'></FcGoogle>} className='h-12 w-full bg-white justify-center'>Entrar com o Google</PrimaryButton>
                </div> */}

                    <div className="flex flex-col justify-center space-y-4 pt-3 mb-4">
                        <div className='flex flex-col space-y-4 justify-center items-center'>
                            <PrimaryButton className="h-12 w-full " disabled={processing} center={true}>
                                Entrar
                            </PrimaryButton>
                            <p className="text-sm text-neutralcolors-400">
                                Ainda não tem uma conta? <Link href={route('register')} className="underline  text-primary">Cadastre-se</Link>
                            </p>
                        </div>

                        <div className='flex w-full justify-center items-center space-x-2'>
                            <div className='w-full h-0.5 bg-neutralcolors-100'/>
                            <span className='text-neutralcolors-200'>Ou</span>
                            <div className='w-full h-0.5 bg-neutralcolors-100' />
                        </div>
                        <a className='flex px-4 py-2 gap-2 items-center min-w-32 min-h-8 rounded-md bg-neutralcolors-100 hover:bg-neutralcolors-200 text-sm  font-body hover:bg-primary-500 transition-colors duration-300 ease-out' href={route('redirect',['google'])}>
                            <FcGoogle className='w-8 h-8'></FcGoogle>Entrar com o Google
                        </a>

                    </div>
                </form>
            </div>
        </section>
    );
}
