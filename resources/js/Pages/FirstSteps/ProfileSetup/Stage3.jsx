import InputError from "@/FigmaComponents/Inputs/InputError";
import ProfileUploadInput from "@/FigmaComponents/Inputs/ImageUpload/ProfileUploadInput";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import {React, useState} from "react";
import { Head } from '@inertiajs/react';

// Para mascara
// npm install react-input-mask
import InputMask from 'react-input-mask'; // Importando a biblioteca

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
            <div className="flex items-center space-x-12">
                <div className="flex flex-col space-y-2">
                    <div>
                        <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">Nome da sua Organização*</h3>
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
                    <div>
                        <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">CNPJ da sua Organização <span className="text-neutralcolors-300 font-normal dark:text-gray-500">(opcional)</span></h3>
                        <p className="font-body font-normal text-sm text-neutralcolors-700  dark:text-gray-400 ">
                            Se sua organização ainda não tem um CNPJ, nós iremos te ajudar a consegui-lo.
                        </p>
                    </div>

                    <div>
                        <InputMask
                            maskChar=""
                            mask="99.999.999/9999-99" // Máscara para o formato de CNPJ
                            value={data.organization.CNPJ}
                            onChange={(e) => setData('organization', {
                                ...data.organization,
                                CNPJ: e.target.value
                            })}
                        >
                            {() => (
                                <TextInput
                                    id="CNPJ"
                                    name="CNPJ"
                                    className="mt-1 block w-96 min-w-fit"
                                    autoComplete="CNPJ"
                                    isFocused={true}
                                    placeholder="99.999.999/9999-99"
                                   
                                />
                            )}
                        </InputMask>
                        <InputError message={errors.CNPJ} className="mt-2" />
                    </div>
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
                    savedAvatar={data.organization.organizationProfilePicture}
                />
            </div>
            <div>

            </div>
        </div>

    )
}

export default Stage3
