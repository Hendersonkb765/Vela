import RadialOptions from "@/FigmaComponents/Inputs/RadialOptions";
import React from "react";
import { Head } from '@inertiajs/react';


const Stage2 = ({baseInfo, maxStep, data, setData, errors}) => {

    const options = [
        { id: 1, title: 'Presidente de Organização', imageSrc: 'storage/Images/Presidente.svg' },
        { id: 2, title: 'Membro de Organização', imageSrc: 'storage/Images/Membro.svg' },
        { id: 3, title: 'Voluntário de Organização', imageSrc: 'storage/Images/Voluntario.svg' },
    ];


    const handleOptionSelect = (title) => {
        title = title.split(' ')[0];
        const isPresident = (title === 'Presidente');

        setData({
            ...data,
            user: {
                ...data.user,
                roleInOrganization: title,
            },
            hasOrganization: isPresident,
        });
    };

    return (
        <div className="flex flex-col space-y-8">
            <Head title="Quem é você no terceiro setor?"/>

            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700">{baseInfo.title}</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700">{baseInfo.description}</p>

            </div>
            <div className="flex space-x-2">

                <RadialOptions onSelect={handleOptionSelect} options={options} />
            </div>
        </div>
    )
}

export default Stage2