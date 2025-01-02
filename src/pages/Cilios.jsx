import React from "react";
import Navbarcilios from "../components/HeaderFooter/Navbarcilios"; 
import Footer from "../components/HeaderFooter/Footer";
import WhatsAppButton from "../components/Buttons/WhatsAppButton";
import CookieConsent from "../components/Ferramentas/CookieConsent";  // Corrigido: importando o CookieConsent

// Importando os componentes relacionados à página de Cílios
import Introduction from '../components/Cilios/Introduction';
import ImageCarousel from '../components/Cilios/ImageCarousel';
import VideoSection from '../components/Cilios/VideoSection';
import Curso from '../components/Cilios/Curso';
import ExtensionPage from '../components/Cilios/ExtensionPage';
import CommonQuestions from '../components/Cilios/CommonQuestions';


const Cilios = () => {
  return (
    <>
      <Navbarcilios />

      <ExtensionPage />
      <VideoSection />
      <Introduction />
      <Curso />
       <ImageCarousel />

      <CommonQuestions />
      <Footer />

      {/* Consentimento de cookies */}
      <CookieConsent />

      {/* Botão de WhatsApp para contato rápido */}
      <WhatsAppButton />
    </>
  );
};

export default Cilios;
