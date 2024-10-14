import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/FigmaComponents/Inputs/InputError';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import TextInput from '@/FigmaComponents/Inputs/TextInput';
import { Head, useForm } from '@inertiajs/react';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('password.email'));
    };

    return (
        <section className='bg-primary dark:bg-primary-300 h-screen overflow-hidden  flex flex-col items-center justify-center'>
            <Head title="Trocar senha" />
            <div className='w-screen sm:min-w-fit sm:w-1/3 md:w-3/5 h-full sm:h-auto md:h-96 flex flex-col items-center justify-start pt-60 sm:pt-8 px-4 py-8 sm:rounded-xl bg-white dark:bg-gray-900 dark:text-neutralcolors-200 relative '>
                <h2 className='font-headers font-bold text-3xl mb-6  text-neutralcolors-600 dark:text-gray-100'>Esqueceu sua senha?</h2>
                <form onSubmit={submit} className='flex flex-col space-y-8 w-full '>
                    {status && <div className="mb-4 font-medium text-sm text-green-600 dark:text-green-400">{status}</div>}
                    <div>
                        <InputLabel htmlFor="email" value="Email" />
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                            placeholder={"Digite seu email"}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>


                    <div className="flex items-center justify-end mt-8">
                        <PrimaryButton className="h-12 w-full" disabled={processing} center={true} type='submit'>
                            Receber Email
                        </PrimaryButton>
                    </div>
                </form>
            </div>
        </section>
    );
}
