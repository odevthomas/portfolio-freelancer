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
    <section className="relative w-full min-h-screen from-black via-gray-900 to-black py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Feedback dos
            <span className="text-[#dc0000]"> Clientes</span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto">
            Descubra o que nossos clientes dizem sobre nossas soluções e como estamos transformando suas ideias em realidade.
          </p>
        </div>

        {/* Grid de Depoimentos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {depoimentos.map((depoimento, index) => (
            <div
              key={index}
              className=" from-gray-900 to-black border border-gray-800 rounded-2xl p-6 transform transition-all duration-300 hover:scale-[1.02] hover:border-[#dc0000]"
            >
              {/* Cabeçalho do Card */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-[#dc0000] rounded-full p-2">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg">
                      {depoimento.cliente}
                    </h3>
                    <p className="text-gray-400 text-sm">{depoimento.cargo}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar size={16} className="text-gray-400" />
                  <span className="text-gray-400 text-sm">{depoimento.data}</span>
                  </div>
                </div>

              {/* Conteúdo do Depoimento */}
              <p className="text-gray-300 mb-4 leading-relaxed">
                "{depoimento.texto}"
              </p>

              {/* Avaliação */}
              <div className="flex items-center space-x-1">
                {renderEstrelas(depoimento.avaliacao)}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="https://api.whatsapp.com/send?phone=551999042072&text=Oi, estou interessado!"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-3 bg-[#dc0000] text-white font-semibold rounded-full hover:bg-[#ff4d1c] transition-all duration-300 transform hover:scale-105"
          >
            Quero um Projeto Assim
          </a>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
