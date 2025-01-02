import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Ícones de seta para expandir e contrair

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Qual é o prazo de entrega do meu pedido?",
      answer: "O prazo de entrega depende da sua localização. Em média, nossos pedidos são entregues entre 3 a 7 dias úteis."
    },
    {
      question: "Posso alterar ou cancelar meu pedido depois de finalizado?",
      answer: "Sim, mas recomendamos entrar em contato com nosso atendimento o mais rápido possível para alterações ou cancelamentos."
    },
    {
      question: "Como faço para rastrear meu pedido?",
      answer: "Você receberá um código de rastreamento por e-mail assim que o seu pedido for enviado. Basta acessar o link para ver o status da entrega."
    },
    {
      question: "Vocês entregam em todo o Brasil?",
      answer: "Sim, realizamos entregas para todo o território nacional."
    },
    {
      question: "Quais formas de pagamento vocês aceitam?",
      answer: "Aceitamos cartões de crédito, débito, PIX e boletos bancários."
    },
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Alterna a visibilidade da resposta
  };

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#f8f8f8] mb-12">
          Perguntas Frequentes (FAQ)
        </h2>

        <div className="flex flex-col sm:flex-row justify-center">
          {/* Perguntas e Respostas */}
          <div className="w-full sm:w-3/4 lg:w-2/3">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 border border-white rounded-lg overflow-hidden">
                <div
                  className="flex items-center cursor-pointer p-4 text-lg font-semibold text-[#f8f8f8] transition duration-300 ease-in-out hover:bg-gray-800"
                  onClick={() => toggleAnswer(index)}
                >
                  <div className="mr-3">
                    {openIndex === index ? (
                      <FaChevronUp className="text-[#f8f8f8]" />
                    ) : (
                      <FaChevronDown className="text-[#f8f8f8]" />
                    )}
                  </div>
                  {faq.question}
                </div>

                {/* Resposta com animação de slide */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out p-4 ${
                    openIndex === index ? 'max-h-screen' : 'max-h-0'
                  }`}
                >
                  {openIndex === index && <p className="text-base text-gray-300">{faq.answer}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
