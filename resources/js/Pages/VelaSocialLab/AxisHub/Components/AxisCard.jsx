import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import { GoLock } from "react-icons/go";
import { Head } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";
import Tag from '../Axis/Components/Tag';
import TaskPreview from './TaskPreview';


export default function AxisCard({

    title = "Marketing",
    tasksPreviews = [],
    blocked = true,
    blockedStyle = blocked? "blur-sm":""

}){


    return(

        <div className={blockedStyle}>

            <div className='sm:w-80 sm:h-80 w-full h-72 p-4 relative hover:scale-[1.05] transition-transform duration-300 dark:bg-slate-800 bg-white rounded-2xl flex flex-col justify-between items-center'>
                    
                    <div className="absolute  flex flex-col justify-center items-center h-full w-full z-10 rounded-2xl">

                        <GoLock strokeWidth="1.5" className="text-5xl text-neutral-400 dark:text-slate-900"/>
                        <p className="text-neutral-400 dark:text-slate-900 font-semibold">Em Breve</p>


                    </div>

                    <div className="flex flex-col gap-4 w-full">

                        <div className="flex gap-2 ">

                            <div className="h-24 w-24 rounded-full bg-violet-600"></div>
                            <h3 className="h-fit self-center text-gray-800 dark:text-gray-200 text-2xl font-semibold">{title}</h3>
                            
                        </div>

                        <div className="flex flex-col w-full gap-4">

                            <TaskPreview/>

                        </div>


                    </div>

                    <PrimaryButton children='Conhecer' center={true} className='w-60'></PrimaryButton>
                    
                </div>

        </div>



    )

}