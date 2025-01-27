import React from "react";
import { motion } from "framer-motion";
import { FaDesktop, FaPaintBrush, FaLaptopCode, FaMobileAlt, FaRocket, FaTools, FaShieldAlt, FaSearch } from 'react-icons/fa';

const SkillsCarousel = () => {
  const skills = [
    {
      icon: <FaRocket size={40} />,
      title: "Performance Web",
      description: "Otimização de velocidade e desempenho para uma experiência excepcional.",
      gradient: "from-purple-600 to-blue-500"
    },
    {
      icon: <FaDesktop size={40} />,
      title: "Design Responsivo",
      description: "Interfaces adaptativas que funcionam perfeitamente em qualquer dispositivo.",
      gradient: "from-blue-600 to-cyan-500"
    },
    {
      icon: <FaPaintBrush size={40} />,
      title: "UI/UX Design",
      description: "Designs modernos e intuitivos que encantam seus usuários.",
      gradient: "from-cyan-500 to-teal-500"
    },
    {
      icon: <FaLaptopCode size={40} />,
      title: "Código Limpo",
      description: "Desenvolvimento com as melhores práticas para fácil manutenção.",
      gradient: "from-teal-500 to-green-500"
    },
    {
      icon: <FaMobileAlt size={40} />,
      title: "Mobile First",
      description: "Priorização da experiência mobile para alcançar mais usuários.",
      gradient: "from-green-500 to-yellow-500"
    },
    {
      icon: <FaTools size={40} />,
      title: "Manutenção",
      description: "Suporte contínuo e atualizações para seu projeto.",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <FaShieldAlt size={40} />,
      title: "Segurança",
      description: "Proteção e conformidade com as melhores práticas de segurança.",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: <FaSearch size={40} />,
      title: "SEO Otimizado",
      description: "Estratégias para melhor visibilidade nos mecanismos de busca.",
      gradient: "from-red-500 to-purple-500"
    }
  ];

  return (
    <section className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-b from-black via-[#0a0a0a] to-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#fb1603]/20 via-transparent to-transparent opacity-75"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span 
            className="inline-block text-[#fb1603] text-sm sm:text-base lg:text-lg font-bold tracking-wider mb-4 sm:mb-6 px-4 sm:px-6 py-2 border border-[#fb1603] rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            HABILIDADES & EXPERTISE
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 lg:mb-8">
            Soluções
            <span className="bg-gradient-to-r from-[#fb1603] to-[#dc0000] bg-clip-text text-transparent"> Digitais</span> Completas
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Combinando tecnologia moderna e criatividade para transformar sua presença digital
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-2xl border border-gray-800 hover:border-[#fb1603] transition-all duration-500"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <motion.div 
                  className="flex items-center justify-center text-[#fb1603] mb-6"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                >
                  {skill.icon}
                </motion.div>
                
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 group-hover:text-[#fb1603] transition-colors duration-300">
                  {skill.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#fb1603] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 sm:mt-16 lg:mt-20 text-center"
        >
          <motion.a
            href="https://wa.me/5519999042072?text=Oi,%20Thomas!%20Vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20mais%20sobre%20seus%20serviços."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white bg-[#fb1603] rounded-full hover:bg-[#dc0000] transition-all duration-300"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(251, 22, 3, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Vamos Iniciar um Projeto
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
