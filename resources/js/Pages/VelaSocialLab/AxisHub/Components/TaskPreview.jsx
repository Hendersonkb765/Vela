import { FaArrowRight } from "react-icons/fa6";
import Tag from '../Axis/Components/Tag';

export default function TaskPreview({

    title = "Aqui ficarão as tarefas que levarão sua OSC a outros níveis!",
    stepsTaken = [0,3],
    tags = ["Evolução", "Melhoria"]


}){

    return(

        <div className="flex flex-col w-full gap-0  text-gray-800 dark:text-gray-200">
            <p className="font-semibold">{title}</p>
            <div className="flex justify-between items-center">

                <div className="flex gap-2">
                    <p>{stepsTaken[0]}/{stepsTaken[1]}</p>

                    {tags.map((label, index) =>(
                        <Tag text={label}/>
                    ))}

                </div>

                <div className='pointer-events-none w-8 h-8 text-primary -bottom-2 flex justify-center items-center rounded-full hover:bg-primary hover:text-gray-200 border-2 border-primary group-hover:bg-primary group-hover:text-white transition-colors delay-150 cursor-pointer'>
                    <FaArrowRight className='w-3 h-3'/>
                </div>

            </div>
        </div>

    )

}
