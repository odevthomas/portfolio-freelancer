import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Componente para exibir cada empresa
const CompanyCard = ({ image, name, style, description }) => {
  return (
    <div className="bg-black/30 border border-white/10 backdrop-blur-sm rounded-xl p-6 h-full hover:transform hover:scale-105 transition-all duration-300">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-900 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
        <div className="w-24 h-24 mx-auto relative">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-full border-2 border-red-600"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <h3 className="text-xl font-bold text-white mb-2">{name}</h3>
        <div className="h-0.5 w-12 bg-red-600 mx-auto mb-3"></div>
        <p className="text-sm font-medium text-red-500 mb-4">{style}</p>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

// Componente para o carrossel de empresas
const Clientes = () => {
  const companies = [
    {
      name: "SLG Digital",
      style: "Agência de Marketing Digital",
      image: "/Parceiros/slgdigital.jpg",
      description: "Desenvolvimento de estratégias avançadas de marketing digital, otimização SEO e gestão completa de campanhas nas redes sociais."
    },
    {
      name: "Casa L'Ellit",
      style: "Boutique de Noivas Premium",
      image: "/Parceiros/casalellit.jpg",
      description: "Criação de identidade visual sofisticada, marketing digital especializado e estratégia de comunicação para o mercado luxury de noivas."
    },
    {
      name: "Gil Barbosa Beauty Center",
      style: "Centro de Beleza & Estética",
      image: "/Parceiros/gilbarbosabeautycenter.jpg",
      description: "Gestão completa de mídias sociais, produção de conteúdo premium e estratégias de crescimento para o setor de beleza e estética."
    },
    {
      name: "Studio Beauty",
      style: "Salão de Beleza Premium",
      image: "/Parceiros/studiobeauty.jpg",
      description: "Desenvolvimento de estratégia digital integrada, branding e campanhas sazonais para captação de clientes VIP."
    },
    {
      name: "Café & Bistrô",
      style: "Gastronomia Gourmet",
      image: "/Parceiros/cafeebistro.jpg",
      description: "Criação de identidade visual moderna, fotografia gastronômica e estratégias de marketing local para aumentar o fluxo de clientes."
    }
  ];

  return (
    <section id="empresas-confiaram" className="w-full py-24 bg-gradient-to-b from-black to-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block">
            <h2 className="text-5xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-100">
              Parcerias de <span className="text-red-600">Sucesso</span>
            </h2>
            <div className="h-1 w-32 bg-red-600 mx-auto mt-4"></div>
          </div>
          
          <p className="text-xl mt-8 text-gray-300 font-medium max-w-2xl mx-auto leading-relaxed">
            Conheça algumas das empresas que transformaram sua presença digital através da nossa colaboração estratégica.
          </p>
        </motion.div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="pb-12"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <CompanyCard {...company} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clientes;
