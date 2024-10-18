import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useState } from 'react';
import './ImageCarousel.css'; 

const ImageCarousel = ({imgs}) => {



    const images = [
        'https://nossacausa.com/wp-content/uploads/2018/09/woman-donates-canned-goods-to-charity-picture-id513245786.jpg',
        'https://objectstorage.sa-saopaulo-1.oraclecloud.com/n/grrxwvt1bpmm/b/wp-extraclasse-uploads/o/uploads/2024/05/A-cultura-do-trabalho-voluntario-precisa-ser-permanente.webp',
        'https://nossacausa.com/wp-content/uploads/2018/09/woman-donates-canned-goods-to-charity-picture-id513245786.jpg',
        'https://i.pinimg.com/236x/a9/3e/91/a93e91dd2e6c9ab577afcbff3da98dc3.jpg'
      ];

      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        customPaging: function (i) {
          return (
            <div>
              <img
                src={images[i]}
                alt={`Thumbnail ${i + 1}`}
                style={{ width: '60px', height: '50px', objectFit: 'cover', borderRadius: '4px' }}
              />
            </div>
          );
        },
        dotsClass: 'slick-dots slick-thumb', // Classe para customizar os dots
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
            },
          },
        ],
      };
    



    return (
        <div className="image-carousel overflow-hidden">
        <Slider {...settings}>
            {images.map((img, index) => (
            <div key={index} className='flex justify-center'>
                <div className='flex justify-center'>
                    <img src={img} alt={`Slide ${index + 1}`} className='rounded-md' style={{ width: 'auto', height: '400px', objectFit: 'cover', justifySelf: 'center',}} />
                </div>
                
            </div>
            ))}
        </Slider>
        </div>
    );
};

export default ImageCarousel;
