import { GoZap } from "react-icons/go";


export default function IAEnhancer({

    label = "Melhorar com IA",
    loading = true,
    loadingLabel = "Melhorando...",
    ...props


}){

    return(

        <div className="">

            
           
            <p className={` flex gap-1 items-center text-primary cursor-pointer text-sm font-medium ${loading && "bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-blue-500 via-teal-400 to-purple-700 animate-gradient-move"}`} > <GoZap strokeWidth="0.7" className={`transition duration-1500 ${loading&&"hidden"}`}/>{loading?loadingLabel:label}</p>

            {/* bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-blue-500 via-teal-400 to-cyan-300 animate-gradient-move" style="background-image: linear-gradient(to right top, #057ee8, #3786e8, #4f8de8, #6295e7, #729de7, #6da9ee, #69b4f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);" */}

        </div>

    )

}