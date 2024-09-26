import SecondaryButton from "@/FigmaComponents/Button/SecondaryButton";
import SecondaryIconButton from "@/FigmaComponents/Button/SecondaryIconButton";
import { MdModeEditOutline, MdMoreHoriz  } from "react-icons/md";

export default function TaskCard({data}) {
    return (
        <div className="flex items-center justify-start group scale-100  hover:scale-[1.2] transition-all hover:pl-28 fullhd:hover:pl-40">
            <div>
                <p className="font-body text-sm dark:text-gray-300">{data.date}</p>
                <div className="h-40 w-1/3 min-w-fit flex bg-white rounded-lg relative before:content-[''] before:absolute before:w-8 before:h-2 before:mr-2  before:border-t-4 before:border-dotted  before:border-primary  before:top-1/2 before:right-full  before:translate-x-1   dark:bg-slate-800 dark:before:border-primary-200 cursor-pointer border-2 border-white dark:border-slate-800 group-hover:!border-primary ">
                    <img src="https://res.cloudinary.com/worldpackers/image/upload/c_limit,f_auto,q_auto,w_1140/bk2brywu9sgsf5j5ki6l" alt=""  className="h-full rounded-l-lg"/>
                    <div className="flex flex-col px-4 py-3 space-y-7">
                        <div className="flex flex-col space-y-2 ">
                            <h3 className="font-headers text-lg dark:text-gray-200">{data.title}</h3>
                            <p className="font-body text-xs max-w-80 max-h-20 truncate text-wrap dark:text-gray-300">
                                {data.text}
                            </p>
                        </div>


                    </div>
                </div>
            </div>
            <div className="flex space-x-4 scale-75 group-hover:scale-90 transition-transform">
                <SecondaryIconButton rounded icon={<MdModeEditOutline className="h-8 w-8"/>} className="w-16 h-16 "><span className="hidden group-hover:block">Editar</span></SecondaryIconButton>
                <SecondaryIconButton rounded icon={<MdMoreHoriz className="h-8 w-8"/>} className="w-16 h-16 "><span className="hidden group-hover:block">Ver mais</span></SecondaryIconButton>
            </div>

        </div>


    )
}


