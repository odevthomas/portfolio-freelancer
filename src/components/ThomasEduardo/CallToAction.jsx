import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa"; // Ícone do WhatsApp

const CallToAction = () => {
  const [buttonText, setButtonText] = useState("Clique para iniciar essa jornada de sucesso!"); // Texto inicial do botão

  // Função para mudar o texto ao passar o mouse
  const handleMouseEnter = () => {
    setButtonText("Opa, é só clicar que já te respondo!");
  };

  // Função para voltar o texto ao normal ao sair o mouse
  const handleMouseLeave = () => {
    setButtonText("Clique para iniciar essa jornada de sucesso!");
  };

  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-0 sm:px-6 py-24"
      style={{
        backgroundImage: 'url("/imagens fundos/cta.jpg")', // Caminho para a imagem do fundo
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Sobreposição para melhorar a legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000080] to-[#00000040]"></div>

      {/* Conteúdo alinhado à esquerda */}
      <div className="relative text-left text-white z-10 px-6 sm:px-12 max-w-6xl w-full">
        {/* Título Principal */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-[#f8f8f8] font-extrabold leading-tight drop-shadow-xl whitespace-nowrap overflow-hidden text-ellipsis">
          Presença Online?
        </h2>

        {/* Descrição do serviço */}
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200 leading-relaxed drop-shadow-md text-left max-w-3xl">
          Se você está buscando elevar sua presença online com uma abordagem criativa e inovadora, estou aqui para te ajudar.
        </p>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 text-gray-200 leading-relaxed drop-shadow-md text-left max-w-3xl">
          Vamos trabalhar juntos para destacar suas habilidades e conquistar novas oportunidades no mundo digital.
        </p>

        {/* Botão de Agendamento */}
        <a
          href="https://wa.me/5519994585020" // Link do WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="inline-block relative bg-[#e14216] text-white py-3 px-8 text-lg font-semibold transition duration-300 sm:w-auto hover:bg-[#b23012] shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#e14216] focus:ring-opacity-50 text-center rounded-md"
        >
          {/* Ícone do WhatsApp */}
          <FaWhatsapp className="inline-block mr-2 text-2xl" />
          {buttonText} {/* Texto que muda com hover */}
        </a>
      </div>

      {/* Importação das fontes do Google Fonts */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Raleway:wght@400;600&display=swap');

        h2 {
          font-family: 'Playfair Display', serif;
        }

        p {
          font-family: 'Raleway', sans-serif;
        }

        .hover\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default CallToAction;
