import InputError from "@/FigmaComponents/Inputs/InputError";
import ProfileUploadInput from "@/FigmaComponents/Inputs/ImageUpload/ProfileUploadInput";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import {React, useState} from "react";
import { Head } from '@inertiajs/react';

const Stage3 = ({baseInfo, maxStep, data, setData, errors}) => {

    const [imageUrl, setImageUrl] = useState(data.organizationProfilePicture || null);
    // Função para lidar com a mudança da imagem
    const handleImageChange = (url) => {
        setImageUrl(url);
        setData('organization', {
            ...data.organization,
            organizationProfilePicture: url
        })
    };

    return (
        <div className="flex flex-col space-y-8">
            <Head title="Fale sobre sua organização"/>

            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-white">{baseInfo.title}</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700 dark:text-gray-300">{baseInfo.description}</p>
            </div>
            <div className="flex flex-col space-y-2">
                <div>
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">Nome da sua Organização</h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700  dark:text-gray-400">Esse nome vai ser aquele apresentado para outros usuários que querem encontrar sua organização</p>
                </div>
                <div>
                    <TextInput
                        id="organizationName"
                        name="organizationName"
                        value={data.organization.organizationName}
                        className="mt-1 block w-96 min-w-fit"
                        autoComplete="organizationName"
                        isFocused={true}
                        onChange={(e) => setData('organization', {
                            ...data.organization,
                            organizationName: e.target.value
                        })}
                        placeholder={"Nome da Sua Organização"}
                        required
                    />

                    <InputError message={errors.organizationName} className="mt-2" />
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div className="mb-2">
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">Escolha uma foto para o perfil da organização</h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700 dark:text-gray-400">Coloque uma foto que represente sua organização. Faça essa escolha com carinho, mas não se preocupe, você poderá mudar depois.</p>
                </div>
                <ProfileUploadInput
                    firstletter={data.organization.organizationName?.charAt(0).toUpperCase()}
                    updateAvatarUrl={handleImageChange}
                />
            </div>
            <div>

            </div>
        </div>

    )
}

export default Stage3
