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
        <section className='bg-primary dark:bg-primary-300 h-screen flex flex-col items-start sm:items-center justify-center sm:py-8 pt-60 '>
            <Head title="Email Verification" />

            <div className='w-fit sm:w-2/5 h-full sm:h-auto flex flex-col items-start bg-white px-4 py-8 rounded-xl dark:bg-gray-900 '>

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

                <form onSubmit={submit}>
                    <div className="mt-4 flex items-center justify-start space-x-4">
                        <PrimaryButton disabled={processing} type='submit' className='h-12'>Reenviar E-mail de Verificação</PrimaryButton>

                        <SecondaryButton
                            href={route('logout')}
                            method="post"
                            as="button"
                            className="h-12 !text-danger border-danger hover:bg-danger hover:!text-white transition-colors"
                        >
                            Sair
                        </SecondaryButton>
                    </div>
                </form>
            </div>
        </section>
    );
}
