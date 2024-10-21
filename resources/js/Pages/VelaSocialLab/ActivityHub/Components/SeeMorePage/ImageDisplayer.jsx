import React, { useState, useRef } from 'react';
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import './ImageDisplayer.css';

export default function ImageDisplayer() {
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const sliderRef = useRef(null);

  const images = [
    'https://nossacausa.com/wp-content/uploads/2018/09/woman-donates-canned-goods-to-charity-picture-id513245786.jpg',
    'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrxwvt1bpmm/b/wp-extraclasse-uploads/o/uploads/2024/05/A-cultura-do-trabalho-voluntario-precisa-ser-permanente.webp',
    'https://nossacausa.com/wp-content/uploads/2018/09/woman-donates-canned-goods-to-charity-picture-id513245786.jpg',
    'https://i.pinimg.com/236x/a9/3e/91/a93e91dd2e6c9ab577afcbff3da98dc3.jpg',
    'https://abituranet.ru/sites/default/files/shutterstock_76496956.jpg',
    'https://nossacausa.com/wp-content/uploads/2018/09/woman-donates-canned-goods-to-charity-picture-id513245786.jpg',
  ];

  // Função para abrir o modal com a imagem clicada
  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Função para avançar para a próxima imagem
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Função para retroceder para a imagem anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  // Função para avançar o scroll
  const scrollRight = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: 300, behavior: 'smooth' });
  };

  // Função para retroceder o scroll
  const scrollLeft = () => {
    const slider = sliderRef.current;
    slider.scrollBy({ left: -300, behavior: 'smooth' });
  };

  // Funções de toque para dispositivos móveis
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const touchX = e.touches[0].clientX;
    const moveDiff = startX - touchX;

    sliderRef.current.scrollLeft += moveDiff;
    setStartX(touchX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  // Funções de arrastar para desktop
  const handleMouseDown = (e) => {
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const moveDiff = startX - e.clientX;

    sliderRef.current.scrollLeft += moveDiff;
    setStartX(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Prevenir o comportamento padrão de arrastar a imagem
  const handleDragStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="relative">
      {/* Slider */}
      <div
        className="h-64 flex relative"
      >
        <div
          className="flex gap-4 overflow-x-scroll scrollbar-custom"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp} // Finaliza o drag se o mouse sair do container
          style={{ cursor: isDragging ? 'grabbing' : 'grab', scrollSnapType: 'x mandatory' }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Imagem ${index + 1}`}
              className="h-full w-auto object-cover rounded-lg cursor-pointer"
              onClick={() => openModal(index)} // Abre o modal ao clicar na imagem
              onDragStart={handleDragStart} // Prevenir o arraste padrão da imagem
              style={{ scrollSnapAlign: 'start' }}
            />
          ))}
        </div>
      </div>

      {/* Botão esquerdo */}
      <div
        onClick={scrollLeft}
        className="transition-colors group hover:bg-primary rounded-full cursor-pointer flex justify-center items-center border-solid border-primary border-2 h-7 w-7 absolute top-1/2 left-2 bg-transparent transform -translate-y-1/2"
      >
        <GoChevronLeft className="h-5 w-5 transition-colors group-hover:text-white text-primary" />
      </div>

      {/* Botão direito */}
      <div
        onClick={scrollRight}
        className="transition-colors group hover:bg-primary rounded-full cursor-pointer flex justify-center items-center border-solid border-primary border-2 h-7 w-7 absolute top-1/2 right-2 bg-transparent transform -translate-y-1/2"
      >
        <GoChevronRight className="h-5 w-5 transition-colors group-hover:text-white text-primary" />
      </div>

      {/* Modal de imagem grande */}
      {isModalOpen && (
        <div  className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <div onClick={closeModal} className='z-10 absolute w-full h-full'></div>
          <button
            className="z-20 absolute top-4 right-4 text-white text-2xl"
            onClick={closeModal}
          >
            &times;
          </button>

          <img
            src={images[currentImageIndex]}
            alt="Imagem grande"
            className="z-20 object-contain"
            style={{maxWidth: '95%', maxHeight: '95%'}}
          />

          <button
            className="z-20 absolute left-4 className='transition-colors group hover:bg-primary rounded-full cursor-pointer flex justify-center items-center border-solid border-primary border-2 h-9 w-9 absolute'"
            onClick={prevImage}
          >
            <GoChevronLeft className="h-5 w-5 transition-colors group-hover:text-white text-primary" />
          </button>

          <button
            className="z-20 absolute right-4 className='transition-colors group hover:bg-primary rounded-full cursor-pointer flex justify-center items-center border-solid border-primary border-2 h-9 w-9 absolute'"
            onClick={nextImage}
          >
            <GoChevronRight className="h-5 w-5 transition-colors group-hover:text-white text-primary" />
          </button>
        </div>
      )}
    </div>
  );
}