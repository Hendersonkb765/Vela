import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import DateInput from '@/FigmaComponents/Inputs/DateInput';
import InputLabel from '@/FigmaComponents/Inputs/InputLabel';
import TextInput from '@/FigmaComponents/Inputs/TextInput';
import { useForm } from '@inertiajs/react';


export default function ActivityForm({ onSubmit }) {
    const minDate = "1900-01-01"
    const maxDate = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];

    const { data, setData, post, patch, processing, errors, reset } = useForm({
        activityTitle: '',
        activityDescription: '',
        activityDate: '',
        activityStatus: '',
        activityHourStart: '',
        activityHourEnd: '',
        activityThumbnail: '',
    });

    // Função para lidar com mudanças nos inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value,
        });
    };

    // Função para enviar o formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('activity.store'), {
            onError: (errors) => {
                alert('Ocorreu um erro no registro. Verifique os dados e tente novamente!');
            },
            //onFinish: () => reset('activityTitle', 'activityDescription', 'activityDate', 'activityStatus'),
        });
       
        // onSubmit(data); // Chama a função onSubmit passada como prop

    };

    return (
        <form onSubmit={handleSubmit} >
            
            {!processing ?
            <>
                <div className="mb-4">
                    <InputLabel >Título</InputLabel>
                    <TextInput
                        name="activityTitle"
                        value={data.activityTitle}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <InputLabel>Descrição</InputLabel>
                    <textarea
                        name="activityDescription"
                        value={data.activityDescription}
                        onChange={handleChange}
                        className="mt-1 block w-full border-2 rounded-md border-neutralcolors text-neutralcolors-600  dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400 focus:ring-primary-500 focus:border-primary-500"
                        required
                    />
                </div>
                <div className="mb-4 flex space-x-2">
                    <div>
                        <InputLabel >Data</InputLabel>
                        <DateInput
                                id="activityDate"
                                name="activityDate"
                                value={data.activityDate}
                                className="mt-1 h- block !min-w-48 h-12"
                                autoComplete="activityDate"
                                isFocused={true}
                                onChange={(e) => setData({
                                    ...data,
                                    activityDate: e.target.value
                                })}
                                minDate={minDate}
                                maxDate={maxDate}
                        />
                    </div>
                    <div>
                        <InputLabel >Status</InputLabel>
                        <select
                            name="activityStatus"
                            value={data.activityStatus}
                            onChange={handleChange}
                            className="h-12 mt-1 block w-full border-2 rounded-md border-neutralcolors text-neutralcolors-600  dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400 focus:ring-primary-500 focus:border-primary-500 cursor-pointer "
                            required
                        >
                            <option value="" disabled className='cursor-pointer'>Selecione o status</option>
                            <option value="pending" className='cursor-pointer'>Pendente</option>
                            <option value="in-progress className='cursor-pointer'">Em Progresso</option>
                            <option value="completed" className='cursor-pointer'>Concluído</option>
                        </select>
                    </div>
                </div>
                <PrimaryButton type={"submit"} className='h-12 w-full'  center >
                    Registrar Atividade
                </PrimaryButton>
            </>
                :
                <h1>batata</h1>
            }

        </form>
    );
}
