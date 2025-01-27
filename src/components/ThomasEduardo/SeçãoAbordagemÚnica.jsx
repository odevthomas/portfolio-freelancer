import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SeçãoAbordagemÚnica = () => {
  const SeçãoAbordagemÚnicaItems = [
    { 
      image: "/Criativos/mackbook.png",
      alt: "Desenvolvimento Web Frontend"
    },
    // Adicione outros itens aqui se necessário
  ];

  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-[calc(100vh-80px)] bg-cover bg-center bg-fixed flex items-center justify-center px-4 md:px-6 lg:px-8 py-12 md:py-16"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center space-y-6 mb-12">
          <motion.h3
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Transformando Ideias em Experiências
          </motion.h3>

          <motion.p
            className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Com foco em desenvolvimento web frontend, estou preparado para elevar seus projetos a um novo nível. Vamos juntos transformar suas ideias em realidade digital de forma criativa e inovadora.
          </motion.p>
        </div>

        <div className="w-full max-w-6xl mx-auto px-4">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            {SeçãoAbordagemÚnicaItems.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  className="flex items-center justify-center p-4 sm:p-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-xl"
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <style jsx>{`
          .swiper-pagination-bullet {
            background: white;
            opacity: 0.5;
          }
          .swiper-pagination-bullet-active {
            background: white;
            opacity: 1;
          }
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
          }
          @media (max-width: 640px) {
            .swiper-button-next,
            .swiper-button-prev {
              display: none;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default SeçãoAbordagemÚnica;