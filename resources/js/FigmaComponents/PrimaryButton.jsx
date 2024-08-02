import { Link } from '@inertiajs/react';
import React from 'react';

export default function PrimaryButton({ className='', disabled=false, blocked=false , text='texto', rounded=false, center=false, icon: Icon }) {
    return (
        <Link
            className={`flex px-4 py-2  gap-2 items-center min-w-32 min-h-8 rounded-md bg-primary text-white font-body hover:bg-primary-500 transition-colors duration-300 ease-out'
            ${disabled && '!bg-neutralcolors-100 !text-neutralcolors-400'}
            ${rounded && '!rounded-full'}
            ${center && 'justify-center'}
            ${blocked && '!bg-primary-900'} ${className}`}
            disabled={disabled}
        >
            {Icon}
            {text}
        </Link>
    );
}

