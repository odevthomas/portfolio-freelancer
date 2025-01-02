import React from "react";
import Navbar from "../components/HeaderFooter/Navbar"; 
import Hero from "../components/ThomasEduardo/Hero";
import Services from "../components/ThomasEduardo/Services";
import SkillsCarousel from "../components/ThomasEduardo/SkillsCarousel";
import About from "../components/ThomasEduardo/About";
import ProjectSection from "../components/ThomasEduardo/ProjectSection"; 
import CallToAction from "../components/ThomasEduardo/CallToAction";
import Depoimentos from "../components/ThomasEduardo/Depoimentos";
import UniqueApproachSection from "../components/ThomasEduardo/UniqueApproachSection"; 
import Footer from "../components/HeaderFooter/Footer";
import WhatsAppButton from "../components/Buttons/WhatsAppButton";
import Statistics from "../components/ThomasEduardo/Statistics";
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
      <ProjectSection />
            <UniqueApproachSection />
                  <Depoimentos />

       <Statistics />
      <Footer />
      <CookieConsent />
       <WhatsAppButton />
    </>
  );
};

export default Home;
