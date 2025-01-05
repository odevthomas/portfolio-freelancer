import React, { useState } from "react";
import { motion } from "framer-motion";

// Componente Modal para Zoom da Imagem
const ImageModal = ({ isOpen, image, onClose }) => {
  return (
    isOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={onClose}>
        <motion.img
          src={image}
          alt="Zoomed project"
          className="max-w-full max-h-full object-contain cursor-pointer"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      </div>
    )
  );
};

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectImages = [
    "/Projetos/gilbarbosa.png",
    "/Projetos/lellit.png",
    "/Projetos/slgdigital.png",
  ];

  const projectDetails = [
    {
      title: "Gil Barbosa Beauty Center",
      description:
        "Landing page focada em conversão, com design otimizado para a experiência do usuário. Criamos uma solução visualmente atrativa que destaca os serviços de beleza, facilitando a navegação e aumentando a taxa de conversão.",
      projectLink: "https://gilbarbosabeauty.com.br",
    },
    {
      title: "Casa L'Elit",
      description:
        "Site sofisticado e moderno para o salão de beleza, projetado para atrair clientes de noivas e eventos exclusivos. O design oferece uma navegação fluida e uma experiência visual única.",
      projectLink: "https://www.lellit.com.br",
    },
    {
      title: "SLG Digital",
      description:
        "Plataforma de gestão de produtividade e tarefas, com funcionalidades avançadas para otimizar a rotina de trabalho. Desenvolvi recursos como categorização de tarefas e notificações para melhorar a eficiência.",
      projectLink: "https://lsgdigital.com.br",
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
      className="py-16 bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-white w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        {/* Título */}
        <h2 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-6">
          Criatividade e Inovação
        </h2>

        {/* Subtítulo */}
        <p className="text-center text-lg sm:text-xl lg:text-2xl text-gray-400 mb-12">
          Projetos que combinam design, funcionalidade e inovação para proporcionar a melhor experiência.
        </p>

        <div className="relative flex flex-col sm:flex-row items-center gap-8 lg:gap-12 mb-8">
          {/* Imagem do projeto */}
          <motion.div
            className="flex-1 w-full transition duration-500 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={projectImages[currentIndex]}
              alt={`Imagem do projeto ${currentIndex}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:brightness-75"
              onClick={() => setIsModalOpen(true)} // Abre o modal ao clicar
            />
          </motion.div>

          {/* Descrição e link do projeto */}
          <div className="flex-1 w-full sm:w-1/3 lg:w-1/3 mb-3 lg:mt-0 text-center lg:text-left">
            <motion.h3
              className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {projectDetails[currentIndex].title}
            </motion.h3>

            <motion.p
              className="text-base sm:text-lg lg:text-xl text-gray-200 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {projectDetails[currentIndex].description}
            </motion.p>

            <motion.div
              className="flex justify-center lg:justify-start mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href={projectDetails[currentIndex].projectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#dc0000] hover:bg-[#d20c0c] text-white py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-110"
              >
                Ver Projeto
              </a>
            </motion.div>
          </div>
        </div>

        {/* Navegação com bolinhas abaixo da imagem */}
        <div className="flex justify-center gap-2 mt-8"> {/* Diminuí o espaço entre as bolinhas */}
          {projectImages.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${
                currentIndex === index ? "bg-[#dc0000]" : "bg-gray-400"
              } hover:bg-[#dc0000]`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
          ))}
        </div>
      </div>

      {/* Modal para imagem em zoom */}
      <ImageModal
        isOpen={isModalOpen}
        image={projectImages[currentIndex]}
        onClose={() => setIsModalOpen(false)}
      />
    </motion.section>
  );
};

export default ProjectSection;