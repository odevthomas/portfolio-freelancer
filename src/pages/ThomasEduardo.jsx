import React, { useState, useEffect } from "react";

// Componentes de Header e Footer
import Navbar from "../components/HeaderFooter/Navbar"; 
import Footer from "../components/HeaderFooter/Footer";

// Componentes principais da página
import Hero from "../components/ThomasEduardo/Hero";
import Services from "../components/ThomasEduardo/Services";
import About from "../components/ThomasEduardo/About";
import SkillsCarousel from "../components/ThomasEduardo/SkillsCarousel";
import ProjectSection from "../components/ThomasEduardo/ProjectSection"; 
import SeçãoAbordagemÚnica from "../components/ThomasEduardo/SeçãoAbordagemÚnica"; 
import Clientes from "../components/ThomasEduardo/Clientes";
import Depoimentos from "../components/ThomasEduardo/Depoimentos";
import CTA from "../components/ThomasEduardo/CTA";
import FAQ from "../components/ThomasEduardo/FAQ";

// Componentes auxiliares
import WhatsAppButton from "../components/Buttons/WhatsAppButton";
import CookieConsent from "../components/Ferramentas/CookieConsent";

import Loading from "../components/ThomasEduardo/Loading";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulação de carregamento, substitua com lógica real
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 segundos

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Seção Hero */}
      <Hero />
      
      {/* Seção Sobre */}
      <About />

      {/* Seção Serviços */}
      <Services />

      {/* Seção Habilidades */}
      <SkillsCarousel />

      {/* Seção Abordagem Única */}
      <SeçãoAbordagemÚnica />

      {/* Seção de Projetos */}
      <ProjectSection />
    
      {/* Call to Action (CTA) */}
      <CTA />

      {/* Seção Clientes */}
      <Clientes />

      {/* Seção Depoimentos */}
      <Depoimentos />

      {/* Seção FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Consentimento de Cookies */}
      <CookieConsent />

      {/* Botão WhatsApp */}
      <WhatsAppButton />
    </>
  );
};

export default Home;
