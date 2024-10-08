import { useForm } from "@inertiajs/react";
import PrimaryButton from "../../Button/PrimaryButton";
import { GoPersonAdd, GoX, GoPaperAirplane  } from "react-icons/go";
import SecondaryIconButton from "../../Button/SecondaryIconButton";
import TextInput from "@/FigmaComponents/Inputs/TextInput";
import InputLabel from "@/FigmaComponents/Inputs/InputLabel";
import InputError from "@/FigmaComponents/Inputs/InputError";

const AddMemberModal = ({ isOpen, onClose }) => {
    const { data, setData, post, processing, errors } = useForm({
        Invitemail: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('invitation.send'), {
            onSuccess: () => {
                setData('Invitemail', '');
            },
        });
    };

    return (
        isOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center px-2 sm:px-0">
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
