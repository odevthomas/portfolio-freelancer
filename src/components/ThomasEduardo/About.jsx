import React from "react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const About = () => {
  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#000000] to-black flex items-center justify-center px-0 py-12 md:py-16"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>

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

            {[
              "Sou um desenvolvedor apaixonado por criar experiências digitais impactantes e funcionais. Minha jornada na tecnologia começou há mais de 2 anos, e desde então venho aprimorando minhas habilidades para entregar soluções que combinem estética e desempenho."
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
          </div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              className="relative z-10"
            >
              <video
                className="h-[700px] w-full object-cover shadow-lg rounded-lg"
                src="/public/Video/code-video.mp4"
                autoPlay
                loop
                muted
                playsInline
                style={{ border: 'none' }} // Remover borda
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;