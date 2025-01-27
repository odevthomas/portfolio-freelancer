import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaCode, FaRocket, FaLaptopCode, FaMedal } from 'react-icons/fa';
import { SiAngular } from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

const About = () => {
  const [buttonText, setButtonText] = useState('Vamos Conversar');

  const handleMouseEnter = () => {
    setButtonText('Opa, é só clicar que já te respondo!');
  };

  const handleMouseLeave = () => {
    setButtonText('Vamos Conversar');
  };

  const stats = [
    { icon: FaCode, value: "2+", label: "Anos de Experiência" },
    { icon: FaRocket, value: "50+", label: "Projetos Entregues" },
    { icon: FaLaptopCode, value: "100%", label: "Satisfação" },
    { icon: FaMedal, value: "24/7", label: "Suporte" }
  ];

  return (
    <>
      <Helmet>
        <title>Thomas Eduardo - Desenvolvedor Full Stack | React, Next.js, Node.js</title>
        <meta name="description" content="Desenvolvedor Full Stack com mais de 2 anos de experiência. Especializado em React, Next.js e Node.js. Conheça meu trabalho e vamos criar algo incrível juntos!" />
        <meta name="keywords" content="desenvolvedor full stack, react, next.js, node.js, desenvolvimento web, são paulo" />
        <meta property="og:title" content="Thomas Eduardo - Desenvolvedor Full Stack" />
        <meta property="og:description" content="Desenvolvedor Full Stack especializado em React, Next.js e Node.js. Mais de 50 projetos entregues com sucesso." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://thomaseduardo.dev.br/sobre" />
      </Helmet>

      <section 
        id="sobrenos" 
        className="py-10 sm:py-16 md:py-20 bg-black min-h-screen relative overflow-hidden"
        aria-label="Sobre Thomas Eduardo"
        role="region"
      >
        {/* Efeito de gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
        
        {/* Linhas decorativas animadas */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 w-1/3 h-1 bg-gradient-to-r from-[#dc0000] to-transparent"></div>
          <div className="absolute right-0 bottom-0 w-1/3 h-1 bg-gradient-to-l from-[#dc0000] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Cabeçalho */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16 md:mb-20"
          >
              <motion.div 
              className="flex justify-center items-center gap-3 sm:gap-6 mb-6 sm:mb-8 flex-wrap"
              whileHover={{ scale: 1.02 }}
              >
              <span className="inline-block text-[#dc0000] text-sm sm:text-base md:text-lg font-bold tracking-wider px-4 sm:px-8 py-2 sm:py-3 border-2 border-[#dc0000] rounded-full hover:bg-[#dc0000]/10 transition-all duration-300">
                Desenvolvedor Full Stack
                </span>
                <motion.div
                className="flex items-center gap-2 sm:gap-3 px-4 sm:px-8 py-2 sm:py-3 border-2 border-white/20 rounded-full bg-white/5 text-white"
                  whileHover={{ scale: 1.05 }}
                >
                <DiJava className="text-xl sm:text-2xl" />
                <SiAngular className="text-xl sm:text-2xl" />
                <span className="font-bold text-sm sm:text-base">Bootcamp DIO</span>
                </motion.div>
              </motion.div>
              
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
                Thomas Eduardo 
              </h2>
          </motion.div>

          {/* Grid Principal */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 lg:gap-8">
            {/* Bio Principal */}
            <motion.article
              whileHover={{ scale: 1.01 }}
              className="lg:col-span-8 bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 md:p-10 rounded-3xl border border-white/10 backdrop-blur-lg shadow-xl"
            >
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#dc0000] mb-6 sm:mb-8">Sobre Mim</h3>
              <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-gray-300">
                <p>
                  Desenvolvedor Full Stack apaixonado por tecnologia, com raízes em São Paulo. Minha jornada começou na área de TI e evoluiu para o desenvolvimento web, onde encontrei minha verdadeira vocação.
                </p>
                <p>
                  <span className="text-[#dc0000] font-semibold">Especializado em React, Next.js, Node.js</span> e tecnologias modernas que impulsionam a web atual.
                </p>
                <p>
                  Com mais de 2 anos de experiência e mais de 50 projetos entregues, meu foco está em criar soluções que <span className="text-white font-semibold">transformam visões em realidade digital</span>.
                </p>
              </div>
            </motion.article>

            {/* Sidebar */}
            <div className="lg:col-span-4 space-y-4 sm:space-y-6 lg:space-y-8">
            {/* Card CTA */}
            <motion.aside
              whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-lg"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-[#dc0000] mb-3 sm:mb-4">Vamos Trabalhar Juntos?</h3>
                <p className="text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">Disponível para novos projetos e desafios inovadores.</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => window.open('https://api.whatsapp.com/send?phone=551999042072&text=Oi, estou interessado!')}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                  className="w-full bg-[#dc0000] hover:bg-[#ff0000] px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-medium shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                  <FaWhatsapp className="text-lg sm:text-xl" />
                <span>{buttonText}</span>
              </motion.button>
            </motion.aside>

            {/* Social Links */}
            <motion.nav
              whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-lg"
            >
                <div className="flex justify-around items-center">
                {[
                  { icon: FaGithub, url: "https://github.com/devthmedu", color: "#ffffff" },
                    { icon: FaInstagram, url: "https://www.instagram.com/_devthm/", color: "#dc0000" },
                    { icon: FaLinkedin, url: "https://www.linkedin.com/notifications/?filter=all", color: "#ffffff" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -5 }}
                      className="text-2xl sm:text-3xl text-gray-400 hover:text-[#dc0000] transition-colors duration-300"
                  >
                      <social.icon />
                  </motion.a>
                ))}
              </div>
            </motion.nav>
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
            <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-gray-900 to-black p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-lg text-center"
                >
                  <stat.icon className="text-[#dc0000] text-3xl sm:text-4xl mb-3 sm:mb-4 mx-auto" />
                  <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">{stat.value}</h4>
                  <p className="text-gray-400 text-sm sm:text-base">{stat.label}</p>
            </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;