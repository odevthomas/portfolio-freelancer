import React from "react";

// Componentes de Header e Footer
import Navbar from "../components/HeaderFooter/Navbar"; 
import Footer from "../components/HeaderFooter/Footer";

// Componentes principais da página
import Hero from "../components/ThomasEduardo/Hero";
import Services from "../components/ThomasEduardo/Services";
import About from "../components/ThomasEduardo/About";
import SkillsCarousel from "../components/ThomasEduardo/SkillsCarousel";
import ProjectSection from "../components/ThomasEduardo/ProjectSection"; 
import CallToAction from "../components/ThomasEduardo/CallToAction";
import Depoimentos from "../components/ThomasEduardo/Depoimentos";
import UniqueApproachSection from "../components/ThomasEduardo/UniqueApproachSection"; 
import Assessoria from "../components/ThomasEduardo/Acessoria";
import FAQ from "../components/ThomasEduardo/FAQ";

// Componentes auxiliares
import WhatsAppButton from "../components/Buttons/WhatsAppButton";
import CookieConsent from "../components/Ferramentas/CookieConsent";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <About />
      <SkillsCarousel />
      <CallToAction />
     <Assessoria />
      <ProjectSection />
      <UniqueApproachSection />
      <Depoimentos />
      <FAQ />
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </>
  );
};

export default Home;
