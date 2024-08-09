import InputError from "@/FigmaComponents/Inputs/InputError";
import InputLabel from "@/FigmaComponents/Inputs/InputLabel";
import ProfileUploadInput from "@/FigmaComponents/Inputs/ProfileUploadInput";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React, { useState } from "react";

export default function({ baseInfo, maxStep, data, setData, errors }) {

    const [imageUrl, setImageUrl] = useState(data.profilePicture || null);
    // Função para lidar com a mudança da imagem
    const handleImageChange = (url) => {
        setImageUrl(url);
        setData('user', {
            ...data.user,
            profilePicture: url
        })
    };

    return (
        <div className="flex flex-col space-y-8">
            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700">{baseInfo.title}</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700">{baseInfo.description}</p>
            </div>
            <div className="flex flex-col space-y-2">
                <div>
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700">Seu Nome</h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700">Qual é o seu nome completo? Assim, podemos te conhecer melhor.</p>
                </div>
                <div>
                    <TextInput
                        id="name"
                        name="name"
                        value={data.user.name}
                        className="mt-1 block w-96"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('user', {
                            ...data.user,
                            name: e.target.value
                        })}
                        placeholder={"Seu nome completo"}
                        required
                    />
                    <InputError message={errors.name} className="mt-2" />
                </div>
            </div>
            <div className="flex flex-col space-y-2">
                <div>
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700">Sua Foto de Perfil <span className="text-neutralcolors-300 font-normal">(opcional)</span></h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700">Atribua um rosto ao seu nome e ajude os outros membros a encontrá-lo com mais facilidade.</p>
                </div>

                <ProfileUploadInput
                    firstletter={data.user.name?.charAt(0).toUpperCase()}
                    onImageChange={handleImageChange}
                />

            </div>
        </div>
    );
}
