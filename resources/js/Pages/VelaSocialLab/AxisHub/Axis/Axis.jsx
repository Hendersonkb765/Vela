import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import LevelBox from "./Components/LevelBox"
import CardAxis from "./Components/CardAxis"
import Targets from './Components/Targets';
import CardTask from './Components/CardTask';
import { GoMegaphone } from "react-icons/go";


export default function Axis(){

    return(

        <VelaSocialLayout>

            <div className="">

                <div className="w-full h-full px-5 py-3 gap-3 flex flex-col">

                    <LevelBox/>

                    <div className="flex gap-3">

                        <CardAxis axisIcon={[<GoMegaphone />,"bg-violet-600"]}/>

                        <Targets/>
                        
                    </div>

                </div>

                <div className="h-5 px-5 gap-6 flex flex-col">

                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">Tarefas</h2>


                    <div className="w-full flex flex-row gap-4 flex-wrap ">

                        <CardTask/>
                        <CardTask/>
                        <CardTask/>
                        <CardTask/>
                        <CardTask/>
                    </div>


                </div>

            </div>



        </VelaSocialLayout>

    )

}