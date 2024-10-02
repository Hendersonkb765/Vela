import React from 'react';

export default function Tag({

    text = 'texto'

}){

    return(

        <div className="text-gray-800 dark:text-gray-200 p-1 px-3 h-fit bg-neutral-100 dark:bg-slate-950 rounded-2xl text-xs">{text}</div>

    );

}