import React from "react";

const CallToAction = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-0 sm:px-6 py-24"
      style={{
        backgroundImage: 'url("/imagens fundos/cta.jpg")', // Caminho para a imagem do salão
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
          className="inline-block bg-[#b80e0e] hover:bg-[#000] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mt-6 sm:mt-8 lg:mt-12 max-w-xs"
        >
          Clique para iniciar essa jornada de sucesso!
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
      `}</style>
    </section>
  );
};

export default CallToAction;
