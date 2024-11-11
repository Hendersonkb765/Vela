// src/RadialOptions.js
import { React } from 'react';

const RadialOptions = ({ onSelect, options, selectedOption }) => {
    const handleSelect = (id) => {
        onSelect(id);
    };

    return (
        <div className="flex gap-4 sm:gap-0 sm:space-x-4 flex-wrap">
            {options.map((option) => (
                <div
                    key={option.id}
                    className={`w-44 h-fit relative p-4 border ${selectedOption === option.id ? 'border-primary' : 'border-gray-200'} rounded-lg shadow-sm cursor-pointer sm:w-80 sm:h-96`}
                    onClick={() => handleSelect(option.id)}
                >
                    <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${selectedOption === option.id ? 'bg-primary' : 'bg-gray-300'}`}></div>
                    <div className="flex flex-col items-center justify-between sm:space-y-20">
                        <img src={option.imageSrc} alt={option.title} className="w-32 h-32 sm:w-60 sm:h-60" />
                        <h3 className={`mt-4 mb-auto font-headers font-medium ${selectedOption === option.id ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`}>{option.title}</h3>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RadialOptions;
