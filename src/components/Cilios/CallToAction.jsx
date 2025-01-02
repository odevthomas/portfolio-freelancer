import React from 'react';

const CTA = () => {
  const whatsappLink = "https://wa.me/5511999999999?text=Oi%20Gil%20Barbosa,%20vim%20pelo%20site!%20E%20quero%20saber%20mais%20sobre%20cílios%20perfeitos.";

  return (
    <section className="bg-gradient-to-r from-pink-500 to-pink-600 text-white py-12 px-6 text-center rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold mb-4">Agende sua Consulta</h2>
      <p className="text-lg mb-6">Pronta para transformar seu olhar? Agende uma consulta com nossos especialistas em extensão de cílios e descubra o estilo perfeito para você!</p>
      <a 
        href={whatsappLink} 
        className="inline-block bg-[#b39482] hover:bg-[#b5876c] text-white py-3 px-8 rounded-full text-xl font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105"
      >
        Entre em Contato
      </a>
    </section>
  );
};

export default CTA;
