import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

const Hero = () => {
  const [buttonText, setButtonText] = useState("Entre em Contato pelo WhatsApp"); // Texto inicial do botão
  const whatsappLink = "https://wa.me/55xxxxxxxxxx?text=Oi%20Gil%20Barbosa,%20vim%20pelo%20site!%20E%20quero%20saber%20mais%20sobre%20cílios%20perfeitos.";

  // Função para mudar o texto ao passar o mouse
  const handleMouseEnter = () => {
    setButtonText("Opa, é só clicar que já te respondo!");
  };

  // Função para voltar o texto ao normal ao sair o mouse
  const handleMouseLeave = () => {
    setButtonText("Entre em Contato pelo WhatsApp");
  };

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: 'url("/imagens fundos/img5.jpeg")', // Caminho para a imagem do fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Sombreado na imagem de fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000d4] to-transparent"></div>

      <div className="relative flex flex-col items-center justify-center w-full px-6 py-8 md:py-12 lg:py-16 text-white z-10">
        <div className="flex flex-col justify-center items-center text-center mb-8 lg:mb-0">
          {/* Título com animação */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide text-white drop-shadow-2xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Desenvolvedor Frontend | Web | Design
          </motion.h1>

          {/* Descrição com animação */}
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
          >
            Transforme sua presença online com soluções criativas e de alta qualidade. Especializado em design e desenvolvimento de sites, trazendo resultados que impressionam.
          </motion.p>

          {/* Botão de contato com animação */}
          <motion.div
            className="flex flex-col sm:flex-row sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="inline-block relative bg-[#e14216] text-white py-3 px-8 text-lg font-semibold transition duration-300 hover:bg-[#b23012] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#e14216] focus:ring-opacity-50 hover:scale-105 shadow-lg rounded-md sm:py-3 sm:px-8 sm:text-xl"
            >
              {/* Ícone do WhatsApp */}
              <FaWhatsapp className="inline-block mr-2 text-2xl" />
              {buttonText} {/* Texto que muda com hover */}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
