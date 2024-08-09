import React from 'react';

export default function SecondaryButton({
    className = '',
    href,
    disabled = false,
    blocked = false,
    children = 'texto',
    rounded = false,
    center = true,
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

    const classNames = `flex px-4 py-2 gap-2 items-center min-w-32 min-h-8 rounded-md bg-transparent border-primary text-primary border-2 font-body hover:bg-primary hover:text-white transition-colors duration-300 ease-out
        ${rounded ? '!rounded-full' : ''}
        ${center ? 'justify-center' : ''}
        ${blocked ? '!border-primary-900 text-primary-900 hover:!bg-primary-900' : ''}
        ${disabled ? 'cursor-not-allowed !text-neutralcolors-200 opacity-40' : ''}
        ${className}`;

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
