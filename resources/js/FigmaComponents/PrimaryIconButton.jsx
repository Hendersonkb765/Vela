import { Link } from '@inertiajs/react';
import React from 'react';

export default function PrimaryIconButton({ className='', href, disabled=false, blocked=false , text='texto', rounded=true, icon: Icon }) {
    return (
        <Link
            className={`flex px-4 py-4 gap-2 items-center min-h-10  rounded-md bg-primary text-white hover:bg-primary-500 transition-colors duration-300 ease-out'
            ${disabled && '!bg-neutralcolors-100 !text-neutralcolors-400'}
            ${rounded && '!rounded-full'}
            ${blocked && '!bg-primary-900'} ${className}`}
            disabled={disabled}
            href={href}
        >
            {Icon}
        </Link>
    );
}

