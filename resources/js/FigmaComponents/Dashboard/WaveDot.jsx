import React from 'react';
import { FaLock, FaCheck  } from "react-icons/fa";

const WaveDot = ({ x, y, isActive, isActivated }) => {
  return (
    <div
      className={`w-8 h-8 flex justify-center items-center rounded-full bg-primary  dark:bg-primary-200 ${(isActive || isActivated) ? 'text-white' : 'text-primary-300/20'}`}
      style={{
        position: 'absolute',
        left: x,
        top: y,
        border: `2px solid ${(isActive || isActivated) ? '#FFFFFF' : '#1A76CC'}`,
        transform: 'translate(-50%, -50%)',
      }}
    >
      {/* Renderiza apenas o círculo branco se o ponto estiver ativo */}
      {isActive ? (
        <div className='w-4 h-4 bg-white rounded-full'></div>
      ) : (
        // Caso contrário, renderiza o ícone baseado no estado de ativação
        isActivated ? <FaCheck  /> : <FaLock />
      )}
    </div>
  );
};

export default WaveDot;
