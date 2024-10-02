import React from 'react';
import { GoRocket } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { GoCalendar } from "react-icons/go";


export default function Target({

    title = "Crie um esquema de martketing para sua organização",
    date = "20 - 27 Set"

}){

    return(



            <div className="flex flex-col w-[50%] min-h-20 overflow-hidden gap-2 cursor-pointer justify-between">

                <p className="text-gray-800 dark:text-gray-200 max-h-12 overflow-hidden">{title}</p>
                <div className="flex justify-between items-center">

                    <div className="flex items-center gap-3">

                        <GoCalendar className="text-gray-800 dark:text-gray-200"/>
                        <p className="text-gray-800 dark:text-gray-200">{date}</p>
                        
                    </div>

                    <GoArrowRight className="text-2xl text-primary"/>

                </div>

            </div>


    )

}