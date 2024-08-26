import React from 'react';

export default function SecondaryIconButton({
    className = '',
    href,
    disabled = false,
    gray = false,
    blocked = false,
    children,
    rounded = false,
    icon: Icon,
    onClick,
    type = 'button'
})
{
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

    const baseClassNames = `flex px-4 py-4 gap-2 items-center w-fit min-h-10 min-w-10 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-out cursor-pointer`;
    const classNames = `
        ${baseClassNames}
        ${gray ? '!border-neutralcolors-100 !text-neutralcolors-200 hover:!bg-transparent hover:text-neutralcolors-200' : ''}
        ${rounded ? '!rounded-full' : ''}
        ${blocked ? '!border-primary-900 text-primary-900 hover:!bg-primary-900' : ''}
        ${disabled ? 'pointer-events-none !text-neutralcolors-200 opacity-40 cursor-not-allowed' : ''}
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
