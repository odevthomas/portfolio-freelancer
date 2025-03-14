import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCode, FaRocket, FaLightbulb } from "react-icons/fa";
import Depoimentos from "../components/ThomasEduardo/Depoimentos";
import About from "../components/ThomasEduardo/About";
import FAQ from "../components/ThomasEduardo/FAQ";
import Projetos from "../components/ThomasEduardo/Projetos";
import Footer from "../components/HeaderFooter/Footer";



const Home = () => {
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
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
         <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
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
                Desenvolvedor Web
              </span>
            </motion.div>

            {/* Título Principal */}
            <motion.h1
              className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Thomas Eduardo
            </motion.h1>

            {/* Subtítulo */}
            <motion.p
              className="text-xl text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
       Desenvolvo aplicações web modernas e responsivas com foco na experiência do usuário e desempenho. Apaixonado por código limpo e soluções inovadoras.
            </motion.p>

            {/* Botões de Ação */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                to="/contato"
                className="group flex items-center gap-2 bg-gradient-to-r from-[#dc0000] to-[#dc0000] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
              Entra em contato
                <FaCode className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/odevthomas"
                className="group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
              >
           Veja mais 
                <FaArrowRight className="group-hover:rotate-12 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Cards de Destaque */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {[
  {
    icon: <FaRocket className="text-4xl text-[#dc0000]" />,
    title: "Performance",
    description: "Desenvolvo sites rápidos e eficientes, garantindo uma navegação fluida para seus usuários, sem perder o foco na qualidade."
  },
  {
    icon: <FaLightbulb className="text-4xl text-[#dc0000]" />,
    title: "Inovação",
    description: "Busco sempre soluções criativas e pensadas para atender às necessidades reais do seu projeto, com abordagens únicas e funcionais."
  },
  {
    icon: <FaCode className="text-4xl text-[#dc0000]" />,
    title: "Tecnologia",
    description: "Utilizo uma stack moderna e flexível, capaz de garantir resultados duradouros, sempre alinhada com as melhores práticas do mercado."
  }
]
.map((card, i) => (
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
      <About />
      <Projetos />
      <Depoimentos />
      <FAQ />
      <Footer />
      
    </div>
  );
};

export default Home;
