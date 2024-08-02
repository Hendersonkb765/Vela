import { Link } from '@inertiajs/react';
import React from 'react';

export default function SecondaryIconButton({ className='', disabled=false, blocked=false , text='texto', rounded=true, icon: Icon }) {
    return (
        <Link
            className={`flex px-4 py-4 gap-2 items-center min-h-10 min-w-10 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-out '
            ${disabled && 'border-neutralcolors-100 text-neutralcolors-200 hover:bg-transparent hover:text-neutralcolors-200'}
            ${rounded && '!rounded-full'}
            ${blocked && '!border-primary-900 text-primary-900 hover:!bg-primary-900 '} ${className}`}
            disabled={disabled}
        >
            {Icon}
        </Link>
    );
}

