import React, { useState, useEffect } from "react";
import { useForm } from '@inertiajs/react';
import PrimaryButton from "@/FigmaComponents/Button/PrimaryButton";
import ProfileSetupLayout from "@/Layouts/ProfileSetupLayout";
import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";

export default function ProfileSetup() {
    const [currentStep, setCurrentStep] = useState(() => {
        // Recupera o estado do localStorage, se disponível
        const savedStep = localStorage.getItem('currentStep');
        return savedStep ? JSON.parse(savedStep) : 1; // Valor padrão é 1
    });
    const [complete, setComplete] = useState(false);
    const { data, setData, post, patch, processing, errors, reset } = useForm({
        user: {
            name: '',
            profilePicture: '',
            birthday: '',
            roleInOrganization: null,
        },
        hasOrganization: false,
        organization: {
            organizationName: '',
            organizationProfilePicture: '',
            CNPJ: '',
            doesNotHaveCNPJ: false,
            CPF: '',
            focusAreas: [],
        }
    });
    const isNameValid =  data.user.name.split(' ').length > 1;



    // Carrega os dados do formulário do localStorage, se disponíveis
    useEffect(() => {
        const savedData = localStorage.getItem('formData');
        if (savedData) {
            setData(JSON.parse(savedData));
        }
    }, []);

    // Salva o estado atual no localStorage sempre que currentStep ou data mudar
    useEffect(() => {
        localStorage.setItem('currentStep', JSON.stringify(currentStep));
        localStorage.setItem('formData', JSON.stringify(data));
    }, [currentStep, data]);

    const steps = [
        { stage: 1, title: 'Vamos Começar Incrementando Seu Perfil', description: 'Adicione a sua foto de perfil e nos fale um pouco sobre você para que possamos conhecê-lo melhor e personalizar sua experiência na nossa plataforma.' },
        { stage: 2, title: 'Quem é você no terceiro setor?', description: '' },
        { stage: 3, title: 'Fale mais sobre sua organização', description: 'Nos fale um pouco sobre sua organização para que possamos conhecê-la melhor' },
        { stage: 4, title: 'Quais são seus eixos de atuação?', description: '' },
    ];

    const maxStep = steps.length;
    const RenderStepContent = (step) => {
        switch (step) {
            case 1:
                return <Stage1 baseInfo={steps[0]} maxStep={maxStep} data={data} setData={setData} errors={errors} />;
            case 2:
                return <Stage2 baseInfo={steps[1]} maxStep={maxStep} data={data} setData={setData} errors={errors} />;
            case 3:
                return <Stage3 baseInfo={steps[2]} maxStep={maxStep} data={data} setData={setData} errors={errors} />;
            case 4:
                return <Stage4 baseInfo={steps[3]} maxStep={maxStep} data={data} setData={setData} errors={errors} />;
            default:
                return <Stage1 baseInfo={steps[0]} maxStep={maxStep} data={data} setData={setData} errors={errors} />;
        }
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (currentStep === 1 && !isNameValid) return alert("Por favor, insira um nome válido.");
        if (currentStep === maxStep) handleSubmit();
        if (currentStep === 2 && !data.user.roleInOrganization) return alert("Selecione uma das opções");
        if (currentStep === 2 && !data.hasOrganization) handleSubmit();
        else {
            setCurrentStep((prev) => Math.min(prev + 1, maxStep));
        }
    };

    const handleSubmit = () => {
        patch(route('completeRegistration.store'), {
            data: data,
            onFinish: () => {
                reset();
                setComplete(true); // Marca como completo
                localStorage.removeItem('formData'); // Remove os dados do localStorage após a finalização
                localStorage.removeItem('currentStep'); // Remove o step do localStorage após a finalização
            },
        });
    };

    return (
        <ProfileSetupLayout hideProfile={true} imgUrl={data.profilePicture} userName={data.name}>
            {!complete ? (
                <form onSubmit={handleNextStep} className="h-full m-4 mb-10 flex flex-col " encType="multipart/form-data">
                    {RenderStepContent(currentStep)}
                    <div className="flex justify-end mt-auto space-x-4">
                        <PrimaryButton gray={true} center={true} disabled={currentStep === 1} className="h-12" onClick={handlePrevStep} type="button">
                            Voltar
                        </PrimaryButton>
                        <PrimaryButton center={true} className="h-12" type="submit">
                            {(currentStep === maxStep) ? "Finalizar" : "Continuar"}
                        </PrimaryButton>
                    </div>
                </form>
            ) : (
                <h1 className="h-full flex justify-center items-center text-4xl font-bold">Formulário Completo</h1>
            )}
        </ProfileSetupLayout>
    );
}
