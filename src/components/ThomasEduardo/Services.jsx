import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Certifique-se de importar o CSS do Swiper
import "swiper/swiper-bundle.css";

const Services = () => {
  const servicesItems = [
    {
      image: "/Services/landing-page.png",
    },
    {
      image: "/Services/site.png",
    },
    {
      image: "/Services/lojasvirtuais.png",
    },
    {
      image: "/Services/otimizacao.png",
    },
  ];

  return (
    <section
      id="servicos"
      className="py-6 bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-white"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-3">
           <motion.h3
          className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Serviços Essenciais 
        </motion.h3>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            De Landing Pages a E-commerce, temos a solução perfeita para sua
            empresa crescer na web.
          </motion.p>
        </div>

        {/* Carrossel Swiper */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }} // Ativa a navegação por bolinhas
          navigation // Ativa a navegação (caso queira adicionar botões de navegação)
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
          }}
        >
          {servicesItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex justify-center p-6 transition duration-500 ease-in-out hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Imagem do serviço */}
                <motion.img
                  src={item.image}
                  alt={`Serviço ${index + 1}`}
                  className="object-contain rounded-lg transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bolinhas de navegação personalizadas (se necessário) */}
        <div className="flex justify-center gap-4 mt-8">
          {servicesItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${
                index === 0 ? "bg-[#f30d0d]" : "bg-gray-400"
              }`}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
            ></motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
