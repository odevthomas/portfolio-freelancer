import React, { useState } from "react";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const depoimentos = [
    {
      cliente: "Excelente Profissional",
      texto: "Excelente no que faz, o Thomas superou nossas expectativas com um site incrível para nosso salão de beleza."
    },
    {
      cliente: "Recomendação Certa",
      texto: "Recomendo o Thomas para qualquer projeto web, ele é um verdadeiro especialista em desenvolvimento."
    },
    {
      cliente: "Habilidades Destacadas",
      texto: "Profissional competente, o Thomas criou um site institucional que nos ajudou a alcançar novos clientes."
    },
    {
      cliente: "Expert em Desenvolvimento",
      texto: "Sem dúvida, Thomas é o desenvolvedor que você precisa para levar sua presença online ao próximo nível."
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section className="relative w-full bg-black py-16 px-4 sm:px-6 overflow-hidden flex items-center justify-center">
      <div className="max-w-7xl mx-auto relative z-10 w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Coluna de Texto (Título e Descrição) */}
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Depoimentos
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Descubra o que nossos clientes dizem sobre nossas soluções e como estamos transformando suas ideias em realidade.
          </motion.p>

          {/* Saiba Mais button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center mt-6"
          >
            <a
              href="#contato"
              className="group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Deixe o seu Depoimento
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Coluna de Depoimentos (Slider de Testemunhos) */}
        <div className="relative w-full max-w-3xl mx-auto">
          {/* Botão Anterior */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <ChevronLeft className="text-white" />
          </button>

          {/* Botão Próximo */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all"
          >
            <ChevronRight className="text-white" />
          </button>

          {/* Depoimento Atual */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative backdrop-blur-lg rounded-2xl p-6 md:p-8 text-center"
          >
            <Quote className="absolute top-4 left-4 text-[#dc0000] opacity-20 w-12 h-12" />
            <div className="relative z-10">
              <p className="text-gray-300 text-xl md:text-2xl italic mb-4 leading-relaxed">
                "{depoimentos[currentIndex].texto}"
              </p>
              <h3 className="text-white font-bold text-xl md:text-2xl">
                {depoimentos[currentIndex].cliente}
              </h3>
            </div>
          </motion.div>

          {/* Indicadores */}
          <div className="flex justify-center mt-6 space-x-2">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  currentIndex === index
                    ? 'bg-[#dc0000] w-6'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
