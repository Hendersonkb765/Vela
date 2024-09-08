import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({value='', type = 'text', className = '', isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            value={value}
            type={type}
            className={
                'h-10 min-w-96 rounded-md text-sm border-2  border-neutralcolors text-neutralcolors-600  dark:border-neutralcolors-300 dark:bg-gray-900 dark:text-neutral-400 ' +
                className
            }
            ref={input}
        />
    );
});
