import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaRocket, FaHandsHelping } from 'react-icons/fa';

const ProjectSection = () => {
  return (
    <section id="Projetos" className="py-16 bg-gradient-to-b from-[#000] to-[#000] text-gray-100">
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 lg:px-16 text-center">
        
        <motion.h2
          className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Cada Projeto é uma Oportunidade de Reinventar a Tecnologia!
        </motion.h2>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Convertendo ideias abstratas em experiências reais que marcam e conquistam os usuários. Cada interação e cada detalhe são projetados para transformar a maneira como as pessoas se conectam com a tecnologia.
        </motion.p>

        {/* Layout de Grid para Projetos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 my-12">
          {/* Card 1 */}
          <motion.div
            className="flex flex-col items-center justify-center bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLightbulb className="text-5xl text-[#fb1603] mb-4 transition-transform duration-300 ease-in-out" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Inovação e Criatividade</h3>
            <p className="text-sm text-gray-300 mb-4">
              Cada projeto é uma chance de explorar novas formas de pensar e criar soluções criativas que encantam os usuários e atendem às necessidades do mercado.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="flex flex-col items-center justify-center bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="text-5xl text-[#fb1603] mb-4 transition-transform duration-300 ease-in-out" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Desenvolvimento com Qualidade</h3>
            <p className="text-sm text-gray-300 mb-4">
              Criar código limpo e eficiente é essencial para garantir que cada funcionalidade funcione perfeitamente, proporcionando uma experiência sem falhas.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="flex flex-col items-center justify-center bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRocket className="text-5xl text-[#fb1603] mb-4 transition-transform duration-300 ease-in-out" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Crescimento e Escalabilidade</h3>
            <p className="text-sm text-gray-300 mb-4">
              Pensar em escalabilidade desde o início do projeto permite que ele cresça e se adapte ao longo do tempo, garantindo sustentabilidade no longo prazo.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="flex flex-col items-center justify-center bg-[#1f1f1f] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHandsHelping className="text-5xl text-[#fb1603] mb-4 transition-transform duration-300 ease-in-out" />
            <h3 className="text-2xl font-semibold mb-2 text-white">Colaboração e Resultados</h3>
            <p className="text-sm text-gray-300 mb-4">
              O trabalho colaborativo e a comunicação eficiente são fundamentais para transformar ideias em realidade, garantindo resultados que impactam positivamente os usuários.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <a
            href="https://wa.me/5519981331191?text=Oi,%20vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20transformar%20meu%20projeto%20em%20algo%20inovador!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#fb1603] text-white py-3 px-6 text-lg transition duration-300 w-full sm:w-auto hover:bg-[#e64012] transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#fb1603] focus:ring-opacity-50 text-center rounded-full"
            aria-label="Clique para falar conosco sobre como transformar seu projeto"
          >
            Vamos Criar Algo Incrível Juntos!
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
