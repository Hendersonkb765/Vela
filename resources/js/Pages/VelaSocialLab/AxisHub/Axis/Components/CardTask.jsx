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
    lastReviewNote = 2,
    news = false,
    brandNew = true


}){

    return(



        <div className={` min-w-80 w-80 min-h-96 h-96 p-4 flex flex-col justify-between rounded-lg dark:bg-slate-800 bg-white ${brandNew? 'border-0 border-t-2 border-primary': ''}`}>

            <div className="flex flex-col gap-2">

                <h5 className="font-semibold text-xl text-gray-800 dark:text-gray-200 max-h-14 overflow-hidden">{title}</h5>

                <div className="flex">
                    <Tag text={tags[0]}/>
                </div>

                <div className="flex gap-1 min-h-4"><ReviewStars qtStars={lastReviewNote}/></div>

                <p className="text-gray-800 dark:text-gray-200 text-sm text-justify max-h-40 overflow-hidden">{description}</p>

            </div>

            <div className="flex justify-between items-center">
                
                <SecondaryButton className=' rounded-full dark:border-primary border-primary'>Começar Tarefa</SecondaryButton>

                <p className="text-xl text-gray-800 dark:text-gray-200 font-semibold">{stepsTaken[0]}/{stepsTaken[1]}</p>

            </div>

        </div>


    )

}