export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block font-medium text-sm text-neutralcolors-700 dark:text-neutralcolors-100` + className}>
            {value ? value : children}
        </label>
    );
}
