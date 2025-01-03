import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
  const faqs = [
    {
      question: "Qual linguagem você usa para desenvolver meu site?",
      answer: "Eu utilizo as linguagens mais atuais para o desenvolvimento de sites, como HTML, CSS, JavaScript, React para frontend e Node.js para o backend. Depende do seu projeto, podemos usar outras tecnologias como Vue.js, Angular ou até mesmo PHP, caso o projeto precise de uma tecnologia específica. O mais importante é garantir que a solução seja eficaz e escalável para o seu negócio."
    },
    {
      question: "Qual é o prazo de entrega do meu site?",
      answer: "O prazo de entrega depende de alguns fatores como a complexidade do design, funcionalidades personalizadas e o conteúdo que será integrado ao site. Se você já tiver um design pronto, o prazo é de 4 a 5 dias. Se for necessário criar um design do zero ou adicionar funcionalidades avançadas, o prazo pode ser estendido até 10 dias. O importante é que o resultado final atenda às suas expectativas e necessidades."
    },
    {
      question: "O que vem com o meu site?",
      answer: "Ao contratar o meu serviço, você recebe um site totalmente funcional e responsivo. O site inclui um design moderno e otimizado para SEO, garantindo que ele seja facilmente encontrado nos motores de busca. Dependendo do projeto, também posso incluir integração com ferramentas de análise, funcionalidades como e-commerce, blogs ou sistemas de gerenciamento de conteúdo (CMS)."
    },
    {
      question: "Quem cuida do domínio e da hospedagem?",
      answer: "O domínio é de responsabilidade do cliente. Ou seja, você pode escolher o nome de domínio que deseja e registrá-lo com qualquer provedor de sua preferência. Já a hospedagem, eu posso fornecer utilizando o meu servidor, com total suporte técnico. Se você preferir, posso indicar fornecedores de hospedagem que atendem suas necessidades, incluindo configurações específicas para sites de alto tráfego ou e-commerce."
    },
    {
      question: "Posso fazer mudanças no meu site depois de pronto?",
      answer: "Sim, você pode fazer ajustes e melhorias após a entrega do site. Podemos negociar pacotes de manutenção, onde faço as alterações necessárias sempre que você precisar, ou, caso prefira, posso fornecer treinamento para que você mesmo faça alterações no conteúdo do site, como textos, imagens e outros."
    },
    {
      question: "Como posso rastrear o andamento do meu projeto?",
      answer: "Durante o desenvolvimento do seu site, você terá total transparência e acompanhamento. Você terá acesso a um painel de progresso, onde poderá visualizar as etapas do projeto e dar feedback a qualquer momento. Além disso, realizaremos reuniões periódicas, onde discutiremos o andamento e faremos ajustes conforme necessário, garantindo que tudo esteja alinhado com suas expectativas."
    },
  ];

  const [activeFAQIndex, setActiveFAQIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveFAQIndex(activeFAQIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-cover bg-center bg-fixed py-16 sm:py-24"
      style={{
        backgroundImage: 'url("/imagens fundos/cta-about.jpg")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center text-white mb-12">
          Dúvidas Frequentes sobre o Desenvolvimento do Seu Site
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-xl rounded-lg p-6 cursor-pointer hover:bg-gray-100 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center mb-3">
                <strong className="text-lg sm:text-xl text-gray-800">{faq.question}</strong>
                <span className="text-xl text-gray-500">{activeFAQIndex === index ? "−" : "+"}</span>
              </div>
              {activeFAQIndex === index && (
                <div className="mt-3 text-sm sm:text-base text-gray-700">
                  <p>{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
