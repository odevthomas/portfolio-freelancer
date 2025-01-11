import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

const Hero = () => {
  const [buttonText, setButtonText] = useState("Entre em Contato pelo WhatsApp"); // Texto inicial do botão
  const whatsappLink = "https://wa.me/55xxxxxxxxxx?text=Oi%20Thomas%20Eduardo,%20vim%20pelo%20site!%20E%20quero%20saber%20mais%20sobre%20cílios%20perfeitos.";

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
      className="relative w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-start px-6 py-8 md:py-8 lg:py-12 text-white z-10"
      style={{
        backgroundImage: 'url("/banner-devthm2.png")', // Caminho para a imagem do fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Sombreado na imagem de fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000d4] to-transparent"></div>

      <div className="relative w-full md:w-2/3 lg:w-1/2 px-6 py-8 md:py-8 lg:py-16 z-10">
        <div className="flex flex-col justify-start text-left mb-8 lg:mb-0">
          {/* Título com animação */}
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-wide text-white drop-shadow-2xl mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            Desenvolvedor Web
          </motion.h1>

          {/* Container para Nome e Avatar */}
          <div className="flex items-center mb-4">
            {/* Avatar do Desenvolvedor */}
            <motion.img
              src="/perfil2.png" // Substitua pelo caminho da imagem do avatar
              alt="Thomas Eduardo"
              className="w-10 h-10 rounded-full  border-white mr-2" // Tamanho reduzido
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
            />
            {/* Nome do Desenvolvedor */}
            <motion.h2
              className="text-lg sm:text-xl font-bold text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            >
              Thomas Eduardo
            </motion.h2>
          </div>

          {/* Descrição com animação */}
          <motion.p
            className="text-lg sm:text-xl text-gray-300 leading-relaxed drop-shadow-lg mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeInOut" }}
          >
            Transforme sua presença online com soluções criativas e de alta qualidade. Especializado em design e desenvolvimento de sites, trazendo resultados que impressionam.
          </motion.p>

          {/* Botão de contato com animação */}
          <motion.div
            className="flex flex-col sm:flex-row sm:space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="inline-block bg-[#dc0000] text-white py-2 px-4 text-lg sm:text-xl transition duration-300 sm:w-auto hover:bg-[#b23012] shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#dc0000] focus:ring-opacity-50 text-center rounded-full"
            >
              <FaWhatsapp className="inline-block mr-2 text-2xl" />
              {buttonText}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;