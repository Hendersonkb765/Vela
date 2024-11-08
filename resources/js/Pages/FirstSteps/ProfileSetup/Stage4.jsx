import Checkbox from "@/Components/Checkbox";
import CheckboxGallery from "@/FigmaComponents/CheckboxGallery";
import InputError from "@/FigmaComponents/Inputs/InputError";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React from "react";
import { Head } from '@inertiajs/react';

const Stage4 = ({baseInfo, maxStep, data, setData, errors}) => {
    //Lembre: salvar as caixas selecionadas não está feito ainda
    const categories = [
        { id: 1, name: 'Assistência social', image: 'images/Eixos/Eixo1.jpg' },
        { id: 2, name: 'Saúde', image: 'images/Eixos/Eixo2.jpg' },
        { id: 3, name: 'Defesa de direitos', image: 'images/Eixos/Eixo3.jpg' },
        { id: 4, name: 'Meio ambiente', image: 'images/Eixos/Eixo4.jpg' },
        { id: 5, name: 'Habitação', image: 'images/Eixos/Eixo5.jpg' },
        { id: 6, name: 'Educação e pesquisa', image: 'images/Eixos/Eixo6.jpg' },
        { id: 7, name: 'Cultura', image: 'images/Eixos/Eixo7.jpg' },
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
        <div className="h-full min-h-fit flex-col space-y-12 mb-8 sm:flex-row sm:pb-0 ">
            <Head title="Publico alvo"/>

            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-white">{baseInfo.title}</h1>
            </div>
            <div className="flex flex-col">
                <CheckboxGallery onSelectionChange={handleSelectionChange} categories={categories} />
            </div>

        </div>
    )
}

export default Stage4
