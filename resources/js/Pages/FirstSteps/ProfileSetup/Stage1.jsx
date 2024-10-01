import DateInput from "@/FigmaComponents/Inputs/DateInput";
import InputError from "@/FigmaComponents/Inputs/InputError";
import ProfileUploadInput from "@/FigmaComponents/Inputs/ImageUpload/ProfileUploadInput";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React, { useState } from "react";
import { Head } from '@inertiajs/react';

export default function({ baseInfo, maxStep, data, setData, errors, onNameValidation }) {

    const minDate = "1900-01-01";
    const maxDate = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];

    const [imageUrl, setImageUrl] = useState(data.profilePicture || null);
    const [nameError, setNameError] = useState(null);

    const handleImageChange = (url) => {
        setImageUrl(url);
        setData('user', { ...data.user, profilePicture: url });
    };

    const validateName = (name) => {
        const isValid = name.split(' ').length > 1;
        setNameError(isValid ? null : "O nome completo deve conter pelo menos um sobrenome.");
        onNameValidation(isValid); // Passa a validação para o componente pai
    };

    const handleNameChange = (e) => {
        const name = e.target.value;
        setData('user', { ...data.user, name });
        validateName(name);
    };

    return (
        <div className="flex flex-col space-y-8">
            <Head title="Incremente Seu Perfil" />
            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-white">{baseInfo.title}</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700 dark:text-gray-300">{baseInfo.description}</p>
            </div>
            <div className="flex space-x-12">
                <div className="flex flex-col space-y-2">
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">Seu Nome*</h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700 dark:text-gray-400">Qual é o seu nome completo?</p>
                    <TextInput
                        id="name"
                        name="name"
                        value={data.user.name}
                        className="mt-1 block w-96"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleNameChange}
                        placeholder="Seu nome completo"
                        required
                    />
                    <InputError message={nameError || errors.name} className="mt-2 text-danger" />
                </div>
                <div className="flex flex-col space-y-2">
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">Quando é seu aniversário?*</h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700 dark:text-gray-400">Queremos saber sua idade</p>
                    <DateInput
                        id="birthday"
                        name="birthday"
                        value={data.user.birthday}
                        className="mt-1 block w-96"
                        autoComplete="birthday"
                        isFocused={true}
                        onChange={(e) => setData('user', { ...data.user, birthday: e.target.value })}
                        required
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                    <InputError message={errors.birthday} className="mt-2 text-danger" />
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">Sua Foto de Perfil <span className="text-neutralcolors-300 font-normal dark:text-gray-500">(opcional)</span></h3>
                <p className="font-body font-normal text-sm text-neutralcolors-700 dark:text-gray-400">Atribua um rosto ao seu nome.</p>
                <ProfileUploadInput
                    firstletter={data.user.name?.charAt(0).toUpperCase()}
                    updateAvatarUrl={handleImageChange}
                    savedAvatar={data.user.profilePicture}
                />
            </div>
        </div>
    );
}
