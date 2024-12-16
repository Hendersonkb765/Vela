import GuestLayout from '@/Layouts/GuestLayout';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import SecondaryButton from '@/FigmaComponents/Button/SecondaryButton';

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <section className='bg-primary dark:bg-primary-300 h-screen flex flex-col items-start sm:items-center justify-center sm:py-8  '>
            <Head title="Email Verification" />

            <div className=' sm:w-2/5 w-11/12 sm:h-auto flex flex-col items-start justify-center bg-white px-4 py-8 rounded-xl dark:bg-gray-900 '>

                <div className='text-neutralcolors-700 dark:text-neutralcolors-200 font-body'>
                    <div className="mb-4 text-sm ">
                        Obrigado por se inscrever! Antes de começar, poderia verificar seu endereço de e-mail clicando no link que acabamos de enviar para você? Se você não recebeu o e-mail, ficaremos felizes em enviar outro.
                    </div>

                    {status === 'verification-link-sent' && (
                        <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">
                            Um novo link de verificação foi enviado para o endereço de e-mail que você forneceu durante o cadastro.
                        </div>
                    )}
                </div>

                <form onSubmit={submit} >
                    <div className="mt-4 flex items-center justify-start space-x-4">
                        <PrimaryButton disabled={processing} type='submit' className='h-12'>Reenviar E-mail de Verificação</PrimaryButton>
                        <Link
                            href={route('logout')}
                            method="POST"
                            as="button"
                            className="min-w-32 h-12 !border-solid border-2 rounded-md !text-danger !border-danger hover:!bg-danger hover:!text-white transition-colors"
                        >
                            Sair
                        </Link>
                        {status === 'verification-link-sent' && (
                        <Link href={route('dashboard')} as="button" className=" min-w-32 h-12 rounded border-2 border-green-500/100 text-white bg-green-700 p-1">
                            Já verifiquei!
                        </Link>)}
                    </div>
                </form>
            </div>
        </section>
    );
}
