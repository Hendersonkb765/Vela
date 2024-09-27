import { Link } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";

const AllTasks = ({tasks}) => {
    return (
        <Link className='w-full sm:w-72 h-52 min-w-fit fullhd:w-96 bg-white p-4 overflow-hidden relative group cursor-pointer dark:bg-slate-800 dark:hover:bg-slate-800/85' href={route('taskhub')}>
            <div  className='flex space-x-2 items-center' >
                <img src="storage/Images/Target.png" alt="" className='w-16 h-16'/>
                <h3 className='font-headers text-primary-300 font-semibold flex flex-col dark:text-gray-300'>
                    Todas as tarefas
                    <span  className='font-normal text-xs'> {tasks.completed.total} / {tasks.tasks_max}  tarefas concluídas </span>
                </h3>
            </div>
            <p className='font-headers text-xs mt-2 w-72 text-wrap truncate dark:text-gray-300'> Veja todas as tarefas que sua organização precisa concluir para avançar </p>
            <div  className='w-16 h-16 text-primary absolute -bottom-2 -right-3 flex justify-center items-center rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-white transition-all delay-150 group-hover:scale-150'>
                <FaArrowRight className='w-4 h-4'/>
            </div>

        </Link>
    );
}

export default AllTasks;
