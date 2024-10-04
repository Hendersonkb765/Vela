import React from 'react';
import { GoStar } from "react-icons/go";
import { GoStarFill } from "react-icons/go";


export default function ReviewStars({
    qtStars = 3,
    note = []
}){

    

    for(let i = 1; i <= 5; i++){
        
        if(i <= qtStars){

            note.push(<GoStarFill className="text-primary"/>)

        }else{

            note.push(<GoStar className="text-gray-500 dark:text-gray-400"/>)

        }

    }

    if(qtStars > 0){

        return(

            <div className="flex gap-1">
                {note}
            </div>
        )

    }else if(qtStars == 0){

        return(

            <div className="flex gap-1">
                <GoStar className="text-red-600"/>
                <GoStar className="text-red-600"/>
                <GoStar className="text-red-600"/>
                <GoStar className="text-red-600"/>
                <GoStar className="text-red-600"/>
            </div>

        )

    }

}