import React from 'react';

export default function LevelBox({

    qtLevels = 7,
    actualLevel = 3,
    selectedLevel = 1 


}){

    const content = []

    for(let i = 1; i <= qtLevels; i++){

        if (i < actualLevel){


            if(i == selectedLevel){

                content.push(<div className="flex gap-2 items-center cursor-pointer">

                    <div className="w-8 h-8 text-gray-200 font-bold  flex justify-center items-center rounded-full border-2 border-primary">{i}º</div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">Nível</div>
    
                </div>)

            }else{

                content.push(<div className="flex gap-2 items-center cursor-pointer">

                    <div className="w-8 h-8 text-gray-200 font-bold  flex justify-center items-center rounded-full bg-primary">{i}º</div>
                    <div className="font-semibold text-gray-800 dark:text-gray-200">Nível</div>
    
                </div>)

            }


        }else if(i == actualLevel){

            if(i == selectedLevel){

                content.push(<div className="flex gap-2 items-center cursor-pointer">

                    <div className="w-8 h-8 text-gray-800 dark:text-gray-200 font-bold  flex justify-center items-center rounded-full border-2 border-primary">{i}º</div>
                    <div className="font-semibold  text-gray-800 dark:text-gray-200">Nível</div>
    
                </div>)

            }else{

                content.push(<div className="flex gap-2 items-center cursor-pointer">

                    <div className="w-8 h-8 text-gray-800 dark:text-gray-200 font-bold  flex justify-center items-center rounded-full bg-primary">{i}º</div>
                    <div className="font-semibold  text-gray-800 dark:text-gray-200">Nível</div>
    
                </div>)

            }



        }else if(i > actualLevel){

            content.push(<div className="flex gap-2 items-center cursor-pointer">

                <div className="w-8 h-8 text-gray-400 font-bold  flex justify-center items-center rounded-full bg-slate-300">{i}º</div>
                <div className="font-semibold text-gray-500 dark:text-gray-400">Nível</div>

            </div>)

        }

        if(i < actualLevel){

            content.push(<div className="w-8 h-[2px] bg-primary"></div>)

        }else if(i < qtLevels){

            content.push(<div class="border-t-2 w-8 h-[2px] border-dashed border-gray-400"></div>)
            

        }

        
        

    }

    return(

        <div className="w-full overflow-x-auto flex gap-2 items-center px-5 py-2 rounded-lg dark:bg-slate-800 bg-white">

            {content}

        </div>

    );

}