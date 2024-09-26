import PrimaryButton from '@/FigmaComponents/Button/PrimaryButton';
import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { GoLock } from "react-icons/go";
import { Head } from '@inertiajs/react';



export default function TaskHub({ auth, }) {

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} //auth.user
            imgUrl={'storage/Images/PerfilExemplo.jpg'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Meus Uploads</h2>}
        >
            <Head title="Eixos"/>
            <div className="flex flex-col justify-start h-80 bg-[url('https://weethub.com/wp-content/uploads/2019/11/descubra_o_que_e_mar_a9TzR.jpg')] bg-cover bg-center">
                {/* <div className="bg-primary-200 w-fit py-3 rounded-br-2xl px-5 font-semibold text-gray-800 dark:text-gray-200 text-3xl">Eixos da Aceleração</div> */}
            </div>
            <div className="flex p-5 gap-5 flex-wrap justify-center sm:justify-start">
                <div className="sm:w-80 sm:h-80 w-full h-72 p-4 hover:scale-[1.05] transition-transform duration-300 dark:bg-slate-800 bg-gray-200 rounded-2xl flex flex-col justify-between items-center" >
                    <div className="flex flex-col gap-4 w-full">

                        <div className="flex gap-2 ">

                            <div className="h-24 w-24 rounded-full bg-violet-600"></div>
                            <h3 className="h-fit self-center text-gray-800 dark:text-gray-200 text-2xl font-semibold">Marketing</h3>
                            
                        </div>

                        <p className="text-gray-800 dark:text-gray-200 ">Marketing digital são ações de comunicação 
                            que as empresas podem utilizar por meio da internet, da telefonia 
                            celular e outros meios digitais...</p>

                    </div>

                    <PrimaryButton children='Disponível em 10 dias' center={true} className='w-60'></PrimaryButton>
                    
                </div>

                <div className="sm:w-80 sm:h-80 w-full h-72 relative p-4 hover:scale-[1.05] transition-transform duration-300 dark:bg-slate-800 bg-gray-200 rounded-2xl flex flex-col justify-center items-center" >
                    <div className="absolute z-10 flex flex-col items-center">
                        <GoLock strokeWidth="1.5" className="text-5xl text-neutral-400 dark:text-slate-900"/>
                        <p className="text-neutral-400 dark:text-slate-900 font-semibold">Em Breve</p>
                    </div>
                    <div className="w-full h-full blur-sm flex flex-col justify-between items-center">
                         <div className="flex flex-col gap-4 w-full">

                        <div className="flex gap-2 ">

                            <div className="h-24 w-24 rounded-full bg-orange-400"></div>
                            <h3 className="h-fit self-center text-gray-800 dark:text-gray-200 text-2xl font-semibold select-none">Contabilidade</h3>
                            
                        </div>

                        <p className="text-gray-800 dark:text-gray-200 select-none">Marketing digital são ações de comunicação 
                            que as empresas podem utilizar por meio da internet, da telefonia 
                            celular e outros meios digitais...</p>

                    </div>

                    <PrimaryButton children='Acessar' center={true} className='w-60'></PrimaryButton>
                    </div>
                    
                </div>
            </div>

        </VelaSocialLayout>
    );
}

