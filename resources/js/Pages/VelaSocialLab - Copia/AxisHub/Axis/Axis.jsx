import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import AxisLayout from '@/Layouts/AxisLayout';
import LevelBox from "./Components/LevelBox"
import CardAxis from "./Components/CardAxis"


export default function Axis(){

    return(

        <VelaSocialLayout>
            <div className="w-full h-full px-5 py-3 gap-3 flex flex-col">

                <LevelBox></LevelBox>

                <CardAxis></CardAxis>

            </div>




        </VelaSocialLayout>

    )

}