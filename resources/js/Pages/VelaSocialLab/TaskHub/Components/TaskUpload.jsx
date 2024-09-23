import { IoAddCircleOutline } from "react-icons/io5";


export default function TaskUpload({ }){
    return (
        <div className="w-3/4 sm:w-1/3 p-2 rounded-lg border-dashed border-2 flex items-center gap-4 cursor-pointer bg-primary-200/25 hover:bg-primary-200/10 dark:bg-primary-300/25 hover:dark:bg-primary-200/10 transition-colors text-white">
            <IoAddCircleOutline className="w-32 h-32"/>
            <div className="flex flex-col">
                <h2 className="font-headers font-bold text-lg">Registrar Uma atividade</h2>
                <p>
                    Registre aqui as atividades da sua organização
                    para montar sua linha do tempo
                </p>
            </div>
        </div>
    )

}
