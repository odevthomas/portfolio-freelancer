"use client"; // Indica que este módulo deve ser tratado como cliente

import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Importando ícones do react-icons
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(true);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsVisible(false);
    navigate('/ThomasEduardo');
  };

  return (
    <motion.div
      className={`relative w-full h-screen ${isVisible ? '' : 'hidden'}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }} // Transição suave
    >
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/cta4.jpg')" }}
        aria-label="Imagem de fundo"
      >
        <div className="flex items-center justify-center w-full h-full bg-black bg-opacity-40">
          <div className="text-center text-white px-6 sm:px-12 md:px-24">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wide uppercase leading-tight">
              Descubra a Excelência da Beleza
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mt-4 mb-8 font-light leading-relaxed">
              Tratamentos exclusivos por profissionais experientes. Agende sua visita e experimente o melhor em estética e bem-estar.
            </p>

            <motion.button
              aria-label="Conheça nossos serviços"
              className="inline-flex items-center justify-center gap-x-3 py-3 px-6 text-lg md:text-xl bg-[#F1A7B6] text-white hover-bg-[#A04C5C] rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out uppercase"
              onClick={handleClick}
              whileHover={{ scale: 1.05 }} // Efeito de escala ao passar o mouse
              whileTap={{ scale: 0.95 }} // Efeito de escala ao clicar
            >
  Conheça Nossos Serviços
            </motion.button>
          </div>
        </div>
      </div>

      {/* Rodapé com ícones das redes sociais */}
      <div className="absolute bottom-6 w-full flex justify-center space-x-6 sm:space-x-8 md:space-x-10">
        <motion.a
          href="https://www.instagram.com/ThomasEduardo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          whileHover={{ y: -5 }} // Efeito de movimento ao passar o mouse
          transition={{ duration: 0.2 }}
        >
          <FaInstagram size={28} className="text-white hover:text-[#f46d40] transition-all duration-150 ease-in-out" />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/ThomasEduardo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          whileHover={{ y: -5 }} // Efeito de movimento ao passar o mouse
          transition={{ duration: 0.2 }}
        >
          <FaFacebook size={28} className="text-white hover:text-[#3b5998] transition-all duration-150 ease-in-out" />
        </motion.a>
      </div>
    </motion.div>
  );
};

export default LandingPage;