import React from 'react';
import { GoXCircle } from "react-icons/go";
import { GoStop } from "react-icons/go";

export default function cardAxis({

    title = "Gestão de Projetos",
    description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor amet, consectetur adipiscing elit.",
    tasks = [0, 5],
    reprovedTasks = 1,
    pendingTasks = 2,

}){

    return(

        <div className="w-3/5 h-52 justify-between rounded-lg dark:bg-slate-800 bg-gray-200 flex flex-col">
            
            <div className="flex p-4 gap-3">

                <div className="min-w-28 h-22 bg-violet-600 rounded-md"></div>

                <div className="flex flex-col">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>

            </div>

            <div className="flex">

                <div className="flex flex-col w-40 rounded-lg outline outline-[15px] outline-gray-950 h-16 bg-primary">
                    <p>Tarefas Concluídas</p>
                    <p>{tasks[0]}/{tasks[1]}</p>
                </div>

                <div className="flex flex-col">

                    <div className="flex items-center"><GoXCircle /><p>{reprovedTasks} Envios Reprovados</p></div>
                    <div className="flex items-center"><GoStop /><p>{pendingTasks} Tarefas Pendentes</p></div>

                </div>

            </div>

        </div>

    )

}