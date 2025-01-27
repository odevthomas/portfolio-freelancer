import React from "react";
import { MessageCircle, Star, Calendar } from "lucide-react";

const Depoimentos = () => {
  const depoimentos = [
    {
      cliente: "João Silva",
      texto: "Cara, você é muito bom, assim que puder vamos expandir nossa parceria.",
      avaliacao: 5,
      data: "Mar 2024",
      cargo: "CEO TechStart"
    },
    {
      cliente: "Maria Oliveira",
      texto: "Oii, ficou perfeito! Minha mãe adorou a cor e os detalhes do site da loja.",
      avaliacao: 5,
      data: "Fev 2024",
      cargo: "Proprietária Boutique Elegance"
    },
    {
      cliente: "Thomas",
      texto: "Gostei muito do seu trabalho e adorei o layout do nosso site. Superou minhas expectativas!",
      avaliacao: 5,
      data: "Jan 2024",
      cargo: "Diretor Criativo"
    },
    {
      cliente: "Carlos Almeida",
      texto: "Eu curti muito essa API que você colocou no site. O sistema ficou muito mais rápido!",
      avaliacao: 5,
      data: "Jan 2024",
      cargo: "CTO Inovação Tech"
    },
  ];

  const renderEstrelas = (quantidade) => {
    return [...Array(quantidade)].map((_, index) => (
      <Star
        key={index}
        size={16}
        className="text-yellow-400 fill-yellow-400"
      />
    ));
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-20 px-4 sm:px-6 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#dc0000] opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#dc0000] opacity-10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Feedback dos
            <span className="text-[#dc0000] relative inline-block ml-3">
              Clientes
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#dc0000] to-transparent"></span>
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Descubra o que nossos clientes dizem sobre nossas soluções e como estamos transformando suas ideias em realidade.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-2xl p-8 transform transition-all duration-500 hover:scale-[1.02] hover:border-[#dc0000] backdrop-blur-lg shadow-lg hover:shadow-[#dc0000]/20"
            >
              {/* Cabeçalho do Card */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-gradient-to-br from-[#dc0000] to-[#ff4d1c] rounded-full p-3 shadow-lg">
                    <MessageCircle size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-xl">
                      {depoimento.cliente}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">{depoimento.cargo}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 bg-gray-800/50 px-3 py-1 rounded-full">
                  <Calendar size={16} className="text-[#dc0000]" />
                  <span className="text-gray-300 text-sm font-medium">{depoimento.data}</span>
                </div>
              </div>

              {/* Conteúdo do Depoimento */}
              <p className="text-gray-300 mb-6 leading-relaxed text-lg italic">
                "{depoimento.texto}"
              </p>

              {/* Avaliação */}
              <div className="flex items-center space-x-1 bg-gray-800/30 w-fit px-3 py-1 rounded-full">
                {renderEstrelas(depoimento.avaliacao)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="https://api.whatsapp.com/send?phone=551999042072&text=Oi, estou interessado!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-[#dc0000] to-[#ff4d1c] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#dc0000]/50 transition-all duration-300 transform hover:scale-105 text-lg"
          >
            Quero um Projeto Assim
          </a>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
