import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

const ClientCard = ({ image, name, style, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden bg-gradient-to-br from-black/80 to-black/95 rounded-2xl"
    >
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20"></div>
      <div className="relative p-8 h-full flex flex-col">
        <div className="flex items-center space-x-6 mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <img
              src={image}
              alt={name}
              className="relative w-20 h-20 object-cover rounded-lg  border-red-600/50 group-hover:border-red-600 transition-colors duration-300"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{name}</h3>
            <p className="text-red-500 font-medium">{style}</p>
          </div>
        </div>
        
        <div className="relative">
          <div className="absolute left-0 top-0 w-12 h-[2px] bg-gradient-to-r from-red-600 to-transparent"></div>
          <p className="text-gray-300 leading-relaxed pt-4">{description}</p>
        </div>
        
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-600/10 to-transparent rounded-tl-full"></div>
      </div>
    </motion.div>
  );
};

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
    <section className="relative w-full py-32 bg-black">
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="inline-block text-6xl font-black">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
              Cases de
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700 ml-4">
              Impacto
            </span>
          </h2>
          
          <motion.div 
            className="mt-6 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl text-gray-400 leading-relaxed">
              Transformamos a presença digital de empresas através de estratégias personalizadas e resultados mensuráveis.
            </p>
          </motion.div>
        </motion.div>

        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              effect: 'slide'
            },
            1024: {
              slidesPerView: 3,
              effect: 'slide'
            },
          }}
          className="!pb-12"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <ClientCard {...company} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clientes;
