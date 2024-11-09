import Checkbox from "@/Components/Checkbox";
import CheckboxGallery from "@/FigmaComponents/CheckboxGallery";
import InputError from "@/FigmaComponents/Inputs/InputError";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React from "react";
import { Head } from '@inertiajs/react';

const Stage4 = ({baseInfo, maxStep, data, setData, errors,images}) => {
    //Lembre: salvar as caixas selecionadas não está feito ainda
    const categories = [
        { id: 1, name: 'Assistência social', image: images.stage4.eixo1 },
        { id: 2, name: 'Saúde', image: images.stage4.eixo2 },
        { id: 3, name: 'Defesa de direitos', image: images.stage4.eixo3 },
        { id: 4, name: 'Meio ambiente', image: images.stage4.eixo4 },
        { id: 5, name: 'Habitação', image: images.stage4.eixo5 },
        { id: 6, name: 'Educação e pesquisa', image: images.stage4.eixo6 },
        { id: 7, name: 'Cultura', image: images.stage4.eixo7 },
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
        <div className="flex flex-col space-y-2 ">
            <Head title="Publico alvo"/>

            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700 dark:text-white">{baseInfo.title}</h1>
            </div>
            <CheckboxGallery onSelectionChange={handleSelectionChange} categories={categories} />

        </div>
    )
}

export default Stage4
