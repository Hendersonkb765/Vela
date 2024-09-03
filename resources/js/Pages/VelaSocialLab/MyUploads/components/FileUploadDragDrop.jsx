import React, { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { GoUpload, GoX , GoCheck } from "react-icons/go";
import { FaFileAlt } from "react-icons/fa";

export const FileUploadDragDrop = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        const filesWithProgress = acceptedFiles.map(file => ({
            file,
            progress: 0,  // Estado inicial de progresso
            status: 'pending'  // Status inicial
        }));
        setFiles((prevFiles) => [...prevFiles, ...filesWithProgress]);
    }, [files]);

    useEffect(() => {
        const uploadFiles = async () => {
            const updatedFiles = await Promise.all(
                files.map(async (fileWrapper) => {
                    if (fileWrapper.status === 'pending') {
                        // Simulando upload
                        await new Promise((resolve) => setTimeout(resolve, 1000)); // Espera 1 segundo
                        return { ...fileWrapper, progress: 100, status: 'completed' };
                    }
                    return fileWrapper;
                })
            );
            setFiles(updatedFiles);
        };

        if (files.some(file => file.status === 'pending')) {
            uploadFiles();
        }
    }, [files]);

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'],
        }
    });

    const allUploadsCompleted = files.length > 0 && files.every(file => file.status === 'completed');

    return (
        <>
            {files.length > 0 ? (
                <HasFile files={files} setFiles={setFiles} allUploadsCompleted={allUploadsCompleted} />
            ) : (
                <Input dropzone={dropzone} />
            )}
        </>
    );
};

const Input = ({ dropzone }) => {
    const { getRootProps, getInputProps, isDragActive } = dropzone;

    return (
        <div
            {...getRootProps()}
            className={`w-3/4 sm:w-1/3 sm:h-3/4 p-2 rounded-lg border-dashed border-2 bg-primary-200/25 hover:bg-primary-200/10 transition-colors ${isDragActive ? 'border-neutralcolors-100/50' : 'border-neutralcolors-100'}`}>
            <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                <div className={`flex flex-col items-center justify-center space-y-6 pt-5 pb-6 h-full w-full ${isDragActive ? 'text-neutralcolors-100/50' : 'text-neutralcolors-100'}`}>
                    <GoUpload className="w-10 h-10"></GoUpload>
                    {isDragActive ? (
                        <p>Solte para adicionar</p>
                    ) : (
                        <>
                            <p className='text-sm sm:text-base '>
                                <span className="font-bold">Clique aqui para enviar</span> ou arraste até aqui
                            </p>
                            <p className="text-sm">PDF</p>
                        </>
                    )}
                </div>
            </label>
            <input {...getInputProps()} className="hidden" />
        </div>
    );
}

const HasFile = ({ files, setFiles, allUploadsCompleted }) => {
    const removeFile = (fileToRemove) => {
        setFiles(files.filter(f => f.file !== fileToRemove.file));
    };

    return (
        <div className='w-3/4 sm:w-1/3 sm:h-3/4 rounded-lg border-dashed border-2 bg-primary-200/25 hover:bg-primary-200/10 transition-colors flex flex-col items-center justify-center text-neutralcolors-100'>
            <div className='flex flex-col items-center space-y-4 p-4 rounded-lg text-primary'>
                {allUploadsCompleted ?

                    <GoCheck className='w-8 h-8 text-white' />
                    :
                    <div className="flex items-center justify-center">
                        <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                    </div>
                }

                <span className='text-neutralcolors-100'>{allUploadsCompleted ? "Upload Concluído" : "Fazendo Upload"}</span>
            </div>

            <div className='fixed bottom-28 sm:bottom-2 right-2 flex flex-col space-y-2'>
                {files.map((fileWrapper, index) => (
                    <div key={index} className='max-w-80 relative flex items-center space-x-4 bg-white p-4 pr-2 rounded-lg text-primary'>
                        <FaFileAlt className='w-8 h-8' />
                        <span className='text-sm truncate w-3/4'>{fileWrapper.file?.name}</span>
                        <button className='h-full ml-auto' type='button' onClick={() => removeFile(fileWrapper)}>
                            <GoX className='w-6 h-6 text-danger rounded-full' />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
