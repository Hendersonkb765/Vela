import { useForm } from '@inertiajs/react';
import { useEffect, useState } from 'react';

export default function SearchInput({ placeholder = 'Search...', searchRoute, className = '' }) {
    const [isTyping, setIsTyping] = useState(false); // Estado para rastrear se o usuário está digitando

    const { data, setData, get } = useForm({
        search: ''
    });

    const handleChange = (e) => {
        setData('search', e.target.value);
        setIsTyping(e.target.value.length > 0); // Atualiza o estado de digitação
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (isTyping) {
                get(searchRoute, { preserveState: true, only: ['search'] });
            }
        }, 300); // Aguarda 300ms antes de enviar a requisição (debounce)

        return () => clearTimeout(delayDebounceFn);
    }, [data.search, isTyping]); // Adiciona isTyping às dependências

    return (
        <div className="relative">
            <input
                type="text"
                className={
                    'h-10 min-w-56 w-full rounded-md border-2 border-neutralcolors text-sm text-neutralcolors-600 placeholder-neutralcolors-400 focus:outline-none focus:border-blue-500 dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400 dark:placeholder-gray-500 py-2 px-4  cursor-pointer' +
                    className
                }
                placeholder={placeholder}
                value={data.search}
                onChange={handleChange}
            />
            <svg
                className="absolute top-2.5 right-3 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.85-5.65a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
        </div>
    );
}
