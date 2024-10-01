import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function TextInput({value='', type = 'text', className = '', isFocused = false, placeholder='', ...props }, ref) {
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
            placeholder={placeholder}
            className={
                'h-10 sm:min-w-96 rounded-md text-sm border-2  border-neutralcolors text-neutralcolors-600  dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400  ' +
                className
            }
            ref={input}
        />
    );
});
