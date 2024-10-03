import { useState } from 'react';
import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import DateInput from '@/FigmaComponents/Inputs/DateInput';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';
import TextInput from '@/FigmaComponents/Inputs/TextInput';
import { useForm } from '@inertiajs/react';
import SecondaryButton from '@/FigmaComponents/Button/SecondaryButton';

const MIN_SIZE = 150;
const ASPECT_RATIO = 1;

export default function ActivityForm({ onSubmit }) {
    const [step, setStep] = useState(1);
    const [errors, setErrors] = useState({});
    const [imgSrc, setImgSrc] = useState('');
    const [showPopup, setShowPopup] = useState(false); 

    const minDate = "1900-01-01";
    const maxDate = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];

    const { data, setData, processing, post } = useForm({
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
        if (data.activityHourStart === data.activityHourEnd) {
            newErrors.activityHourEnd = 'A hora de fim deve ser diferente da hora de início.';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSelectFile = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

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
                    setShowPopup(true); // Exibe o popup
                },
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
                            className='mt-2 sm:mt-1 w-full sm:w-auto'
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
                            className="mt-2 sm:mt-1 block w-full h-20 sm:min-w-96 rounded-md text-sm border-2 border-neutralcolors text-neutralcolors-600 dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400"
                            required
                            placeholder='Escreva uma pequena descrição da atividade'
                        />
                        {errors.activityDescription && <p className="text-red-500 text-body text-sm">{errors.activityDescription}</p>}
                    </div>
                    <div className="mb-4">
                        <InputLabel>Audiencia</InputLabel>
                        <TextInput
                            type='number'
                            name="activityAudience"
                            value={data.activityAudience}
                            onChange={handleChange}
                            required
                            className='mt-2 sm:mt-1 w-full sm:w-auto'
                            placeholder='Diga quantas pessoas participaram da atividade'
                        />
                        {errors.activityAudience && <p className="text-red-500 text-body text-sm">{errors.activityAudience}</p>}
                    </div>
                    <PrimaryButton center onClick={handleNextStep} className='w-32 sm:w-40 !ml-auto !h-12 '>
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
                            className='mt-2 sm:mt-1 w-full sm:w-auto'
                            required
                        />
                        {errors.activityDate && <p className="text-red-500 text-body text-sm">{errors.activityDate}</p>}
                    </div>
                    <div className='flex flex-row justify-between sm:flex-col '>
                        <div className="mb-4">
                            <InputLabel>Hora de Início</InputLabel>
                            <TextInput
                                type="time"
                                name="activityHourStart"
                                value={data.activityHourStart}
                                onChange={handleChange}
                                className="mt-2 w-36 dark:[color-scheme:dark]"
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
                                className="mt-2 w-36 dark:[color-scheme:dark]"
                                onChange={handleChange}
                                required
                            />
                            {errors.activityHourEnd && <p className="text-red-500 text-body text-sm">{errors.activityHourEnd}</p>}
                        </div>
                    </div>

                    <div className="flex justify-between mt-12">
                        <SecondaryButton center onClick={handlePreviousStep} className='!h-12 w-32 sm:w-40'>
                            Anterior
                        </SecondaryButton>
                        <PrimaryButton center onClick={handleNextStep} className='!h-12 w-32 sm:w-40'>
                            Próximo
                        </PrimaryButton>
                    </div>
                </>
            )}

            {step === 3 && (
                <>
                    <div className="mb-4">
                        <InputLabel>Foto Thumbnail</InputLabel>
                        <span className="sr-only ">Escolha uma foto para Thumbnail</span>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={onSelectFile}
                            className="mt-2 sm:mt-1 w-full sm:w-auto block dark:text-gray-200"
                        />
                        {errors.activityThumbnail && <p className="text-red-500 text-body text-sm">{errors.activityThumbnail}</p>}
                    </div>
                    {imgSrc && <img src={imgSrc} alt="Preview" className="h-40 w-40 object-cover mt-4" />}

                    <div className="flex justify-between mt-12">
                        <SecondaryButton center onClick={handlePreviousStep} className='!h-12 w-32 sm:w-40'>
                            Anterior
                        </SecondaryButton>
                        <PrimaryButton center type='submit' disabled={processing} className='!h-12 w-32 sm:w-40'>
                            Enviar
                        </PrimaryButton>
                    </div>
                </>
            )}

            {!showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white p-6 rounded shadow-lg">
                        <h2 className="text-xl font-semibold">Sucesso!</h2>
                        <p>A atividade foi criada com sucesso.</p>
                        <button onClick={() => setShowPopup(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </form>
    );
}
