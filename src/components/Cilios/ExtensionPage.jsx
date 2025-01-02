import React from "react";

const ExtensionPage = () => {
  const whatsappLink = "https://wa.me/55xxxxxxxxxx?text=Oi%20Gil%20Barbosa,%20vim%20pelo%20site!%20E%20quero%20saber%20mais%20sobre%20cílios%20perfeitos.";

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Background Section */}
      <section
        className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center"
        style={{
          backgroundImage: 'url("/fotos/cta1.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent"></div>

        <div className="relative text-left text-white z-10 max-w-screen-xl w-full px-6 sm:px-12 py-12 md:py-16 lg:py-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight tracking-wide text-[#fff] drop-shadow-xl mb-8">
            Extensão de Cílios
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed drop-shadow-lg mb-6 text-justify">
            Realce sua beleza com cílios volumosos e irresistíveis, que deixam seu olhar mais intenso e fascinante!
          </p>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-200 leading-relaxed drop-shadow-lg mb-8 text-justify">
            Agende seu atendimento agora mesmo e descubra como a extensão de cílios pode transformar sua confiança e elegância!
          </p>

          <div className="flex flex-col sm:flex-row sm:space-x-6 justify-center">
           <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#F1A7B6] hover:bg-[#A04C5C] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Entre em Contato pelo WhatsApp
          </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExtensionPage;
