import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa'; // Ícone de fechar
import jsPDF from 'jspdf';

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

  // Função para gerar o PDF
  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Currículo de Thomas Eduardo", 10, 10);
    doc.text("Resumo: Desenvolvedor web com mais de 2 anos de experiência em desenvolvimento de aplicações web.", 10, 20);
    doc.text("Experiência:", 10, 30);
    doc.text("1. Desenvolvedor Frontend na Empresa XYZ (2021 - Presente)", 10, 40);
    doc.text("2. Estágio em Desenvolvimento Web na Empresa ABC (2020 - 2021)", 10, 50);
    doc.text("Educação: Bacharel em Ciência da Computação - Universidade ABC (2018 - 2022)", 10, 60);
    doc.save("curriculo_thomas_eduardo.pdf");
  };

  return (
    <div>
      {/* Botão para abrir o modal */}
      <button
        onClick={openModal}
        className="bg-[#000000] text-white py-2 px-4 rounded-full  hover:bg-[#d31400] transition duration-300"
      >
        Ver Currículo
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-11/12 max-w-2xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">Currículo de Thomas Eduardo</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-800">
                <FaTimes className="w-6 h-6" />
              </button>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Resumo</h3>
              <p>
                Desenvolvedor web com mais de 2 anos de experiência em desenvolvimento de
                aplicações web. Especializado em React, JavaScript, e soluções personalizadas para
                atender às necessidades dos clientes.
              </p>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Experiência</h3>
              <ul className="list-disc list-inside">
                <li>Desenvolvedor Frontend na Empresa XYZ (2021 - Presente)</li>
                <li>Estágio em Desenvolvimento Web na Empresa ABC (2020 - 2021)</li>
              </ul>
            </div>

            <div className="mb-4">
              <h3 className="font-semibold">Educação</h3>
              <p>
                Bacharel em Ciência da Computação - Universidade ABC (2018 - 2022)
              </p>
            </div>

            {/* Botão para gerar PDF */}
            <div className="flex justify-between">
              <button
                onClick={generatePDF}
                className="bg-[#4CAF50] text-white py-2 px-4 rounded hover:bg-[#45a049] transition duration-300"
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