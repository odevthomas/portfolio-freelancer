import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiFirebase, SiJavascript, SiExpress } from "react-icons/si";
import { TbBrandTelegram } from "react-icons/tb";

const Projetos = () => {
  const techIcons = {
    "React": <SiReact className="text-blue-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "MongoDB": <SiMongodb className="text-green-400" />,
    "MySQL": <SiMysql className="text-blue-500" />,
    "Firebase": <SiFirebase className="text-yellow-500" />,
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "Express": <SiExpress className="text-gray-200" />,
    "Telegram API": <TbBrandTelegram className="text-blue-400" />
  };

 const projetos = {
  featured: [
    {
      id: 1,
      title: "Arte na Pele",
      description: "Landing page profissional para o estúdio de tatuagem Arte na Pele Studios. O projeto foi desenvolvido utilizando React, TypeScript e Vite para proporcionar uma experiência rápida e moderna para os usuários.",
      image: "/Projetos/Home (1).png",
      liveUrl: "https://artenapele.vercel.app/",
      githubUrl: "https://github.com/odevthomas/Website-ArtenaPele",
      tags: ["React", "TypeScript", "Vite", "Web Design"],
      category: "Projeto Pessoal"
    },
    {
      id: 2,
      title: "Casa L'Ellit",
      description: "O site da Casa L'Ellit é um aplicativo web moderno desenvolvido para um salão de beleza localizado em Campinas, São Paulo. O projeto foi criado utilizando React e Firebase, com funcionalidades de agendamento e galeria dinâmica.",
      image: "/Projetos/Home (2).png",
      liveUrl: "https://www.lellit.com.br/casaLellit",
      tags: ["React", "Firebase", "Web Design", "Agendamento"],
      category: "Freelancer"
    },
    {
      id: 3,
      title: "Gil Barbosa Beauty Center",
      description: "Gil Barbosa Beauty Center oferece uma experiência personalizada para quem deseja realçar a beleza dos olhos. Com cílios feitos sob medida, buscamos criar um olhar irresistível e marcante, combinando volume e naturalidade.",
      image: "/Projetos/Home (3).png",
      liveUrl: "https://www.gilbarbosabeauty.com.br/",
      tags: ["JavaScript", "HTML", "CSS", "Web App"],
      category: "Freelancer"
    },
    {
      id: 4,
      title: "LSG Marketing Digital",
      description: "Plataforma web moderna para a LSG Digital, oferecendo soluções completas de marketing digital com interface responsiva e interativa.",
      image: "/Projetos/Home (4).png",
      liveUrl: "https://lsgdigital.com.br",
      githubUrl: "https://github.com/odevthomas/lsg-marketing-digital",
      tags: ["React", "Node.js", "Marketing Digital", "Web Design"],
      category: "Freelancer"
    },
  ]
};

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const featuredProjects = projetos.featured.slice(0, 3);

  useEffect(() => {
    if (!isAutoplay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoplay, featuredProjects.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), 10000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-20"
      >
        <div className="inline-block relative">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2">
            Projetos em Destaque
          </h2>
        </div>
        <p className="text-gray-400 max-w-2xl mx-auto mt-6">
          Uma seleção dos meus melhores trabalhos, demonstrando habilidades em desenvolvimento web e soluções digitais.
        </p>
      </motion.div>
  
      {/* Featured Projects Carousel */}
      <div className="relative overflow-hidden">
  <div className="relative h-[350px] sm:h-[350px] md:h-[700px] rounded-2xl overflow-hidden">
    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="absolute inset-0"
      >
        <img
          src={featuredProjects[currentSlide].image}
          alt={featuredProjects[currentSlide].title}
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
    </AnimatePresence>
  </div>

        {/* Project Details */}
        <div className="p-4 sm:p-6 md:p-8">
          <motion.span
            className="inline-block px-4 py-1 bg-[#dc0000] text-white text-sm font-semibold rounded-full mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {featuredProjects[currentSlide].category}
          </motion.span>
  
          <motion.h3
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {featuredProjects[currentSlide].title}
          </motion.h3>
  
          <motion.p
            className="text-gray-300 mb-2 text-sm sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {featuredProjects[currentSlide].description.length > 350
              ? `${featuredProjects[currentSlide].description.substring(0, 350)}...`
              : featuredProjects[currentSlide].description}
          </motion.p>
  
          <motion.div
            className="flex flex-wrap gap-3 mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {featuredProjects[currentSlide].tags.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 text-xs sm:text-sm px-4 py-1.5 bg-gray-800/80 text-gray-200 rounded-full backdrop-blur-sm"
              >
                {techIcons[tag] || null}
                {tag}
              </span>
            ))}
          </motion.div>
  
          {/* Links */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {featuredProjects[currentSlide].liveUrl && (
              <a
                href={featuredProjects[currentSlide].liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-[#dc0000] text-white rounded-full font-medium hover:bg-[#b00000] transition-colors"
              >
                <FiExternalLink className="mr-2" />
                Ver Site
              </a>
            )}
  
            {featuredProjects[currentSlide].githubUrl && (
              <a
                href={featuredProjects[currentSlide].githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
              >
                <FiGithub className="mr-2" />
                Ver Código
              </a>
            )}
          </motion.div>
        </div>
  
        {/* Carousel Controls */}
        <div className="absolute bottom-8 right-8 z-30 flex items-center gap-3">
          <button
            onClick={prevSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#dc0000] transition-colors border border-white/20"
          >
            <FiArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/50 backdrop-blur-sm text-white flex items-center justify-center hover:bg-[#dc0000] transition-colors border border-white/20"
          >
            <FiArrowRight size={20} />
          </button>
        </div>
  
        <div className="absolute bottom-13 left-8 z-30 flex items-center gap-2">
          {featuredProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setIsAutoplay(false);
                setTimeout(() => setIsAutoplay(true), 10000);
              }}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${currentSlide === index ? "bg-[#dc0000] w-10" : "bg-white/50 hover:bg-white/80"}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projetos;
