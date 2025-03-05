import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = () => {

  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-black via-[#000000] to-black flex items-center justify-center px-4 md:px-6 lg:px-8 py-12 md:py-16"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-left space-y-8">
            <motion.h3
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Resumo Profissional
            </motion.h3>

            <motion.p
              className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Sou um Desenvolvedor Web especializado em Frontend e Design de Experiência do Usuário (UX), com 2 anos e meio de experiência. Estou em busca da minha primeira oportunidade como desenvolvedor em uma equipe, onde possa aprender continuamente e expandir minhas habilidades.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contato"
                className="group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Saiba Mais
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{
                y: [-10, 10, -10],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <video
                className="h-[550px] sm:h-[550px] md:h-[600px] mx-auto object-cover"
                src="/codigo.mp4" // Substitua pelo caminho correto do seu vídeo
                autoPlay
                loop
                muted
                playsInline
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
