import React, { useState, memo } from "react";
import { motion } from "framer-motion";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Hero = memo(() => {
  const [buttonText, setButtonText] = useState("Entre em Contato pelo WhatsApp");
  const whatsappLink = "https://wa.me/55xxxxxxxxxx?text=Oi%20Thomas%20Eduardo,%20vim%20pelo%20site!%20Gostaria%20de%20um%20orçamento.";

  const handleMouseEnter = () => setButtonText("Vamos conversar sobre seu projeto?");
  const handleMouseLeave = () => setButtonText("Entre em Contato pelo WhatsApp");

  return (
    <>
      <Helmet>
        <title>Thomas Eduardo - Desenvolvedor Web Full Stack | Soluções Digitais Personalizadas</title>
        <meta name="description" content="Desenvolvedor Web especializado em criar soluções digitais personalizadas. Transforme sua presença online com websites modernos e otimizados." />
        <meta name="keywords" content="desenvolvedor web, full stack, websites, desenvolvimento web, SEO, React, JavaScript" />
      </Helmet>

      <section
        className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url("/banner-devthm2.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
        role="banner"
        aria-label="Seção principal"
      >
        {/* Overlay com gradiente mais suave */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/70 z-0"></div>

        {/* Efeito de partículas ou linhas (opcional) */}
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(220,0,0,0.1)_50%,transparent_75%)] bg-[length:500px_500px] animate-gradient-shift z-1"></div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Conteúdo principal - ocupa 7 colunas em telas grandes */}
            <div className="lg:col-span-7 space-y-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-1 w-20 bg-[#dc0000]"></div>
                  <span className="text-white font-medium">Desenvolvedor Full Stack</span>
                </div>
                
                <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight">
                  Transformando
                  <span className="block mt-2">
                    <span className="text-[#dc0000]">ideias</span> em
                  </span>
                  <span className="block mt-2">realidade digital</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-300 leading-relaxed max-w-2xl border-l-4 border-[#dc0000] pl-6"
              >
                Especializado em criar experiências digitais únicas e memoráveis. 
                Do design à implementação, cada projeto é desenvolvido com foco em 
                performance, usabilidade e resultados.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 items-center"
              >
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="group w-full sm:w-auto flex items-center justify-center bg-[#dc0000] hover:bg-[#b23012] text-white py-5 px-10 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(220,0,0,0.3)] hover:shadow-[0_0_30px_rgba(220,0,0,0.5)]"
                >
                  <FaWhatsapp className="text-2xl mr-3 group-hover:animate-bounce" />
                  {buttonText}
                </a>

                <div className="flex gap-6">
                  <a
                    href="https://github.com/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                  >
                    <FaGithub className="text-2xl text-white" />
                  </a>
                  <a
                    href="https://linkedin.com/in/seu-usuario"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 border border-white/10 hover:border-white/20 backdrop-blur-sm"
                  >
                    <FaLinkedin className="text-2xl text-white" />
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Espaço reservado para possível conteúdo adicional - ocupa 5 colunas */}
            <div className="hidden lg:block lg:col-span-5">
              {/* Aqui você pode adicionar uma ilustração, stats, ou outro elemento visual */}
            </div>
          </div>
        </div>

        {/* Indicador de rolagem redesenhado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-8 h-14 border-2 border-white/30 rounded-full p-2 backdrop-blur-sm">
            <div className="w-2 h-3 bg-[#dc0000] rounded-full mx-auto animate-bounce shadow-[0_0_10px_rgba(220,0,0,0.5)]"></div>
          </div>
        </motion.div>
      </section>
    </>
  );
});

Hero.displayName = 'Hero';
export default Hero;