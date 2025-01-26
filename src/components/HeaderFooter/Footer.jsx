import React from "react";
import { FaWhatsapp, FaGithub, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaChevronUp } from 'react-icons/fa';
import ResumeModal from "../Ferramentas/ResumeModal";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#171717] to-[#0a0a0a] py-12 text-[#fff] border-t border-[#2a2a2a]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-[#b80e0e] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[2px] after:bg-[#b80e0e]">
              Contato
            </h3>
            <div className="flex items-center space-x-3 group">
              <FaMapMarkerAlt className="text-[#b80e0e] group-hover:text-white transition-colors duration-300" />
              <span className="text-[#8E8E8E] group-hover:text-white transition-colors duration-300">São Paulo - SP</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-[#b80e0e]" />
              <a
                href="https://wa.me/55199042072?text=Olá%20Thomas%2C%20vim%20pelo%20seu%20site."
                className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300"
              >
                Fale Comigo no WhatsApp
              </a>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold mb-6 text-[#b80e0e] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-12 after:h-[2px] after:bg-[#b80e0e]">
              Redes Sociais
            </h3>
            <div className="flex space-x-6">
              <a
                href="https://github.com/devthmedu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300 transform hover:scale-110"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/devthm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300 transform hover:scale-110"
              >
                <FaLinkedinIn size={24} />
              </a>
              <a
                href="https://www.instagram.com/_devthm/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300 transform hover:scale-110"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Currículo */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-6 text-[#b80e0e] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-[#b80e0e]">
              Currículo
            </h3>
            <ResumeModal />
          </div>

          {/* Voltar ao Topo */}
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-xl font-bold mb-6 text-[#b80e0e] relative after:content-[''] after:absolute after:bottom-[-8px] after:left-1/2 after:transform after:-translate-x-1/2 after:w-12 after:h-[2px] after:bg-[#b80e0e]">
              Navegação
            </h3>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="group bg-[#b80e0e] text-white py-3 px-6 rounded-full hover:bg-[#a60c0c] transition duration-300 flex items-center space-x-2 transform hover:scale-105"
            >
              <FaChevronUp className="group-hover:animate-bounce" />
              <span>Voltar ao Topo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-12 pt-8 border-t border-[#2a2a2a] text-sm text-[#8E8E8E]">
        <p className="hover:text-white transition-colors duration-300">
          © {new Date().getFullYear()} Thomas Eduardo. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
