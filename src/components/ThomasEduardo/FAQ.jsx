import React, { useState } from "react";
import { Plus, Minus, Code, Database, Gauge, Cloud, Users, Star } from "lucide-react";

const FaqSection = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpanded = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const faqs = [
    {
      question: "Quais tecnologias você domina no desenvolvimento frontend?",
      answer: "Tenho sólida experiência com React.js, Next.js, TypeScript e JavaScript (ES6+). Trabalho com HTML5, CSS3 e Tailwind CSS para criar interfaces modernas e responsivas. Também utilizo Redux e Context API para gerenciamento de estado.",
      icon: <Code className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
    },
    {
      question: "Você tem experiência com desenvolvimento full-stack?",
      answer: "Sim! Além do frontend, trabalho com Node.js, Express.js e bancos de dados como MongoDB e Firebase. Tenho experiência na construção de APIs RESTful e integração com diversos serviços.",
      icon: <Database className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
    },
    {
      question: "Como você garante a qualidade e performance dos projetos?",
      answer: "Utilizo ferramentas como Google Lighthouse e PageSpeed Insights para otimização. Implemento técnicas como code splitting, lazy loading e cache para melhorar a performance. Meus projetos costumam atingir pontuação 95+ em métricas de performance.",
      icon: <Gauge className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
    },
    {
      question: "Qual é sua experiência com DevOps e deploy?",
      answer: "Trabalho com Git, GitHub Actions para CI/CD, Docker e serviços AWS. Tenho experiência com deploy em plataformas como Vercel e implementação de pipelines automatizados que reduzem significativamente o tempo de deploy.",
      icon: <Cloud className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
    },
    {
      question: "Como você lida com projetos em equipe?",
      answer: "Tenho experiência em trabalhar com metodologias ágeis, utilizando Git para controle de versão e realizando code reviews. Valorizo a comunicação clara e documentação adequada para garantir que todos estejam alinhados.",
      icon: <Users className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
    },
    {
      question: "Quais são seus diferenciais como desenvolvedor?",
      answer: "Além das habilidades técnicas, tenho certificações AWS e Google Analytics. Possuo experiência comprovada em otimização de performance, tendo reduzido tempos de carregamento em até 60% e implementado soluções escaláveis que processam grandes volumes de dados.",
      icon: <Star className="w-4 h-4 md:w-5 md:h-5 text-red-600" />
    }
  ];

  return (
    <section 
      className="relative w-full py-6 md:py-8 lg:py-12 flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-black"
      id="faq"
    >
      <div className="absolute inset-0 bg-[rgb(0,0,0)]"></div>

      <div className="container mx-auto relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight text-center">
          Perguntas Frequentes
        </h2>

        <div className="grid grid-cols-1 gap-3 md:gap-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 rounded-xl transition-all duration-300 ease-in-out ${
                expanded === index 
                ? 'border-red-600 bg-[rgba(255,0,0,0.1)]' 
                : 'border-gray-800 hover:border-red-600'
              }`}
            >
              <button
                className="flex items-center justify-between w-full p-2 md:p-3 text-left"
                onClick={() => toggleExpanded(index)}
              >
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="flex-shrink-0">
                    {faq.icon}
                  </div>
                  <h2 className="font-bold text-sm md:text-base text-white">
                    {faq.question}
                  </h2>
                </div>
                <span className={`flex-shrink-0 rounded-full p-1 transition-colors ml-2 ${
                  expanded === index 
                  ? 'bg-red-600 text-white' 
                  : 'bg-gray-800 text-white hover:bg-red-600'
                }`}>
                  {expanded === index ? (
                    <Minus className="w-4 h-4 md:w-5 md:h-5" />
                  ) : (
                    <Plus className="w-4 h-4 md:w-5 md:h-5" />
                  )}
                </span>
              </button>

              {expanded === index && (
                <div className="px-2 md:px-3 pb-2 md:pb-3 pt-1 md:pt-2">
                  <div className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
