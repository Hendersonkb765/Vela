import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import { GoLock } from "react-icons/go";
import { Head } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";
import Tag from '../Axis/Components/Tag';
import TaskPreview from './TaskPreview';


export default function AxisCard({

    title = "Marketing",
    tasksPreviews = [],
    blocked = false,
    blockedStyle = blocked? "blur-sm ":"",
    axisIcon = [],
    news = false

}){


    return(

        <div className="relative">

            {blocked &&(

                <div className="absolute flex flex-col justify-center items-center h-full w-full z-10 rounded-2xl">

                <GoLock strokeWidth="1.5" className="text-5xl text-slate-500 dark:text-slate-400"/>
                <p className="text-slate-500 dark:text-slate-400 font-semibold">Em Breve</p>


                </div>

            )}


            <div className={blockedStyle + '  opacity-75 sm:w-80 sm:h-96 h-96 w-full  p-4 relative hover:scale-[1.05] transition-transform duration-300 dark:bg-slate-800 bg-white rounded-2xl flex flex-col justify-between items-center'}>

                {news&&(<div className="absolute w-3 h-3 right-4 bg-primary rounded-full"></div>)}

                    <div className="flex flex-col gap-4 w-full">

                        <div className="flex gap-2 ">

                            <div className={` h-24 min-h-24 w-24 min-w-24 flex ${axisIcon[1]} justify-center items-center rounded-full text-white text-6xl transform transition-transform duration-300 group-hover:-rotate-12 `}>{axisIcon[0]}</div>
                            <h3 className="h-fit self-center text-gray-800 dark:text-gray-200 text-2xl font-semibold">{title}</h3>

                        </div>

                        <div className="flex flex-col w-full gap-4">

                            <TaskPreview/>
                            <TaskPreview/>

                        </div>


                    </div>

                    <PrimaryButton children='Conhecer' center={true} className='w-60'></PrimaryButton>

            </div>

        </div>



    )

}
