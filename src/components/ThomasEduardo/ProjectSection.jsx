import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projectImages = [
    "/Criativos/2.jpg",
    "/Criativos/gil2.jpg",
    "/Criativos/gil3.jpg",
    "/Criativos/3.jpg",
    "/Criativos/lellit1.jpg",
  ];

  const projectDetails = [
    {
      title: "Gil Barbosa Beauty Center",
      description:
        "Landing page focada em conversão, com design otimizado para a experiência do usuário. Criamos uma solução visualmente atrativa que destaca os serviços de beleza, facilitando a navegação e aumentando a taxa de conversão.",
      projectLink: "https://gil-barbosa-2024.vercel.app/gilbarbosabeautycenter",
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

  // Função para navegação suave
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
      className="py-16 bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold text-white mb-8">
          Criatividade e Inovação
        </h2>

        <div className="relative flex flex-col lg:flex-row items-center gap-12 mb-8">
          {/* Imagem do projeto */}
          <motion.div
            className="flex-1 w-full lg:w-1/2 transition duration-500 ease-in-out transform hover:scale-105"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={projectImages[currentIndex]}
              alt={`Imagem do projeto ${currentIndex}`}
              className="w-full h-[350px] object-cover rounded-lg shadow-lg hover:brightness-75 transition-all duration-300"
            />
          </motion.div>

          {/* Descrição e link do projeto */}
          <div className="flex-1 w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left">
            <motion.h3
              className="text-3xl font-bold text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {projectDetails[currentIndex].title}
            </motion.h3>

            <motion.p
              className="text-lg text-gray-200 mb-4"
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
                className="inline-block bg-[#f30d0d] hover:bg-[#d20c0c] text-white py-2 px-6 rounded-full text-lg transition-all duration-300 transform hover:scale-110"
              >
                Ver Projeto
              </a>
            </motion.div>
          </div>
        </div>

        {/* Navegação com bolinhas */}
        <div className="flex justify-center gap-4 mt-8">
          {projectImages.map((_, index) => (
            <motion.div
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${
                currentIndex === index ? "bg-[#f30d0d]" : "bg-gray-400"
              } hover:bg-[#f30d0d]`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
