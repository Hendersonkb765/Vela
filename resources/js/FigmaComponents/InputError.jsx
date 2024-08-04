export default function InputError({ message, className = '', ...props }) {
    return message ? (
        <p {...props} className={'text-sm text-danger-0 dark:text-red-400 ' + className}>
            {message}
        </p>
    ) : null;
}
