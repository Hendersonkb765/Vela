import React, { useState, useEffect } from 'react';
import { GoX } from "react-icons/go";
import SecondaryButton from '../Button/SecondaryButton';

const ProfileUploadInput = ({ firstletter, onImageChange }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [error, setError] = useState(null);

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            if (selectedFile.type.startsWith('image/')) {
                const url = URL.createObjectURL(selectedFile);
                setImageUrl(selectedFile);
                setError(null);
                if (onImageChange) onImageChange(selectedFile);
            } else {
                setError('Por favor, selecione um arquivo de imagem.');
                setImageUrl(null);
                if (onImageChange) onImageChange(null); 
            }
        }
    };

    const handleRemoveImage = () => {
        setImageUrl(null);
        setError(null);
        if (onImageChange) onImageChange(null);
    };

    useEffect(() => {
        return () => {
            if (imageUrl) {
                URL.revokeObjectURL(imageUrl);
            }
        };
    }, [imageUrl]);

    return (
        <div className="flex items-center space-x-4">
            <div
                className="w-36 h-36 rounded-full bg-cover bg-center bg-no-repeat border-2 border-primary flex items-center justify-center text-5xl font-bold text-primary"
                style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
            >
                {!imageUrl && firstletter}
            </div>
            <input
                type="file"
                onChange={handleFileChange}
                className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {error && <p className="text-red-500">{error}</p>}
            {imageUrl &&
                <SecondaryButton
                    icon={<GoX />}
                    className='!text-danger-0 !border-danger-0 hover:!bg-danger-0 hover:!text-white'
                    onClick={handleRemoveImage}
                >
                    Remover Imagem
                </SecondaryButton>
            }
        </div>
    );
};

export default ProfileUploadInput;
