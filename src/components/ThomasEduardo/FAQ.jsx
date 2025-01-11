import React, { useState } from "react";
import { Plus, Minus, Info, CheckCircle, Clock, Globe } from "lucide-react";

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "Qual linguagem você usa para desenvolver meu site?",
      answer: "Eu utilizo as linguagens mais atuais para o desenvolvimento de sites, como HTML, CSS, JavaScript, React para frontend e Node.js para o backend. Podemos usar outras tecnologias como Vue.js, Angular ou PHP, se necessário.",
      icon: <Info className="w-5 h-5 text-black" />
    },
    {
      question: "Qual é o prazo de entrega do meu site?",
      answer: "O prazo de entrega depende da complexidade do design e funcionalidades. Em geral, um design pronto leva de 4 a 5 dias, enquanto projetos mais complexos podem levar até 10 dias.",
      icon: <Clock className="w-5 h-5 text-black" />
    },
    {
      question: "O que vem com o meu site?",
      answer: "Você recebe um site funcional, responsivo e otimizado para SEO. Dependendo do projeto, podemos incluir integração com ferramentas de análise, e-commerce ou sistemas de gerenciamento de conteúdo.",
      icon: <CheckCircle className="w-5 h-5 text-black" />
    },
    {
      question: "Quem cuida do domínio e da hospedagem?",
      answer: "O domínio é de responsabilidade do cliente. A hospedagem pode ser fornecida por mim ou indicada conforme suas necessidades.",
      icon: <Globe className="w-5 h-5 text-black" />
    },
    {
      question: "Posso fazer mudanças no meu site depois de pronto?",
      answer: "Sim! Podemos negociar pacotes de manutenção ou eu posso fornecer treinamento para que você faça as alterações necessárias.",
      icon: <CheckCircle className="w-5 h-5 text-black" />
    },
    {
      question: "Como posso rastrear o andamento do meu projeto?",
      answer: "Você terá acesso a um painel de progresso e realizaremos reuniões periódicas para garantir que tudo esteja alinhado com suas expectativas.",
      icon: <Info className="w-5 h-5 text-black" />
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-8 py-16"
    id="faq"
    >
      {/* Camada de opacidade */}
      <div className="absolute inset-0 bg[#0000001d]opacity-50"></div>

      <div className="container mx-auto relative px-6 text-white">
        {/* Título da seção */}
        <h3 className="text-4xl font-extrabold text-center mb-12 tracking-wide">
          Perguntas Frequentes sobre Como Impulsionar Seu Negócio Online
        </h3>

        {/* Container de Grid - Uma coluna em todas as telas */}
        <div className="grid grid-cols-1 gap-8">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left text-white bg[#0000001d]rounded-lg"
                onClick={() => toggleExpanded(index)}
              >
                <h2 className="font-semibold text-lg">
                  {faq.question}
                </h2>
                <span className="text-white bg[#0000001d]rounded-full p-2">
                  {expanded === index ? (
                    <Minus className="w-6 h-6" />
                  ) : (
                    <Plus className="w-6 h-6" />
                  )}
                </span>
              </button>

              {/* Exibe a resposta somente se esta FAQ estiver expandida */}
              {expanded === index && (
                <>
                  <hr className="border-t-2 border-[#fff]" />
                  <div className="flex items-start p-6 text-base text-gray-300">
                    {faq.icon}
                    <p className="ml-2">{faq.answer}</p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;