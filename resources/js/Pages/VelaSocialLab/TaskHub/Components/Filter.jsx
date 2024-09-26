import DateInput from "@/FigmaComponents/Inputs/DateInput";
import SearchInput from "@/FigmaComponents/Inputs/SearchInput";
import { useForm } from "@inertiajs/react";


export default function Filter() {
    const minDate = "1900-01-01"
    const maxDate = new Date(new Date().getFullYear(), 11, 31).toISOString().split('T')[0];

    const { data, setData, post, patch, processing, errors, reset } = useForm({
        user: {
            name: '',
            profilePicture: '',
            birthday: '',
            roleInOrganization: null,
        },
        task: {
            uploadDate:  '',
        }
    });

    return (
        <form action="" className='w-full px-8 -translate-y-5 '>
            <div className='bg-white h-20 rounded-lg dark:bg-slate-800 flex items-center p-4 space-x-4 fullhd:h-28'>
                <div className="flex flex-col space-y-1">
                    <label className="text-sm dark:text-gray-300">Data de Envio</label>
                    <DateInput
                        id="uploadDate"
                        name="uploadDate"
                        value={data.task.uploadDate}
                        className="mt-1 block !min-w-48 "
                        autoComplete="uploadDate"
                        isFocused={true}
                        onChange={(e) => setData('task', {
                            ...data.task,
                            uploadDate: e.target.value
                        })}
                        minDate={minDate}
                        maxDate={maxDate}
                    />
                </div>

                <div className="flex flex-col space-y-1">
                    <label className="text-sm dark:text-gray-300">Pesquise por Nome</label>
                    <SearchInput searchRoute="" placeholder="Digite sua busca..." />
                </div>

            </div>
        </form>
    )
}

