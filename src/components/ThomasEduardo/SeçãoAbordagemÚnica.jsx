import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SeçãoAbordagemÚnica = () => {
  const SeçãoAbordagemÚnicaItems = [
    { 
      image: "/cta1.png",
      alt: "Desenvolvimento Web Frontend",
      title: "Desenvolvimento Web Frontend",
      description: "Transforme sua presença digital com soluções web modernas e responsivas"
    },
    // Adicione outros itens aqui se necessário
  ];

  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-[calc(100vh-80px)] bg-gradient-to-b from-black via-[#111] to-black flex items-center justify-center px-4 md:px-6 lg:px-8 py-12 md:py-16"
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
              Transformando Ideias em Experiências
            </motion.h3>

            <motion.p
              className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Com foco em desenvolvimento web frontend, estou preparado para elevar seus projetos a um novo nível. Vamos juntos transformar suas ideias em realidade digital de forma criativa e inovadora.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#contato"
                className="inline-flex items-center px-6 py-3 bg-[#dc0000] hover:bg-[#b00000] text-white rounded-lg text-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#dc0000]/20"
              >
                Iniciar Projeto
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center px-6 py-3 border border-white/20 hover:border-white/40 text-white rounded-lg text-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/5"
              >
                Ver Portfólio
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
              <img
                src="/CTA/cta2.png"
                alt="Desenvolvimento Web Frontend"
                className="w-full h-auto max-w-[600px] mx-auto drop-shadow-[0_0_30px_rgba(220,0,0,0.15)]"
              />
            </motion.div>
            
            <div className="absolute inset-0 bg-gradient-radial from-[#dc0000]/10 to-transparent blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SeçãoAbordagemÚnica;