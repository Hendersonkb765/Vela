import { Link } from '@inertiajs/react';
import React from 'react';

export default function PrimaryIconButton({
    className = '',
    href,
    disabled = false,
    gray = false,
    blocked = false,
    children = 'texto',
    rounded = false,
    icon: Icon,
    onClick,
    type = 'button'
}) {
    const handleClick = (e) => {
        if (onClick) onClick(e);
        if (disabled) {
            e.preventDefault();
            return;
        }
        if (href && !e.defaultPrevented) {
            e.preventDefault();
            window.location.href = href;
        }
    };

    const baseClassNames = `flex px-4 py-4 gap-2 items-center  min-h-10 rounded-md bg-primary text-sm text-white font-body hover:bg-primary-200 transition-colors duration-300 ease-out `;
    const classNames = `
        ${baseClassNames}
        ${disabled ? 'pointer-events-none !text-neutralcolors-200 opacity-40 cursor-not-allowed' : ''}
        ${rounded ? '!rounded-full' : ''}
        ${blocked ? '!bg-primary-900' : ''}
        ${className}
    `;

    if (href && !disabled) {
        return (
            <a
                href={href}
                onClick={handleClick}
                className={classNames}
                role="button"
            >
                {Icon}
                {children}
            </a>
        );
    }

    return (
        <button
            className={classNames}
            disabled={disabled}
            onClick={handleClick}
            type={type}
        >
            {Icon}
            {children}
        </button>
    );
}
