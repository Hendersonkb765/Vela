import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { GoUpload, GoX, GoCheck } from "react-icons/go";
import { FaFileAlt } from "react-icons/fa";
import { useForm } from '@inertiajs/react';

export const FileUploadDragDrop = () => {
    const { data, setData, processing } = useForm({
        files: [],
    });
    const allUploadsCompleted = data.files.length > 0; //Adicionar resto da lógica para verificar progresso do upload

    const onDrop = useCallback((acceptedFiles) => {
        const newFiles = acceptedFiles.map((file) => ({
            file,
        }));
        setData('files', [...data.files, ...newFiles]);
    }, [data.files, setData]);

    const removeFile = (fileToRemove) => {
        setData('files', data.files.filter(f => f.file !== fileToRemove.file));
    };

    const dropzone = useDropzone({
        onDrop,
        accept: {
            'application/pdf': ['.pdf'], // Aceita apenas PDFs
        },
    });

    return (
        <>
            {data.files.length > 0 ? (
                <HasFile files={data.files} progress={data.progress} removeFile={removeFile} allUploadsCompleted={allUploadsCompleted}/>
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
            className={`w-3/4 sm:w-1/3 p-2 rounded-lg border-dashed border-2 cursor-pointer bg-primary-200/25 hover:bg-primary-200/10 dark:bg-primary-300/25 hover:dark:bg-primary-200/10 hover:scale-105 transition-all  ${isDragActive ? 'border-neutralcolors-100/50' : 'border-neutralcolors-100'}`}>
            <label htmlFor="dropzone-file" className="cursor-pointer w-full h-full">
                <div className={`flex flex-col items-center justify-center space-y-6 pt-5 pb-6 h-full w-full ${isDragActive ? 'text-neutralcolors-100/50' : 'text-neutralcolors-100'}`}>
                    <GoUpload className="w-10 h-10" />
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
};

const HasFile = ({ files, removeFile, allUploadsCompleted }) => {
    return (
        <div className='w-3/4 sm:w-1/3 rounded-lg border-dashed border-2 bg-primary-200/25 hover:bg-primary-200/10 transition-colors flex flex-col items-center justify-center text-neutralcolors-100'>
            <div className='flex flex-col items-center space-y-4 p-4 rounded-lg '>
                {allUploadsCompleted ? (
                    <>
                        <GoCheck className='w-8 h-8 text-white' />
                        <span className='text-neutralcolors-100'>Upload Concluído</span>
                    </>
                ) : (
                    <>
                        <div className="w-8 h-8 border-4 border-t-4 border-t-blue-500 border-gray-200 rounded-full animate-spin"></div>
                        <span className='text-neutralcolors-100'>Fazendo Upload</span>
                    </>
                )}
            </div>

            <div className='fixed bottom-28 sm:bottom-2 right-2 flex flex-col space-y-2'>
                {files.map((fileWrapper, index) => (
                    <div key={index} className='max-w-80 relative flex items-center space-x-4 p-4 pr-2 rounded-lg bg-white text-primary dark:bg-gray-800  dark:text-white'>
                        <FaFileAlt className='w-8 h-8 dark:text-primary' />
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
