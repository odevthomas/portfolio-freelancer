import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp

const About = () => {
  const [buttonText, setButtonText] = useState('Vamos Conversar'); // Estado para o texto do botão

  // Função para mudar o texto ao passar o mouse
  const handleMouseEnter = () => {
    setButtonText('Opa, é só clicar que já te respondo!');
  };

  // Função para voltar o texto ao normal ao sair o mouse
  const handleMouseLeave = () => {
    setButtonText('Vamos Conversar');
  };

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
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000099] to-[#00000080]"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full px-6 sm:px-12 py-10 flex flex-col sm:flex-row items-center justify-between gap-8">
        {/* Texto e descrição */}
        <div className="text-white sm:w-1/2 text-left sm:pr-8 mb-8 sm:mb-0 flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 font-extrabold leading-tight text-[#f8f8f8] drop-shadow-2xl">
            Perfil Profissional
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Com mais de <span className="font-bold text-[#e14216]">2 anos de experiência</span> na área de tecnologia, sou especializado no desenvolvimento de <span className="font-bold text-[#e14216]">Landing Pages, Sites E-commerce e soluções web customizadas </span>. Com sólida expertise em React, CSS, Tailwind CSS, JavaScript, HTML e Node.js, meu foco é proporcionar soluções eficazes e inovadoras.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Meu compromisso é com resultados de alto impacto e com a superação das suas expectativas. Estou pronto para ajudar a transformar suas ideias em realidade com a melhor tecnologia disponível.
          </p>

          {/* Botão do WhatsApp com Tooltip (mensagem de hover) */}
          <a
            href="https://wa.me/55199999942072?text=Oi,%20venho%20do%20seu%20site.%20Gostaria%20de%20mais%20informações!"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="inline-block bg-[#e14216] text-white py-3 px-8 text-lg transition duration-300 sm:w-auto hover:bg-[#b23012] shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e14216] focus:ring-opacity-50 text-center rounded-md"
          >
            {/* Ícone do WhatsApp */}
            <FaWhatsapp className="inline-block mr-2 text-2xl" />
            {buttonText} {/* Texto que muda com hover */}
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
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000099] to-transparent opacity-60"></div>

      {/* Estilos para animação e efeitos adicionais */}
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
