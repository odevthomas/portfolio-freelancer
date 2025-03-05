import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaAward, FaLaptopCode, FaUniversity, FaHandsHelping, FaChevronRight } from 'react-icons/fa';

const ProjectSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const achievements = [
    {
      id: 1,
      icon: <FaAward size={32} />,
      title: "Certificado",
      desc: "Certificado de conclusão de curso de desenvolvimento web | Ada Tech",
      date: "Dezembro 2023",
      color: "#dc0000",
      details: [
        "Desenvolvimento Front-end com React.js",
        "Construção de interfaces responsivas",
        "Integração com APIs RESTful"
      ]
    },
    {
      id: 2,
      icon: <FaLaptopCode size={32} />,
      title: "Distintivo",
      desc: "Experiência em Computação em Nuvem com a AWS | Base Social.",
      date: "Agosto 2023",
      color: "#dc0000",
      details: [
        "Implementação de serviços AWS",
        "Configuração de infraestrutura na nuvem",
        "Otimização de recursos e custos"
      ]
    },
    {
      id: 3,
      icon: <FaUniversity size={32} />,
      title: "BootCamp",
      desc: "Java e Angular pelo BootCamp Santander | Dio.",
      date: "Outubro 2023",
      color: "#dc0000",
      details: [
        "Desenvolvimento Full-stack",
        "Criação de aplicações com Angular",
        "Java para desenvolvimento back-end"
      ]
    },
    {
      id: 4,
      icon: <FaHandsHelping size={32} />,
      title: "AWS Summit",
      desc: "AWS Summit 2023 | Base Social.",
      date: "Julho 2023",
      color: "#dc0000",
      details: [
        "Participação em workshops práticos",
        "Networking com profissionais da área",
        "Contato com novas tecnologias cloud"
      ]
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section id="Projetos" className="relative w-full py-20 md:py-32 bg-[#000000] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-[#dc0000] rounded-full blur-[150px] opacity-10 -top-20 -left-20" />
        <div className="absolute w-96 h-96 bg-[#dc0000] rounded-full blur-[150px] opacity-10 bottom-0 right-0" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Principais Conquistas            
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Reconhecimentos e certificações obtidos ao longo da minha trajetória profissional
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {achievements.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <motion.div 
                className="relative rounded-xl overflow-hidden bg-black/50 border border-gray-800/30 shadow-lg transition-all duration-300 h-full"
                whileHover={{ y: -5 }}
              >
                {/* Top Color Line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-1"
                  style={{ backgroundColor: item.color }}
                />
                
                <div className="p-6">
                  {/* Icon container */}
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${item.color}20` }}
                  >
                    <div className="text-[#dc0000]">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Date badge */}
                  <div 
                    className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4" 
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.date}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6">{item.desc}</p>
                  
                  {/* Details */}
                  {hoveredCard === item.id && (
                    <div className="space-y-2 pt-4 border-t border-gray-700/30">
                      {item.details.map((detail, i) => (
                        <div key={i} className="flex items-center text-gray-300">
                          <FaChevronRight size={10} className="mr-2 text-[#dc0000]" />
                          <span className="text-sm">{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        
       
      </div>
    </section>
  );
};

export default ProjectSection;