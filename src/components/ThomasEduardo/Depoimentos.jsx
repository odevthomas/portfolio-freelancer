import React from "react";
import { MessageCircle } from "lucide-react"; // Ícone de mensagem estilo WhatsApp

const Depoimentos = () => {
  const mensagens = [
    { cliente: "João Silva", texto: "Cara, você é muito bom, assim que puder vamos expandir nossa parceria." },
    { cliente: "Maria Oliveira", texto: "Oii, ficou perfeito! Minha mãe adorou a cor e os detalhes." },
    { cliente: "Thomas", texto: "Gostei muito do seu trabalho e adorei o layout do nosso site." },
    { cliente: "Carlos Almeida", texto: "Eu curti muito essa API que você colocou no site." },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-black relative w-full">
      <div className="container mx-auto px-6 text-white">
        {/* Título da seção */}
        <h3 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-4 text-center">
          Depoimentos dos Meus Clientes
        </h3>
        <p className="text-xl sm:text-2xl md:text-3xl text-gray-400 text-center mb-10">
          Veja o que as pessoas estão dizendo sobre os meus serviços personalizados e como eu ajudo a transformar suas ideias em realidade.
        </p>
        
        {/* Exibição das mensagens do cliente */}
        <div className="flex flex-col items-center space-y-6">
          {mensagens.map((mensagem, index) => (
            <div
              key={index}
              className={`bg-[#83838338] text-white rounded-lg shadow-lg p-6 flex items-start space-x-4 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 ${index % 2 === 0 ? "self-start" : "self-end"}`}
              style={{
                borderRadius: "15px",
                padding: "20px",
                position: "relative",
                margin: "10px 0",
                maxWidth: "80%",
              }}
            >
              <div className="flex flex-col w-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center">
                    <div className="border border-[#4CAF50] rounded-full p-2 bg-[#4CAF50] mr-2">
                      <MessageCircle size={24} className="text-white" />
                    </div>
                    <span className="text-lg font-semibold">Mensagem</span>
                  </div>
                  <span className="text-xs text-gray-300">Recebida</span>
                </div>
                <div className="text-sm text-gray-300">{mensagem.texto}</div>
              </div>
              <div
                className={`absolute w-0 h-0 border-l-8 border-l-${index % 2 === 0 ? 'green-300' : 'green-500'} border-t-8 border-t-transparent ${
                  index % 2 === 0
                    ? "top-1/2 left-0 transform -translate-y-1/2"
                    : "top-1/2 right-0 transform -translate-y-1/2"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
