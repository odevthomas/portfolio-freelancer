import React, { useState } from 'react';
import { FaTimes, FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa';

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const trackDownload = () => {
    if (window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'Currículo',
        event_label: 'Download CV',
        value: 1
      });
    }
  };

  return (
    <div>
      <button
        onClick={openModal}
        className="bg-[#fb1603] text-white py-3 px-6 rounded-lg hover:bg-[#d31400] transition duration-300 font-semibold flex items-center gap-2"
      >
        <span>Ver Currículo</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-90" onClick={closeModal}></div>
          
          <div className="relative bg-[#111111] rounded-xl w-11/12 max-w-4xl max-h-[85vh] overflow-y-auto border border-gray-800">
            {/* Cabeçalho */}
            <div className="sticky top-0 bg-[#111111] p-6 border-b border-gray-800 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Thomas Eduardo</h2>
              <button onClick={closeModal} className="text-gray-400 hover:text-white transition-colors">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6">
              {/* Seção de Introdução */}
              <div className="mb-8">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex-1">
                    <h3 className="text-[#fb1603] text-lg font-semibold mb-2">Desenvolvedor Web Full Stack</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Desenvolvedor apaixonado por criar experiências digitais memoráveis, com mais de 2 anos de experiência em desenvolvimento web moderno.
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <a href="https://github.com/seu-github" target="_blank" rel="noopener noreferrer" 
                       className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                      <FaGithub className="w-6 h-6 text-white" />
                    </a>
                    <a href="https://linkedin.com/in/seu-linkedin" target="_blank" rel="noopener noreferrer"
                       className="bg-white/10 p-3 rounded-lg hover:bg-white/20 transition-colors">
                      <FaLinkedin className="w-6 h-6 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Grid de Informações */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Experiência */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Experiência</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-[#fb1603] font-medium">Desenvolvedor Frontend - LSG</h4>
                      <p className="text-gray-400 text-sm">2024 - Presente</p>
                      <ul className="text-gray-300 mt-2 space-y-1 list-disc list-inside">
                        <li>Desenvolvimento de interfaces modernas com React</li>
                        <li>Integração com APIs e serviços externos</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#fb1603] font-medium">Desenvolvedor Freelancer</h4>
                      <p className="text-gray-400 text-sm">2024 - Presente</p>
                      <ul className="text-gray-300 mt-2 space-y-1 list-disc list-inside">
                        <li>Desenvolvimento de soluções personalizadas</li>
                        <li>Gestão de projetos e relacionamento com clientes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Habilidades */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Habilidades</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-[#fb1603] font-medium mb-2">Frontend</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>React.js</li>
                        <li>JavaScript</li>
                        <li>Tailwind CSS</li>
                        <li>HTML5/CSS3</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#fb1603] font-medium mb-2">Backend</h4>
                      <ul className="text-gray-300 space-y-1">
                        <li>Firebase</li>
                        <li>Node.js</li>
                        <li>API REST</li>
                        <li>AWS</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Projetos */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Projetos Recentes</h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h4 className="text-[#fb1603] font-medium">Dashboard Empresarial</h4>
                      <p className="text-gray-300 text-sm mt-1">React + Firebase + Tailwind CSS</p>
                    </div>
                    <div className="bg-white/5 p-4 rounded-lg">
                      <h4 className="text-[#fb1603] font-medium">Sistema de Autenticação</h4>
                      <p className="text-gray-300 text-sm mt-1">Firebase Auth + React + Firestore</p>
                    </div>
                  </div>
                </div>

                {/* Educação */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white border-b border-gray-800 pb-2">Educação</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-[#fb1603] font-medium">AWS Cloud Computing</h4>
                      <p className="text-gray-400 text-sm">2023 - 2024</p>
                    </div>
                    <div>
                      <h4 className="text-[#fb1603] font-medium">DevOps</h4>
                      <p className="text-gray-400 text-sm">2023 - Pausado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contato */}
              <div className="mt-8 bg-white/5 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-4">Contato</h3>
                <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                  <div>
                    <p className="font-medium">Email:</p>
                    <p>developer.thomas@outlook.com.br</p>
                  </div>
                  <div>
                    <p className="font-medium">Telefone:</p>
                    <p>+55 19 99990-4207</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Rodapé com botões */}
            <div className="sticky bottom-0 bg-[#111111] p-6 border-t border-gray-800 flex justify-between items-center">
              <button
                onClick={() => {
                  trackDownload();
                  window.print();
                }}
                className="bg-white text-black py-2 px-6 rounded-lg hover:bg-gray-200 transition duration-300 flex items-center gap-2"
              >
                <FaDownload className="w-4 h-4" />
                <span>Baixar PDF</span>
              </button>
              <button
                onClick={closeModal}
                className="bg-[#fb1603] text-white py-2 px-6 rounded-lg hover:bg-[#d31400] transition duration-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResumeModal;
