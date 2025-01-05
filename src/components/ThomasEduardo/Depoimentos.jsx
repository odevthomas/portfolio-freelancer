import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Ícone de mensagem estilo WhatsApp

const Depoimentos = () => {
  const mensagens = [
    { cliente: "João Silva", texto: "Fiquei impressionado com o trabalho realizado! O site ficou incrível e super funcional. Com certeza voltarei a trabalhar com essa equipe!" },
    { cliente: "João Silva", texto: "Desde que lançamos o novo site, tivemos um aumento significativo no tráfego. A experiência do usuário melhorou muito, e a conversão foi otimizada!" },
    { cliente: "Maria Oliveira", texto: "A equipe fez um trabalho excepcional! O site não só atendeu às minhas expectativas, como superou todas elas. Estou muito satisfeita!" },
    { cliente: "Maria Oliveira", texto: "A agilidade e a atenção aos detalhes foram impressionantes. Minha empresa está muito mais visível online agora, e os resultados começaram a aparecer rapidamente." },
    { cliente: "Carlos Almeida", texto: "Eu não sabia como meu site poderia ser tão funcional e bonito ao mesmo tempo. A equipe realmente entende do assunto e trouxe soluções criativas." },
    { cliente: "Carlos Almeida", texto: "A parceria foi excelente. O design ficou moderno e a navegação ficou muito intuitiva. Recebi muitos elogios de clientes e parceiros!" },
    { cliente: "Ana Souza", texto: "O resultado final ficou além das minhas expectativas! Eles realmente sabem como traduzir nossas ideias para a web de forma eficaz e atraente." },
    { cliente: "Ana Souza", texto: "Estou muito satisfeita com o trabalho realizado. O novo site ficou leve. Definitivamente, aumentou nossa credibilidade!" },
  ];

  const [currentMessageIndices, setCurrentMessageIndices] = useState([0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessageIndices((prevIndices) => {
        const nextIndex1 = (prevIndices[0] + 2) % mensagens.length;
        const nextIndex2 = (prevIndices[1] + 2) % mensagens.length;
        return [nextIndex1, nextIndex2];
      });
    }, 8000); // Troca a mensagem a cada 8 segundos

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

        {/* Mensagens do cliente estilo notificação */}
        <div className="flex flex-col items-center space-y-4 mt-10">
          <AnimatePresence>
            {currentMessageIndices.map((index) => (
              <motion.div
                key={index}
                className={`bg-[#000] text-[#000] rounded-lg shadow-lg p-4 flex items-start space-x-3 w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 ${
                  index % 2 === 0 ? "self-start" : "self-end"
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 1.2 }}
                style={{
                  borderRadius: "20px",
                  padding: "15px",
                  position: "relative",
                  margin: "10px 0",
                  maxWidth: "80%",
                  backgroundColor: index % 2 === 0 ? "#808080" : "#808080", // Cores estilo WhatsApp
                }}
              >
                <div className="flex flex-col">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="border border-[#808080] rounded p-2 bg-[#808080] mr-2">
                        <MessageCircle size={24} className="text-[#4CAF50]" />
                      </div>
                      <span className="text-sm">Mensagem</span>
                    </div>
                    <span className="text-xs text-gray-900">Agora</span>
                  </div>
                  <div className="text-sm font-semibold">{mensagens[index].cliente}</div>
                  <div className="text-sm">{mensagens[index].texto}</div>
                </div>
                <div
                  className={`absolute w-0 h-0 border-l-8 border-l-${index % 2 === 0 ? 'green-200' : 'white'} border-t-8 border-t-transparent ${
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