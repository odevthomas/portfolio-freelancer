import React from 'react';
import { Eye, Star } from 'lucide-react'; // Ícones para os benefícios
import { FaRegHeart } from 'react-icons/fa'; // Ícone de coração para o título

const Introduction = () => {
  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex flex-col items-center justify-center py-16 px-6 sm:px-8"
      style={{
        backgroundImage: 'url("/fotos/cta3.webp")', // Caminho para a imagem do salão
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Gradiente de sobreposição para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000a2] to-[#00000050]"></div>

      {/* Conteúdo centralizado */}
      <div className="relative text-center text-white z-10 max-w-5xl w-full">
        {/* Título Principal */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-[#f8f8f8] mb-6 drop-shadow-xl flex items-center justify-center">
          O que é Extensão de Cílios?
        </h2>

        {/* Texto */}
        <div className="text-left text-gray-200 mx-auto mb-8">
          <p className="text-lg sm:text-xl mb-6 leading-relaxed text-justify">
            A extensão de cílios é uma técnica estética que envolve a aplicação de fios sintéticos ou de seda sobre os cílios naturais, com o objetivo de melhorar o volume, comprimento e curvatura. Essa técnica é ideal para quem deseja um olhar mais marcante, elegante e expressivo, sem a necessidade de máscaras de cílios diárias.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed text-justify">
            Além de transformar o visual, a extensão de cílios é personalizada conforme o estilo e os objetivos de cada cliente. Seja para um look natural ou mais dramático, o procedimento oferece resultados que duram várias semanas, com manutenção periódica.
          </p>
        </div>

        {/* Ícones de Benefícios */}
        <div className="flex justify-center space-x-10 mt-12">
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <Eye size={50} className="text-[#F1A7B6] mb-3" />
            <p className="text-sm sm:text-base text-gray-200">Olhar mais expressivo</p>
          </div>
          <div className="flex flex-col items-center transition-transform duration-300 transform hover:scale-110">
            <Star size={50} className="text-[#F1A7B6] mb-3" />
            <p className="text-sm sm:text-base text-gray-200">Resultado personalizado</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
