import InputError from "@/FigmaComponents/Inputs/InputError";
import ProfileUploadInput from "@/FigmaComponents/Inputs/ProfileUploadInput";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React from "react";

const Stage3 = ({baseInfo, maxStep, data, setData, errors}) => {
    return (
        <div className="flex flex-col space-y-8">
            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700">{baseInfo.title}</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700">{baseInfo.description}</p>
            </div>
            <div className="flex flex-col space-y-2">
                <div>
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700">Nome da sua Organização</h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700">Esse nome vai ser aquele apresentado para outros usuários que querem encontrar sua organização</p>
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
                    <h3 className="font-headers font-medium text-large text-neutralcolors-700">Escolha uma foto para o perfil da organização</h3>
                    <p className="font-body font-normal text-sm text-neutralcolors-700">Coloque uma foto que represente sua organização. Faça essa escolha com carinho, mas não se preocupe, você poderá mudar depois.</p>
                </div>
                <ProfileUploadInput firstletter={data.organization.organizationName?.charAt(0).toUpperCase()}/>
            </div>
            <div>

            </div>
        </div>

    )
}

export default Stage3
