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
        backgroundImage: "url('/bg-fundo-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      {/* Gradiente de sobreposição para melhorar a legibilidade do texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0000001d] to-[#00000000]"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Texto e descrição */}
        <div className="text-white w-full lg:w-1/2 text-left flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 font-extrabold leading-tight text-[#f8f8f8] drop-shadow-2xl">
            Perfil Profissional
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-1 text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Com mais de <span className="font-bold text-[#e14216]">2 anos de experiência</span> na área de tecnologia, sou especializado no desenvolvimento de <span className="font-bold text-[#e14216]">Landing Pages, Sites E-commerce e soluções web customizadas</span>. Com sólida expertise em React, CSS, Tailwind CSS, JavaScript, HTML e Node.js, meu foco é proporcionar soluções eficazes e inovadoras.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Meu compromisso é com resultados de alto impacto e com a superação das suas expectativas. Estou pronto para ajudar a transformar suas ideias em realidade com a melhor tecnologia disponível.
          </p>
        </div>

        {/* Imagem em destaque */}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="/Criativos/seis-indicadores-1.png"
            alt="Profissional demonstrando confiança em um ambiente de trabalho moderno, em um estilo profissional e sério."
            className="rounded-lg w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
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
