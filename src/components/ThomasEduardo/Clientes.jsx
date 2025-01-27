import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Helmet } from 'react-helmet';

const ClientCard = ({ image, name, style, description }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group relative h-full bg-black/30 backdrop-blur-sm border border-zinc-800/20 rounded-xl p-6 hover:border-[#FF0000]/30 transition-all duration-300 hover:shadow-lg hover:shadow-[#FF0000]/5"
    >
      <div className="flex items-start gap-6">
        <div className="relative w-20 h-20 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF0000]/10 to-transparent z-10" />
          <img
            src={image}
            alt={`Cliente ${name} - ${style}`}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-all duration-500"
            loading="lazy"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-[#FF0000] transition-colors duration-300">
            {name}
          </h3>
          <p className="text-sm font-medium text-zinc-400 mt-1">
            {style}
          </p>
        </div>
      </div>

      <div className="mt-6 relative">
        <div className="h-[1px] w-12 bg-gradient-to-r from-[#FF0000]/30 to-transparent mb-6" />
        <p className="text-zinc-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#FF0000]/3 to-transparent rounded-tl-full pointer-events-none" />
    </motion.div>
  );
};

const Clientes = () => {
  const companies = [
    {
      name: "SLG Digital",
      style: "Landing Page Corporativa",
      image: "/Parceiros/slgdigital.jpg",
      description: "Desenvolvimento de landing page moderna e otimizada, com foco em conversão e experiência do usuário para captação de leads qualificados."
    },
    {
      name: "Casa L'Ellit",
      style: "Site Institucional",
      image: "/Parceiros/casalellit.jpg",
      description: "Criação de site elegante e responsivo, com galeria de produtos e integração com sistemas de agendamento para o setor de moda noiva."
    },
    {
      name: "Gil Barbosa Beauty Center",
      style: "Landing Page de Serviços",
      image: "/Parceiros/gilbarbosabeautycenter.jpg",
      description: "Desenvolvimento de landing page focada em conversão, apresentando serviços e facilitando o agendamento online de procedimentos."
    },
    {
      name: "Studio Beauty",
      style: "Site One Page",
      image: "/Parceiros/studiobeauty.jpg",
      description: "Site one page moderno com seções dinâmicas, galeria de trabalhos e sistema de agendamento integrado para aumentar conversões."
    },
    {
      name: "Café & Bistrô",
      style: "Landing Page Gastronômica",
      image: "/Parceiros/cafeebistro.jpg",
      description: "Landing page com design atraente, cardápio digital e integração com sistemas de delivery para maximizar vendas online."
    }
  ];

  return (
    <section className="relative w-full py-24 bg-zinc-950" aria-label="Casos de Sucesso">
      <Helmet>
        <title>Cases de Sucesso - Desenvolvimento de Sites e Landing Pages</title>
        <meta name="description" content="Conheça nossos casos de sucesso em desenvolvimento de sites e landing pages otimizadas. Projetos personalizados que geram resultados." />
      </Helmet>

      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-5" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
  <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.span 
            className="inline-block text-[#fb1603] text-sm sm:text-base lg:text-lg font-bold tracking-wider mb-4 sm:mb-6 px-4 sm:px-6 py-2 border border-[#fb1603] rounded-full"
            whileHover={{ scale: 1.05 }}
          >
            Projetos Realizados
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 lg:mb-8">
            Cases de 
            <span className="bg-gradient-to-r from-[#fb1603] to-[#dc0000] bg-clip-text text-transparent"> Sucesso</span> 
          </h2>
          
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Sites e landing pages desenvolvidos com foco em design moderno, experiência do usuário e alta performance para maximizar resultados.
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
          className="!pb-16"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index} className="h-auto">
              <ClientCard {...company} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clientes;
