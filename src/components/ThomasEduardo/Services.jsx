import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { FaRocket, FaStore, FaSearchDollar, FaMobileAlt, FaLaptop, FaShieldAlt, FaTools, FaRobot } from 'react-icons/fa';

// Certifique-se de importar o CSS do Swiper
import "swiper/swiper-bundle.css";

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
      image: "/Services/landing-page.png",
      title: "Landing Pages Profissionais",
      description: "Páginas otimizadas para converter visitantes em clientes, com design moderno e responsivo.",
      icon: <FaRocket className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Design Personalizado", "Alta Conversão", "Otimizado para Mobile"]
    },
    {
      image: "/Services/site.png",
      title: "Sites Institucionais",
      description: "Websites completos que representam sua marca com excelência e profissionalismo.",
      icon: <FaMobileAlt className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["100% Responsivo", "SEO Otimizado", "Design Moderno"]
    },
    {
      image: "/Services/lojasvirtuais.png",
      title: "E-commerce Completo",
      description: "Lojas virtuais robustas e seguras para impulsionar suas vendas online.",
      icon: <FaStore className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Gestão de Produtos", "Pagamentos Seguros", "Painel Administrativo"]
    },
    {
      image: "/Services/otimizacao.png",
      title: "Otimização e Performance",
      description: "Melhore a velocidade e o desempenho do seu site para ranking superior.",
      icon: <FaSearchDollar className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["SEO Avançado", "Performance Web", "Análise de Dados"]
    },
    {
      image: "/Services/formatacao.png",
      title: "Formatação Profissional",
      description: "Serviços especializados de formatação e otimização para seu computador.",
      icon: <FaLaptop className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Formatação Windows/Linux", "Backup de Dados", "Instalação de Programas"]
    },
    {
      image: "/Services/seguranca.png",
      title: "Segurança Digital",
      description: "Proteção avançada com BitLocker e configurações de segurança personalizadas.",
      icon: <FaShieldAlt className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Criptografia BitLocker", "Configuração Firewall", "Proteção Antivírus"]
    },
    {
      image: "/Services/suporte.png",
      title: "Suporte Técnico",
      description: "Assistência técnica especializada para otimização do sistema.",
      icon: <FaTools className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Otimização Registry", "Limpeza Sistema", "Drivers Atualizados"]
    },
    {
      image: "/Services/bot.png",
      title: "Bot Messenger",
      description: "Desenvolvimento de bots personalizados para automação e suporte.",
      icon: <FaRobot className="text-4xl text-[#f30d0d] mb-4" />,
      features: ["Atendimento 24/7", "Respostas Automáticas", "Integração Sistemas"]
    }
  ];

  return (
    <section
      id="servicos"
      className="py-20 from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] text-white relative overflow-hidden"
    >
      {/* Efeito de luz do mouse */}
      <div
        className="pointer-events-none absolute inset-0 z-30 transition-opacity"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(243, 13, 13, 0.05), transparent 40%)`,
        }}
      />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.span
            className="text-[#f30d0d] text-lg font-semibold mb-3 block tracking-wider"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SOLUÇÕES COMPLETAS
          </motion.span>
          <motion.h3
            className="mt-2 block font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
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

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          navigation
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1280: {
              slidesPerView: 2,
            }
          }}
          className="pb-16"
        >
          {servicesItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-xl p-8 h-full shadow-xl hover:shadow-2xl transition-all duration-300 relative group"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ y: -5 }}
              >
                {/* Efeito de brilho no card */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-[#f30d0d20] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 rounded-xl bg-[#f30d0d] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                
                <div className="flex flex-col h-full relative z-10">
                  <div className="flex items-center justify-center mb-6 bg-[#0a0a0a] p-3 rounded-full w-16 h-16 mx-auto group-hover:shadow-[0_0_15px_rgba(243,13,13,0.3)] transition-all duration-300">
                    {React.cloneElement(item.icon, { 
                      className: "text-3xl text-[#f30d0d] group-hover:scale-110 transition-transform duration-300" 
                    })}
                  </div>
                  
                  <motion.div className="relative overflow-hidden rounded-lg mb-6">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                      whileHover={{ scale: 1.03 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a0a0a0acc] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  <h4 className="text-2xl font-bold mb-3 text-[#f30d0d] group-hover:text-[#ff1a1a] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-300 mb-6 flex-grow text-lg">{item.description}</p>
                  
                  <div className="mt-auto">
                    <div className="border-t border-gray-700 pt-4">
                      <ul className="space-y-3">
                        {item.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300 hover:translate-x-2">
                            <span className="mr-2 text-[#f30d0d] group-hover:text-[#ff1a1a]">►</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-8">
          {servicesItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${
                index === 0 ? "bg-[#f30d0d]" : "bg-gray-400"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
