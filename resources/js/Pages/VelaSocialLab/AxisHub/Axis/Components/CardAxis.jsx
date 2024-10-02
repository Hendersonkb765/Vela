import React from 'react';
import { GoXCircle } from "react-icons/go";
import { GoStop } from "react-icons/go";

export default function cardAxis({

    title = "Gestão de Projetos",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet, consectetur adipiscing elit.",
    tasks = [0, 5],
    reprovedTasks = 0,
    pendingTasks = 0,

}){

    return(

        <div className="w-3/5 h-52 relative justify-between rounded-lg dark:bg-slate-800 bg-white flex flex-col">
            
            <div className="absolute w-4 h-4 top-[113px] z-10 rounded-l-lg dark:bg-slate-800 bg-white"></div>
            <div className="absolute w-4 h-4 top-[120px] dark:bg-gray-950 bg-neutralcolors-100"></div>

            <div className="absolute w-4 h-4 bottom-0 left-[175px] z-10 rounded-l-lg dark:bg-slate-800 bg-white"></div>
            <div className="absolute w-4 h-4 bottom-[-8px] left-[172px] dark:bg-gray-950 bg-neutralcolors-100"></div>
            <div className="flex p-4 gap-3">

                <div className="min-w-28 h-22 bg-violet-600 rounded-md"></div>

                <div className="flex flex-col gap-2">
                    <h1 className="text-gray-800 dark:text-gray-200 font-bold text-4xl">{title}</h1>
                    <p className="text-gray-800 dark:text-gray-200 text-">{description}</p>
                </div>

            </div>

            <div className="flex">

                <div className="flex flex-col mr-9 text-gray-200 justify-center items-center w-40 rounded-lg outline outline-[15px] outline-neutralcolors-100 dark:outline-gray-950 h-16 bg-primary">
                    <p className="font-semibold">Tarefas Concluídas</p>
                    <p className="text-xl font-bold">{tasks[0]}/{tasks[1]}</p>
                </div>

                <div className="flex flex-col justify-center">

                    <div className="flex items-center gap-1"><GoXCircle className={reprovedTasks>0?'text-red-500':'dark:text-gray-600 text-gray-400'} /><p className={reprovedTasks>0?'text-gray-800 dark:text-gray-200':'dark:text-gray-600 text-gray-400'}>{reprovedTasks} Envios Reprovados</p></div>
                    <div className="flex items-center gap-1"><GoStop className={pendingTasks>0?'text-orange-500':'dark:text-gray-600 text-gray-400'} /><p className={pendingTasks>0?'text-gray-800 dark:text-gray-200':'dark:text-gray-600 text-gray-400'}>{pendingTasks} Tarefas Pendentes</p></div>

                </div>

            </div>

        </div>

    )

}