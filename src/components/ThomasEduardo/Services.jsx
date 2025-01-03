import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

const Services = () => {
  const servicesItems = [
    {
      title: "Landing Pages",
      description: "Criação de Landing Pages otimizadas para conversão e design atrativo.",
      image: "/Criativos/landing-page.jpg",
    },
    {
      title: "Sites",
      description: "Desenvolvimento de sites responsivos e funcionais, com foco na experiência do usuário.",
      image: "/Criativos/site.jpg",
    },
    {
      title: "E-commerce",
      description: "Desenvolvimento de lojas virtuais com integração de pagamento e gestão de produtos.",
      image: "/Criativos/lojasvirtuais.jpg",
    },
    {
      title: "Otimização de Sites",
      description: "Melhoria do desempenho e SEO de sites, visando melhor ranqueamento e velocidade.",
      image: "/Criativos/otimizacao.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Meus Principais Serviços
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            De Landing Pages a E-commerce, temos a solução perfeita para sua empresa crescer na web.
          </motion.p>
        </div>

        {/* Carrossel Swiper */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={false}
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
                className="flex flex-col sm:flex-row items-center justify-between gap-8 p-6 bg-[#1a1a1a] rounded-lg shadow-lg transform transition duration-500 ease-in-out hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Imagem à esquerda */}
                <motion.div
                  className="w-full sm:w-1/2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-94 sm:h-80 object-cover rounded-lg shadow-md transition-all duration-300"
                  />
                </motion.div>
                {/* Texto à direita */}
                <div className="w-full sm:w-1/2 text-left mt-6 sm:mt-0">
                  <motion.h3
                    className="text-2xl font-semibold text-[#f30d0d] mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bolinhas de navegação */}
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
