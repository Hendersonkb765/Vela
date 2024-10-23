import SecondaryButton from "@/FigmaComponents/Button/SecondaryButton";
import SecondaryIconButton from "@/FigmaComponents/Button/SecondaryIconButton";
import { MdModeEditOutline, MdMoreHoriz  } from "react-icons/md";
import React, { useState } from 'react';
import ActivityUploadModal from "./ActivityUploadModal";
import ActivityUpdateForm from "./UpdateActivity/ActivityUpdateForm";

export default function ActivityCard({data, ...props}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Função para abrir o modal
    const openModal = () => {
        setIsModalOpen(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setIsModalOpen(false);
    };



    return (
        <>
            <div  className="w-full flex flex-col space-y-4 md:space-x-4 md:space-y-0 sm:flex-row items-start md:items-center justify-start group scale-100 xl:hover:scale-[1.2] transition-all xl:hover:pl-28 fullhd:hover:pl-40">
                <div className="w-11/12 sm:w-fit">
                    <p className="font-body text-sm dark:text-gray-300">{data.date}</p>
                    <div {...props} className=" min-w-fit flex flex-col md:flex-row bg-white rounded-lg relative md:before:content-[''] before:absolute lg:before:w-8 before:h-2 before:mr-2  before:border-t-4 before:border-dotted  before:border-primary  before:top-1/2 before:right-full  md:before:translate-x-1   dark:bg-slate-800 dark:before:border-primary-200 cursor-pointer border-2 border-white dark:border-slate-800 group-hover:!border-primary ">
                        <div className="sm:min-h-52 sm:max-h-52 sm:w-80 sm:min-w-80 sm:max-w-80 md:w-44 md:h-44 md:min-w-44 md:min-h-44">
                            <img src={data.thumbnail_photo_url} alt="" className="max-h-52 min-h-52 w-full md:w-44 md:h-44 md:min-w-44 md:min-h-44 object-cover rounded-l-lg brightness-50 md:brightness-100"/>

                        </div>
                        <div className="flex flex-col px-4 py-3 space-y-7 absolute md:static bottom-0">
                            <div className=" overflow-hidden  flex flex-col space-y-2 ">
                                <h3 className="overflow-ellipsis line-clamp-2 md:w-[400px] font-headers text-lg md:text-gray-900 text-gray-200 dark:text-gray-200 max-h-14 h-fit overflow-hidden">{data.title}</h3>
                                <p className="overflow-ellipsis	truncate line-clamp-5 font-body text-xs max-w-80 max-h-20 text-wrap md:text-gray-900 text-gray-300 dark:text-gray-300">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row ml-2 sm:flex-col space-x-4 sm:space-x-0 sm:space-y-4 xl:space-y-0 xl:flex-row xl:space-x-4 xl:scale-75 xl:group-hover:scale-90 transition-transform md:">
                    <SecondaryIconButton  onClick={openModal} rounded icon={<MdModeEditOutline className="sm:h-8 sm:w-8"/>} className="md:!w-32 xl:!w-fit xl:group-hover:!w-36  h-16 "><span className="xl:hidden group-hover:block">Editar</span></SecondaryIconButton>
                    <SecondaryIconButton href={route('seemore', data.id)} rounded icon={<MdMoreHoriz className="sm:h-8 sm:w-8"/>} className="md:w-32 xl:!w-fit xl:group-hover:!w-36 h-16 "><span className="xl:hidden group-hover:block">Ver mais</span></SecondaryIconButton>
                </div>

            </div>

            <ActivityUploadModal isOpen={isModalOpen} onClose={closeModal}>
                <h3 className="text-xl flex gap-2 font-headers items-end font-semibold mb-2 dark:text-gray-200"><MdModeEditOutline className="sm:h-8 sm:w-8"/>Edite sua atividade</h3>
                <p className="dark:text-gray-400 mb-4">Altere somente o que for necessário.</p>
                <ActivityUpdateForm activityData={data}/>
            </ActivityUploadModal>
        </>

    )
}


// import SecondaryButton from "@/FigmaComponents/Button/SecondaryButton";
// import SecondaryIconButton from "@/FigmaComponents/Button/SecondaryIconButton";
// import { MdModeEditOutline, MdMoreHoriz  } from "react-icons/md";

// export default function ActivityCard({data}) {
//     return (
//         <div className="flex items-center justify-start group scale-100 hover:scale-[1.2] transition-all hover:pl-28 fullhd:hover:pl-40">
//             <div>
//                 <p className="font-body text-sm dark:text-gray-300">{data.date}</p>
//                 <div className="h-40 w-1/3 min-w-fit flex bg-white rounded-lg relative before:content-[''] before:absolute before:w-8 before:h-2 before:mr-2  before:border-t-4 before:border-dotted  before:border-primary  before:top-1/2 before:right-full  before:translate-x-1   dark:bg-slate-800 dark:before:border-primary-200 cursor-pointer border-2 border-white dark:border-slate-800 group-hover:!border-primary ">
//                     <img src={data.thumbnail_photos_url} alt=""  className="object-contain h-full rounded-l-lg"/>
//                     <div className="flex flex-col px-4 py-3 space-y-7">
//                         <div className="flex flex-col space-y-2 ">
//                             <h3 className="font-headers text-lg dark:text-gray-200">{data.title}</h3>
//                             <p className="font-body text-xs max-w-80 max-h-20 truncate text-wrap dark:text-gray-300">
//                                 {data.description}
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="flex space-x-4 scale-75 group-hover:scale-90 transition-transform">
//                 <SecondaryIconButton rounded icon={<MdModeEditOutline className="h-8 w-8"/>} className="w-16 h-16 "><span className="hidden group-hover:block">Editar</span></SecondaryIconButton>
//                 <SecondaryIconButton rounded icon={<MdMoreHoriz className="h-8 w-8"/>} className="w-16 h-16 "><span className="hidden group-hover:block">Ver mais</span></SecondaryIconButton>
//             </div>
//         </div>
//     )
// }


