import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CourseCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="mb-16 px-4 py-16 bg-gradient-to-b from-[#ffffff] to-[#fff]">
      <h2 className="text-5xl sm:text-4xl font-semibold text-center text-[#0a0a0a] mb-10">
        Cursos de Alongamento de Cílios
      </h2>
      <p className="text-lg sm:text-xl text-center text-gray-800 mb-12 max-w-screen-lg mx-auto text-justify">
        Aprenda a arte do alongamento de cílios com nossos cursos especializados. Oferecemos treinamento completo, desde as técnicas básicas até as mais avançadas, para garantir que você se torne um profissional qualificado e preparado para atender as necessidades de seus clientes.
      </p>
      <Slider {...settings} className="rounded-lg overflow-hidden shadow-2xl">
        {['cilios1.webp', 'cilios2.webp', 'cilios3.webp', 'cilios4.webp'].map((image, idx) => (
          <div key={idx} className="w-full flex justify-center px-2">
            <div className="w-full h-[350px]   rounded-lg shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:scale-105">
              <img
                src={`/cursoimages/${image}`} // Caminho para as imagens dos cursos na pasta public/cursoimages/
                alt={`Curso de Alongamento de Cílios ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default CourseCarousel;
