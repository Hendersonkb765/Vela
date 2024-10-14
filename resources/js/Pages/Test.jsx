import React from 'react';
import SideMenu from '@/FigmaComponents/NavMenu/SideMenu';
import { Head } from '@inertiajs/react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Resources from './Resources';
import NavBar from '@/FigmaComponents/NavMenu/NavBar';
import DashboardPath from '@/FigmaComponents/Dashboard/DashboardPath';

export default function Test() {
    return (
        <div className='flex overflow-y-hidden h-screen'>
            <Head title="Dashboard" />
            <NavBar/>
            <SideMenu> </SideMenu>
            <section className='flex-1 flex flex-col pt-14 overflow-y-scroll bg-neutralcolors space-y-4'>
                <DashboardPath />
                <div className='flex space-x-4 w-full px-4'>
                    <div className='flex flex-col space-y-4 w-3/5'>
                        <div className='h-40 bg-white rounded-lg'></div>
                            <div className='flex space-x-4'>
                                <div className='flex flex-col w-3/5 space-y-2'>
                                    <div className='h-16 bg-white rounded-lg'></div>
                                    <div className='h-40 bg-white rounded-lg'></div>
                                </div>
                            <div className='w-full h-56 bg-white rounded-lg'></div>
                        </div>
                    </div>
                    <div className='w-2/5 h-full bg-white rounded-lg'></div>
                </div>
                <div className='flex space-x-4 w-full'>
                    <div className='flex flex-col space-y-4 w-3/5'>
                        <div className='h-40 bg-white rounded-lg'></div>
                            <div className='flex space-x-4'>
                                <div className='flex flex-col w-3/5 sapce-y-4'>
                                    <div className='h-16 bg-white rounded-lg'></div>
                                    <div className='h-40 bg-white rounded-lg'></div>
                                </div>
                            <div className='w-full h-56 bg-white rounded-lg'></div>
                        </div>
                    </div>
                    <div className='w-2/5 h-full bg-white rounded-lg'></div>
                </div>


            </section>
        </div>

    );
}
