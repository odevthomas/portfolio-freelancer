import React, { useState } from "react";
import { Plus, Minus, Info, CheckCircle, Clock, Globe, Code, Database, Gauge, Cloud, Users, Star } from "lucide-react";

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "Quais tecnologias você domina no desenvolvimento frontend?",
      answer: "Tenho sólida experiência com React.js, Next.js, TypeScript e JavaScript (ES6+). Trabalho com HTML5, CSS3 e Tailwind CSS para criar interfaces modernas e responsivas. Também utilizo Redux e Context API para gerenciamento de estado.",
      icon: <Code className="w-5 h-5 text-black" />
    },
    {
      question: "Você tem experiência com desenvolvimento full-stack?",
      answer: "Sim! Além do frontend, trabalho com Node.js, Express.js e bancos de dados como MongoDB e Firebase. Tenho experiência na construção de APIs RESTful e integração com diversos serviços.",
      icon: <Database className="w-5 h-5 text-black" />
    },
    {
      question: "Como você garante a qualidade e performance dos projetos?",
      answer: "Utilizo ferramentas como Google Lighthouse e PageSpeed Insights para otimização. Implemento técnicas como code splitting, lazy loading e cache para melhorar a performance. Meus projetos costumam atingir pontuação 95+ em métricas de performance.",
      icon: <Gauge className="w-5 h-5 text-black" />
    },
    {
      question: "Qual é sua experiência com DevOps e deploy?",
      answer: "Trabalho com Git, GitHub Actions para CI/CD, Docker e serviços AWS. Tenho experiência com deploy em plataformas como Vercel e implementação de pipelines automatizados que reduzem significativamente o tempo de deploy.",
      icon: <Cloud className="w-5 h-5 text-black" />
    },
    {
      question: "Como você lida com projetos em equipe?",
      answer: "Tenho experiência em trabalhar com metodologias ágeis, utilizando Git para controle de versão e realizando code reviews. Valorizo a comunicação clara e documentação adequada para garantir que todos estejam alinhados.",
      icon: <Users className="w-5 h-5 text-black" />
    },
    {
      question: "Quais são seus diferenciais como desenvolvedor?",
      answer: "Além das habilidades técnicas, tenho certificações AWS e Google Analytics. Possuo experiência comprovada em otimização de performance, tendo reduzido tempos de carregamento em até 60% e implementado soluções escaláveis que processam grandes volumes de dados.",
      icon: <Star className="w-5 h-5 text-black" />
    }
  ];

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 sm:px-8 py-16"
    id="faq"
    >
      {/* Camada de opacidade */}
      <div className="absolute inset-0 bg[#0a0a0a0a0a0a1d]opacity-50"></div>

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
                className="flex items-center justify-between w-full p-6 text-left text-white bg[#0a0a0a0a0a0a1d]rounded-lg"
                onClick={() => toggleExpanded(index)}
              >
                <h2 className="font-semibold text-lg">
                  {faq.question}
                </h2>
                <span className="text-white bg[#0a0a0a0a0a0a1d]rounded-full p-2">
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