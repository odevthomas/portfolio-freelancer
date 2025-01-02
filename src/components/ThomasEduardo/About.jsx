import React from 'react';
import { FaRegHeart } from 'react-icons/fa'; // Ícone de coração (agora mais discreto)

const About = () => {
  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-6 sm:px-8 py-16"
      style={{
        backgroundImage: 'url("/imagens fundos/cta-about.jpg")', // Caminho para a imagem de fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Gradiente de sobreposição para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000090] to-[#00000080]"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full px-6 sm:px-12 py-10 flex flex-col sm:flex-row items-center justify-between">
        {/* Texto e descrição */}
        <div className="text-white sm:w-1/2 text-left sm:pr-8 mb-8 sm:mb-0 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-6xl md:text-7xl mb-6 font-extrabold leading-tight text-[#f8f8f8] drop-shadow-2xl">
            Perfil Profissional
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl mb-4 text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Com mais de 2 anos de experiência na área de tecnologia, sou especializado no desenvolvimento de Landing Pages, Sites E-commerce e soluções web customizadas. Com sólida expertise em React, CSS, Tailwind CSS, JavaScript, HTML e Node.js, meu foco é proporcionar soluções eficazes e inovadoras.
          </p>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Meu compromisso é com resultados de alto impacto e com a superação das suas expectativas. Estou pronto para ajudar a transformar suas ideias em realidade com a melhor tecnologia disponível.
          </p>
          <a
            href="https://wa.me/5519994585020" // Link do WhatsApp
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#333] text-white py-3 px-6 rounded-lg text-lg transition duration-300 sm:w-auto hover:bg-[#444] shadow-lg transform hover:scale-105"
          >
            Vamos Conversar
          </a>
        </div>

        {/* Imagem ao lado do texto */}
        <div className="relative sm:w-1/2 w-full mt-8 sm:mt-0 flex justify-center">
          <img 
            src="/imagens fundos/img5.jpg" 
            alt="Profissional Confiante" 
            className="rounded-lg shadow-xl w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Gradiente adicional de sobreposição para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000090] to-transparent opacity-60"></div>

      {/* Animações de hover e estilo adicional */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Montserrat:wght@400;600&display=swap');

        h2 {
          font-family: 'Roboto', sans-serif;
        }

        p {
          font-family: 'Montserrat', sans-serif;
        }

        .hover\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default About;
