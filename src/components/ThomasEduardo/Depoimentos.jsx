import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const depoimentos = [
    {
      cliente: "Excelente Profissional",
      texto: "Excelente no que faz, o Thomas superou nossas expectativas com um site incrível para nosso salão de beleza.",
      avaliacao: 5,
      imagem: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      cliente: "Recomendação Certa",
      texto: "Recomendo o Thomas para qualquer projeto web, ele é um verdadeiro especialista em desenvolvimento.",
      avaliacao: 5,
      imagem: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      cliente: "Habilidades Destacadas",
      texto: "Profissional competente, o Thomas criou um site institucional que nos ajudou a alcançar novos clientes.",
      avaliacao: 5,
      imagem: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
    {
      cliente: "Expert em Desenvolvimento",
      texto: "Sem dúvida, Thomas é o desenvolvedor que você precisa para levar sua presença online ao próximo nível.",
      avaliacao: 5,
      imagem: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, depoimentos.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  const handleDotClick = (index) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  // Variantes de animação
  const cardVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.8,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    }),
  };

  const [direction, setDirection] = useState(1);

  return (
    <section className="relative w-full bg-gradient-to-br from-black to-black py-24 px-4 sm:px-6 overflow-hidden">
      {/* Efeito de fundo */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-6">
            O que dizem sobre meu trabalho
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-indigo-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Coluna de Texto (Título e Descrição) */}
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-white/20 transition-all shadow-xl">
              <Quote className="text-red-500 w-12 h-12 mb-4" />
              <p className="text-gray-300 text-lg mb-6">
                Confira o que dizem as pessoas que já atendi e como transformei suas ideias em soluções reais que impactaram seus negócios positivamente.
              </p>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
                <span className="ml-2 text-white/80 text-sm">Avaliação média</span>
              </div>
            </div>
            
            <div className="hidden lg:flex space-x-3 mt-6">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 transition-all group"
              >
                <ChevronLeft className="text-white group-hover:text-red-400 transition-colors" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 transition-all group"
              >
                <ChevronRight className="text-white group-hover:text-red-400 transition-colors" />
              </button>
            </div>
          </motion.div>

          {/* Coluna de Depoimentos */}
          <div className="lg:col-span-3 relative">
            <div className="relative h-[400px] overflow-hidden rounded-2xl">
              <AnimatePresence custom={direction} initial={false}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute inset-0 p-1"
                >
                  <div className="h-full w-full bg-gradient-to-br from-black/90 to-black/90 backdrop-blur-md rounded-xl p-8 flex flex-col justify-between border border-white/10 overflow-hidden">
                    {/* Círculos decorativos */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-red-500/20 filter blur-2xl"></div>
                    <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-blue-500/20 filter blur-2xl"></div>
                    
                    <div className="relative z-10">
                      <div className="bg-gradient-to-r from-red-500/20 to-red-500/10 p-4 rounded-lg inline-block mb-6">
                        <Quote className="text-red-400 w-6 h-6" />
                      </div>
                      <p className="text-gray-100 text-xl md:text-2xl italic leading-relaxed mb-8">
                        "{depoimentos[currentIndex].texto}"
                      </p>
                    </div>
                    
                    <div className="flex items-center space-x-4 relative z-10">
                       
                      {/* removi images 
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-red-500/50">
                        <img
                          src={depoimentos[currentIndex].imagem}
                          alt="Cliente"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      */}

                      <div>
                        <h3 className="text-white font-bold text-lg">
                          {depoimentos[currentIndex].cliente}
                        </h3>
                        <div className="flex mt-1">
                          {[...Array(depoimentos[currentIndex].avaliacao)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-red-500 text-red-500" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controles para mobile */}
            <div className="flex lg:hidden justify-center space-x-3 mt-6">
              <button
                onClick={handlePrevious}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 transition-all"
              >
                <ChevronLeft className="text-white" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white/5 hover:bg-white/15 backdrop-blur-sm border border-white/10 transition-all"
              >
                <ChevronRight className="text-white" />
              </button>
            </div>

            {/* Indicadores */}
            <div className="flex justify-center mt-8 space-x-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    handleDotClick(index);
                  }}
                  className={`transition-all ${
                    currentIndex === index
                      ? 'w-10 h-3 bg-gradient-to-r from-red-500 to-red-400 rounded-full'
                      : 'w-3 h-3 bg-white/20 hover:bg-white/40 rounded-full'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;