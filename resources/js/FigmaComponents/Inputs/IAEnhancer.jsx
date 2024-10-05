import { GoZap } from "react-icons/go";


export default function IAEnhancer({

    label = "Melhorar com IA",
    loading = true,
    loadingLabel = "Melhorando...",
    ...props


}){

    return(

           
        <p {...props} className={`transition-colors hover:text-primary-100 flex gap-1 items-center text-primary cursor-pointer text-sm font-medium ${loading && "bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-blue-500 via-teal-400 to-purple-700 animate-gradient-move"}`} > <GoZap strokeWidth="0.7" className={` ${loading&&"hidden"}`}/>{loading?loadingLabel:label}</p>

    )

}