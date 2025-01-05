import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Componente para exibir cada empresa
const CompanyCard = ({ image, name, style }) => {
  return (
    <div className="flex flex-col items-center justify-center p-6 hover:scale-105 transition-all duration-300 transform hover:shadow-xl">
      <div className="w-24 h-24 mb-1 rounded-full p-4 flex items-center justify-center">
        <motion.img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-full"
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <h3 className="text-lg sm:text-xl text-gray-100 font-semibold text-center">{name}</h3>
      <p className="text-sm sm:text-base text-gray-500 text-center">{style}</p>
    </div>
  );
};

// Componente para o carrossel de empresas
const Clientes = () => {
  const companies = [
    {
      name: "SLG Digital",
      style: "Agência Digital",
      image: "/Parceiros/slgdigital.jpg",
    },
    {
      name: "Casa L'Elit",
      style: "Comércio de Moda",
      image: "/Parceiros/casalellit.jpg",
    },
    {
      name: "Gil Barbosa Beauty Center",
      style: "Centro de Beleza",
      image: "/Parceiros/gilbarbosabeautycenter.jpg",
    },
  ];

  return (
    <section id="empresas-confiaram" className="w-full py-16 bg-gradient-to-b from-[#0000001d] to-[#00000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl sm:text-4xl font-semibold text-center text-gray-100 mb-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Empresas que Confiaram no meu Trabalho
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-lg sm:text-xl text-center text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
        >
          Aqui estão algumas das empresas que tiveram uma experiência positiva com os meus serviços, e que confiarm no meu trabalho para suas necessidades.
        </motion.p>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          loop={true}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2, // 2 slides para telas pequenas
            },
            1024: {
              slidesPerView: 3, // 3 slides para telas grandes
            },
          }}
          className="mySwiper"
        >
          {companies.map((company, index) => (
            <SwiperSlide key={index}>
              <CompanyCard
                image={company.image}
                name={company.name}
                style={company.style}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Clientes;
