import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiFirebase, SiJavascript, 
  SiExpress, SiTypescript, SiVite, SiTailwindcss, SiHtml5, SiCss3 } from "react-icons/si";
import { TbBrandTelegram, TbNumber6Small } from "react-icons/tb";

const AUTOPLAY_INTERVAL = 5000;
const AUTOPLAY_RESET_DELAY = 10000;

// Constantes e dados movidos para fora do componente
const TECH_ICONS = {
  "React": <SiReact className="text-blue-400" />,
  "Node.js": <SiNodedotjs className="text-green-500" />,
  "MongoDB": <SiMongodb className="text-green-400" />,
  "MySQL": <SiMysql className="text-blue-500" />,
  "Firebase": <SiFirebase className="text-yellow-500" />,
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "Express": <SiExpress className="text-gray-200" />,
  "Telegram API": <TbBrandTelegram className="text-blue-400" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Vite": <SiVite className="text-purple-500" />,
  "TailwindCSS": <SiTailwindcss className="text-cyan-400" />,
  "HTML": <SiHtml5 className="text-orange-500" />,
  "CSS": <SiCss3 className="text-blue-400" />
};

const FEATURED_PROJECTS = [
  {
    id: 1,
    image: "/Projetos/projeto(1).png",
    title: "Arte na Pele Studios",
    description: "Landing page profissional para o estúdio de tatuagem Arte na Pele Studios, desenvolvida com React, TypeScript e Vite para oferecer uma experiência rápida e moderna.",
    category: "Landing Page",
    tags: ["React", "TypeScript", "Vite", "TailwindCSS", "UI/UX"],
    liveUrl: "https://artenapele.vercel.app/",
    githubUrl: null
  },
  {
    id: 2,
    image: "/Projetos/projeto(2).png",
    title: "Casa L'Ellit",
    description: "Website institucional para um salão de beleza em Campinas, SP. Permite agendamentos online e apresenta os serviços do salão.",
    category: "Website Institucional",
    tags: ["React", "Node.js", "MongoDB", "Express", "Agendamentos"],
    liveUrl: "https://exemplo.com/casalellit",
    githubUrl: null
  },
  {
    id: 3,
    image: "/Projetos/projeto(3).png",
    title: "Gil Barbosa Beauty",
    description: "E-commerce para o salão de beleza Gil Barbosa Beauty, focado na venda de produtos e serviços online.",
    category: "E-commerce",
    tags: ["React", "Node.js", "MongoDB", "Express", "E-commerce", "Stripe"],
    liveUrl: "https://exemplo.com/gilbarbosa",
    githubUrl: null
  },
  {
    id: 4,
    image: "/Projetos/projeto(5).png",
    title: "Projeto de Links de Perfil Personalizado",
    description: "Componente de perfil personalizável com nome, título, bio, links sociais e habilidades técnicas. Responsivo e estilizado com Tailwind CSS.",
    category: "Componente Web",
    tags: ["React", "TailwindCSS", "JavaScript", "Perfil Personalizado"],
    liveUrl: "https://bio-links-blue.vercel.app/",
    githubUrl: null
  },
  {
    id: 5,
    image: "/Projetos/projeto(6).png",
    title: "Barbearia Lins",
    description: "Website para uma barbearia premium, com informações sobre serviços, agendamentos online e design moderno.",
    category: "Website Institucional",
    tags: ["React", "Firebase", "TailwindCSS", "Agendamentos"],
    liveUrl: "https://barbearia-lins-digital.vercel.app/",
    githubUrl: null
  },
  {
    id: 6,
    image: "/Projetos/projeto(6.1).png",
    title: "Painel de Benefícios do Funcionário",
    description: "Dashboard interativo para funcionários acompanharem seus benefícios corporativos, com estatísticas em tempo real.",
    category: "Dashboard",
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Dashboard", "Gráficos"],
    liveUrl: "https://beneficios-funcionarios.vercel.app/",
    githubUrl: null
  },
  {
    id: 7,
    image: "/Projetos/projeto(7).png",
    title: "Direito Trabalhista",
    description: "Website jurídico para advogados, oferecendo informações sobre serviços, agendamentos e presença digital.",
    category: "Website Jurídico",
    tags: ["React", "Node.js", "Express", "MongoDB", "Agendamentos"],
    liveUrl: "https://odevthomas.github.io/LP-Advogada/",
    githubUrl: null
  },
  {
    id: 8,
    image: "/Projetos/projeto(8).png",
    title: "Do Zero ao Primeiro Emprego em Programação",
    description: "Plataforma educacional para iniciantes na programação, oferecendo materiais e suporte para conquistar o primeiro emprego.",
    category: "Plataforma Educacional",
    tags: ["React", "Firebase", "JavaScript", "Node.js", "Educação", "Cursos Online"],
    liveUrl: "https://primeiroempregodev.vercel.app/",
    githubUrl: null
  }
];


// Variantes de animação movidas para fora do componente
const SLIDE_VARIANTS = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 }
    }
  },
  exit: (direction) => ({
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.9,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.5 },
      scale: { duration: 0.5 }
    }
  })
};

const Projetos = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [direction, setDirection] = useState(0);

  // Usar useCallback para funções que serão referenciadas em useEffect
  const goToNextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % FEATURED_PROJECTS.length);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + FEATURED_PROJECTS.length) % FEATURED_PROJECTS.length);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), AUTOPLAY_RESET_DELAY);
  }, []);

  const handleNextSlide = useCallback(() => {
    goToNextSlide();
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), AUTOPLAY_RESET_DELAY);
  }, [goToNextSlide]);

  const handleSlideSelect = useCallback((index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setIsAutoplay(false);
    setTimeout(() => setIsAutoplay(true), AUTOPLAY_RESET_DELAY);
  }, [currentSlide]);

  // Efeito de autoplay com limpeza adequada
  useEffect(() => {
    let intervalId;
    
    if (isAutoplay) {
      intervalId = setInterval(goToNextSlide, AUTOPLAY_INTERVAL);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoplay, goToNextSlide]);

  const currentProject = FEATURED_PROJECTS[currentSlide];

  return (
    <section className="relative py-24 bg-gradient-to-b from-black to-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
      
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2">
            Projetos em Destaque
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Uma seleção dos meus melhores projetos de desenvolvimento web.
          </p>
        </motion.div>
    
        {/* Novo layout com a imagem de destaque e detalhes abaixo */}
        <div className="relative rounded-3xl shadow-2xl  border-white/10 bg-black/50 backdrop-blur-sm overflow-hidden">
          {/* Project Image - Agora com mais destaque */}
          <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentSlide}
                custom={direction}
                variants={SLIDE_VARIANTS}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 w-full h-full"
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover object-center"
                />
                {/* Gradiente mais suave e transparente na parte inferior */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
                
                {/* Título e categoria apenas - posicionados sobre a imagem */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-red-500 to-red-700 text-white text-sm font-semibold rounded-full mb-3">
                    {currentProject.category}
                  </span>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                    {currentProject.title}
                  </h3>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Carousel Navigation Controls */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
              <button
                onClick={handlePrevSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-600 transition-colors border border-white/10 hover:border-white/30 pointer-events-auto group"
                aria-label="Projeto anterior"
              >
                <FiArrowLeft size={24} className="group-hover:scale-110 transition-transform" />
              </button>
              
              <button
                onClick={handleNextSlide}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-black/40 backdrop-blur-md text-white flex items-center justify-center hover:bg-red-600 transition-colors border border-white/10 hover:border-white/30 pointer-events-auto group"
                aria-label="Próximo projeto"
              >
                <FiArrowRight size={24} className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Project Details - Agora abaixo da imagem */}
          <div className="bg-black p-6 sm:p-10">
            <div className="max-w-5xl mx-auto">
              {/* Indicators */}
              <div className="flex justify-center mb-8">
                <div className="flex gap-2">
                  {FEATURED_PROJECTS.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleSlideSelect(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index 
                          ? "bg-red-500 w-10" 
                          : "bg-white/50 hover:bg-white/80"
                      }`}
                      aria-label={`Ir para projeto ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              
              {/* Description */}
              <motion.p
                className="text-gray-300 mb-8 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                key={`desc-${currentSlide}`}
              >
                {currentProject.description}
              </motion.p>
              
              {/*    */}
              {currentProject.highlights && (
                <motion.div 
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45 }}
                  key={`highlights-${currentSlide}`}
                >
                  <h4 className="text-white text-xl font-semibold mb-4">Destaques</h4>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.highlights.map((highlight, idx) => (
                      <span 
                        key={idx} 
                        className="text-sm text-white/80 px-4 py-2 rounded-md border border-white/10 bg-white/5"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Technologies */}
              {currentProject.tags && (
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  key={`tech-${currentSlide}`}
                >
                  <h4 className="text-white text-xl font-semibold mb-4">Tecnologias</h4>
                  <div className="flex flex-wrap gap-3">
                    {currentProject.tags.map((tag, index) => (
                      <span
                        key={index}
                      className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gray-900 text-gray-200 rounded-full border border-black/5"
                      >
                        {TECH_ICONS[tag] || null}
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              )}
          
              {/* Links */}
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                key={`links-${currentSlide}`}
              >
                {currentProject.liveUrl && (
                  <a
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                   className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gray-900 text-gray-200 rounded-full border border-white/5"
                  >
                    <FiExternalLink className="mr-2" size={18} />
                    Ver Site
                  </a>
                )}
          
                {currentProject.githubUrl && (
                  <a
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm px-4 py-2 bg-gray-900 text-gray-200 rounded-full border border-white/5"
                  >
                    <FiGithub className="mr-2" size={18} />
                    Ver Código
                  </a>
                )}
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Status indicator - auto play */}
        <div className="mt-6 flex justify-center">
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <div 
              className={`w-2 h-2 rounded-full ${isAutoplay ? 'bg-green-500' : 'bg-gray-500'}`}
              aria-hidden="true"
            ></div>
            {isAutoplay ? 'Reprodução automática ativada' : 'Reprodução automática desativada'}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projetos;