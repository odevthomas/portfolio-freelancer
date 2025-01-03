import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Ícones para o Accordion

const CommonQuestions = () => {
  // Estado para controle de quais perguntas estão abertas
  const [openIndex, setOpenIndex] = useState(null);

  // Função para alternar o estado do accordion
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Fecha a pergunta se já estiver aberta
  };

  const questions = [
    {
      question: 'Quanto tempo as extensões de cílios duram?',
      answer:
        'As extensões de cílios podem durar de 2 a 3 semanas, dependendo dos cuidados e do crescimento natural dos cílios.',
    },
    {
      question: 'As extensões de cílios danificam os cílios naturais?',
      answer:
        'Se aplicadas corretamente e com cuidados adequados, as extensões de cílios não danificam os cílios naturais.',
    },
    {
      question: 'Posso usar máscara de cílios com as extensões?',
      answer:
        'Não é necessário usar máscara, pois as extensões já proporcionam volume e curvatura. No entanto, caso use, escolha uma máscara à prova d\'água, sem óleo, para evitar danificar a cola.',
    },
    {
      question: 'Qual tipo de cola é usada para as extensões de cílios?',
      answer:
        'A cola mais comum é à base de cianoacrilato, que é segura para a área dos olhos, mas pode variar em termos de secagem, resistência à água e durabilidade. Sempre consulte um profissional para escolher a melhor cola para o seu tipo de pele.',
    },
    {
      question: 'Como posso remover as extensões de cílios?',
      answer:
        'As extensões devem ser removidas por um profissional para evitar danos aos cílios naturais. Não tente removê-las em casa com força ou produtos inadequados.',
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#171717] to-[#171717] py-16 text-white">
      <div className="container mx-auto text-center px-6 sm:px-8">
        {/* Título da seção */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#fff] mb-8">
          Dúvidas Técnicas Comuns
        </h2>

        {/* Parágrafo explicativo */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          Abaixo estão algumas perguntas técnicas frequentemente feitas sobre a aplicação e manutenção das extensões de cílios:
        </p>

        {/* Accordion de perguntas */}
        <div className="space-y-4">
          {questions.map((item, index) => (
            <div key={index} className="bg-[#00000080] p-6 rounded-lg shadow-lg">
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-semibold text-[#fff]">{item.question}</h3>
                {openIndex === index ? (
                  <FaChevronUp className="text-[#fff] text-2xl" />
                ) : (
                  <FaChevronDown className="text-[#fff] text-2xl" />
                )}
              </div>
              {openIndex === index && (
                <p className="text-gray-200 mt-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
