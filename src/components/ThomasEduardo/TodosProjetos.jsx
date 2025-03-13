import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiMonitor, FiCode, FiArrowRight, FiArrowLeft } from "react-icons/fi";
import { SiReact, SiNodedotjs, SiMongodb, SiMysql, SiFirebase, SiJavascript, SiExpress } from "react-icons/si";
import { TbBrandTelegram } from "react-icons/tb";

const Projetos = () => {
  // Mapeamento de ícones para tecnologias
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

  // Dados dos projetos organizados por categorias
  const projetos = {
    featured: [
      {
        id: 1,
        title: "LSG Marketing Digital",
        description:
          "Plataforma web moderna para marketing digital com dashboard interativo e análise de métricas em tempo real. Desenvolvido com React e Node.js, este projeto visa fornecer soluções de análise de dados para empresas.",
        image: "/Projetos/TodosProjetos(1).png",
        liveUrl: "https://lsgdigital.com.br",
        githubUrl: "https://github.com/yourusername/lsg-marketing-digital",
        tags: ["React", "Node.js",],
        category: "Freelancer",
        
      },
      {
        id: 2,
        title: "Petshop Cambuci",
        description:
          "Bem-vindo ao Petshop Cambuci , um projeto fictício desenvolvido com React, TypeScript e Vite . Nosso objetivo é oferecer uma experiência moderna e eficiente para pet shops, permitindo agendamentos, gerenciamento de clientes e serviços personalizados.",
          image: "/Projetos/TodosProjetos(2).png",
          liveUrl: "https://petcambuci.vercel.app/",
        githubUrl: "https://github.com/odevthomas/PetCambuci/",
        tags: ["React", "Calculo de Frete", "Agendamento", "Mapa"],
        category: "Freelancer",
        highlights: [
          "Sistema de Agendamento",
          "Galeria Dinâmica",
          "Integração WhatsApp",
        ],
      },
      {
        id: 3,
        title: "Bella Cucina",
        description:
          "Um sistema de gestão de restaurantes versátil e responsivo, adaptável a diferentes tipos de restaurantes, que melhora tanto a experiência do cliente quanto a eficiência operacional.",
          image: "/Projetos/TodosProjetos(3).png",
        liveUrl: "https://bellacucina.vercel.app/",
        githubUrl: "https://github.com/odevthomas/BellaCucina",
        tags: ["React", "MongoDB", "API REST", "Authentication"],
        category: "Full Stack",
        highlights: [
          "Cadastro de Livros",
          "Sistema de Busca",
          "Gestão de Usuários",
        ],
      },
      {
        id: 4,
        title: "Gerenciamento de Tarefas",
        description:
          "Um aplicativo moderno de gerenciamento de tarefas desenvolvido com React, TypeScript e Tailwind CSS. Esta aplicação permite aos usuários organizar suas atividades diárias de forma eficiente, com uma interface intuitiva e responsiva.",
        image: "/Projetos/TodosProjetos(4).png",
        liveUrl: null,
        githubUrl: "https://github.com/odevthomas/NodeCrude-Api-Mysql-React",
        tags: ["Node.js", "Express", "MySQL", "API REST"],
        category: "Backend",
        highlights: [
          "Operações CRUD",
          "Autenticação de Usuários",
          "Estrutura Modular",
        ],
      },
      {
        id: 5,
        title: "Gerador de Nomes de Domínio",
        description:
          "Ferramenta para geração e verificação de disponibilidade de domínios. Utiliza integração com APIs para verificar a disponibilidade e fornecer sugestões inteligentes de nomes de domínios.",
        image: "/Projetos/domain-generator.png",
        githubUrl: "https://github.com/odevthomas/gerador-dominios",
        tags: ["JavaScript", "API Integration", "UI/UX"],
        category: "Ferramentas",
        highlights: ["Verificação em Tempo Real", "Sugestões Inteligentes"],
      },
    ],
    personal: [
      {
        id: 6,
        title: "Gerenciador de Fatura",
        description:
          "Aplicativo web interativo para pesquisa de vagas de emprego, desenvolvido com Vite e React, comunicando-se com APIs externas para informações sobre vagas.",
        image: "/Projetos/Gerador-de-Fatura.png",
        githubUrl: "https://github.com/odevthomas/trabalho-frontend",
        tags: ["React", "API", "UI/UX"],
        category: "Pessoal",
        highlights: ["Interface Interativa", "Busca Dinâmica"],
      },
      {
        id: 7,
        title: "Assistente de Telegrama Bot",
        description:
          "Bot para Telegram que automatiza processos de comunicação, como agendamentos e interações com usuários. Desenvolvido em Node.js com integração à API do Telegram.",
        image: "/Projetos/telegram-bot.png",
        githubUrl: "https://github.com/odevthomas/Assistente-de-Telegrama-Bot",
        tags: ["Node.js", "Telegram API"],
        category: "Bot",
        highlights: ["Interações Automatizadas", "Notificações em Tempo Real"],
      },
      {
        id: 8,
        title: "Dieta.IA",
        description:
          "Eu criei o Dieta.IA como parte do evento Aplicativo gerador de dietas + IA completo, oferecido por Sujeito Programador. Este aplicativo tem como objetivo ajudar os usuários a criar dietas personalizadas de forma eficiente e intuitiva.",
        image: "/Projetos/TodosProjetos(8).png",
        githubUrl: "https://github.com/odevthomas/Dieta_IA",
        tags: ["Node.js", "Telegram API"],
        category: "Mobile",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);

  const categories = [
    { id: "all", label: "Todos" },
    { id: "Freelancer", label: "Freelancer" },
    { id: "personal", label: "Pessoais" },
    { id: "tools", label: "Ferramentas" },
  ];

  // Determinar quais projetos mostrar com base na categoria selecionada
  const filteredProjects = selectedCategory === "all" 
    ? [...projetos.featured, ...projetos.personal]
    : selectedCategory === "personal" 
      ? projetos.personal 
      : projetos.featured.filter(p => p.category === selectedCategory);

  // Lógica para o carrossel em destaque
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
    <section id="projetos" className="min-h-screen bg-black py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="text-center mb-10">
          <h3 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Todos os Projetos
          </h3>


          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-indigo-500 mx-auto"></div>

        </div>

        {/* Filtros */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2.5 rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-[#dc0000] text-white font-medium"
                  : "bg-gray-800/80 text-gray-400 hover:bg-gray-700 backdrop-blur-sm"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid de Projetos com efeito de Cards em hover */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, staggerChildren: 0.1 }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`project-${project.id}`}
              onClick={() => setSelectedProject(project)}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden cursor-pointer group border border-gray-800/30 hover:border-[#dc0000]/50 transition-all"
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                
             
                {/* Badge da categoria */}
                <span className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-white/10">
                  {project.category}
                </span>
              </div>

              <div className="p-6 relative">
                           
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-[#dc0000] transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 text-xs px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                      {techIcons[tag] && <span className="text-lg">{techIcons[tag]}</span>}
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded-full">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center pt-3 border-t border-gray-800/30">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-[#dc0000] hover:text-white transition-colors"
                    >
                      <FiMonitor className="mr-2" />
                      Ver Live
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal com detalhes do projeto */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                
                <button
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm border border-white/10"
                  onClick={() => setSelectedProject(null)}
                >
                  
                </button>
              </div>

              <div className="p-8">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-[#dc0000] text-white text-sm px-4 py-1 rounded-full">
                    {selectedProject.category}
                  </span>
                  
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-1 text-sm px-3 py-1 bg-gray-800 text-gray-300 rounded-full"
                    >
                      {techIcons[tag] && techIcons[tag]}
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-4">
                  {selectedProject.title}
                </h3>
                
                <p className="text-gray-300 mb-6 text-lg">
                  {selectedProject.description}
                </p>
                
                {selectedProject.highlights && selectedProject.highlights.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-white mb-4">Destaques</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center gap-3 bg-gray-800/50 p-3 rounded-lg">
                          <span className="text-[#dc0000] flex-shrink-0">✓</span>
                          <span className="text-gray-300">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-800/30">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-[#dc0000] text-white rounded-full font-medium hover:bg-red-800 transition-colors"
                    >
                      <FiExternalLink className="mr-2" />
                      Visitar Site
                    </a>
                  )}
                  
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-full font-medium hover:bg-gray-700 transition-colors"
                    >
                      <FiGithub className="mr-2" />
                      Ver Código
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projetos;