import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Ícone do WhatsApp

const SeçãoAbordagemÚnica = () => {
  const [buttonText, setButtonText] = useState('Fale comigo no WhatsApp'); // Estado para o texto do botão

  const handleMouseEnter = () => {
    setButtonText('Opa, é só clicar que já te respondo!');
  };

  const handleMouseLeave = () => {
    setButtonText('Vamos Conversar');
  };

  const message = "Olá, gostaria de saber mais sobre os serviços!"; // Mensagem pré-definida
  const whatsappNumber = "551999042072"; 

  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-6 sm:px-8 py-16"
      style={{
        backgroundImage: 'url("/bg-fundo-about.png")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0000001d] to-[#00000000]"></div>

      <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 py-10 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Texto e descrição */}
        <div className="text-white w-full lg:w-1/2 text-left flex flex-col justify-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-1 font-extrabold leading-tight text-[#f8f8f8] drop-shadow-2xl">
            Transformando Ideias em Experiências
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mt-6 mb-1 text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Minha abordagem inovadora no design de interfaces digitais combina
            criatividade com praticidade, criando soluções que não apenas encantam,
            mas também oferecem uma experiência fluida e intuitiva.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed drop-shadow-md max-w-full text-justify">
            Cada projeto é uma oportunidade de reinventar a forma como as pessoas
            interagem com a tecnologia, convertendo ideias abstratas em experiências
            reais que marcam e conquistam os usuários.
          </p>

          {/* Botão do WhatsApp */}
          <div className="mt-6">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="inline-block bg-[#dc0000] text-white py-3 px-6 text-lg transition duration-300 w-full sm:w-auto hover:bg-[#b23012] shadow-lg transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#dc0000] focus:ring-opacity-50 text-center rounded-full"
            >
              <FaWhatsapp className="inline-block mr-2 text-2xl" />
              {buttonText}
            </a>
          </div>
        </div>

        {/* Imagem em destaque */}
        <div className="relative w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">
          <img
            src="/computer.png"
            alt="Profissional demonstrando confiança em um ambiente de trabalho moderno."
            className="rounded-lg w-full h-auto object-cover transition-transform duration-300 transform hover:scale-105"
            style={{
              maxWidth: '100%',
              maxHeight: '100%',
            }}
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#00000099] to-transparent opacity-60"></div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Montserrat:wght@400;600&display=swap');

        h2 {
          font-family: 'Roboto', sans-serif;
        }

        p {
          font-family: 'Montserrat', sans-serif;
        }

        .hover\:scale-105:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default SeçãoAbordagemÚnica;