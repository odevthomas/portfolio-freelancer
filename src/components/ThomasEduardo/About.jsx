import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Ícones de redes sociais

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
      {/* Efeito de desfoque na imagem de fundo */}
      <div className="absolute inset-0 bg-black opacity-50 blur-sm"></div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 py-10 text-center">
        {/* Título centralizado */}
        <h2 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg mb-6">
          Meu Perfil Profissional
        </h2>

        {/* Texto */}
        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
          Com mais de <span className="font-bold text-[#e14216]">2 anos de experiência</span> na área de tecnologia, sou especializado no desenvolvimento de{' '}
          <span className="font-bold text-[#e14216]">Landing Pages, Sites E-commerce e soluções web customizadas</span>. Tenho sólida expertise em React, CSS, Tailwind CSS, JavaScript, HTML e Node.js. Meu foco é proporcionar soluções inovadoras que atendam às suas necessidades.
        </p>

        <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 leading-relaxed">
          Meu compromisso é entregar resultados de alto impacto e superar suas expectativas. Estou pronto para ajudar a transformar suas ideias em realidade com a melhor tecnologia disponível.
        </p>

        {/* Botão de WhatsApp */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.open('https://api.whatsapp.com/send?phone=551999042072&text=Oi, estou interessado!')}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="flex items-center justify-center bg-[#fb1603] text-white text-lg font-semibold py-4 px-10 rounded-full hover:bg-[#d31400] transition duration-300 transform shadow-lg hover:scale-105"
          >
            <FaWhatsapp className="mr-3 text-xl" />
            {buttonText}
          </button>
        </div>

        {/* Redes Sociais */}
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/devthmedu" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#333] transition duration-300">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/_devthm/" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#e1306c] transition duration-300">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/notifications/?filter=all" target="_blank" rel="noopener noreferrer" className="text-white text-2xl hover:text-[#0a66c2] transition duration-300">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;