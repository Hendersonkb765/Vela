import { FaFilePdf, FaFileImage, FaFileExcel, FaFilePowerpoint, FaFileAlt, FaFileVideo, FaFile, FaTrash } from 'react-icons/fa';
import SecondaryButton from '@/FigmaComponents/Button/SecondaryButton';
import SecondaryIconButton from '@/FigmaComponents/Button/SecondaryIconButton';

// Função para definir o ícone com base no tipo de arquivo
const getIcon = (fileType) => {
    if (fileType.includes('image')) {
        return <FaFileImage className="text-4xl text-blue-500" />;
    } else if (fileType.includes('pdf')) {
        return <FaFilePdf className="text-4xl text-red-500" />;
    } else if (fileType.includes('excel')) {
        return <FaFileExcel className="text-4xl text-green-500" />;
    } else if (fileType.includes('powerpoint')) {
        return <FaFilePowerpoint className="text-4xl text-orange-500" />;
    } else if (fileType.includes('video')) {
        return <FaFileVideo className="text-4xl text-purple-500" />;
    } else if (fileType.includes('text')) {
        return <FaFileAlt className="text-4xl text-gray-500" />;
    } else {
        return <FaFile className="text-4xl text-gray-400" />;
    }
};

export default function FileCard({ file }) {
    return (
        <div className='bg-white dark:bg-gray-800 w-full h-32 rounded-md flex flex-col justify-center items-start p-2'>
            <div className="flex items-center justify-start">
                {getIcon(file.fileType)}
                <div className='flex flex-col items-start justify-center'>
                    <p className='truncate text-sm text-center text-gray-800 dark:text-gray-200'>
                        {file.name}
                    </p>
                    <p className='text-xs text-gray-600 dark:text-gray-400'>
                        {new Date(file.uploadDate).toLocaleDateString('pt-BR')}
                    </p>
                </div>
            </div>
            <div className='flex space-x-2 mt-auto'>
                <SecondaryButton className='h-10 min-w-8'>Visualizar</SecondaryButton>
                <SecondaryIconButton className='h-10 w-8 !border-danger !text-danger hover:!bg-danger hover:!text-white'>
                    <FaTrash className='w-4 h-4' />
                </SecondaryIconButton>
            </div>
        </div>
    );
}
