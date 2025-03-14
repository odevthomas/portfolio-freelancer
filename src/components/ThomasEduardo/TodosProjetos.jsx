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

const projetos = {
  featured: [
    {
      id: 1,
      title: "LSG Marketing Digital",
      description:
        "Landing page otimizada para conversão no WhatsApp, com monitoramento de cliques, design responsivo e integração eficiente para captação de leads.",
      image: "/Projetos/TodosProjetos(1).png",
      liveUrl: "https://lsgdigital.com.br",
      githubUrl: "https://github.com/yourusername/lsg-marketing-digital",
      tags: ["React", "Node.js", "Landing Page", "Analytics"],
      category: "Freelancer",
    },
    {
      id: 2,
      title: "Petshop Cambuci",
      description:
        "Plataforma moderna para pet shops com agendamento de serviços, gestão de clientes e integração com WhatsApp.",
      image: "/Projetos/TodosProjetos(2).png",
      liveUrl: "https://petcambuci.vercel.app/",
      githubUrl: "https://github.com/odevthomas/PetCambuci/",
      tags: ["React", "TypeScript", "Vite", "Agendamento", "API"],
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
        "Sistema de gestão para restaurantes, com pedidos online, cadastro de clientes e busca otimizada no cardápio.",
      image: "/Projetos/TodosProjetos(3).png",
      liveUrl: "https://bellacucina.vercel.app/",
      githubUrl: "https://github.com/odevthomas/BellaCucina",
      tags: ["React", "MongoDB", "API REST", "Autenticação"],
      category: "Freelancer",
      highlights: ["Gestão de Pedidos", "Sistema de Busca", "Cadastro de Usuários"],
    },
    {
      id: 4,
      title: "Task Manager",
      description:
        "Aplicativo de gerenciamento de tarefas, permitindo a organização de atividades com interface moderna e intuitiva.",
      image: "/Projetos/TodosProjetos(4).png",
      liveUrl: null,
      githubUrl: "https://github.com/odevthomas/NodeCrude-Api-Mysql-React",
      tags: ["React", "TypeScript", "Tailwind", "CRUD", "API REST"],
      category: "Ferramentas",
      highlights: ["Operações CRUD", "Autenticação de Usuários", "Interface Responsiva"],
    },
    {
      id: 5,
      title: "Social Pet",
      description:
        "Rede social para amantes de animais, permitindo compartilhamento de histórias, dicas e adoção de pets.",
      image: "/Projetos/TodosProjetos(5).png",
      liveUrl: "https://rede-pets.vercel.app/",
      githubUrl: "https://github.com/odevthomas/SocialPet",
      tags: ["JavaScript", "API Integration", "UX/UI", "Comunidade"],
      category: "Pessoal",
      highlights: ["Verificação em Tempo Real", "Sugestões Inteligentes"],
    },
  ],
  personal: [
    {
      id: 6,
      title: "Gerenciador de Faturas",
      description:
        "Sistema para controle e organização de faturas, facilitando a visualização de despesas e pagamentos.",
      image: "/Projetos/TodosProjetos(6).png",
      githubUrl: "https://invoice-generator--omega.vercel.app/",
      tags: ["React", "Vite", "API",],
      category: "Ferramentas",
      highlights: ["Interface Interativa", "Busca Dinâmica"],
    },
    {
      id: 7,
      title: "Dieta.IA",
      description:
        "Aplicação de inteligência artificial para geração de dietas personalizadas conforme objetivos do usuário.",
      image: "/Projetos/TodosProjetos(8).png",
      githubUrl: "https://github.com/odevthomas/Dieta_IA",
      tags: ["Node.js", "AI", "YouTube","Express",],
      category: "Pessoal",
    },
    {
      id: 8,
      image: "/Projetos/projeto(1).png",
      title: "Arte na Pele Studios",
      description:
        "Landing page profissional para um estúdio de tatuagem, destacando portfólio, agendamentos e serviços oferecidos.",
      category: "Freelancer",
      tags: ["React", "TypeScript", "Vite", "TailwindCSS", "UI/UX"],
      liveUrl: "https://artenapele.vercel.app/",
      githubUrl: null,
    },
    {
      id: 9,
      image: "/Projetos/projeto(2).png",
      title: "Casa L'Ellit",
      description:
        "Website institucional para salão de beleza, com agendamento online e apresentação detalhada dos serviços.",
      category: "Freelancer",
      tags: ["React", "Node.js", "Tag", "whatsapp", "Agendamentos", "Api"],
      liveUrl: "https://www.lellit.com.br/casaLellit",
      githubUrl: null,
    },
    {
      id: 10,
      image: "/Projetos/projeto(3).png",
      title: "Gil Barbosa Beauty",
      description:
        "Landing page para salão de beleza, com foco em serviços como cílios, design de sobrancelhas e maquiagem.",
      category: "Freelancer",
      tags: ["React", "Node.js", "whatsapp", "Agendamentos", "Api"],
      liveUrl: "https://www.gilbarbosabeauty.com.br/",
      githubUrl: null,
    },
    {
      id: 11,
      image: "/Projetos/projeto(5).png",
      title: "Perfil Links Personalizados",
      description:
        "Gerador de perfis personalizáveis com nome, bio, links sociais e habilidades técnicas. Responsivo e estilizado com Tailwind CSS.",
      category: "Pessoal",
      tags: ["React", "TailwindCSS", "JavaScript", "Perfil Personalizado"],
      liveUrl: "https://bio-links-blue.vercel.app/",
      githubUrl: null,
    },
    {
      id: 12,
      image: "/Projetos/projeto(6).png",
      title: "Barbearia Lins",
      description:
        "Website para barbearia premium, com sistema de agendamento online e apresentação de serviços.",
      category: "Freelancer",
      tags: ["React", "Firebase", "TailwindCSS", "Agendamentos"],
      liveUrl: "https://barbearia-lins-digital.vercel.app/",
      githubUrl: null,
    },
    {
      id: 13,
      image: "/Projetos/projeto(6.1).png",
      title: "Painel de Benefícios do Funcionário",
      description:
        "Dashboard interativo para acompanhamento de benefícios corporativos, com estatísticas e gráficos dinâmicos.",
      category: "Ferramentas",
      tags: ["React", "TypeScript", "Node.js", "MySQL", "Dashboard", "Gráficos"],
      liveUrl: "https://beneficios-funcionarios.vercel.app/",
      githubUrl: null,
    },
    {
      id: 14,
      image: "/Projetos/projeto(7).png",
      title: "Direito Trabalhista",
      description:
        "Website jurídico para advogados, oferecendo agendamentos e informações sobre serviços advocatícios.",
      category: "Freelancer",
      tags: ["React", "Node.js", "Express", "MongoDB", "Agendamentos"],
      liveUrl: "https://odevthomas.github.io/LP-Advogada/",
      githubUrl: null,
    },
    {
      id: 15,
      image: "/Projetos/projeto(8).png",
      title: "Do Zero ao Primeiro Emprego em Programação",
      description:
        "Plataforma educacional para iniciantes em programação, com materiais didáticos e suporte para o primeiro emprego.",
      category: "Pessoal",
      tags: ["React", "Firebase", "JavaScript", "Node.js", "Educação", "Cursos Online"],
      liveUrl: "https://primeiroempregodev.vercel.app/",
      githubUrl: null,
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