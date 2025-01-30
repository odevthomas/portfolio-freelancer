import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaRocket, FaStore, FaSearchDollar, FaMobileAlt, FaLaptop, FaShieldAlt, FaTools, FaRobot } from 'react-icons/fa';

const Services = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const servicesItems = [
    {
      title: "Landing Pages Profissionais",
      description: "Páginas otimizadas para converter visitantes em clientes, com design moderno e responsivo.",
      icon: <FaRocket className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Design Personalizado", "Alta Conversão", "Otimizado para Mobile"]
    },
    {
      title: "Sites Institucionais",
      description: "Websites completos que representam sua marca com excelência e profissionalismo.",
      icon: <FaMobileAlt className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["100% Responsivo", "SEO Otimizado", "Design Moderno"]
    },
    {
      title: "E-commerce Completo",
      description: "Lojas virtuais robustas e seguras para impulsionar suas vendas online.",
      icon: <FaStore className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Gestão de Produtos", "Pagamentos Seguros", "Painel Administrativo"]
    },
    {
      title: "Otimização e Performance",
      description: "Melhore a velocidade e o desempenho do seu site para ranking superior.",
      icon: <FaSearchDollar className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["SEO Avançado", "Performance Web", "Análise de Dados"]
    },
    {
      title: "Formatação Profissional",
      description: "Serviços especializados de formatação e otimização para seu computador.",
      icon: <FaLaptop className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Formatação Windows/Linux", "Backup de Dados", "Instalação de Programas"]
    },
    {
      title: "Segurança Digital",
      description: "Proteção avançada com BitLocker e configurações de segurança personalizadas.",
      icon: <FaShieldAlt className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Criptografia BitLocker", "Configuração Firewall", "Proteção Antivírus"]
    },
    {
      title: "Suporte Técnico",
      description: "Assistência técnica especializada para otimização do sistema.",
      icon: <FaTools className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Otimização Registry", "Limpeza Sistema", "Drivers Atualizados"]
    },
    {
      title: "Bot Messenger",
      description: "Desenvolvimento de bots personalizados para automação e suporte.",
      icon: <FaRobot className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Atendimento 24/7", "Respostas Automáticas", "Integração Sistemas"]
    }
  ];

  return (
    <section
      id="servicos"
      className="py-20 bg-gradient-to-b from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Efeito de luz do mouse */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(243, 13, 13, 0.05), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block text-[#dc0000] text-sm sm:text-base md:text-lg font-bold tracking-wider px-4 sm:px-8 py-2 sm:py-3 border-2 border-[#dc0000] rounded-full hover:bg-[#dc0000]/10 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
           
            SOLUÇÕES COMPLETAS
          </motion.span>
          <motion.h3
            className="mt-2 block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Serviços Essenciais
          </motion.h3>
          <motion.p
            className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Desenvolvemos soluções digitais sob medida para impulsionar seu negócio no ambiente online,
            com foco em resultados e experiência do usuário.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {servicesItems.map((item, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 h-full backdrop-blur-sm border border-gray-800 hover:border-[#f30d0d] transition-all duration-300 group-hover:translate-y-[-5px] group-hover:shadow-[0_10px_30px_rgba(243,13,13,0.1)]">
                {/* Efeito de brilho */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-[#f30d0d20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-6 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] p-4 rounded-xl w-16 h-16 mx-auto group-hover:shadow-[0_0_20px_rgba(243,13,13,0.3)] transition-all duration-300">
                    {React.cloneElement(item.icon, { 
                      className: "text-3xl text-[#f30d0d] group-hover:scale-110 transition-transform duration-300" 
                    })}
                  </div>

                  <h4 className="text-xl font-bold mb-3 text-white group-hover:text-[#f30d0d] transition-colors duration-300">
                    {item.title}
                  </h4>
                  
                  <p className="text-gray-400 mb-6 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {item.description}
                  </p>

                  <ul className="space-y-2">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-400 group-hover:text-white transition-all duration-300">
                        <span className="mr-2 text-[#f30d0d] text-sm">►</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
