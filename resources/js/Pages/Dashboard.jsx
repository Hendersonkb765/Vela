import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import { Head, Link } from '@inertiajs/react';
import { GoAlert, GoAlertFill } from "react-icons/go";
import OscProfileCard from './VelaSocialLab/Dashboard/OscProfile/OscProfileCard';
import PrimaryIconButton from '@/FigmaComponents/Button/PrimaryIconButton';
import RecordActivity from './VelaSocialLab/Dashboard/RecordActivity';
import DashboardPath from '@/FigmaComponents/Dashboard/DashboardPath';
import AllTasks from './VelaSocialLab/Dashboard/AllTasks';
import { FaArrowRight } from "react-icons/fa6";
import DriveInfo from '../FigmaComponents/GoogleDrive/DriveInfo';


export default function Dashboard({ user,osc,level,tasks, storageDrive }) {
    // informacoes
    // numero de requisitos reprovados está em ( tasks.requirements_failed )
    const Fails = tasks.requirementsFailed;
    const imageUrlOsc = osc.imageUrl;
    const currentTask = tasks.pending[0]; // array das informações da tarefa atual
    const OscLevel = level.currentLevel;
    const OscName = osc.fantasyName;
    const Progress = tasks.completed.total / tasks.tasksMax;

    // (tasks feitas / total de tasks do level
    //const usedSpace = 5//storageDrive['storageUsage'];
    //const totalSpace = 10//storageDrive['storageLimit'];

    const SubmissionFailed = ({ NumberOfFails }) => {
        return (
            <Link href={route('axishub')} className={`h-16 sm:h-full sm:w-3/5 fullhd:w-2/3 sm:min-w-fit bg-white flex flex-col sm:flex-row items-center  justify-between p-2 space-x-4  dark:bg-slate-800 ${(NumberOfFails === 0) && '[&>*]:opacity-60'}`}>
                <div className='flex items-center sm:scale-100 scale-90 space-x-2'>
                    <div className='sm:w-12 h-12 rounded-full flex items-center justify-center '>
                        {(NumberOfFails > 0) ? <GoAlertFill className='w-6 h-6 text-danger'/> : <GoAlert className='w-6 h-6 text-neutralcolors-300 dark:text-gray-300'/>}
                    </div>
                    <h4 className='font-headers text-neutralcolors-400 text-sm sm:text-lg sm:h-6 dark:text-gray-300'> <span className='font-bold'>{NumberOfFails}</span> Envios Reprovados </h4>
                </div>

                <PrimaryIconButton rounded="true" className={`${(NumberOfFails > 0) ? '!bg-neutralcolors-400  hover:!bg-danger' : '!bg-neutralcolors-200 dark:!bg-slate-800 dark:opacity-20 pointer-events-none'} ml-auto hidden sm:block`}><FaArrowRight className='w-2 h-2 sm:w-4 sm:h-4'/></PrimaryIconButton>
            </Link>
        );
    }
    return (

        <VelaSocialLayout
            header={<h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">Dashboard</h2>}
            profilePicture={user.profilePicture}
        >
            <Head title="Dashboard"/>
            <DashboardPath titleTask={currentTask.title}/>
            <section className='w-full h-screen p-4 gap-4 flex flex-col md:flex-row sm:[&>*]:rounded-lg pb-16 sm:pt-4 sm:pb-4 px-2 '>
                <div className='flex flex-col gap-4 sm:[&>*]:rounded-lg w-full md:w-1/2 sm:min-w-fit '>
                    <OscProfileCard OscProfilePicture={imageUrlOsc}  OscLevel={OscLevel} OscName={OscName} Progress={Progress}/>
                    <div className='w-full md:min-w-fit flex flex-row justify-between fullhd:justify-start space-x-4 sm:space-x-4 [&>*]:rounded-lg'>
                        <SubmissionFailed NumberOfFails={Fails} />
                        <RecordActivity />
                    </div>
                </div>
                <div className='flex flex-col gap-4 sm:[&>*]:rounded-lg w-full sm:w-1/2 sm:min-w-fit '>
                    <AllTasks tasks={tasks} className="hidden sm:block"/>

                    <DriveInfo storageDrive={storageDrive}  isPresident={user.roleInOrganization=='Presidente'?true :false}/>
                    {/* <DriveInfo usedSpace={usedSpace} totalSpace={totalSpace}/> */}
                    <AllTasks tasks={tasks} className="block sm:hidden "/>
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
