import react from "react";
import PrimaryButton from "./PrimaryButton";
import { GoCalendar, GoTrash } from "react-icons/go";



export default function FilterButton({hasParameters = false, className, onClickFunFilter, onClickClenParam, ...props}){


    return(
        <PrimaryButton {...props} {...(!hasParameters && { center: true })} className={`!text-lg h-10 relative ${className}`} >

            <div onClick={onClickFunFilter} className="flex items-center gap-2">

                <GoCalendar />
                Filtrar

            </div>


            {hasParameters &&(

                <div onClick={onClickClenParam} className="animate-enter group z-10 hover:w-24 hover:justify-center gap-2 absolute p-1 overflow-hidden flex items-center rounded-e-md right-0 h-full w-6 bg-danger transition-all duration-300 ease-in-out">

                    <div>

                        <GoTrash className="text-base transition-all duration-300 ease-out group-hover:text-lg" />

                    </div>

                    <p className="text-base transition-all duration-300 ease-in-out transform group-hover:text-base ">
                        Limpar
                    </p>

                </div>

            )}


        </PrimaryButton>
    )


}