import { Link } from '@inertiajs/react';
import React from 'react';

export default function Tags({ className='', text='texto', danger=false, center=true, tagfilter=false, icon: Icon }) {
    return (
        <Link
            className={`flex px-4 py-1 gap-2 items-center min-w-28 min-h-6 rounded-full bg-neutralcolors-100 transition-colors duration-300 ease-out'
            ${danger && 'bg-danger text-white'}
            ${center && 'justify-center'}
            ${tagfilter && '!bg-white border-2 !border-neutralcolors-200 flex-row-reverse'} ${className}`}
        >
            {Icon}
            {text}
        </Link>
    );
}

