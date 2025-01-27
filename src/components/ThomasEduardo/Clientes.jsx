import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';

// Componente para exibir cada empresa
const CompanyCard = ({ image, name, style, description }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 hover:scale-105 transition-all duration-300 transform hover:shadow-2xl  from-[#fff] to-[#0a0a0a] rounded-2xl backdrop-blur-sm">
      <div className="w-32 h-32 mb-6 rounded-full p-4 flex items-center justify-center bg-gradient-to-r">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        />
      </div>
      <h3 className="text-xl sm:text-2xl text-gray-100 font-satoshi-bold mb-2 text-center">{name}</h3>
      <p className="text-base sm:text-lg text-red-900 font-satoshi-medium mb-3 text-center">{style}</p>
      <p className="text-sm text-gray-400 text-center font-satoshi-regular">{description}</p>
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
    <section id="empresas-confiaram" className="w-full py-24  from-[#0a0a0a0a0a0a1d] to-[#0a0a0a0a0a0a00]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
         
          <h2 className="text-5xl md:text-6xl font-extrabold text-center">
          Parcerias de 
            <span className="text-[#dc0000]">  Sucesso</span>

            </h2>
          <p className="text-xl sm:text-2xl text-gray-300 font-satoshi-medium max-w-3xl mx-auto leading-relaxed">
            Conheça algumas das empresas que transformaram sua presença digital através da nossa colaboração estratégica.
          </p>
        </motion.div>

        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
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
