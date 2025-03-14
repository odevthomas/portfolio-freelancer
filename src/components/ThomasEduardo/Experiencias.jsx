import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Experiencia = () => {
  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#000000] to-black flex items-center justify-center px-6 py-12 md:py-16"
    >
      <div className="w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Imagem animada */}
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src="/Perfil/avatar(6).png"
                alt="Desenvolvimento Web Frontend"
                className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-radial from-[#dc0000]/10 to-transparent blur-3xl -z-10 pointer-events-none" />
          </motion.div>

          {/* Texto e botões */}
          <div className="text-left space-y-8 relative z-20">
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Experiência Profissional
            </motion.h3>

            {[
              "Minha paixão por desenvolvimento web começou durante minha transição de carreira, onde obtive certificado técnico em computação em nuvem. Desde então, tenho trabalhado com diversas tecnologias e frameworks, sempre buscando aprender e me adaptar às novas tendências do mercado.",
              "Ao longo da minha carreira, tive a oportunidade de trabalhar em projetos desafiadores que me permitiram desenvolver habilidades técnicas e interpessoais. Acredito que a comunicação clara e a colaboração são tão importantes quanto o código bem escrito.",
              "Atualmente, estou focado em criar experiências web imersivas e acessíveis, utilizando as melhores práticas de desenvolvimento e design.",
            ].map((text, index) => (
              <motion.p
                key={index}
                className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 + index * 0.2 }}
              >
                {text}
              </motion.p>
            ))}

            {/* Botões */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="https://api.whatsapp.com/send?phone=551999042072&text=Oi%20Thomas!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.%20Vamos%20conversar%3F"
                className="relative z-50 group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Entre em Contato
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>

              <motion.a
                href="https://docs.google.com/document/d/1iObqSJQNbJAn3EBY0m7iGZqSO4p9Yrp6IG2MPxVH0Q0/edit?usp=sharing"
                download
                className="relative z-50 group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Baixar Currículo
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Círculos animados de fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
      </div>
    </section>
  );
};

export default Experiencia;
