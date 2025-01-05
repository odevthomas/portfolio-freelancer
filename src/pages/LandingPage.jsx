import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Caso utilize roteamento no seu projeto

const LandingPage = () => {
  return (
    <motion.section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/ladingpages2.png')" }} // Substitua pela sua imagem de fundo
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Overlay escuro para dar destaque aos textos e botões */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6 sm:px-12">
        {/* Título principal */}
        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
Soluções Digitais Sob Medida Para Você!        </motion.h1>

        {/* Subtítulo */}
        <motion.p
          className="text-lg sm:text-xl lg:text-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Explore meu portfólio e descubra a solução perfeita para você, desde projetos freelancers até grandes desafios de longo prazo.
        </motion.p>

        {/* Botões */}
        <div className="flex gap-4">
          {/* Botão Login */}
          <motion.div
            className="w-full sm:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <Link
              to="/login" // Altere para o caminho da sua página de login
              className="block w-full sm:w-auto bg-[#dc0000] hover:bg-[#d20c0c] text-white py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 text-center"
            >
              Login do Cliente 
            </Link>
          </motion.div>

          {/* Botão Acessar Manutenção */}
          <motion.div
            className="w-full sm:w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <Link
              to="/ThomasEduardo" // Altere para o caminho da sua página de manutenção
              className="block w-full sm:w-auto bg-transparent border-2 border-white text-white py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110 text-center"
            >
              Acessar Portfólio
            </Link>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default LandingPage;
