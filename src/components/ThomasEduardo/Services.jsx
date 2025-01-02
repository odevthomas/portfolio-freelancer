import React from "react";
import { FaRegNewspaper, FaLaptop, FaShoppingCart, FaChartLine } from "react-icons/fa"; // Importando ícones da react-icons

const Services = () => {
  const servicesItems = [
    {
      title: "Landing Pages",
      description: "Criação de Landing Pages otimizadas para conversão e design atrativo.",
      icon: <FaRegNewspaper size={48} className="text-red-600" />, // Ícone representando Landing Page
    },
    {
      title: "Sites",
      description: "Desenvolvimento de sites responsivos e funcionais, com foco na experiência do usuário.",
      icon: <FaLaptop size={48} className="text-blue-600" />, // Ícone representando Sites
    },
    {
      title: "E-commerce",
      description: "Desenvolvimento de lojas virtuais com integração de pagamento e gestão de produtos.",
      icon: <FaShoppingCart size={48} className="text-green-600" />, // Ícone representando E-commerce
    },
    {
      title: "Otimização de Sites",
      description: "Melhoria do desempenho e SEO de sites, visando melhor ranqueamento e velocidade.",
      icon: <FaChartLine size={48} className="text-yellow-600" />, // Ícone representando Otimização
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Título e Subtítulo da Seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-semibold text-gray-800">Crie sua Presença Online comigo!</h2>
          <p className="mt-4 text-xl text-gray-600">
            Especializado em Landing Pages, Sites, E-commerce e Otimização de Sites. Vamos juntos construir sua marca na internet e alcançar seu público-alvo de forma eficaz.
          </p>
        </div>

        {/* Itens de Serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesItems.map((item, index) => (
            <div
              key={item.title}
              className="flex flex-col items-center justify-start text-center bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4">
                {item.icon}
              </div>
              <h3 className="text-3xl font-semibold text-gray-800">{item.title}</h3>
              <p className="mt-4 text-lg text-gray-600 text-justify">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
