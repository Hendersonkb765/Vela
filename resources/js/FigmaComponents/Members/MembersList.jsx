import React, { useState } from 'react';

const MembersList = ({ members }) => {
    const [selectedStatus, setSelectedStatus] = useState('TODOS');

    const filteredMembers = members.filter((member) => {
        // Se "Todos" estiver selecionado, retorna todos os membros
        if (selectedStatus === "TODOS") return true;
        // Se houver um status selecionado, retorna membros que correspondem a esse status
        return member.status.toUpperCase() === selectedStatus; // Converte o status do membro para maiúsculas para comparação
    });

    return (
        <div className="h-52 overflow-y-scroll">
            <div className="flex items-center space-x-6">
                <h2 className="text-xl font-medium dark:text-gray-300">Lista de Membros</h2>
                <select
                    value={selectedStatus}
                    onChange={(e) => setSelectedStatus(e.target.value)}
                    className="w-28 mt-2 p-2 border border-gray-300 rounded dark:border-gray-600 dark:bg-slate-800 dark:text-gray-200 cursor-pointer"
                >
                    <option value="TODOS">Todos</option>
                    <option value="MEMBRO">Membros</option>
                    <option value="PENDENTE">Pendente</option>
                    <option value="EXPIRADO">Expirado</option>
                </select>
            </div>
            <ul className="">
                {filteredMembers.length > 0 ? (
                    filteredMembers.map((member) => (
                        <li key={member.id} className="py-2 flex items-center gap-2">
                            <img src={member.avatar} alt={member.name} className="w-10 h-10 rounded-full object-cover" />
                            <div>
                                <p className="font-semibold dark:text-gray-100">{member.name}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-300">{member.email}</p>      {/* Exibe o status do membro */}
                            </div>
                            <p className={`ml-auto mr-4 px-2 py-1 text-xs border rounded-full border-solid ${member.status == 'MEMBRO' &&  "border-success text-success"} ${member.status == 'PENDENTE' &&  "border-warning text-warning"} ${member.status == 'EXPIRADO' &&  "border-neutral-500 text-neutral-500 dark:border-gray-400 dark:text-gray-400"}`}>{member.status}</p>
                        </li>
                    ))
                ) : (
                    <li className="dark:text-gray-100 mt-4">Nenhum membro encontrado</li>
                )}
            </ul>
        </div>
    );
};

export default MembersList;
