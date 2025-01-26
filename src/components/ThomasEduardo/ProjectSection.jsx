import React, { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";

// Componente Modal para Zoom da Imagem
const ImageModal = ({ isOpen, image, onClose }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.img
        src={image}
        alt="Projeto em destaque"
        className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", damping: 20 }}
      />
      <button 
        className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  );
};

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const projectImages = [
    "/Projetos/gilbarbosa.png",
    "/Projetos/lellit.png",
    "/Projetos/slg2025.png",
  ];

  const projectDetails = [
    {
      title: "Gil Barbosa Beauty Center",
      description:
        "Landing page focada em conversão, com design otimizado para a experiência do usuário. Criamos uma solução visualmente atrativa que destaca os serviços de beleza, facilitando a navegação e aumentando a taxa de conversão.",
      projectLink: "https://gilbarbosabeauty.com.br",
      tags: ["React", "TailwindCSS", "Framer Motion", "SEO Otimizado"],
      stats: {
        conversão: "+150%",
        visitantes: "+300/mês",
        bounce: "-40%"
      }
    },
    {
      title: "Casa L'Elit",
      description:
        "Site sofisticado e moderno para o salão de beleza, projetado para atrair clientes de noivas e eventos exclusivos. O design oferece uma navegação fluida e uma experiência visual única.",
      projectLink: "https://www.lellit.com.br",
      tags: ["Next.js", "Styled Components", "Firebase", "Analytics"],
      stats: {
        agendamentos: "+200%",
        engajamento: "+180%",
        satisfação: "98%"
      }
    },
    {
      title: "SLG Digital",
      description:
        "Plataforma de gestão de produtividade e tarefas, com funcionalidades avançadas para otimizar a rotina de trabalho. Desenvolvi recursos como categorização de tarefas e notificações para melhorar a eficiência.",
      projectLink: "https://lsgdigital.com.br",
      tags: ["Vue.js", "Node.js", "MongoDB", "WebSockets"],
      stats: {
        produtividade: "+75%",
        tarefas: "+1000/mês",
        usuários: "+500"
      }
    },
  ];

  const handleNavigation = (direction) => {
    if (direction === "next") {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    } else {
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + projectImages.length) % projectImages.length
      );
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <motion.section
      id="projetos"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#121212] via-[#1a1a1a] to-[#1e1e1e] text-white overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div style={{ y }} className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white via-red-500 to-white animate-gradient">
            Criatividade e Inovação
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            Projetos que combinam design, funcionalidade e inovação para proporcionar experiências digitais extraordinárias.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <motion.div 
              className="w-full lg:w-3/5 relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl shadow-2xl">
                <img
                  src={projectImages[currentIndex]}
                  alt={`Projeto ${projectDetails[currentIndex].title}`}
                  className="w-full h-auto object-cover transform transition-transform duration-700 hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Navegação */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={() => handleNavigation("prev")}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white pointer-events-auto hover:bg-white/20 transition-all"
                >
                  <FiChevronLeft size={24} />
                </button>
                <button
                  onClick={() => handleNavigation("next")}
                  className="p-2 rounded-full bg-white/10 backdrop-blur-sm text-white pointer-events-auto hover:bg-white/20 transition-all"
                >
                  <FiChevronRight size={24} />
                </button>
              </div>
            </motion.div>

            <motion.div 
              className="w-full lg:w-2/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl">
                <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent">
                  {projectDetails[currentIndex].title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {projectDetails[currentIndex].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {projectDetails[currentIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm bg-red-500/10 text-red-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(projectDetails[currentIndex].stats).map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-white/5 rounded-lg">
                      <div className="text-xl font-bold text-red-500">{value}</div>
                      <div className="text-sm text-gray-400">{key}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={projectDetails[currentIndex].projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-6 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Ver Projeto
                  <FiExternalLink className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-8">
            {projectImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-red-500 w-8" 
                    : "bg-gray-600 hover:bg-red-400"
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      <ImageModal
        isOpen={isModalOpen}
        image={projectImages[currentIndex]}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
};

export default ProjectSection;