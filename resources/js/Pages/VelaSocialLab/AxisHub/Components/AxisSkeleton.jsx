import react from "react";

export default function AxisSkeleton(){

    return(

        <div className=" sm:w-80 sm:h-96 h-96 w-full  p-4 relative hover:scale-[1.05] transition-transform duration-300 dark:bg-slate-800 bg-white rounded-2xl flex flex-col justify-between items-center">
        
            <div className="w-full h-full flex flex-col justify-between items-center">

                <div className="flex flex-col gap-4  w-full">

                    <div className="flex gap-2 w-full items-center">

                        <div className="animate-fade h-24 min-h-24 w-24 min-w-24 dark:bg-slate-600 bg-gray-200 rounded-full"/>

                        <div className="w-full flex ">
                            <div className="animate-fade w-full h-8 rounded-full dark:bg-slate-600 bg-gray-200"/>
                        </div>

                    </div>

                    <div className="flex flex-col w-full gap-3">

                        <div className="w-full h-full flex flex-col gap-2">

                            <div className="w-full flex flex-col gap-2">
                                <div className="animate-fade w-full h-4 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                                <div className="animate-fade w-2/4 h-4 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                            </div>

                            <div className="h-full flex items-center justify-between ">

                                <div className="flex w-full gap-2 items-center">
                                    <div className="animate-fade h-4  w-6 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                                    <div className="animate-fade h-6 w-16 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                                    <div className="animate-fade h-6 w-16 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                                </div>

                                <div className="animate-fade min-w-8 min-h-8 rounded-full dark:bg-slate-600 bg-gray-200 "/>

                            </div>


                        </div>


                        <div className="w-full h-full flex flex-col gap-2">

                        <div className="w-full flex flex-col gap-2">
                            <div className="animate-fade w-full h-4 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                            <div className="animate-fade w-2/4 h-4 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                        </div>

                        <div className="h-full flex items-center justify-between ">

                            <div className="flex w-full gap-2 items-center">
                                <div className="animate-fade h-4  w-6 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                                <div className="animate-fade h-6 w-16 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                                <div className="animate-fade h-6 w-16 dark:bg-slate-600 bg-gray-200 rounded-full"/>
                            </div>

                            <div className="animate-fade min-w-8 min-h-8 rounded-full dark:bg-slate-600 bg-gray-200 "/>
                        </div>


                        </div>

                    </div>

                </div>

                <div className="animate-fade w-60 h-9 dark:bg-slate-600 bg-gray-200 rounded-md"></div>

            </div>
        
        </div>

    )

}