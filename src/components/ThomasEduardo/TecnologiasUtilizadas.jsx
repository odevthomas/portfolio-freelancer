import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFramer, SiExpress, SiDjango, SiMongodb, SiMysql } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdOutlineScatterPlot } from "react-icons/md";
import { AiOutlineThunderbolt } from "react-icons/ai";

const TecnologiasUtilizadas = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const tecnologias = [
    {
      id: 1,
      categoria: "Frontend",
      icon: <FaReact className="text-[#dc0000] text-4xl" />,
      description: "Desenvolvimento de interfaces modernas e responsivas com as tecnologias mais recentes.",
      items: [
        { nome: "React.js", icon: <FaReact />, nivel: 90 },
        { nome: "Framer Motion", icon: <SiFramer />, nivel: 85 },
        { nome: "Tailwind CSS", icon: <SiTailwindcss />, nivel: 95 },
        { nome: "Next.js", icon: <SiNextdotjs />, nivel: 80 },
      ],
    },
    {
      id: 2,
      categoria: "Backend",
      icon: <FaNodeJs className="text-[#dc0000] text-4xl" />,
      description: "Criação de APIs e serviços robustos para aplicações escaláveis.",
      items: [
        { nome: "Node.js", icon: <FaNodeJs />, nivel: 85 },
        { nome: "Express", icon: <SiExpress />, nivel: 80 },
        { nome: "Django", icon: <SiDjango />, nivel: 75 },
      ],
    },
    {
      id: 3,
      categoria: "Banco de Dados",
      icon: <FaDatabase className="text-[#dc0000] text-4xl" />,
      description: "Modelagem e gerenciamento eficiente de dados para suas aplicações.",
      items: [
        { nome: "SQL", icon: <SiMysql />, nivel: 85 },
        { nome: "MongoDB", icon: <SiMongodb />, nivel: 80 },
      ],
    },
    {
      id: 4,
      categoria: "Metodologias Ágeis",
      icon: <AiOutlineThunderbolt className="text-[#dc0000] text-4xl" />,
      description: "Processos de desenvolvimento organizados com métodos comprovados.",
      items: [
        { nome: "Scrum", icon: <MdOutlineScatterPlot />, nivel: 90 },
        { nome: "Kanban", icon: <GiArtificialIntelligence />, nivel: 85 },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1.0] } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -10,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="tecnologias" className="relative w-full min-h-screen bg-[#000000] flex items-center justify-center px-6 py-24 overflow-hidden">

<div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
      </div>   
      
      <div className="container mx-auto max-w-7xl z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1  mx-auto mb-6"
          />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Tecnologias Utilizadas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-indigo-500 mx-auto"></div>

        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tecnologias.map((categoria) => (
            <motion.div
              key={categoria.id}
              variants={itemVariants}
              className="h-full"
              onMouseEnter={() => setHoveredCard(categoria.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="h-full bg-gradient-to-b from-gray-900/80 to-black/90 border border-gray-800/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 shadow-xl group"
              >
                <div className="relative p-6 flex flex-col h-full">
                  {/* Card Header */}
                  <div className="relative flex items-center mb-6 pb-4 border-b border-gray-800/30">
                    <div className="w-14 h-14 rounded-lg bg-black/50 border border-gray-800/50 flex items-center justify-center mr-4 group-hover:border-[#dc0000]/30 transition-colors duration-300">
                      {categoria.icon}
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                      {categoria.categoria}
                    </h3>
                  </div>
                  
                  {/* Card Description */}
                  <p className="text-white/60 mb-6 text-sm">
                    {categoria.description}
                  </p>
                  
                  {/* Tech Items */}
                  <div className="space-y-4 mt-auto">
                    {categoria.items.map((item) => (
                      <div key={item.nome} className="relative">
                        <div className="flex items-center mb-1">
                          <div className="w-5 h-5 text-[#dc0000] mr-2">
                            {item.icon}
                          </div>
                          <span className="text-white text-sm font-medium">{item.nome}</span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full h-1.5 bg-gray-800/50 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: hoveredCard === categoria.id ? `${item.nivel}%` : "0%" }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="h-full bg-gradient-to-r from-[#dc0000] to-[#ff5555] rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Card Footer */}
                  <motion.div 
                    className="mt-6 pt-4 border-t border-gray-800/30 flex justify-end"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredCard === categoria.id ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <button className="text-sm text-[#dc0000] flex items-center group/btn">
                      <span className="mr-2">Ver mais</span>
                      <svg 
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                  </motion.div>
                </div>              
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TecnologiasUtilizadas;