import React from 'react';

export default function SecondaryIconButton({
    className = '',
    href,
    gray = false,
    disabled = false,
    blocked = false,
    text = 'texto',
    rounded = true,
    icon: Icon
}) {
    const baseClassNames = `flex px-4 py-4 gap-2 items-center w-fit min-h-10 min-w-10 rounded-md border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-out cursor-pointer`;
    const classNames = `
        ${baseClassNames}
        ${gray ? '!border-neutralcolors-100 !text-neutralcolors-200 hover:!bg-transparent hover:text-neutralcolors-200' : ''}
        ${rounded ? '!rounded-full' : ''}
        ${blocked ? '!border-primary-900 text-primary-900 hover:!bg-primary-900' : ''}
        ${disabled ? 'cursor-not-allowed  !text-neutralcolors-200 opacity-40' : ''}
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
            className={classNames}
            href={href}
        >
            {Icon}
        </a>
    );
}
