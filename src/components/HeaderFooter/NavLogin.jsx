"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/logonova.png";  // Logo original
import { Menu, X } from "lucide-react"; // Ícones de menu e close

const navigation = [
  { title: "Acessar o Site ", path: "/ThomasEduardo" },
  { title: "Voltar ", path: "/" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showHeader, setShowHeader] = useState(false);  // Inicialmente o cabeçalho está oculto
  const [menuOpen, setMenuOpen] = useState(false); // Controle do menu mobile
  const location = useLocation();

  // Effect para detectar a página ativa
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItemIndex = navigation.findIndex(item => item.path === currentPath);
    setActiveIndex(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [location]);

  // Effect para mostrar ou esconder o cabeçalho ao rolar a página
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeader(true); // Mostrar o cabeçalho após o atraso
    }, 300);

    return () => {
      clearTimeout(timer); // Limpar o temporizador quando o componente for desmontado
    };
  }, []);

  // Effect para esconder/mostrar o cabeçalho ao rolar a página
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShowHeader(false);
      } else if (window.scrollY < lastScrollY) {
        setShowHeader(true);
      }

      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0"}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
    >
      <div className="relative w-full h-20 bg-gradient-to-b from-black to-transparent opacity-90">
        <div className="flex items-center h-full px-6 lg:px-8 space-x-4">  {/* Adicionando espaçamento adequado */}
          <a href="/" className="mr-4">
            <img
              src={logo}
              alt="Logo Thonas Eduardo"
              className="h-14"  // Cor original da logo
            />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex lg:items-center justify-start w-full space-x-6">  {/* Alinhando links à esquerda */}
            <ul className="flex space-x-6">
              {navigation.map((item, idx) => (
                <li key={idx}>
                  {item.path.startsWith("#") ? (
                    <ScrollLink
                      to={item.path.substring(1)} // Remover o # ao passar para o ScrollLink
                      smooth={true}
                      duration={500}
                      className={`text-white text-lg transition-all duration-300 relative
                        hover:text-[#dc0000] hover:scale-110 hover:shadow-lg focus:text-[#dc0000] focus:outline-none 
                        ${activeIndex === idx ? "font-bold text-[#dc0000]" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-current={activeIndex === idx ? "page" : undefined} // Acessibilidade
                    >
                      {item.title}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-white text-lg transition-all duration-300 relative
                        hover:text-[#dc0000] hover:scale-110 hover:shadow-lg focus:text-[#dc0000] focus:outline-none 
                        ${activeIndex === idx ? "font-bold text-[#dc0000]" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-current={activeIndex === idx ? "page" : undefined} // Acessibilidade
                    >
                      {item.title}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Mobile */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? (
                <X size={32} className="text-white" />
              ) : (
                <Menu size={32} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile (quando menuOpen for true) */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white absolute top-2 left-0 w-full py-6 px-4 rounded-t-lg shadow-lg z-40">
          <nav className="flex flex-col items-center space-y-6">
            {navigation.map((item, idx) => (
              <div key={idx}>
                {item.path.startsWith("#") ? (
                  <ScrollLink
                    to={item.path.substring(1)} // Remover o # ao passar para o ScrollLink
                    smooth={true}
                    duration={500}
                    className={`text-white text-lg transition-all duration-300 w-full text-center py-2 
                      hover:bg-[#dc0000] hover:text-black rounded-lg focus:bg-[#dc0000] focus:text-black
                      ${activeIndex === idx ? "font-bold text-[#dc0000]" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white text-lg transition-all duration-300 w-full text-center py-2
                      hover:bg-[#dc0000] hover:text-black rounded-lg focus:bg-[#dc0000] focus:text-black
                      ${activeIndex === idx ? "font-bold text-[#dc0000]" : ""}`}
                    onClick={() => setActiveIndex(idx)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </motion.header>
  );
};

export default Header;
