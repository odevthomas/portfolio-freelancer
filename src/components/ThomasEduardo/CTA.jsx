import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaRocket, FaHandsHelping } from 'react-icons/fa';

const ProjectSection = () => {
  return (
    <section id="Projetos" className="relative w-full py-16 md:py-24 bg-[#111]">
      {/* Background decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-[#fb1603] rounded-full blur-[120px] opacity-10 -top-10 -left-10" />
        <div className="absolute w-64 md:w-96 h-64 md:h-96 bg-[#fb1603] rounded-full blur-[120px] opacity-10 -bottom-10 -right-10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Cada Projeto é uma
            <span className="text-[#fb1603] block md:inline"> Oportunidade </span>
            de Reinventar a Tecnologia!
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto">
            Convertendo ideias abstratas em experiências reais que marcam e conquistam os usuários.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            {
              icon: <FaLightbulb size={32} />,
              title: "Inovação",
              desc: "Explorando novas formas de pensar e criar soluções criativas"
            },
            {
              icon: <FaCode size={32} />,
              title: "Qualidade",
              desc: "Código limpo e eficiente para experiências sem falhas"
            },
            {
              icon: <FaRocket size={32} />,
              title: "Escalabilidade",
              desc: "Projetos que crescem e se adaptam ao longo do tempo"
            },
            {
              icon: <FaHandsHelping size={32} />,
              title: "Colaboração",
              desc: "Transformando ideias em realidade com trabalho em equipe"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="bg-[#1a1a1a] border-2 border-gray-800 rounded-lg p-6 hover:border-[#fb1603] transition-all duration-300"
            >
              <div className="text-[#fb1603] mb-4 flex justify-center items-center h-16">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 text-sm md:text-base">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center"
        >
          <a
            href="https://wa.me/5519999042072?text=Oi,%20Thomas!%20Vim%20pelo%20site%20e%20gostaria%20de%20bater%20um%20papo."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#fb1603] text-white text-base md:text-lg font-semibold px-8 py-4 rounded-lg hover:bg-[#e61503] transform hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-[#fb1603]/20"
          >
            Vamos Criar Algo Incrível Juntos! →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
