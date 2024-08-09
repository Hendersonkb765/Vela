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
                'h-10 min-w-96 rounded-md border-2 border-neutralcolors text-neutralcolors-600 text-sm ' +
                className
            }
            ref={input}
        />
    );
});
