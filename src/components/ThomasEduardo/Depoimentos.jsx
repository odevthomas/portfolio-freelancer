import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Depoimentos = () => {
  const mensagens = [
    { texto: "Oi Thomas, tudo bem? Chegou um LED incrível hoje! 😊", cliente: "Carolina", timestamp: "Recebida há 15 minutos", localização: "RJ" },
    { texto: "Oi Thomas, estou muito empolgado com a nossa campanha! 🚀", cliente: "Izabele", timestamp: "Recebida há 50 minutos", localização: "SP" },
    { texto: "Oii Thomas, acredita que meu bot está funcionando certinho? 🤖", cliente: "Julio", timestamp: "Recebida ontem", localização: "RJ" },
    { texto: "Boa tarde, olha, já agendei 6 clientes para esse fim de semana! 📅", cliente: "Rodolfo", timestamp: "Recebida hoje", localização: "SP" },
    { texto: "Oi Thomas, os resultados da última campanha foram incríveis! 🎉", cliente: "Matheus", timestamp: "Recebida há 2 horas", localização: "RJ" },
    { texto: "Oi Thomas, estou vendo um aumento nas vendas, muito obrigado! 💰", cliente: "Paulo", timestamp: "Recebida há 30 minutos", localização: "SP" },
    { texto: "A Landing Page que criaram para minha campanha aumentou muito minha taxa de conversão! 😍", cliente: "Ana", timestamp: "Recebida há 3 dias", localização: "SP" },
    { texto: "O site novo ficou incrível, super fácil de navegar e responsivo em todos os dispositivos! 👍", cliente: "Eduardo", timestamp: "Recebida há 1 semana", localização: "RJ" },
    { texto: "Agora nossa loja online está vendendo muito mais! A integração de pagamento é perfeita! 🛒", cliente: "Gabriela", timestamp: "Recebida há 5 dias", localização: "SP" },
    { texto: "A otimização de SEO do meu site fez com que eu subisse no Google e aumentasse meu tráfego! 🚀", cliente: "Roberto", timestamp: "Recebida ontem", localização: "RJ" },
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
      style={{ backgroundImage: "url('/public/imagens fundos/cta-about.jpg')" }}
      aria-labelledby="depoimentos"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#3d3d3d00] to-[#0000004e] opacity-85"></div>

      <div className="relative w-full px-4 md:px-8">
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <motion.h3
            className="text-white font-semibold mt-7 text-lg sm:text-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
 Criatividade e Resultados em Destaque          </motion.h3>

          <motion.p
            className="text-white text-3xl sm:text-4xl md:text-5xl font-semibold mt-7"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
Clientes Satisfeitos Comprovam          </motion.p>

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
                className={`bg-white text-black rounded-lg shadow-lg p-4 flex items-start space-x-3 w-full md:w-3/4 lg:w-2/3 xl:w-1/2 ${
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
                <img
                  src={`/img/cliente${index + 1}.jpg`}
                  alt={mensagens[index].cliente}
                  className="w-12 h-12 rounded-full"
                />
                <div className="flex flex-col">
                  <strong className="text-lg">{mensagens[index].cliente}</strong>
                  <div className="text-sm">{mensagens[index].texto}</div>
                  <div className="text-xs text-gray-500">
                    {mensagens[index].timestamp} | Local: {mensagens[index].localização}
                  </div>
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

        {/* Seção de estatísticas ou outros componentes */}
        {/* <Statistics /> */}
      </div>
    </motion.section>
  );
};

export default Depoimentos  ;
