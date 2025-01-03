import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Depoimentos = () => {
  const mensagens = [
    { texto: "Oii, vamos fechar com você, adorei sua sinceridade! 🙌", cliente: "Joana" },
    { texto: "Oi, o site ficou lindo! 😍", cliente: "Ricardo" },
    { texto: "Oi, vi seu perfil no site de freelancer e preciso de otimizar meu site. 🚀", cliente: "Lucas" },
    { texto: "O site ficou perfeito, mal posso esperar para lançar! 🎉", cliente: "Fernanda" },
    { texto: "Incrível o trabalho de otimização que você fez no meu site! 💻", cliente: "Carlos" },
    { texto: "Adorei o projeto, você realmente entendeu o que eu queria. 😊", cliente: "Mariana" },
  ];

  const [currentMessageIndices, setCurrentMessageIndices] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndices((prevIndices) => {
        const nextIndex1 = (prevIndices[0] + 2) % mensagens.length;
        const nextIndex2 = (prevIndices[1] + 2) % mensagens.length;
        return [nextIndex1, nextIndex2];
      });
    }, 5000); // Troca a mensagem a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="py-16 sm:py-20 md:py-32 bg-cover bg-center relative w-full"
      aria-labelledby="depoimentos"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#3d3d3d00] to-[#0000004e] opacity-85"></div>

      <div className="relative w-full px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center mt-4">
          <motion.h3
            className="text-white font-semibold mt-7 text-lg sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Criatividade e Resultados em Destaque
          </motion.h3>

          <motion.p
            className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mt-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Clientes Satisfeitos Comprovam
          </motion.p>

          <motion.p
            className="mt-7 text-white text-base sm:text-lg md:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            Veja o que alguns dos nossos clientes têm a dizer sobre a nossa parceria e o impacto gerado em seus negócios. Com criatividade e expertise, transformamos ideias em soluções digitais que impressionam.
          </motion.p>
        </div>

        {/* Mensagens do cliente estilo iPhone */}
        <div className="flex flex-col items-center space-y-4 mt-10">
          <AnimatePresence>
            {currentMessageIndices.map((index) => (
              <motion.div
                key={index}
                className={`bg-white text-black rounded-lg shadow-lg p-4 flex items-start space-x-3 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                style={{
                  borderRadius: "20px",
                  padding: "15px",
                  position: "relative",
                  margin: "10px 0",
                  maxWidth: "80%",
                }}
              >
                <div className="flex flex-col">
                  <strong className="text-lg">{mensagens[index].cliente}</strong>
                  <div className="text-sm">{mensagens[index].texto}</div>
                </div>
                <div
                  className={`absolute w-0 h-0 border-l-8 border-l-white border-t-8 border-t-transparent ${
                    index % 2 === 0
                      ? "top-1/2 left-0 transform -translate-y-1/2"
                      : "top-1/2 right-0 transform -translate-y-1/2"
                  }`}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
};

export default Depoimentos;
