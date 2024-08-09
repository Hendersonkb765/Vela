// src/RadialOptions.js
import { React, useState } from 'react';
  const RadialOptions = ({ onSelect, options }) => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleSelect = (id) => {
      setSelectedOption(id);
      const selectedTitle = options.find(option => option.id === id).title;
      onSelect(selectedTitle);
    };

    return (
      <div className="flex space-x-4">
        {options.map((option) => (
          <div
            key={option.id}
            className={`w-80 h-96 relative p-4 border ${selectedOption === option.id ? 'border-primary' : 'border-gray-300'} rounded-lg shadow-lg cursor-pointer`}
            onClick={() => handleSelect(option.id)}
          >
            <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${selectedOption === option.id ? 'bg-primary' : 'bg-gray-300'}`}></div>
            <div className="flex flex-col items-center justify-between space-y-20">
              <img src={option.imageSrc} alt={option.title} className="w-60 h-60" />
              <h3 className={`mt-4 mb-auto font-headers font-medium ${selectedOption === option.id ? 'text-primary' : 'text-gray-600'}`}>{option.title}</h3>
            </div>
          </div>
        ))}
      </div>
    );
};

export default RadialOptions;
