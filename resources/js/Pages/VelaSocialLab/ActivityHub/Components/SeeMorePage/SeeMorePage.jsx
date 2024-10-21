import VelaSocialLayout from '@/Layouts/VelaSocialLayout';
import SecondaryIconButton from "@/FigmaComponents/Button/SecondaryIconButton";
import { RiArrowGoBackLine } from "react-icons/ri";
import { MdModeEditOutline, MdMoreHoriz  } from "react-icons/md";
import { FiUsers, FiUser } from "react-icons/fi";
import { GoClock, GoCalendar } from "react-icons/go";
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import ImageDisplayer from './ImageDisplayer';



export default function SeeMorePage({
    propData
}){

    const sampleData = {
        created_at : "2024-10-10T23:35:45.000000Z".slice(0, 10).split('-'),
        audience : 30,
        date : "2024-07-08".split('-'),
        description : 'O projeto "Sementes do Futuro" busca preparar as crianças para o mundo digital e o futuro do trabalho, através de cursos de programação, robótica e habilidades tecnológicas básicas. A proposta é capacitar crianças em situação de vulnerabilidade para que desenvolvam habilidades técnicas que possam abrir novas oportunidades no futuro, sempre alinhado a uma abordagem lúdica e prática. Além das aulas, o projeto oferecerá mentoria e suporte para estimular a criatividade e o pensamento crítico.',
        hour_end : '14:00:00'.slice(0, 5),
        hour_start : '11:00:00'.slice(0, 5),
        id : 6,
        send_by : 'Hathos Gomes da Silva'.split(' '),
        thumbnail_photos_url : "https://drive.google.com/thumbnail?id=1ba-fkJJCI8QIvidbl7GSCjc2_jb1x7MZ&sz=w1000",
        title : "Sementes do Futuro",
        updated_at : "2024-10-10T23:35:45.000000Z".slice(0, 10).split('-'),
        activityImgs: ['https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrxwvt1bpmm/b/wp-extraclasse-uploads/o/uploads/2024/05/A-cultura-do-trabalho-voluntario-precisa-ser-permanente.webp', 'https://www.napratica.org.br/wp-content/uploads/2019/06/voluntariado.jpg', 'https://nossacausa.com/wp-content/uploads/2018/09/woman-donates-canned-goods-to-charity-picture-id513245786.jpg', 'https://media.istockphoto.com/id/1467180267/pt/foto/diverse-group-of-volunteers-package-groceries-for-community-at-food-bank.jpg?s=612x612&w=0&k=20&c=Zo_UPc8ES5jOTms6TTQCBzoExKtfuJITWT0-bXmwIf8=']
    }

    const [data, setData] = useState({})
    const divRef = useRef(null);

 // O array vazio significa que esse efeito só será executado uma vez

    useEffect(() => {
        if (propData) {
            const modifiedPropData = {
                ...propData,
                created_at: propData.created_at.slice(0, 10).split('-'),
                updated_at: propData.updated_at.slice(0, 10).split('-'),
                date: propData.date.split('-'),
                hour_end: propData.hour_end.slice(0, 5),
                hour_start: propData.hour_start.slice(0, 5),
                send_by: propData.send_by.split(' ')
            };
            console.log(modifiedPropData)

            setData(modifiedPropData);
        } else {
            setData(sampleData);
            console.log(data.activityImgs)
        }
    }, [propData]); // Reage apenas quando `propData` muda

   


    // if(propData){

    //     propData.created_at = propData.created_at.slice(0,9).split('-')
    //     propData.created_at = propData.created_at.slice(11,16)
    //     propData.date = propData.date.split('-')
    //     propData.hour_end = propData.hour_end.slice(0,5)
    //     propData.hour_start = propData.hour_start.slice(0,5)
    //     propData.send_by = propData.send_by.split(' ')
    //     propData.updated_at = propData.updated_at.slice(0,9).split('-')
    //     propData.updated_at = propData.updated_at.slice(11,16)

    //     setData(propData)
    //     // created_at : "2024-10-10T23:35:45.000000Z"
    //     // audience : 30
    //     // date : "2024-07-08"
    //     // description : 'O projeto "Sementes do Futuro" busca preparar as crianças para o mundo digital e o futuro do trabalho, através de cursos de programação, robótica e habilidades tecnológicas básicas. A proposta é capacitar crianças em situação de vulnerabilidade para que desenvolvam habilidades técnicas que possam abrir novas oportunidades no futuro, sempre alinhado a uma abordagem lúdica e prática. Além das aulas, o projeto oferecerá mentoria e suporte para estimular a criatividade e o pensamento crítico.'
    //     // hour_end : '14:00:00'
    //     // hour_start : '11:00:00'
    //     // id : 6
    //     // send_by : 'Hathos Gomes da Silva'
    //     // thumbnail_photos_url : "https://drive.google.com/thumbnail?id=1ba-fkJJCI8QIvidbl7GSCjc2_jb1x7MZ&sz=w1000"
    //     // title : "Sementes do Futuro"
    //     // updated_at : "2024-10-10T23:35:45.000000Z"

    //     // data.created_at = "2024-10-10T23:35:45.000000Z"
    //     // data.audience = 30
    //     // data.date = "2024-07-08"
    //     // data.description = 'O projeto "Sementes do Futuro" busca preparar as crianças para o mundo digital e o futuro do trabalho, através de cursos de programação, robótica e habilidades tecnológicas básicas. A proposta é capacitar crianças em situação de vulnerabilidade para que desenvolvam habilidades técnicas que possam abrir novas oportunidades no futuro, sempre alinhado a uma abordagem lúdica e prática. Além das aulas, o projeto oferecerá mentoria e suporte para estimular a criatividade e o pensamento crítico.'
    //     // data.hour_end = '14:00:00'
    //     // data.hour_start = '11:00:00'
    //     // data.id = 6
    //     // data.send_by = 'Hathos Gomes da Silva'
    //     // data.thumbnail_photos_url = "https://drive.google.com/thumbnail?id=1ba-fkJJCI8QIvidbl7GSCjc2_jb1x7MZ&sz=w1000"
    //     // data.title = "Sementes do Futuro"
    //     // data.updated_at = "2024-10-10T23:35:45.000000Z"

    // }else{

    //     setData(sampleData)

    // }

    // useEffect(() => {

    //     const creationDate = data.created_at.slice(0,9).split('-')
    //     const creationHour = data.created_at.slice(11,16)
    //     const audience = data.audience
    //     const date = data.date.split('-')
    //     const description = data.description
    //     const hourEnd = data.hour_end.slice(0,5)
    //     const hourStart = data.hour_start.slice(0,5)
    //     const id = data.id
    //     const sendBy = data.send_by.split(' ')
    //     const thumbNail = data.thumbnail_photos_url
    //     const title = data.title
    //     const updatedAtDate = data.updated_at.slice(0,9).split('-')
    //     const updatedAtHour = data.updated_at.slice(11,16)

    //     console.log("Data de criação: ", creationDate)
    //     console.log("Hora de criação: ", creationHour)
    //     console.log("Audiencia da Atividade: ", audience)
    //     console.log("Data da Atividade: ", date)
    //     console.log("Descrição da Atividade: ", description)
    //     console.log("Hora do Fim da atividade: ", hourEnd)
    //     console.log("Hora do Inicio da atividade: ", hourStart)
    //     console.log("Id da atividade: ", id)
    //     console.log("Enviado por: ", sendBy)
    //     console.log("Thumbnail da atividade: ", thumbNail)
    //     console.log("Titulo da atividade: ", title)
    //     console.log("Data de atualização: ", updatedAtDate)
    //     console.log("Hora de atualização: ", updatedAtHour)

    // }, [])



    return(

        <VelaSocialLayout>

            <div className='mt-14 lg:mt-0 mb-20 lg:mb-0 w-full flex justify-center p-5 text-slate-950 dark:text-gray-200'>

                <div id='main' className='lg:w-[700px] md:w-5/6 rounded-lg  bg-white dark:bg-slate-800 flex flex-col p-7 gap-6'>

                    <div className='flex justify-between'>

                        <SecondaryIconButton rounded icon={<RiArrowGoBackLine className="sm:h-6 sm:w-6"/>} className="md:!w-32 xl:!w-fit h-9 "><span className=" group-hover:block">Voltar</span></SecondaryIconButton>

                        <SecondaryIconButton rounded icon={<MdModeEditOutline className="sm:h-6 sm:w-6"/>} className="md:!w-32 xl:!w-fit h-9 "><span className=" group-hover:block">Editar</span></SecondaryIconButton>

                    </div>
                    
                    
                    <div className='flex flex-col gap-4'>
                        
                        {!data.title&&(
                            <div className='h-9 w-60 bg-gray-600 rounded-lg animate-pulse' />
                        )}
                        {data.title&&(
                            <h1 className=' font-medium text-4xl'>{data.title}</h1>
                        )}
                        
                        <div className='flex justify-between gap-4 flex-wrap'>
                            {!data.date&&(
                                <div className='flex gap-2 items-center'>
                                    <div className='h-5 w-5 bg-gray-600 rounded-sm animate-pulse' />
                                    <div className='h-5 w-16 bg-gray-600 rounded-sm animate-pulse' />
                                </div>
                            )}   
                            {data.date&&(
                                <div className='flex gap-2 items-center' title='Data de realização da atividade'>
                                <GoCalendar className='text-primary stroke-primary stroke-1 text-xl'/>
                                <p className=' font-normal'>{data.date[2]}/{data.date[1]}/{data.date[0]}</p>
                            </div>)}



                            {!data.hour_start || !data.hour_end &&(
                                <div className='flex gap-2 items-center'>
                                    <div className='h-5 w-5 bg-gray-600 rounded-sm animate-pulse' />
                                    <div className='h-5 w-16 bg-gray-600 rounded-sm animate-pulse' />
                                </div>
                            )}
                            {data.hour_start && data.hour_end &&(
                            <div className='flex gap-2 items-center' title='Hora de realização da atividade'>
                                <GoClock className='text-primary stroke-primary stroke-1 text-xl'/>
                                <p className=' font-normal'>{data.hour_start} às {data.hour_end} </p>
                            </div>)}



                            {!data.audience&&(
                                <div className='flex gap-2 items-center'>
                                    <div className='h-5 w-5 bg-gray-600 rounded-sm animate-pulse' />
                                    <div className='h-5 w-16 bg-gray-600 rounded-sm animate-pulse' />
                                </div>
                            )}
                            {data.audience&&(
                            <div className='flex gap-2 items-center' title='Quantidade de pessoas que participaram da atividade'>
                                <FiUsers className='text-primary stroke-primary stroke-2 text-xl'/>
                                <p className=' font-normal'>Participantes: {data.audience}</p>
                            </div>)}



                            {!data.send_by&&(
                                <div className='flex gap-2 items-center' >
                                    <div className='h-5 w-5 bg-gray-600 rounded-sm animate-pulse' />
                                    <div className='h-5 w-16 bg-gray-600 rounded-sm animate-pulse' />
                                </div>
                            )}

                            {data.send_by&&(
                            <div className='flex gap-2 items-center' title='Membro da organização que enviou a atividade'>
                                <FiUser className='text-primary stroke-primary stroke-2 text-xl'/>
                                <p className=' font-normal'>Por: {data.send_by[0]} {data.send_by[1]}</p>
                            </div>)}

                        </div>

                    </div>

                    
                        <div className='w-full'>
                            {/* <ImageCarousel imgs={data.activityImgs}/> */}
                            <ImageDisplayer />
                        </div>
                    


                    <p className='sm:text-justify'>{data.description}</p>

                    <div className='flex gap-4 flex-wrap'>

                            {!data.created_at&&(
                                <div className='flex gap-2 items-center' >
                                    {/* <div className='h-5 w-5 bg-gray-600 rounded-sm animate-pulse' /> */}
                                    <div className='h-4 w-16 bg-gray-600 rounded-sm animate-pulse' />
                                </div>
                            )}

                            {data.created_at&&(
                            <div className='flex gap-2 items-center text-gray-400' title='Membro da organização que enviou a atividade'>
                                {/* <FiUser className='text-primary stroke-primary stroke-2 text-xl'/> */}
                                <p className=' font-normal text-sm'>Enviado em: {data.created_at[2]}/{data.created_at[1]}/{data.created_at[0]}</p>
                            </div>)}


                            {!data.created_at &&(
                                <div className='flex gap-2 items-center' >
                                    {/* <div className='h-5 w-5 bg-gray-600 rounded-sm animate-pulse' /> */}
                                    <div className='h-4 w-16 bg-gray-600 rounded-sm animate-pulse' />
                                </div>
                            )}

                            {data.created_at && data.created_at.join(' ') !== data.updated_at.join(' ') &&(
                            <div className='flex gap-2 items-center text-gray-400' title='Membro da organização que enviou a atividade'>
                                {/* <FiUser className='text-primary stroke-primary stroke-2 text-xl'/> */}
                                <p className=' font-normal text-sm'>Atualizado em: {data.updated_at[2]}/{data.updated_at[1]}/{data.updated_at[0]}</p>
                            </div>)}

                    </div>

                </div>

            </div>

        </VelaSocialLayout>
    )

}