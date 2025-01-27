import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";

const LandingPage = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    });
  }, [controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-96 h-96 bg-[#dc0000] rounded-full filter blur-3xl opacity-20 -top-10 -left-10 animate-pulse"></div>
          <div className="absolute w-96 h-96 bg-[#dc0000] rounded-full filter blur-3xl opacity-20 -bottom-10 -right-10 animate-pulse delay-1000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={controls}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-[#dc0000] to-[#dc0000] text-white">
                Desenvolvedor Full Stack
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Transformando Ideias em
              <span className="block mt-2 bg-gradient-to-r from-[#dc0000] to-[#dc0000] bg-clip-text text-transparent">
                Experiências Digitais
              </span>
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Desenvolvimento web personalizado com foco em performance, design moderno e resultados excepcionais para o seu negócio.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/dashboard"
                className="group flex items-center gap-2 bg-gradient-to-r from-[#dc0000] to-[#dc0000] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Área do Cliente
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/thomas-eduardo"
                className="group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
                Ver Portfólio
                <FaCode className="group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Cards de Destaque */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
              {
                icon: <FaRocket className="text-4xl text-[#dc0000]" />,
                title: "Performance",
                description: "Sites rápidos e otimizados"
              },
              {
                icon: <FaLightbulb className="text-4xl text-[#dc0000]" />,
                title: "Inovação",
                description: "Soluções criativas e únicas"
              },
              {
                icon: <FaCode className="text-4xl text-[#dc0000]" />,
                title: "Tecnologia",
                description: "Stack moderna e robusta"
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                className="p-6 rounded-2xl bg-white/5 backdrop-blur-lg border border-white/10 hover:border-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center gap-4">
                  {card.icon}
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-gray-400">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default LandingPage;
