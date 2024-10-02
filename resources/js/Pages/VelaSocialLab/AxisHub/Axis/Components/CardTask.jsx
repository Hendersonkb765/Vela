import React from 'react';
import Tag from './Tag';
import SecondaryButton from '@/Components/SecondaryButton';
import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";
import ReviewStars from './ReviewStars';


export default function CardTask({

    title = "Elaboração das ferramentas de mensuração de resultado",
    tags = ["Importante", "Urgente"],
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...",
    taskStarted = false,
    stepsTaken = [0, 5],
    lastReviewNote = -1,
    news = false


}){

    return(



        <div className="w-80 h-96 p-4 flex flex-col justify-between rounded-lg dark:bg-slate-800 bg-white">

            <div className="flex flex-col gap-2">

                <h5 className="font-semibold text-xl text-gray-800 dark:text-gray-200 max-h-14 overflow-hidden">{title}</h5>

                <div className="flex">
                    <Tag text={tags[0]}/>
                </div>

                <div className="flex gap-1 min-h-4"><ReviewStars/></div>

                <p className="text-gray-800 dark:text-gray-200 text-sm text-justify max-h-40 overflow-hidden">{description}</p>

            </div>

            <div className="flex justify-between items-center">
                
                <SecondaryButton className=' rounded-3xl dark:border-primary border-primary'>Começar Tarefa</SecondaryButton>

                <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold">{stepsTaken[0]}/{stepsTaken[1]}</p>

            </div>

        </div>


    )

}