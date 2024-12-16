import React, { useState, useEffect } from "react";
import { useForm } from '@inertiajs/react';
import PrimaryButton from "@/FigmaComponents/Button/PrimaryButton";
import ProfileSetupLayout from "@/Layouts/ProfileSetupLayout";
import { FaFlagCheckered } from "react-icons/fa";

import Stage1 from "./Stage1";
import Stage2 from "./Stage2";
import Stage3 from "./Stage3";
import Stage4 from "./Stage4";

export default function ProfileSetup(images) {
    
 
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
        const StageComponent = [Stage1, Stage2, Stage3, Stage4][step - 1];
        return <StageComponent baseInfo={steps[step - 1]} maxStep={steps.length} data={data} setData={setData} errors={errors} images={images}/>;
    };

    const validateCNPJ = async () => {
        let status;

        await post("/validate-cnpj", {
            data: { organization: { CNPJ: data.organization.CNPJ } },
            onError: (errors) => {
                console.log(errors);
                status = 500;
            },
            onSuccess: () => setCurrentStep((prev) => Math.min(prev + 1, maxStep)),

        });
    };

    const handlePrevStep = (e) => {
        e.preventDefault();
        setCurrentStep((prev) => Math.max(prev - 1, 1));
    };

    const handleNextStep = async (e) => {
        e.preventDefault();
        if (currentStep === 1 && !isNameValid) return alert("Por favor, insira um nome válido.");
        if (currentStep === maxStep) handleSubmit();
        if (currentStep === 2 && !data.user.roleInOrganization) return alert("Selecione uma das opções");
        if (currentStep === 2 && !data.hasOrganization) handleSubmit();
        if (currentStep === 3 && data.organization.CNPJ) {
            await validateCNPJ();


        }
        else {
            setCurrentStep((prev) => Math.min(prev + 1, maxStep));
        }
    };

    const handleSubmit = () => {
        patch(route('completeRegistration.store'), {
            data: data,
            onSuccess: (page) => {
                console.log('Registro completo com sucesso:', page);
                reset();
                setCurrentStep(1);
                setComplete(true);
                localStorage.removeItem('formData');
                localStorage.removeItem('currentStep');
            },
            onError: (errors) => {
                console.error('Erro ao completar o registro:', errors);
                alert('Ocorreu um erro ao tentar completar o registro. Por favor, tente novamente.');
            },
            onFinish: () => {
                setCurrentStep(1);
                console.log(localStorage);
            },
        });
    };

    return (
        <ProfileSetupLayout hideProfile={true} imgUrl={data.profilePicture} userName={data.name}>
            {!complete ? (
                <form onSubmit={handleNextStep} className="h-full m-4 mb-24 flex flex-col justify-between sm:mb-10 sm:gap-0" encType="multipart/form-data">
                    <div>
                        {RenderStepContent(currentStep)}
                    </div>

                    <div className="h-full flex justify-end items-end space-x-4 mb-auto pb-4">
                        <PrimaryButton gray={true} center={true} disabled={currentStep === 1} className="!h-12 w-1/3 sm:w-auto" onClick={handlePrevStep} type="button">
                            Voltar
                        </PrimaryButton>
                        <PrimaryButton center={true} className="!h-12 w-1/3 sm:w-auto" type="submit">
                            {(currentStep === maxStep) ? "Finalizar" : "Continuar"}
                        </PrimaryButton>
                    </div>
                </form>
            ) : (
                <div className="h-full flex flex-col items-center justify-center space-y-8">
                    <div className="rounded-full w-40 h-40 bg-neutralcolors-100/50 dark:bg-slate-900 flex justify-center items-center p-8 ">
                        <FaFlagCheckered className="w-32 h-32 text-green-400"/>
                    </div>
                    <div className="flex flex-col text-center space-y-4">
                        <h1 className="text-4xl font-bold font-headers capitalize dark:text-white">Registro concluído com <span className="text-green-400 uppercase">SUCESSO</span> 🎉</h1>
                        <p className="font-body text-base dark:text-gray-300">Agora é só dar uma olhadinha no seu e-mail para continuar. 😊</p>
                    </div>
                    <PrimaryButton href={route("dashboard")} center={true} className="w-36 h-12">OK</PrimaryButton>
                </div>

            )}
        </ProfileSetupLayout>
    );
}
