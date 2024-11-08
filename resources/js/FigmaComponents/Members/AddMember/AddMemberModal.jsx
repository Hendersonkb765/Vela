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
    const [Message, setMessage] = useState('');
    const [inviteStatus, setInviteStatus] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        post(route('invitation.send'), {
            onSuccess: (response) => {
                setData('Invitemail', '');
                setMessage("Convite enviado com sucesso")
                setInviteStatus(true);
            },
            onError: (errors) => {
                setMessage(errors.message)
                console.error(errors.error)
                setInviteStatus(false);
            }
        });
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
        isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center -left-1 w-full m-0 p-0 sm:px-0">
                <div className="rounded-md gap-3 flex flex-col w-full sm:w-72 sm:h-52 min-w-fit fullhd:w-96 bg-white p-4 overflow-hidden relative group dark:bg-slate-800">
                    <h2 className="font-headers text-primary-300 font-semibold flex flex-col dark:text-gray-300">Convidar Novo Membro</h2>
                    <p className="text-sm text-neutral-600 dark:text-gray-300 mb-6 text-wrap truncate max-w-96">
                        Envie um convite por e-mail para adicionar um novo membro à sua equipe ou organização.
                        Basta inserir o endereço de e-mail da pessoa que deseja convidar.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
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
                            <InputError message={Message} className={`mt-2 text-danger ${inviteStatus && '!text-success'}`} />
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
