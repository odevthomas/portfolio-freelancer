import React from "react";
import { motion } from "framer-motion";
import { FaLightbulb, FaCode, FaRocket, FaHandsHelping } from 'react-icons/fa';

const ProjectSection = () => {
  return (
    <section id="Projetos" className="relative w-full min-h-screen bg-[#111] flex items-center justify-center px-4 py-20">
      {/* Elemento decorativo de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-[#fb1603] rounded-full blur-[150px] opacity-10 -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-[#fb1603] rounded-full blur-[150px] opacity-10 -bottom-20 -right-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Cada Projeto é uma
            <span className="text-[#fb1603]"> Oportunidade </span>
            de Reinventar a Tecnologia!
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Convertendo ideias abstratas em experiências reais que marcam e conquistam os usuários.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            {
              icon: <FaLightbulb />,
              title: "Inovação",
              desc: "Explorando novas formas de pensar e criar soluções criativas"
            },
            {
              icon: <FaCode />,
              title: "Qualidade",
              desc: "Código limpo e eficiente para experiências sem falhas"
            },
            {
              icon: <FaRocket />,
              title: "Escalabilidade",
              desc: "Projetos que crescem e se adaptam ao longo do tempo"
            },
            {
              icon: <FaHandsHelping />,
              title: "Colaboração",
              desc: "Transformando ideias em realidade com trabalho em equipe"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 hover:border-[#fb1603] transition-all duration-300"
            >
              <div className="text-[#fb1603] text-4xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
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
            className="inline-block bg-[#fb1603] text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-[#e61503] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-[#fb1603]/20"
          >
            Vamos Criar Algo Incrível Juntos! →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
