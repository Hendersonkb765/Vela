export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500  ' +
                className
            }
        />
    );
}
