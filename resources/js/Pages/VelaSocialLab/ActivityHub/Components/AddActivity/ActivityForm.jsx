import { useState } from 'react';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import DateInput from '@/FigmaComponents/Inputs/DateInput';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';
import TextInput from '@/FigmaComponents/Inputs/TextInput';
import { useForm } from '@inertiajs/react';
import SecondaryButton from '@/FigmaComponents/Button/SecondaryButton';

const MIN_SIZE = 150;
const ASPECT_RATIO = 1;

export default function MultiStepActivityForm({ onSubmit }) {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [imgSrc, setImgSrc] = useState('');

    const minDate = "1900-01-01";
    const maxDate = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];

    const { data, setData, processing, post} = useForm({
        activityTitle: '',
        activityDescription: '',
        activityAudience: '',
        activityDate: '',
        activityHourStart: '06:00',
        activityHourEnd: '07:00',
        activityThumbnail: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const validateStep1 = () => {
        const newErrors = {};
        if (!data.activityTitle) {
            newErrors.activityTitle = 'O título é obrigatório.';
        }
        if (!data.activityDescription) {
            newErrors.activityDescription = 'A descrição é obrigatória.';
        }
        if (!data.activityAudience) {
            newErrors.activityAudience = 'A audiência é obrigatória.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const validateStep2 = () => {
        const newErrors = {};
        if (!data.activityDate) {
            newErrors.activityDate = 'A data é obrigatória.';
        }
        if (!data.activityHourStart) {
            newErrors.activityHourStart = 'A hora de início é obrigatória.';
        }
        if (!data.activityHourEnd) {
            newErrors.activityHourEnd = 'A hora de fim é obrigatória.';
        }
        if (data.activityHourStart >= data.activityHourEnd) {
            newErrors.activityHourEnd = 'A hora de fim deve ser após a hora de início.';
        }
        if(data.activityHourStart === data.activityHourEnd){
            newErrors.activityHourEnd = 'A hora de fim deve ser diferente da hora de início.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSelectFile = (e) => {
        const file = e.target.files?.[0];
        if(!file) return;

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            const imageElement = new Image();
            const imageUrl = reader.result?.toString() || "";
            imageElement.src = imageUrl;

            imageElement.addEventListener("load", (event) => {
                const { naturalHeight, naturalWidth } = event.currentTarget;
                if (naturalWidth < MIN_SIZE || naturalHeight < MIN_SIZE) {
                    setErrors((prevErrors) => ({
                        ...prevErrors,
                        activityThumbnail: 'Imagem muito pequena (tamanho mínimo: 150x150)',
                    }));
                    setImgSrc(''); // Limpa a imagem
                    return;
                }

                // Se a imagem for válida, atualiza o estado
                setImgSrc(imageUrl);
                setData('activityThumbnail', file); // Salva o arquivo no estado do formulário
            });
        });

        reader.readAsDataURL(file);
    };

    const handleNextStep = () => {
        if (step === 1 && validateStep1()) {
            setStep(step + 1);
        } else if (step === 2 && validateStep2()) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        setStep(step - 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validação final antes de enviar
        if (data.activityThumbnail) {
            post(route('activity.store'), {
                data: data,
                onFinish: () => {
                    setImgSrc(''); // Limpa o estado da imagem

                },
                onAfter: () => {
                    window.location.reload();
                }
            });
        } else {
            setErrors({ activityThumbnail: 'A imagem é obrigatória.' });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {step === 1 && (
                <>
                    <div className="mb-4">
                        <InputLabel>Título da Atividade</InputLabel>
                        <TextInput
                            name="activityTitle"
                            value={data.activityTitle}
                            onChange={handleChange}
                            required
                            placeholder='Dê um título especial para sua atividade'
                        />
                        {errors.activityTitle && <p className="text-body text-sm text-red-500">{errors.activityTitle}</p>}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Descrição</InputLabel>
                        <textarea
                            name="activityDescription"
                            value={data.activityDescription}
                            onChange={handleChange}
                            className="mt-1 block w-full h-20 min-w-96 rounded-md text-sm border-2 border-neutralcolors text-neutralcolors-600 dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400"
                            required
                            placeholder='Escreva uma pequena descrição da atividade'
                        />
                        {errors.activityDescription && <p className="text-red-500 text-body text-sm">{errors.activityDescription}</p>}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Audiencia</InputLabel>
                        <TextInput
                            name="activityAudience"
                            value={data.activityAudience}
                            onChange={handleChange}
                            required
                            placeholder='Diga quantas pessoas participaram da atividade'
                        />
                        {errors.activityAudience && <p className="text-red-500 text-body text-sm">{errors.activityAudience}</p>}
                    </div>
                    <PrimaryButton center onClick={handleNextStep} className='!ml-auto !h-12'>
                        Próximo
                    </PrimaryButton>
                </>
            )}

            {step === 2 && (
                <>
                    <div className="mb-4">
                        <InputLabel>Data da Atividade</InputLabel>
                        <DateInput
                            id="activityDate"
                            name="activityDate"
                            value={data.activityDate}
                            onChange={(e) => setData('activityDate', e.target.value)}
                            minDate={minDate}
                            maxDate={maxDate}
                            required
                        />
                        {errors.activityDate && <p className="text-red-500 text-body text-sm">{errors.activityDate}</p>}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Hora de Início</InputLabel>
                        <TextInput
                            type="time"
                            name="activityHourStart"
                            value={data.activityHourStart}
                            onChange={handleChange}
                            className="dark:[color-scheme:dark]"
                            required
                        />
                        {errors.activityHourStart && <p className="text-red-500 text-body text-sm">{errors.activityHourStart}</p>}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Hora de Fim</InputLabel>
                        <TextInput
                            type="time"
                            name="activityHourEnd"
                            value={data.activityHourEnd}
                            className="dark:[color-scheme:dark]"
                            onChange={handleChange}
                            required
                        />
                        {errors.activityHourEnd && <p className="text-red-500 text-body text-sm">{errors.activityHourEnd}</p>}
                    </div>
                    <div className="flex justify-between">
                        <SecondaryButton center onClick={handlePreviousStep} className='!h-12'>
                            Anterior
                        </SecondaryButton>
                        <PrimaryButton center onClick={handleNextStep} className='!h-12'>
                            Próximo
                        </PrimaryButton>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    {/* Step 3: Upload da Imagem */}
                    <div className="mb-4">
                        <label className="block mb-3">
                            <span className="sr-only ">Escolha uma foto para Thumbnail</span>
                            <input
                                type="file"
                                accept="image/*"
                                name = "activityThumbnail"
                                onChange={onSelectFile}
                                className="block w-full text-sm dark:text-gray-200"
                            />
                        </label>
                        {imgSrc && <img src={imgSrc} alt="Preview da Imagem" className="w-32 h-32 object-cover"/>}
                        {errors.activityThumbnail && <p className="text-red-500">{errors.activityThumbnail}</p>}
                    </div>
                    <div className="flex justify-between">
                        <SecondaryButton center onClick={handlePreviousStep} className='!h-12'>Anterior</SecondaryButton>
                        <PrimaryButton center type="submit" disabled={processing} className='!h-12'>Enviar</PrimaryButton>
                    </div>
                </>
            )}
        </form>
    );
}
