import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { motion } from "framer-motion";

// Componente de Habilidade
const SkillCard = ({ imgSrc, title }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
      <motion.div
        className="w-24 h-24 mb-4 rounded-full overflow-hidden shadow-lg transform transition-all duration-300"
        whileHover={{ scale: 1.1 }}
      >
        <img
          alt={title}
          className="w-full h-full object-cover"
          src={imgSrc}
        />
      </motion.div>
      <h3 className="text-lg text-white font-semibold text-center mt-3">{title}</h3>
    </div>
  );
};

// Componente de Carrossel de Habilidades
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

  return (
    <section className="py-16 bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-white">
      <div className="mx-auto max-w-[1340px] px-4 sm:px-6 lg:px-8 text-center relative">
        <motion.h3
          className="font-semibold text-3xl sm:text-4xl md:text-5xl text-gray-100 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Explore minhas habilidades!
        </motion.h3>
        <motion.p
          className="text-base sm:text-lg md:text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Com foco em desenvolvimento web frontend, estou preparado para elevar seus projetos a um novo nível. Vamos juntos transformar suas ideias em realidade digital de forma criativa e inovadora.
        </motion.p>

        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          pagination={{ clickable: true }} // Permite clicar nas bolinhas de navegação
          autoplay={{ delay: 3000, disableOnInteraction: false }} // Passagem automática a cada 3 segundos
          loop={true} // Para reiniciar o carrossel
          breakpoints={{
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <SkillCard imgSrc={skill.imgSrc} title={skill.title} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SkillsCarousel;
