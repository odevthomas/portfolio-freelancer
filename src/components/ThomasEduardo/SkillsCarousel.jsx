import React, { useState } from "react";
import { motion } from "framer-motion";

// Componente de Habilidade
const SkillCard = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
      <motion.div
        className="w-24 h-24 mb-3 rounded-full overflow-hidden shadow-lg transform transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <img alt={title} className="w-full h-full object-cover" src={imgSrc} />
      </motion.div>
      <h3 className="text-lg text-white font-semibold text-center mt-3">{title}</h3>
    </div>
  );
};

// Componente de Carrossel de Habilidades (sem Swiper)
const SkillsCarousel = () => {
  const skills = [
    { imgSrc: "/icons/react.svg", title: "React" },
    { imgSrc: "/icons/nodejs.svg", title: "Node.js" },
    { imgSrc: "/icons/css.svg", title: "CSS" },
    { imgSrc: "/icons/vite.svg", title: "Vite" },
    { imgSrc: "/icons/markdown.svg", title: "Markdown" },
    { imgSrc: "/icons/figma.svg", title: "Figma" },
    { imgSrc: "/icons/bitbucket.svg", title: "Canva" },
    { imgSrc: "/icons/vscode.svg", title: "VSCode" },
    { imgSrc: "/icons/vuejs.svg", title: "Vue" },
    { imgSrc: "/icons/nodejs.svg", title: "Node.js" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < skills.length ? prevIndex + 3 : 0
    );
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 3 >= 0 ? prevIndex - 3 : skills.length - 3
    );
  };

  return (
    <section className="py-16 bg-cover bg-center relative text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0000001d] to-[#101010] opacity-50"></div>
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.h3
          className="font-semibold text-3xl sm:text-4xl md:text-5xl text-gray-100 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore minhas habilidades!
        </motion.h3>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Com foco em desenvolvimento web frontend, estou preparado para elevar
          seus projetos a um novo nível. Vamos juntos transformar suas ideias em
          realidade digital de forma criativa e inovadora.
        </motion.p>

        {/* Carrossel Manual */}
        <div className="flex justify-center items-center">
          <button
            onClick={goToPrevSlide}
            className="bg-gray-800 text-white p-2 rounded-full mr-4"
          >
            {"<"}
          </button>

          <div className="flex justify-center items-center space-x-4">
            {skills
              .slice(currentIndex, currentIndex + 3)
              .map((skill, index) => (
                <SkillCard key={index} imgSrc={skill.imgSrc} title={skill.title} />
              ))}
          </div>

          <button
            onClick={goToNextSlide}
            className="bg-gray-800 text-white p-2 rounded-full ml-4"
          >
            {">"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
