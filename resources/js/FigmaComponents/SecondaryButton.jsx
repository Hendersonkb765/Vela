import { Link } from '@inertiajs/react';
import React from 'react';

export default function SecondaryButton({ className='', disabled=false, blocked=false , text='texto', rounded=false, center=true, icon: Icon }) {
    return (
        <Link
            className={`flex px-4 py-2  gap-2 items-center min-w-32 min-h-8 rounded-md bg-transparent border-primary text-primary border-2 font-body hover:bg-primary hover:text-white  transition-colors duration-300 ease-out'
            ${disabled && '!border-neutralcolors-100 !text-neutralcolors-200 '}
            ${rounded && '!rounded-full'}
            ${center && 'justify-center'}
            ${blocked && '!border-primary-900 text-primary-900  hover:!bg-primary-900'} ${className}`}
            disabled={disabled}
        >
            {text}
            {Icon}
        </Link>
    );
}

