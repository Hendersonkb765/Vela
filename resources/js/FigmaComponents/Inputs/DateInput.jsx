import { forwardRef, useEffect, useRef } from 'react';

export default forwardRef(function DateInput({ value = '', type = 'date', className = '', minDate , maxDate, isFocused = false, ...props }, ref) {
    const input = ref ? ref : useRef();
    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, [isFocused]);

    return (
        <input
            {...props}
            value={value}
            type={type}
            className={
                'h-10 sm:min-w-96 rounded-md border-2 border-neutralcolors text-neutralcolors-600 text-sm dark:border-slate-500 dark:bg-gray-900 dark:text-neutral-400 dark:[color-scheme:dark] cursor-pointer ' +
                className
            }
            min={minDate}
            max={maxDate}
            ref={input}
        />
    );
});
