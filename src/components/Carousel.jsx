import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true, // Muestra puntos de paginación
    infinite: true, // Bucle infinito
    speed: 500, // Velocidad de transición
    slidesToShow: 1, // Número de slides visibles
    slidesToScroll: 1, // Número de slides a desplazar
  };

  return (
    <Slider {...settings} className='h-[50vh]'>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 1" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 2" />
      </div>
      <div>
        <img src="https://via.placeholder.com/800x400" alt="Slide 3" />
      </div>
    </Slider>
  );
};

export default Carousel;