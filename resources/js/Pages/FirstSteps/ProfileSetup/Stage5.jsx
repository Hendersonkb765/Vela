import Checkbox from "@/Components/Checkbox";
import CheckboxGallery from "@/FigmaComponents/CheckboxGallery";
import InputError from "@/FigmaComponents/Inputs/InputError";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React from "react";
import { Head } from '@inertiajs/react';

const Stage5 = ({baseInfo, maxStep, data, setData, errors}) => {

    const categories = [
        { id: 1, name: 'Assistência social', image: 'storage/Images/Eixos/Eixo1.jpg' },
        { id: 2, name: 'Saúde', image: 'storage/Images/Eixos/Eixo2.jpg' },
        { id: 3, name: 'Defesa de direitos', image: 'storage/Images/Eixos/Eixo3.jpg' },
        { id: 4, name: 'Meio ambiente', image: 'storage/Images/Eixos/Eixo4.jpg' },
        { id: 5, name: 'Habitação', image: 'storage/Images/Eixos/Eixo5.jpg' },
        { id: 6, name: 'Educação e pesquisa', image: 'storage/Images/Eixos/Eixo6.jpg' },
        { id: 7, name: 'Cultura', image: 'storage/Images/Eixos/Eixo7.jpg' },
    ];

    const handleSelectionChange = (selectedNames) => {
        setData((prevData) => ({
            ...prevData,
            organization: {
                ...prevData.organization,
                focusAreas: selectedNames,
            },
        }));
    };

    return (
        <div className="flex flex-col space-y-8 pb-8">
            <Head title="Publico alvo"/>

            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700">{baseInfo.title}</h1>
            </div>
            <CheckboxGallery onSelectionChange={handleSelectionChange} categories={categories} />

        </div>
    )
}

export default Stage5
