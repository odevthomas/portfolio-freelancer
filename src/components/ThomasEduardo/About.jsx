import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram, FaLinkedin, FaGithub, FaCode, FaRocket, FaLaptopCode, FaMedal } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
    <section id="sobrenos" className="py-20 from-gray-900 to-black min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Título Principal - Span Completo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="col-span-full mb-8"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-center">
            Desenvolvedor
            <span className="text-[#fb1603]"> Full Stack</span>

            </h2>
          </motion.div>

          {/* Grid Bento - 3 Colunas */}
          {/* Card Bio */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2  from-gray-800/20 to-gray-900/20 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-[#dc0000] mb-4">Sobre Mim</h3>
              <p className="text-xl text-gray-300 leading-relaxed">
                Especializado no desenvolvimento de <span className="text-[#dc0000] font-medium">Landing Pages, 
                Sites E-commerce e soluções web customizadas</span>. Domino tecnologias modernas e frameworks atuais.
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                Meu compromisso é transformar suas ideias em soluções digitais impactantes, 
                sempre focando em resultados e na melhor experiência do usuário.
              </p>
            </div>
          </motion.div>

          {/* Card CTA */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className=" from-gray-800/20 to-gray-900/20 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm flex flex-col justify-between"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-[#dc0000]">Vamos Trabalhar Juntos?</h3>
              <p className="text-gray-300">Estou disponível para novos projetos e parcerias.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => window.open('https://api.whatsapp.com/send?phone=551999042072&text=Oi, estou interessado!')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="mt-4 w-full bg-gradient-to-r from-[#dc0000] to-[#ff4444] px-6 py-3 rounded-xl text-lg font-medium hover:shadow-lg hover:shadow-[#dc0000]/50 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="text-xl" />
              <span>{buttonText}</span>
            </motion.button>
          </motion.div>

          {/* Stats Grid */}
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className=" from-gray-800/20 to-gray-900/20 p-6 rounded-3xl border border-gray-700/30 backdrop-blur-sm flex flex-col items-center justify-center"
            >
              <stat.icon className="text-[#dc0000] text-3xl mb-3" />
              <h4 className="text-2xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-gray-400 text-sm text-center">{stat.label}</p>
            </motion.div>
          ))}

          {/* Especialidades Card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="md:col-span-2  from-gray-800/20 to-gray-900/20 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm"
          >
            <h3 className="text-3xl font-bold text-[#dc0000] mb-4">Especialidades</h3>
            <p className="text-xl text-gray-300 leading-relaxed">
              Desenvolvimento de Landing Pages, E-commerce e Aplicações Web Personalizadas de alta performance
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className=" from-gray-800/20 to-gray-900/20 p-8 rounded-3xl border border-gray-700/30 backdrop-blur-sm"
          >
            <div className="flex justify-around items-center h-full">
              {[
                { icon: FaGithub, url: "https://github.com/devthmedu", color: "#ffffff" },
                { icon: FaInstagram, url: "https://www.instagram.com/_devthm/", color: "#e1306c" },
                { icon: FaLinkedin, url: "https://www.linkedin.com/notifications/?filter=all", color: "#0a66c2" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="text-gray-400 hover:text-[#dc0000] transition-colors duration-300"
                >
                  <social.icon className="text-3xl" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;