import React from "react";

// Componentes de Header e Footer
import Navbar from "../../HeaderFooter/Navbar"; 
import Footer from "../../HeaderFooter/Footer";

// Componentes principais da página
import Hero from "../Hero";
import Services from "../Services";
import About from "../About";
import SkillsCarousel from "../SkillsCarousel";
import ProjectSection from "../ProjectSection"; 
import SeçãoAbordagemÚnica  from "../SeçãoAbordagemÚnica"; 
import Clientes from "../Clientes";
import Depoimentos from "../Depoimentos";
import CTA from "../CTA";
import FAQ from "../FAQ";

// Componentes auxiliares
import WhatsAppButton from "../../Buttons/WhatsAppButton";
import CookieConsent from "../../Ferramentas/CookieConsent";

const Home = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Seção Hero */}
      <Hero />

      {/* Seção Serviços */}
      <Services />

      {/* Seção Sobre */}
      <About />

      {/* Seção Habilidades */}
      <SkillsCarousel />

      {/* Seção Abordagem Única */}
      <SeçãoAbordagemÚnica  />

      {/* Seção de Projetos */}
      <ProjectSection />

      {/* Seção Clientes */}
      <Clientes />

      {/* Call to Action (CTA) */}
      <CTA />

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
