import { useState } from 'react';

export default function SearchInput({ placeholder = 'Search...', onSearchChange, className = '' }) {
    const [search, setSearch] = useState(''); // Estado local para o valor de pesquisa

    const handleChange = (e) => {
        const value = e.target.value;
        setSearch(value); // Atualiza o estado local
        onSearchChange(value); // Passa o valor para o componente pai
    };

    return (
        <div className="relative">
            <input
                type="text"
                className={
                    'h-10 min-w-80 w-full rounded-md border-2 border-neutralcolors text-sm text-neutralcolors-600 placeholder-neutralcolors-400 focus:outline-none focus:border-blue-500 dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400 dark:placeholder-gray-500 py-2 px-4 cursor-pointer ' +
                    className
                }
                placeholder={placeholder}
                value={search}
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
