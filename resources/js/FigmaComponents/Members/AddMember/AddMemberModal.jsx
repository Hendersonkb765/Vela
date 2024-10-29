import { useForm } from "@inertiajs/react";
import PrimaryButton from "../../Button/PrimaryButton";
import { GoPersonAdd, GoX, GoPaperAirplane  } from "react-icons/go";
import SecondaryIconButton from "../../Button/SecondaryIconButton";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import InputLabel from "@/FigmaComponents/Inputs/InputLabel";
import InputError from "@/FigmaComponents/Inputs/InputError";
import { useState } from "react";


const AddMemberModal = ({ isOpen, onClose }) => {
    const { data, setData, post, processing, errors } = useForm({
        Invitemail: '',
    });
    const [showPopup, setShowPopup] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Função ativada");
    
        try {
            await post(route('invitation.send'), {
                onSuccess: (response) => {
                    if (response && typeof response.status !== 'undefined') {
                        console.log("Status:", response.status, "Tipo do status:", typeof response.status);
                    } else {
                        console.log("Resposta sem status:", response);
                    }
                    
                    // Exibe uma mensagem de sucesso no modal
                    setShowPopup(true);
                    console.log("Meio da função")
    
                    // Fecha o modal após 5 segundos
                    setTimeout(() => {
                        setShowPopup(false);
                    }, 5000);
    
                    // Limpa o campo de email
                    setData('Invitemail', '');
                },
                onError: (error) => {
                    console.error("Erro ao enviar convite:", error);
                    // Exibe uma mensagem de erro, se necessário
                }
            });
        } catch (error) {
            console.error("Erro inesperado:", error);
        }
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Função atividada")
    //     post(route('invitation.send'), {
            
    //         onSuccess: (response) => {
    //             setShowPopup(true);
                
    //             console.log("Status: ", response.status, " Tipo do status: ", typeof response.status )
    //             setTimeout(() => {
    //                 setShowPopup(false); // Fecha o modal
    //             }, 5000);
                
    //             setData('Invitemail', '');
    //         },
    //     });
    // };

    return (

        
            isOpen&&(
                <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-2 sm:px-0">
                    

                    {showPopup && (
                        <div className=" fixed inset-0 flex items-center justify-center ">
                            <div className="bg-white animate-enter p-6 rounded shadow-lg dark:bg-slate-800 dark:text-white">
                                <div className="flex gap-2 items-center">

                                    <GoCheckCircleFill className="text-6xl text-success"/>
                                    <h2 className="text-3xl font-semibold">Convite Enviado!</h2>

                                </div>

                                
                                {/* <button onClick={() => setShowPopup(false)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                                    Fechar
                                </button> */}
                            </div>
                        </div>
                    )}

                    <div className=" bg-white p-8 rounded-lg sm:w-1/3 min-w-fit relative overflow-hidden dark:bg-slate-800">
                        <h2 className="text-neutral-800 dark:text-gray-100 text-lg mb-3 font-bold flex items-center gap-2">
                            <div className="bg-neutralcolors-100 p-2 rounded-full dark:bg-slate-700">
                                <GoPersonAdd className="" />
                            </div>

                            Convidar Novo Membro
                        </h2>
                        <p className="text-sm text-neutral-600 dark:text-gray-300 mb-6 text-wrap truncate max-w-96">
                            Envie um convite por e-mail para adicionar um novo membro à sua equipe ou organização.
                            Basta inserir o endereço de e-mail da pessoa que deseja convidar.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                            <div>
                                <InputLabel htmlFor="Invitemail" />
                                <TextInput
                                    id="Invitemail"
                                    type="email"
                                    name="Invitemail"
                                    value={data.Invitemail}
                                    className="h-12 block w-full px-4"
                                    placeholder="E-mail do destinatário"
                                    onChange={(e) => setData('Invitemail', e.target.value)}
                                    required
                                />
                                <InputError message={errors.Invitemail} className="mt-2 text-danger" />
                            </div>

                            <div className="">
                                <PrimaryButton type="submit" className="w-32 sm:w-auto h-12" disabled={processing}>
                                    {processing ? 'Enviando...' : 'Enviar Convite'} <GoPaperAirplane className="w-4 g-4"/>
                                </PrimaryButton>
                            </div>
                        </form>

                        <SecondaryIconButton
                            onClick={onClose}
                            className="border-1 !border-danger !text-danger hover:!bg-danger absolute -top-2 -right-2 group !rounded-full"
                        >
                            <GoX className="w-6 h-6 text-danger group-hover:!text-white rounded-full" />
                        </SecondaryIconButton>
                    </div>
                </div>
            )
            

        
    );
};

export default AddMemberModal;
