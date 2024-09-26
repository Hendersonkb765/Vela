import Checkbox from "@/Components/Checkbox";
import InputError from "@/FigmaComponents/Inputs/InputError";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React from "react";
import { Head } from '@inertiajs/react';

const Stage4 = ({baseInfo, maxStep, data, setData, errors}) => {
    return (
        <div className="flex flex-col space-y-8">
            <Head title="Fale mais sobre sua organização"/>

            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-white">{baseInfo.title}</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700 dark:text-gray-300">{baseInfo.description}</p>
            </div>
            <div className="flex flex-col space-y-2">

                <h3 className="font-headers font-medium text-large text-neutralcolors-700 dark:text-gray-200">CNPJ da sua Organização</h3>
                <div>
                <TextInput
                    id="CNPJ"
                    name="CNPJ"
                    value={data.organization.CNPJ}
                    className="mt-1 block w-96 min-w-fit"
                    autoComplete="CNPJ"
                    isFocused={true}
                    onChange={(e) => setData('organization', {
                        ...data.organization,
                        CNPJ: e.target.value
                    })}
                    placeholder={"CNPJ da Sua Organização"}
                    required={!data.organization.doesNotHaveCNPJ}
                />
                </div>
                <div>
                    <label className="flex items-center">
                            <Checkbox
                                name="remember"
                                checked={data.organization.doesNotHaveCNPJ}
                                onChange={(e) => setData('organization', {
                                    ...data.organization,
                                    doesNotHaveCNPJ: e.target.checked
                                })}
                            />
                            <span className="ms-2 text-sm text-neutralcolors-400 dark:text-gray-400">Minha organização não possui cnpj</span>
                    </label>
                </div>
                {data.organization.doesNotHaveCNPJ &&
                    <div>
                        <h3 className="font-headers font-medium text-large text-neutralcolors-700 mt-2 dark:text-gray-200">Seu CPF</h3>
                        <div>
                            <TextInput
                                id="CPF"
                                name="CPF"
                                value={data.organization.CPF}
                                className="mt-1 block w-96 min-w-fit"
                                autoComplete="CPF"
                                isFocused={true}
                                onChange={(e) => setData('organization', {
                                    ...data.organization,
                                    CPF: e.target.value
                                })}
                                placeholder={"Seu CPF"}
                                required
                            />

                            <InputError message={errors.CPF} className="mt-2" />
                        </div>
                    </div>


                }
            </div>
            <div>

            </div>
        </div>

    )
}

export default Stage4
