"use client";

import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/logo.png";
import { Menu, X } from "lucide-react";
import { useTheme } from '../../context/ThemeContext';

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
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItemIndex = navigation.findIndex(item => item.path === currentPath);
    setActiveIndex(activeItemIndex !== -1 ? activeItemIndex : null);
  }, [location]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      // Controle de visibilidade do header
      setShowHeader(window.scrollY < lastScrollY || window.scrollY < 50);
      lastScrollY = window.scrollY;

      // Cálculo do progresso do scroll
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      setScrollProgress(progress);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500`}
        initial={{ opacity: 0, y: -100 }}
        animate={{ 
          opacity: showHeader ? 1 : 0.5,
          y: showHeader ? 0 : -100
        }}
        transition={{ duration: 0.5 }}
      >
        {/* Barra de Progresso */}
        <div className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#d63f17] to-[#ff6b6b]" style={{ width: `${scrollProgress}%` }} />

        <div className="relative w-full backdrop-blur-md bg-black/30 border-b border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-center h-16 px-6 lg:px-8">
              {/* Logo com animação */}
              <motion.a 
                href="/" 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                aria-label="Ir para a página inicial"
              >
                <img
                  src={logo}
                  alt="Logo Thomas Eduardo"
                  className="h-10 transition-all duration-300 group-hover:brightness-125"
                />
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d63f17] to-[#ff6b6b] rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </motion.a>

              {/* Menu Desktop */}
              <nav className="hidden lg:flex lg:items-center">
                <ul className="flex space-x-8">
                  {navigation.map((item, idx) => (
                    <motion.li 
                      key={idx}
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.path.startsWith("#") ? (
                        <ScrollLink
                          to={item.path.substring(1)}
                          smooth={true}
                          duration={500}
                          className={`text-white text-lg font-medium transition-all duration-300 relative
                            hover:text-[#d63f17] focus:text-[#d63f17] focus:outline-none 
                            ${activeIndex === idx ? "text-[#d63f17]" : ""} cursor-pointer
                            after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                            after:w-full after:h-[2px] after:bg-[#d63f17] after:scale-x-0 
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100`}
                          onClick={() => setActiveIndex(idx)}
                          aria-current={activeIndex === idx ? "page" : undefined}
                        >
                          {item.title}
                        </ScrollLink>
                      ) : (
                        <Link
                          to={item.path}
                          className={`text-white text-lg font-medium transition-all duration-300 relative
                            hover:text-[#d63f17] focus:text-[#d63f17] focus:outline-none 
                            ${activeIndex === idx ? "text-[#d63f17]" : ""} cursor-pointer
                            after:content-[''] after:absolute after:bottom-[-4px] after:left-0 
                            after:w-full after:h-[2px] after:bg-[#d63f17] after:scale-x-0 
                            after:transition-transform after:duration-300
                            hover:after:scale-x-100`}
                          onClick={() => setActiveIndex(idx)}
                          aria-current={activeIndex === idx ? "page" : undefined}
                        >
                          {item.title}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>

              {/* Botão Menu Mobile */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              >
                {menuOpen ? (
                  <X size={28} className="text-white" />
                ) : (
                  <Menu size={28} className="text-white" />
                )}
              </motion.button>

              <div className="flex items-center gap-4">
                <button
                  onClick={toggleTheme}
                  className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  aria-label="Trocar tema"
                >
                  {isDarkMode ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Mobile */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="lg:hidden absolute top-16 left-0 w-full backdrop-blur-lg bg-black/80 border-b border-white/10"
            >
              <nav className="max-w-7xl mx-auto py-6 px-6">
                <ul className="space-y-4">
                  {navigation.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {item.path.startsWith("#") ? (
                        <ScrollLink
                          to={item.path.substring(1)}
                          smooth={true}
                          duration={500}
                          className={`block py-2 px-4 rounded-lg text-white text-lg transition-all duration-300
                            ${activeIndex === idx ? "bg-[#d63f17] text-white" : "hover:bg-white/10"}`}
                          onClick={() => {
                            setActiveIndex(idx);
                            setMenuOpen(false);
                          }}
                        >
                          {item.title}
                        </ScrollLink>
                      ) : (
                        <Link
                          to={item.path}
                          className={`block py-2 px-4 rounded-lg text-white text-lg transition-all duration-300
                            ${activeIndex === idx ? "bg-[#d63f17] text-white" : "hover:bg-white/10"}`}
                          onClick={() => {
                            setActiveIndex(idx);
                            setMenuOpen(false);
                          }}
                        >
                          {item.title}
                        </Link>
                      )}
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;