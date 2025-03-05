import React, { useState, useEffect } from "react";
import Navbar from "../components/HeaderFooter/Navbar"; 
import Footer from "../components/HeaderFooter/Footer";
import Hero from "../components/ThomasEduardo/Hero";
import TecnologiasUtilizadas from "../components/ThomasEduardo/TecnologiasUtilizadas";
import TodosProjetos from "../components/ThomasEduardo/TodosProjetos"; 
import CTA from "../components/ThomasEduardo/CTA";
import WhatsAppButton from "../components/Buttons/WhatsAppButton";
import CookieConsent from "../components/Ferramentas/CookieConsent";

// Componente Loading simples
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="animate-spin w-12 h-12 border-t-4 border-red-500 border-solid rounded-full"></div>
    </div>
  );
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
      <Navbar />
      <Hero />
      <CTA />
      <TodosProjetos />
      <TecnologiasUtilizadas />
      <Footer />
      <CookieConsent />
      <WhatsAppButton />
    </>
  );
};

export default Home;
