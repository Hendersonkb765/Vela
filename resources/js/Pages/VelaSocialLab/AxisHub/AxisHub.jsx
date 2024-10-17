import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { GoLock } from "react-icons/go";
import { Head } from '@inertiajs/react';
import { FaArrowRight } from "react-icons/fa6";
import { GoMegaphone } from "react-icons/go";
import Tag from "./Axis/Components/Tag"
import AxisCard from "./Components/AxisCard"
import { GoNumber } from "react-icons/go";
import { useEffect } from 'react';
import AxisSkeleton from './Components/AxisSkeleton';


export default function TaskHub({ auth, }) {

    const axisCards = {}

    function loadAxis(){

        console.log("Carregado")

    }

    useEffect(() => {

        loadAxis()

    }, [])

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} //auth.user
            imgUrl={'storage/Images/PerfilExemplo.jpg'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Eixos"/>
            
            <div className="flex items-center justify-start p-5 h-72 bg-primary ">
                <h1 className="text-5xl font-bold text-gray-200">Eixos SocialLab</h1>
                {/* <div className="bg-primary-200 w-fit py-3 rounded-br-2xl px-5 font-semibold text-gray-800 dark:text-gray-200 text-3xl">Eixos da Aceleração</div> */}
            </div>
            <div className="flex p-5 gap-5 flex-wrap justify-center sm:justify-start">
                
                <AxisCard title='Marketing'  axisIcon={[<GoMegaphone />,"bg-violet-600"]}/>
                {/* <AxisCard title='Contabilidade' blocked={true} axisIcon={[<GoNumber />,"bg-orange-400"]}/> */}
                <AxisSkeleton/>

            </div>

        </VelaSocialLayout>
    );
}

