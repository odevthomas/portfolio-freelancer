import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaPaintBrush, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';  // Novos ícones representando o desenvolvimento web frontend

const ChatbotSection = () => {
  return (
    <section id="Servicos" className="py-16 bg-gradient-to-b from-[#0000001d] to-[#0000001d] text-gray-900">
      
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Potencialize Seu Projeto com o Desenvolvimento Web Frontend!
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Design Responsivo */}
          <motion.div
            className="flex flex-col items-center text-gray-200 justify-center bg-[#2b2b2b95] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDesktop className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Design Responsivo</h3>
            <p className="text-sm text-white mb-4">
              O design responsivo é essencial para garantir que seu site seja acessível em dispositivos móveis, desktops e tablets, proporcionando uma excelente experiência ao usuário.
            </p>
          </motion.div>

          {/* Estética Atraente */}
          <motion.div
            className="flex flex-col items-center text-gray-200 justify-center bg-[#2b2b2b95] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPaintBrush className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Estética Atraente</h3>
            <p className="text-sm text-white mb-4">
              Um design visualmente atraente e intuitivo é a chave para cativar seu público. Um bom design melhora a usabilidade e mantém os visitantes interessados no seu conteúdo.
            </p>
          </motion.div>

          {/* Performance Rápida */}
          <motion.div
            className="flex flex-col items-center text-gray-200 justify-center bg-[#2b2b2b95] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLaptopCode className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Performance Rápida</h3>
            <p className="text-sm text-white mb-4">
              A otimização do tempo de carregamento e a escolha das tecnologias certas garantem um desempenho excepcional, aumentando a satisfação dos usuários e melhorando os rankings de SEO.
            </p>
          </motion.div>

          {/* Acessibilidade e Experiência do Usuário */}
          <motion.div
            className="flex flex-col items-center text-gray-200 justify-center bg-[#2b2b2b95] p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaMobileAlt className="text-4xl text-[#fb1603] mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Acessibilidade e UX</h3>
            <p className="text-sm text-white mb-4">
              Garantir a acessibilidade e uma navegação intuitiva melhora a experiência do usuário, tornando seu site acessível a todos, incluindo pessoas com deficiência.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <a
           href="https://wa.me/5519999042072?text=Oi,%20Thomas!%20Vim%20pelo%20site%20e%20gostaria%20de%20bater%20um%20papo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#fb1603] text-white py-3 px-6 text-lg transition duration-300 w-full sm:w-auto hover:bg-[#e64012] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fb1603] focus:ring-opacity-50 text-center rounded-full"
            aria-label="Clique para falar conosco sobre desenvolvimento web frontend"
          >
          Planeje o seu  Site!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ChatbotSection;
