import Checkbox from "@/Components/Checkbox";
import CheckboxGallery from "@/FigmaComponents/CheckboxGallery";
import InputError from "@/FigmaComponents/Inputs/InputError";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import React from "react";

const Stage5 = ({baseInfo, maxStep, data, setData, errors}) => {

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
        <div className="flex flex-col space-y-8">
            <div className="flex flex-col">
                <span className="font-headers font-normal text-primary text-sm">Etapa {baseInfo.stage} de {maxStep}</span>
                <h1 className="font-headers font-semibold text-4xl text-neutralcolors-700">{baseInfo.title}</h1>
            </div>
            <CheckboxGallery onSelectionChange={handleSelectionChange}  />

        </div>
    )
}

export default Stage5
