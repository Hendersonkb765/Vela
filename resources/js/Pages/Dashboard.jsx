import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head, Link } from '@inertiajs/react';
import { GoAlert, GoAlertFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa6";
import OscProfileCard from './VelaSocialLab/Dashboard/OscProfile/OscProfileCard';
import PrimaryIconButton from '@/FigmaComponents/Button/PrimaryIconButton';
import RecordActivity from './VelaSocialLab/Dashboard/RecordActivity';
import DashboardPath from '@/FigmaComponents/Dashboard/DashboardPath';

export default function Dashboard({ user,osc,level,tasks }) {
    // informacoes
    // numero de requisitos reprovados está em ( tasks.requirements_failed )
    const Fails = tasks.requirementsFailed;
    const imageUrlOsc = osc.imageUrl;
    const imageUrlUser = user.imageUrl;
    const currentTask = tasks.pending[0]; // array das informações da tarefa atual
    const OscLevel = level.currentLevel;
    const OscName = osc.fantasyName;
    const Progress = tasks.completed.total / tasks.tasksMax; // (tasks feitas / total de tasks do level
    const SubmissionFailed = ({ NumberOfFails }) => {
        return (
            <div className={`w-96 sm:w-3/5 sm:min-w-fit  bg-white flex flex-col sm:flex-row items-center justify-between p-2 space-x-4  dark:bg-slate-800 ${(NumberOfFails === 0) && '[&>*]:opacity-60'}`}>
                <div className='flex items-center'>
                    <div className='w-12 h-12 rounded-full flex  items-center justify-center'>
                        {(NumberOfFails > 0) ? <GoAlertFill className='w-6 h-6 text-danger'/> : <GoAlert className='w-6 h-6 text-neutralcolors-300 dark:text-gray-300'/>}
                    </div>
                    <h4 className='font-headers text-neutralcolors-400 text-base sm:text-lg sm:h-6 dark:text-gray-300'> <span className='font-bold'>{NumberOfFails}</span> Envios Reprovados </h4>
                </div>

                <PrimaryIconButton rounded="true" className={`${(NumberOfFails > 0) ? '!bg-neutralcolors-400  hover:!bg-danger' : '!bg-neutralcolors-200 dark:!bg-slate-800 dark:opacity-20 pointer-events-none'} ml-auto sm:block`}><FaArrowRight className='w-4 h-4'/></PrimaryIconButton>
            </div>
        );
    }

    return (

        <VelaSocialLayout
            profilePicture
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard"/>
            <DashboardPath titleTask={currentTask.title}/>
            <section className='p-4 gap-4 flex flex-col sm:flex-row [&>*]:rounded-lg [&>*]:shado'>
                <div className='flex flex-col gap-4 [&>*]:rounded-lg w-full sm:w-1/2 sm:min-w-fit '>
                    <OscProfileCard OscProfilePicture={imageUrlOsc}  OscLevel={OscLevel} OscName={OscName} Progress={Progress}/>
                    <div className='w-full sm:min-w-fit flex flex-row justify-between sm:space-x-4 [&>*]:rounded-lg'>
                        <SubmissionFailed NumberOfFails={Fails} />
                        <RecordActivity />
                    </div>
                </div>
                <Link className='w-full sm:w-72 h-52 min-w-fit bg-white p-4 overflow-hidden relative group cursor-pointer dark:bg-slate-800' href={route('taskhub')}>
                    <div  className='flex space-x-2 items-center' >
                        <img src="storage/Images/Target.png" alt="" className='w-16 h-16'/>
                        <h3 className='font-headers text-primary-300 font-semibold flex flex-col dark:text-gray-300'>
                            Todas as tarefas
                            <span  className='font-normal text-xs'> {tasks.completed.total} / {tasks.tasksMax}  tarefas concluídas </span>
                        </h3>
                    </div>
                    <p className='font-headers text-xs mt-2 w-72 text-wrap truncate dark:text-gray-300'> Veja todas as tarefas que sua organização precisa concluir para avançar </p>
                    <div rounded className='w-16 h-16 text-primary absolute -bottom-2 -right-3 flex justify-center items-center rounded-full border-2 border-primary group-hover:bg-primary group-hover:text-white transition-colors delay-150 '>
                        <FaArrowRight className='w-4 h-4'/>
                    </div>

                </Link>
                <div className='w-full bg-white p-4 dark:bg-slate-800'>

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
