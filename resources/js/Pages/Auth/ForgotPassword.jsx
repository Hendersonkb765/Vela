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
        <section className='bg-primary h-screen flex flex-col items-center justify-center py-8'>
            <Head title="Trocar senha" />
            <div className='w-2/5 flex flex-col items-center bg-white px-4 py-8 rounded-xl'>
                <h2 className='font-headers font-bold text-3xl mb-6  text-neutralcolors-600 '>Esqueceu sua senha?</h2>
                <form onSubmit={submit} className='flex flex-col space-y-4'>
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
