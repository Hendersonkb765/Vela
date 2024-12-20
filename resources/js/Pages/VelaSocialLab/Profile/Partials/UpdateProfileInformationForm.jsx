import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Link, useForm, usePage } from '@inertiajs/react';
import { Transition } from '@headlessui/react';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import ProfileUploadInput from '@/FigmaComponents/Inputs/ImageUpload/ProfileUploadInput';
import { useState } from 'react';

export default function UpdateProfileInformation({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        user: {
            name: user.name,
            profilePicture: user.profilePicture,
        }
    });

    const submit = (e) => {
        e.preventDefault();
        patch(route('profile.update'));
    };

    const [imageUrl, setImageUrl] = useState(data.profilePicture || null);
    const handleImageChange = (url) => {
        setImageUrl(url);
        setData('user', {
            ...data.user,
            profilePicture: url
        });
    };

    return (
        <section className={className}>
            <header className='sm:px-4'>
                <h2 className="sm:px-0 text-lg font-medium text-gray-900 dark:text-gray-100">Informações de Perfil</h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Atualize suas informações de perfil
                </p>
            </header>

            <form onSubmit={submit} className="sm:px-0 mt-6 space-y-6 ">
                <ProfileUploadInput
                    firstletter={data.user.name?.charAt(0).toUpperCase()}
                    updateAvatarUrl={handleImageChange}
                    savedAvatar={data.user.profilePicture}
                    className="px-4"
                />
                <div className='sm:px-4'>
                    <InputLabel htmlFor="name" value="Nome" />
                    <TextInput
                        id="name"
                        className="mt-1 block w-full h-12 sm:h-auto"
                        value={data.user.name}
                        onChange={(e) => setData('user', {
                            ...data.user,
                            name: e.target.value
                        })}
                        required
                        isFocused
                        autoComplete="name"
                    />

                    {/* errors.user.name */}
                    <InputError className="mt-2" message={errors.name} />
                </div>

                {/* <div>
                    <InputLabel htmlFor="email" value="E-mail" />

                    <TextInput
                        id="email"
                        type="email"
                        className="mt-1 block w-full"
                        value={data.email}
                        onChange={(e) => setData('user.email', e.target.value)}
                        required
                        autoComplete="username"
                    />

                    <InputError className="mt-2" message={errors.email} />
                </div> */}

                {mustVerifyEmail && user.email_verified_at === null && (
                    <div>
                        <p className="text-sm mt-2 text-gray-800 dark:text-gray-200">
                            Seu endereço de e-mail não foi verificado.
                            <Link
                                href={route('verification.send')}
                                method="post"
                                as="button"
                                className="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            >
                                Clique aqui para reenviar o e-mail de verificação.
                            </Link>
                        </p>

                        {status === 'verification-link-sent' && (
                            <div className="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                                Um novo link de verificação foi enviado para o seu endereço de e-mail.
                            </div>
                        )}
                    </div>
                )}

                <div className="flex items-center gap-4 sm:px-4">
                    <PrimaryButton disabled={processing} className='justify-center h-12 w-full sm:w-56 text-lg sm:!text-base ' type={'submit'}>Salvar</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600 dark:text-gray-400">Alterações Salvas.</p>
                    </Transition>
                </div>
            </form>
        </section>
    );
}
