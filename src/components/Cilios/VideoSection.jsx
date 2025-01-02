import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const VideoSection = () => {
  const whatsappLink = "https://wa.me/55xxxxxxxxxx?text=Oi%20Gil%20Barbosa,%20vim%20pelo%20site!%20E%20quero%20saber%20mais%20sobre%20cílios%20perfeitos.";

const carouselImages = [
  { src: "/ciliossection/cilios1.webp", caption: "Cílios Volumosos" },
  { src: "/ciliossection/cilios2.webp", caption: "Cílios Naturais" },
  { src: "/ciliossection/cilios3.webp", caption: "Olhar Marcante" },
  { src: "/ciliossection/cilios4.webp", caption: "Resultado Personalizado" },
];


  return (
    <motion.section
      className="relative py-16 bg-gradient-to-b from-[#0a0a0a31] text-gray-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-[#00000080] to-transparent"></div>

      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-[#fff] mb-8">
          Descubra a Arte do Alongamento de Cílios
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna de Texto */}
          <div className="bg-opacity-90 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out flex flex-col justify-center">
            <div className="flex items-center justify-center sm:justify-start mb-6">
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300">
                Realce Sua Beleza com Cílios Perfeitos
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed text-justify">
              O alongamento de cílios oferece um olhar mais volumoso, alongado e natural, sem a necessidade de maquiagem. Com técnicas modernas e profissionais qualificados, conseguimos resultados que realçam sua beleza de forma sutil e duradoura. Veja como conseguimos transformar o seu olhar e tornar cada olhar único.
            </p>
            <p className="text-lg sm:text-xl text-gray-300 mb-4 leading-relaxed text-justify">
              O procedimento é rápido e confortável, e você verá os resultados imediatamente. Os cílios ficam perfeitos, sem o incômodo de aplicar maquiagem diariamente. Cada fio é cuidadosamente colocado para criar um efeito natural, elegante e sofisticado.
            </p>

            {/* Botão de Contato */}
            <div className="flex space-x-4 mt-6 relative z-10">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#F1A7B6] hover:bg-[#A04C5C] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Contate-nos pelo WhatsApp
              </a>
            </div>
          </div>

          {/* Galeria de Imagens (Carrossel) */}
          <div className="relative w-full h-full">
            <h3 className="text-center text-2xl sm:text-3xl font-semibold text-gray-300 mb-6">
              Veja Nossa Galeria de Resultados
            </h3>

            <Swiper
              spaceBetween={10}
              slidesPerView={1} // Exibe apenas uma imagem por vez
              navigation
              pagination={{ clickable: true }}
              loop // Permite o loop das imagens
              breakpoints={{
                768: {
                  slidesPerView: 2, // 2 imagens para telas médias
                },
                1024: {
                  slidesPerView: 3, // 3 imagens para telas grandes
                },
              }}
              className="mySwiper"
            >
              {carouselImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="relative w-full h-[400px] sm:h-[500px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                    <img
                      src={image.src}
                      alt={`Cílios ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black opacity-40"></div>
                    <div className="absolute top-0 left-0 w-full p-4 text-center">
                      <p className="text-white font-semibold text-lg">{image.caption}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default VideoSection;
