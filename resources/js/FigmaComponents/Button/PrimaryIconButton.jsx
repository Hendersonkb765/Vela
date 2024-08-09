import { Link } from '@inertiajs/react';
import React from 'react';

export default function PrimaryIconButton({
    className = '',
    href,
    disabled = false,
    blocked = false,
    text = 'texto',
    rounded = true,
    icon: Icon
}) {
    const baseClassNames = `flex px-4 py-4 gap-2 items-center min-h-10 rounded-md bg-primary text-white hover:bg-primary-500 transition-colors duration-300 ease-out`;
    const classNames = `
        ${baseClassNames}
        ${disabled ? 'pointer-events-none !text-neutralcolors-200 opacity-40 cursor-not-allowed' : ''}
        ${rounded ? '!rounded-full' : ''}
        ${blocked ? '!bg-primary-900' : ''}
        ${className}
    `;

    if (disabled) {
        return (
            <div className={classNames}>
                {Icon}
            </div>
        );
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            className={classNames}
            role="button"
        >
            {Icon}
        </a>
    );
}
