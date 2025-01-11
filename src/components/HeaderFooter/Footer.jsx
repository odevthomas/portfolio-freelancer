import React from "react";
import ResumeModal from "../Ferramentas/ResumeModal"; // Ajuste o caminho conforme necessário

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#171717] to-[#0a0a0a] py-8 text-[#000] overflow-auto"> {/* Adicionado overflow-auto */}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between items-center gap-8">

          {/* Informações de Contato */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-[#b80e0e]">Contato</h3>
            <div className="flex items-center mb-3">
              <span className="text-sm sm:text-base text-[#fff]">
                São Paulo - SP,
              </span>
            </div>
            <div className="flex items-center mb-3">
              <span className="text-sm sm:text-base text-[#fff]">
                Fale Comigo:
                <a
                  href="https://wa.me/55199042072?text=Olá%20Thomas%2C%20vim%20pelo%20seu%20site."
                  className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300 ml-1"
                >
                  WhatsApp
                </a>
              </span>
            </div>
          </div>

          {/* Redes Sociais */}
          <div className="w-full sm:w-1/2 lg:w-1/4">
            <h3 className="text-lg font-semibold mb-4 text-[#b80e0e]">Redes Sociais</h3>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="https://github.com/devthmedu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/devthm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/_devthm/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8E8E8E] hover:text-[#b80e0e] transition duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Botão para Ver Currículo */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
            <ResumeModal /> {/* Incluindo o modal aqui */}
          </div>

          {/* Botão Voltar ao Topo */}
          <div className="w-full sm:w-1/2 lg:w-1/4 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="bg-[#b80e0e] text-white py-2 px-6 rounded-full hover:bg-[#a60c0c] transition duration-300 mt-4 sm:mt-0"
            >
              Voltar ao Topo
            </button>
          </div>

        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 text-sm text-[#8E8E8E]">
        © {new Date().getFullYear()} Thomas Eduardo. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;