import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head, Link } from '@inertiajs/react';
import { GoAlert, GoAlertFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import OscProfileCard from './VelaSocialLab/Dashboard/OscProfile/OscProfileCard';
import PrimaryIconButton from '@/FigmaComponents/Button/PrimaryIconButton';
import RecordActivity from './VelaSocialLab/Dashboard/RecordActivity';
import DashboardPath from '@/FigmaComponents/Dashboard/DashboardPath';

export default function Dashboard({ auth, }) {
    // informacoes
    const Fails = 0;
    const imagePath = "storage/Images/LogoOriginal.png"
    const OscLevel = 1;
    const OscName = "União Beneficente Brasileira em Assistência Social";
    const Progress = 5 / 30; // (tasks feitas / total de tasks do level)

    const SubmissionFailed = ({ NumberOfFails }) => {
        return (
            <div className={`w-3/5 min-w-fit  bg-white flex items-center justify-between p-2 space-x-4  ${(NumberOfFails === 0) && '[&>*]:opacity-60'}`}>
                <div className='flex items-center'>
                    <div className='w-12 h-12 rounded-full flex items-center justify-center'>
                        {(NumberOfFails > 0) ? <GoAlertFill className='w-6 h-6 text-danger'/> : <GoAlert className='w-6 h-6 text-neutralcolors-300'/>}
                    </div>
                    <h4 className='font-headers text-neutralcolors-400 text-lg h-6'> <span className='font-bold'>{NumberOfFails}</span> Envios Reprovados </h4>
                </div>

                <PrimaryIconButton rounded className={`${(NumberOfFails > 0) ? '!bg-neutralcolors-400 hover:!bg-danger' : '!bg-neutralcolors-200 pointer-events-none'} ml-auto`}><FaArrowRight className='w-4 h-4'/></PrimaryIconButton>
            </div>
        );
    }

    return (
        <VelaSocialLayout
            userName={"Gustavo Raimundo Rodrigues"} //auth.user
            imgUrl={'storage/Images/PerfilExemplo.jpg'}
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <DashboardPath />
            <section className='p-4 gap-4 flex [&>*]:rounded-lg '>
                <div className='flex flex-col gap-4  [&>*]:rounded-lg w-1/2 min-w-fit'>
                    <OscProfileCard OscProfilePicture={imagePath}  OscLevel={OscLevel} OscName={OscName} Progress={Progress}/>
                    <div className='min-w-fit flex justify-between space-x-4 [&>*]:rounded-lg'>
                        <SubmissionFailed NumberOfFails={Fails} />
                        <RecordActivity />
                    </div>
                </div>
                <Link className='w-72 h-52 min-w-fit bg-white p-4 overflow-hidden relative group cursor-pointer' href={route('taskhub')}>
                    <div  className='flex space-x-2 items-center' >
                        <img src="storage/Images/Target.png" alt="" className='w-16 h-16'/>
                        <h3 className='font-headers text-primary-300 font-semibold flex flex-col '>
                            Todas as tarefas
                            <span  className='font-normal text-xs'> 3 / 27  tarefas concluídas </span>
                        </h3>
                    </div>
                    <p className='font-headers text-xs mt-2 w-72 text-wrap truncate'> Veja todas as tarefas que sua organização precisa concluir para avançar </p>
                    <div rounded className='w-16 h-16 text-primary absolute -bottom-2 -right-3 flex justify-center items-center rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-white transition-colors delay-150'>
                        <FaArrowRight className='w-4 h-4'/>
                    </div>

                </Link>
                <div className='w-full bg-white p-4'>

                </div>

            </section>
        </VelaSocialLayout>
    );
}


// import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
// import { Head } from '@inertiajs/react';
// import { GoAlert, GoAlertFill } from "react-icons/go";
// import { FaArrowRight } from "react-icons/fa6";

// import OscProfileCard from './VelaSocialLab/Dashboard/OscProfile/OscProfileCard';
// import PrimaryIconButton from '@/FigmaComponents/Button/PrimaryIconButton';
// import RecordActivity from './VelaSocialLab/Dashboard/RecordActivity';

// export default function Dashboard({ auth, osc, level, tasks }) {
//     // informacoes
//     const Fails = 1;
//     const Progress = tasks.filter(task => task.status === 'completed').length / tasks.length;

//     const SubmissionFailed = ({ NumberOfFails }) => {
//         return (
//             <div className={`w-3/5 min-w-fit bg-white flex items-center justify-between p-2 space-x-4 ${(NumberOfFails === 0) && '[&>*]:opacity-60'}`}>
//                 <div className='flex items-center'>
//                     <div className='w-12 h-12 rounded-full flex items-center justify-center'>
//                         {(NumberOfFails > 0) ? <GoAlertFill className='w-6 h-6 text-danger'/> : <GoAlert className='w-6 h-6 text-neutralcolors-300'/>}
//                     </div>
//                     <h4 className='font-headers text-neutralcolors-400 text-lg h-6'> <span className='font-bold'>{NumberOfFails}</span> Envios Reprovados </h4>
//                 </div>
//                 <PrimaryIconButton rounded className={`${(NumberOfFails > 0) ? '!bg-neutralcolors-400 hover:!bg-danger' : '!bg-neutralcolors-200 pointer-events-none'} ml-auto`}><FaArrowRight className='w-4 h-4'/></PrimaryIconButton>
//             </div>
//         );
//     }

//     return (
//         <VelaSocialLayout
//             userName={auth.user.name}
//             imgUrl={auth.user.profilePicture}
//             header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
//         >
//             <Head title="Dashboard" />
//             <div className='h-80 bg-primary' />
//             <section className='p-4'>
//                 <div className='flex flex-col gap-4 [&>*]:rounded-lg '>
//                     <OscProfileCard OscProfilePicture={osc.img_url} OscLevel={level.current_level} OscName={osc.fantasy_name} Progress={Progress}/>
//                     <div className='w-1/2 min-w-fit flex justify-between space-x-4 [&>*]:rounded-lg'>
//                         <SubmissionFailed NumberOfFails={Fails} />
//                         <RecordActivity />
//                     </div>
//                 </div>
//             </section>
//         </VelaSocialLayout>
//     );
// }
