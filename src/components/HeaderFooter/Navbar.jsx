"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/logo.png";
import { Menu, X } from "lucide-react";

const navigation = [
  { title: "Me conheça", path: "#sobrenos" },
  { title: "Serviços", path: "#servicos" },
  { title: "Últimos Projetos", path: "#projetos" },
  { title: "Dúvidas", path: "#faq" },
  { title: "Login de Cliente", path: "/login" },
];

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItemIndex = navigation.findIndex(item => item.path === currentPath);
    setActiveIndex(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [location]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      setShowHeader(window.scrollY < lastScrollY || window.scrollY < 50);
      lastScrollY = window.scrollY;
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${showHeader ? "opacity-100" : "opacity-0"}`}
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 150 }}
    >
      <div className="relative w-full h-16 bg-gradient-to-b from-black to-transparent opacity-90 z-30">
        <div className="flex justify-between items-center h-full px-6 lg:px-8">
          {/* Logo */}
          <a href="/" aria-label="Ir para a página inicial">
            <img
              src={logo}
              alt="Logo Gil Barbosa"
              className="h-10"
              style={{ filter: "invert(1) brightness(2)", borderRadius: '5px' }} // Estilo aprimorado
            />
          </a>

          {/* Menu Desktop */}
          <nav className="hidden lg:flex lg:items-center space-x-6">
            <ul className="flex space-x-6">
              {navigation.map((item, idx) => (
                <li key={idx} className="relative">
                  {item.path.startsWith("#") ? (
                    <ScrollLink
                      to={item.path.substring(1)}
                      smooth={true}
                      duration={500}
                      className={`text-white text-lg transition-all duration-300 relative
                        hover:text-[#d63f17] hover:scale-110 hover:shadow-lg focus:text-[#d63f17] focus:outline-none 
                        ${activeIndex === idx ? "font-bold text-[#d63f17]" : ""} cursor-pointer`}
                      onClick={() => setActiveIndex(idx)}
                      aria-current={activeIndex === idx ? "page" : undefined}
                    >
                      {item.title}
                      {activeIndex === idx && (
                        <span className="absolute bottom-[-5px] left-0 w-full h-1 bg-[#d63f17] transition-all duration-300" />
                      )}
                    </ScrollLink>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-white text-lg transition-all duration-300 relative
                        hover:text-[#d63f17] hover:scale-110 hover:shadow-lg focus:text-[#d63f17] focus:outline-none 
                        ${activeIndex === idx ? "font-bold text-[#d63f17]" : ""} cursor-pointer`}
                      onClick={() => setActiveIndex(idx)}
                      aria-current={activeIndex === idx ? "page" : undefined}
                    >
                      {item.title}
                      {activeIndex === idx && (
                        <span className="absolute bottom-[-5px] left-0 w-full h-1 bg-[#d63f17] transition-all duration-300" />
                      )}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Ícone de Menu para Mobile */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
              {menuOpen ? (
                <X size={32} className="text-white" />
              ) : (
                <Menu size={32} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="lg:hidden bg-black text-white absolute top-16 left-0 w-full py-6 px-4 rounded-t-lg shadow-lg z-40">
          <nav className="flex flex-col items-center space-y-6">
            {navigation.map((item, idx) => (
              <div key={idx}>
                {item.path.startsWith("#") ? (
                  <ScrollLink
                    to={item.path.substring(1)}
                    smooth={true}
                    duration={500}
                    className={`text-white text-lg transition-all duration-300 w-full text-center py-2
                      hover:bg-[#d63f17] hover:text-black rounded-lg focus:bg-[#d63f17] focus:text-black
                      ${activeIndex === idx ? "font-bold text-[#d63f17]" : ""} cursor-pointer`}
                    onClick={() => {
                      setActiveIndex(idx);
                      setMenuOpen(false); // Fecha o menu após clicar
                    }}
                  >
                    {item.title}
                  </ScrollLink>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-white text-lg transition-all duration-300 w-full text-center py-2
                      hover:bg-[#d63f17] hover:text-black rounded-lg focus:bg-[#d63f17] focus:text-black
                      ${activeIndex === idx ? "font-bold text-[#d63f17]" : ""} cursor-pointer`}
                    onClick={() => {
                      setActiveIndex(idx);
                      setMenuOpen(false); // Fecha o menu após clicar
                    }}
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