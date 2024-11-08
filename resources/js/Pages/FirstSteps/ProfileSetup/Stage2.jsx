// src/Stage2.js
import RadialOptions from "@/FigmaComponents/Inputs/RadialOptions";
import React, { useState, useEffect } from "react";
import { Head } from '@inertiajs/react';

const Stage2 = ({ baseInfo, maxStep, data, setData, errors }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { id: 1, title: 'Presidente de Organização', imageSrc: 'images/Presidente.svg' },
        { id: 2, title: 'Membro de Organização', imageSrc: 'images/Membro.svg' },
        { id: 3, title: 'Voluntário de Organização', imageSrc: 'images/Voluntario.svg' },
    ];

    useEffect(() => {
        if (data.user && data.user.roleInOrganization) {
            setSelectedOption(data.user.roleInOrganization);
        }
    }, [data.user]);

    const handleOptionSelect = (id) => {
        setSelectedOption(id);
        const isPresident = (id === 1);
        setData({
            ...data,
            user: {
                ...data.user,
                roleInOrganization: id,
            },
            hasOrganization: isPresident,
        });
    };

    return (
        <div className="flex flex-col space-y-6">
            <Head title="Quem é você no terceiro setor?" />

            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-white">{baseInfo.title}</h1>
                <p className="font-body font-normal text-base text-neutralcolors-700 dark:text-gray-300">{baseInfo.description}</p>
            </div>

            <div className="flex space-x-2">
                <RadialOptions
                    onSelect={handleOptionSelect}
                    options={options}
                    selectedOption={selectedOption}
                />
            </div>
        </div>
    );
}

export default Stage2;
