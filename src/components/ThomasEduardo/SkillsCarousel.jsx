import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaPaintBrush, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const SkillsCarousel = () => {
  const skills = [
    {
      icon: <FaDesktop />,
      title: "Design Responsivo",
      description: "Desenvolvimento de interfaces que se adaptam perfeitamente a qualquer dispositivo, garantindo a melhor experiência para seus usuários.",
      color: "#fb1603",
      gradient: "from-red-600 to-red-400"
    },
    {
      icon: <FaPaintBrush />,
      title: "UI/UX Design",
      description: "Criação de interfaces modernas e intuitivas que cativam seus usuários e fortalecem sua marca no mercado digital.",
      color: "#fb1603",
      gradient: "from-orange-600 to-red-500"
    },
    {
      icon: <FaLaptopCode />,
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas de programação, garantindo performance e facilidade de manutenção.",
      color: "#fb1603",
      gradient: "from-red-500 to-pink-500"
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile First",
      description: "Priorização da experiência mobile, atendendo às necessidades do público que mais cresce na internet.",
      color: "#fb1603",
      gradient: "from-pink-600 to-red-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-b from-black via-[#1a1a1a] to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#fb1603]/10 via-transparent to-transparent opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Expertise em
            <motion.span 
              className="text-[#fb1603] inline-block"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            > Desenvolvimento Web</motion.span>
          </motion.h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Transformando ideias em experiências digitais memoráveis através de tecnologias modernas e design inovador
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group relative bg-gradient-to-br from-[#2b2b2b] to-[#1a1a1a] p-8 rounded-2xl shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
              <motion.div 
                className="absolute inset-0 bg-black/50 rounded-2xl"
                initial={false}
                whileHover={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative z-10">
                <motion.div 
                  className="text-4xl text-[#fb1603] mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {skill.icon}
                </motion.div>
                <motion.h3 
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {skill.title}
                </motion.h3>
                <p className="text-gray-400 group-hover:text-white transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <motion.a
            href="https://wa.me/5519999042072?text=Oi,%20Thomas!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white bg-[#fb1603] rounded-full hover:bg-[#e64012] transform transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 25px rgba(251, 22, 3, 0.5)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos Criar Algo Incrível
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
