import React from 'react';
import { GoRocket } from "react-icons/go";
import Target from "./Target"


export default function Targets({

    target = {
        0 : {title: "Crie um esquema de martketing para sua organização", date: "20 - 27 Set"},
        1 : {title: "Faça um vídeo pitch para representar sua osc", date: "15 Out"}
    }

}){

    return(

        <div className="w-2/5 p-4 h-52 flex flex-col justify-between rounded-lg dark:bg-slate-800 bg-white">

            <div className=" flex gap-3">

                <GoRocket className="text-primary text-7xl"/>

                <div className="flex flex-col">

                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Seus objetivos semanais</h2>
                    <p className="text-sm text-gray-800 dark:text-gray-200">Definimos objetivos para você decolar com sua organização!</p>

                </div>

            </div>

            <div className="flex justify-between gap-5">

                {
                    Object.values(target).map((t, index) => (
                        <Target key={index} title={t.title} date={t.date} />
                    ))
                }

            </div>

        </div>


    )



}