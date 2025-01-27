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
        className="absolute top-4 right-4 text-white hover:text-[#dc0000] transition-colors"
        onClick={onClose}
      >
        <svg xmlns="http://www.w3.org/20a0a0a/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
        tarefas: "+10a0a0a/mês",
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
      className="py-20 min-h-screen bg-gradient-to-b from-black via-[#111] to-black text-white overflow-hidden"
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
          className="text-center mb-20"
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 relative">
              Criatividade e Inovação
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#dc0000]"></div>
            </h2>
          </div>
          <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Projetos que combinam design, funcionalidade e inovação para proporcionar experiências digitais extraordinárias.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            <motion.div 
              className="w-full lg:w-3/5 relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-[0_0_30px_rgba(220,0,0,0.15)] h-full">
                <img
                  src={projectImages[currentIndex]}
                  alt={`Projeto ${projectDetails[currentIndex].title}`}
                  className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <button
                  onClick={() => handleNavigation("prev")}
                  className="p-3 rounded-full bg-black/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-[#dc0000] transition-all duration-300"
                >
                  <FiChevronLeft size={28} />
                </button>
                <button
                  onClick={() => handleNavigation("next")}
                  className="p-3 rounded-full bg-black/50 backdrop-blur-sm text-white pointer-events-auto hover:bg-[#dc0000] transition-all duration-300"
                >
                  <FiChevronRight size={28} />
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
              <div className="bg-white/[0.03] backdrop-blur-sm p-10 rounded-2xl border border-white/10 h-full flex flex-col">
                <h3 className="text-4xl font-bold mb-6 text-white">
                  {projectDetails[currentIndex].title}
                  <div className="h-1 w-20 bg-[#dc0000] mt-4"></div>
                </h3>
                <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                  {projectDetails[currentIndex].description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {projectDetails[currentIndex].tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm bg-white/5 border border-[#dc0000]/20 text-[#dc0000] rounded-full hover:bg-[#dc0000]/10 transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-3 gap-6 mb-10">
                  {Object.entries(projectDetails[currentIndex].stats).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-black/30 rounded-xl border border-white/5 hover:border-[#dc0000]/30 transition-colors duration-300">
                      <div className="text-2xl font-bold text-[#dc0000]">{value}</div>
                      <div className="text-sm text-gray-400 mt-1">{key}</div>
                    </div>
                  ))}
                </div>

                <a
                  href={projectDetails[currentIndex].projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto group flex items-center justify-center gap-3 bg-[#dc0000] hover:bg-[#b00000] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-lg hover:shadow-[#dc0000]/20"
                >
                  Ver Projeto
                  <FiExternalLink className="transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center gap-4 mt-12">
            {projectImages.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index 
                    ? "bg-[#dc0000] w-10" 
                    : "bg-white/20 w-6 hover:bg-[#dc0000]/50"
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