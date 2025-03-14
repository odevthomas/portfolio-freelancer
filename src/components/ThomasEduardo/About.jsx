import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importe os ícones
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiFirebase, SiJavascript, SiExpress, SiTypescript, SiVite, SiTailwindcss, SiHtml5, SiCss3 } from 'react-icons/si'; 
import { TbBrandTelegram } from 'react-icons/tb';

// Objeto de ícones
const TECH_ICONS = {
  "React": <SiReact className="text-blue-400 text-4xl" />,
  "Node.js": <SiNodedotjs className="text-green-500 text-4xl" />,
  "MongoDB": <SiMongodb className="text-green-400 text-4xl" />,
  "MySQL": <SiMysql className="text-blue-500 text-4xl" />,
  "Firebase": <SiFirebase className="text-yellow-500 text-4xl" />,
  "JavaScript": <SiJavascript className="text-yellow-400 text-4xl" />,
  "Express": <SiExpress className="text-gray-200 text-4xl" />,
  "Telegram API": <TbBrandTelegram className="text-blue-400 text-4xl" />,
  "TypeScript": <SiTypescript className="text-blue-600 text-4xl" />,
  "Vite": <SiVite className="text-purple-500 text-4xl" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-400 text-4xl" />,
  "HTML": <SiHtml5 className="text-orange-500 text-4xl" />,
  "CSS": <SiCss3 className="text-blue-400 text-4xl" />
};

const About = () => {
  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-b from-black via-[#000000] to-black px-6"
    >
      {/* Círculos de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500  rounded-full filter blur-3xl animate-bounce"></div>
      </div>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-10 md:gap-16">
        {/* Texto centralizado verticalmente */}
        <div className="text-left space-y-6">
          <motion.h3
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Resumo Profissional
          </motion.h3>

          <motion.p
            className="text-white/80 text-lg sm:text-xl md:text-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Sou um desenvolvedor apaixonado por criar experiências digitais impactantes e funcionais. Minha jornada na tecnologia começou há mais de 2 anos, e desde então venho aprimorando minhas habilidades para entregar soluções que combinem estética e desempenho.
          </motion.p>

          {/* Adicionando os ícones das tecnologias abaixo do parágrafo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {Object.keys(TECH_ICONS).map((tech, index) => (
              <div key={index} className="flex items-center justify-center">
                {TECH_ICONS[tech]}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#contato"
              className="group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
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
          </motion.div>
        </div>

        {/* Imagem Hero */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            animate={{ y: [-5, 5, -5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          >
            <img
              src="/Perfil/avatar(5).png"
              alt="Desenvolvimento Web Frontend"
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
