import React from "react";

const Hero = () => {
  const whatsappLink = "https://wa.me/55xxxxxxxxxx?text=Oi%20Gil%20Barbosa,%20vim%20pelo%20site!%20E%20quero%20saber%20mais%20sobre%20cílios%20perfeitos.";

  return (
    <section
      className="relative w-full h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: 'url("/imagens fundos/img5.jpeg")', // Caminho para a imagem do salão
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      {/* Sombreado na imagem de fundo */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#000000d4] to-transparent"></div>

      <div className="relative flex flex-col items-center justify-center w-full px-6 py-8 md:py-12 lg:py-16 text-white z-10">
        <div className="flex flex-col justify-center items-center text-center mb-8 lg:mb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-wide text-white drop-shadow-2xl mb-4">
            Desenvolvedor Frontend | Web | Design
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed drop-shadow-lg mb-6">
            Transforme sua presença online com soluções criativas e de alta qualidade. Especializado em design e desenvolvimento de sites, trazendo resultados que impressionam.
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#b80e0e] hover:bg-[#000] text-white font-semibold py-3 px-6 rounded-lg transition duration-300 mt-6 sm:mt-8 lg:mt-12"
            >
              Entre em Contato pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
