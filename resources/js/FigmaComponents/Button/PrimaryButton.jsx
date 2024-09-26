import React from 'react';

export default function PrimaryButton({
    className = '',
    href,
    disabled = false,
    gray = false,
    blocked = false,
    children = 'texto',
    rounded = false,
    center = false,
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

    const classNames = `flex px-2 py-2 sm:px-4 sm:py-2 gap-2 items-center min-w-fit sm:min-w-32 sm:min-h-8 rounded-md bg-primary text-sm text-white font-body hover:bg-primary-200 transition-colors duration-300 ease-out
        ${gray ? '!bg-neutralcolors-100 !text-neutralcolors-400 dark:!bg-gray-900 dark:!text-white' : ''}
        ${rounded ? '!rounded-full' : ''}
        ${center ? 'justify-center' : ''}
        ${blocked ? '!bg-primary-900' : ''}
        ${disabled ? 'cursor-not-allowed  !text-neutralcolors-200 opacity-40' : ''}
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
