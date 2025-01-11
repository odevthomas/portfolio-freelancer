import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Ícone de fechar

const ResumeModal = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a visibilidade do modal

  // Função para abrir o modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Função para rastrear o download do CV no Google Analytics
  const trackDownload = () => {
    if (window.gtag) { // Verifica se o gtag está disponível
      window.gtag('event', 'download', {
        event_category: 'Currículo',
        event_label: 'Download CV',
        value: 1
      });
    }
  };

  return (
    <div>
      {/* Botão para abrir o modal */}
      <button
        onClick={openModal}
        className="bg-[#fb1603] text-white py-2 px-4 rounded hover:bg-[#d31400] transition duration-300"
      >
        Ver Currículo
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Currículo de Thomas Eduardo</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Olá! Sou Thomas Eduardo</h3>
              <p>
                Um desenvolvedor web apaixonado por criar experiências digitais memoráveis. Com mais de 2 anos de experiência, estou aqui para transformar suas ideias em realidade com soluções personalizadas e de alta qualidade.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Resumo</h3>
              <p>
                Sou especializado em React, JavaScript, Firebase e soluções sob medida para atender às suas necessidades. Minha abordagem combina inovação e funcionalidade para entregar resultados impressionantes.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Experiência</h3>
              <ul className="list-disc list-inside">
                <li>Desenvolvedor Freelancer (2024 - Presente)</li>
                <li>Desenvolvedor Frontend na Empresa XYZ (2021 - 2024)</li>
                <li>Estágio em Desenvolvimento Web na Empresa ABC (2020 - 2021)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Últimos Projetos</h3>
              <ul className="list-disc list-inside">
                <li>Desenvolvimento de Dashboard com React e Firebase</li>
                <li>Integração de autenticação com Firebase Auth e Firestore</li>
                <li>Criação de API para gerenciamento de dados e upload de arquivos</li>
                <li>Desenvolvimento de site institucional com React e Tailwind CSS</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Habilidades</h3>
              <p>
                - Proficiente em React.js, JavaScript, HTML5, CSS3, Tailwind CSS, Firebase e Vite.<br />
                - Experiência em integração de APIs e autenticação segura com Firebase Auth.<br />
                - Foco em design moderno e usabilidade.<br />
                - Conhecimentos em controle de versão e deploy contínuo.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Educação</h3>
              <p>
                AWS Cloud Computing (2023 - 2024)<br />
                DevOps (2023 - Pausado)
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Contato</h3>
              <p>
                <strong>Email:</strong> developer.thomas@outlook.com.br<br />
                <strong>Telefone:</strong> +55 19 99990-4207 (Brasil)
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold"></h3>
              <p>
                Estou aqui para potencializar seu projeto web com criatividade e inovação. Vamos juntos transformar suas ideias em experiências digitais incríveis! Entre em contato e vamos criar algo incrível juntos.
              </p>
            </div>

            {/* Botão para gerar PDF */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  trackDownload();  // Rastreando o download
                  window.print();
                }}
                className="bg-[#000000] text-white py-2 px-4 rounded hover:bg-[#d31400] transition duration-300"
              >
                Baixar PDF
              </button>
              <button
                onClick={closeModal}
                className="bg-[#fb1603] text-white py-2 px-4 rounded hover:bg-[#d31400] transition duration-300"
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
