import PrimaryButton from '@/FigmaComponents/PrimaryButton';
import PrimaryIconButton from '@/FigmaComponents/PrimaryIconButton';
import SecondaryButton from '@/FigmaComponents/SecondaryButton';
import SecundaryButton from '@/FigmaComponents/SecondaryButton';
import SecondaryIconButton from '@/FigmaComponents/SecondaryIconButton';
import Tags from '@/FigmaComponents/Tags';
import { Link, Head } from '@inertiajs/react';

import { FaLock, FaArrowRight, FaClock  } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";




export default function Resources({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document.getElementById('screenshot-container')?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document.getElementById('docs-card-content')?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const IconSquare = () =>{
        <div className='w-4 h-4'></div>
    }

    return (
        <>
            <Head title="Welcome" />
            <section className='m-8 mb-0 p-8 w-fit'>
                <h1 className='text-xl font-headers font-semibold mb-4'>Botões Primários</h1>
                <div className='p-8 border-2 rounded-md flex flex-col space-y-4'>
                    <div className='flex space-x-4 justify-evenly items-center'>
                        <PrimaryIconButton disabled={true} icon={<FaLock className='w-4 h-4'/>}/>
                        <PrimaryButton disabled={true}/>
                        <PrimaryButton disabled={true} center={true}/>
                        <PrimaryButton  disabled={true}  icon={<FaLock className='w-3 h-3'/>}/>
                        <PrimaryButton disabled={true} rounded={true} center={true}/>
                        <PrimaryButton disabled={true} rounded={true} icon={<FaLock className='w-3 h-3'/>}/>
                    </div>

                    <div className='flex space-x-4 justify-evenly items-center'>
                        <PrimaryIconButton icon={<FaLock className='w-4 h-4'/>}/>
                        <PrimaryButton />
                        <PrimaryButton center={true} />
                        <PrimaryButton icon={<FaLock className='w-3 h-3'/>}/>
                        <PrimaryButton rounded={true} center={true}/>
                        <PrimaryButton rounded={true} icon={<FaLock className='w-3 h-3'/>}/>
                    </div>

                    <div className='flex space-x-4 justify-evenly items-center'>
                        <PrimaryIconButton blocked={true} icon={<FaLock className='w-4 h-4'/>}/>
                        <PrimaryButton blocked={true}/>
                        <PrimaryButton blocked={true} center={true}/>
                        <PrimaryButton  blocked={true} icon={<FaLock className='w-3 h-3'/>}/>
                        <PrimaryButton blocked={true} rounded={true} center={true}/>
                        <PrimaryButton blocked={true} rounded={true} icon={<FaLock className='w-3 h-3'/>}/>
                    </div>

                </div>
            </section>
            <section className='m-8 mb-4 p-8 w-fit flex flex-col justify-center'>
                <h1 className='text-xl font-headers font-semibold mb-4'>Botões Secundários</h1>

                <div className='p-8 border-2 rounded-md flex flex-col space-y-4'>
                    <div className='flex space-x-4 justify-evenly items-center'>
                        <SecondaryIconButton gray={true} icon={<FaArrowRight className='w-4 h-4'/>}/>
                        <SecondaryButton disabled={true} center={true}/>
                        <SecondaryButton  disabled={true}  icon={<FaArrowRight className='w-3 h-3'/>}/>
                        <SecondaryButton disabled={true} rounded={true} />
                        <SecondaryButton disabled={true} rounded={true} center={true}/>
                        <SecondaryButton disabled={true} rounded={true} icon={<FaArrowRight className='w-3 h-3'/>}/>
                    </div>

                    <div className='flex space-x-4 justify-evenly items-center'>
                        <SecondaryIconButton icon={<FaArrowRight className='w-4 h-4'/>}/>
                        <SecondaryButton center={true} />
                        <SecondaryButton  icon={<FaArrowRight className='w-3 h-3'/>}/>
                        <SecondaryButton rounded={true} />
                        <SecondaryButton rounded={true} center={true}/>
                        <SecondaryButton rounded={true} icon={<FaArrowRight className='w-3 h-3'/>}/>
                    </div>

                    <div className='flex space-x-4 justify-evenly items-center'>
                        <SecondaryIconButton blocked={true} icon={<FaArrowRight className='w-4 h-4'/>}/>
                        <SecondaryButton blocked={true} center={true}/>
                        <SecondaryButton  blocked={true} icon={<FaArrowRight className='w-3 h-3'/>}/>
                        <SecondaryButton blocked={true} rounded={true} />
                        <SecondaryButton blocked={true} rounded={true} center={true}/>
                        <SecondaryButton blocked={true} rounded={true} icon={<FaArrowRight className='w-3 h-3'/>}/>

                    </div>

                </div>
            </section>

            <section className='m-8 mb-4 p-8 w-fit flex flex-col justify-center'>
                <h1 className='text-xl font-headers font-semibold mb-4'>Tags</h1>
                <div className='p-8 border-2 rounded-md flex space-x-4'>
                    <div className='flex space-x-3'>
                        <Tags/>
                        <Tags icon={<FaClock className='w-3 h-3'/>} text='editar perfil'/>
                        <Tags danger={true}/>
                        <Tags danger={true} icon={<FaClock className='w-3 h-3'/>}/>
                        <Tags danger={true} icon={<FaClock className='w-3 h-3'/>}/>
                        <Tags tagfilter={true} text='Marketing' icon={<FaXmark className='w-3 h-3'/>}/>
                    </div>
                </div>
            </section>
        </>
    );
}
