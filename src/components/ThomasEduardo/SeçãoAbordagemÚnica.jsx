import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";

// Certifique-se de importar o CSS do Swiper
import "swiper/swiper-bundle.css";

const SeçãoAbordagemÚnica = () => {
  const SeçãoAbordagemÚnicaItems = [
    { image: "/Criativos/bg-tecnologia.png", service: "Funil de Vendas" },
    // Adicione outros itens aqui se necessário
  ];

  return (
    <section
      id="sobrenos"
      className="relative w-full min-h-screen bg-cover bg-center bg-fixed flex items-center justify-center px-6 sm:px-8 py-16"
      style={{
        backgroundImage: "url('/bg-fundo-about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="container mx-auto text-center">
        {/* Título e Subtítulo */}
        <motion.h3
          className="mt-2 block font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Transformando Ideias em Experiências
        </motion.h3>

        <motion.p
          className="text-[#ffffff] text-lg mt-10 sm:text-xl md:text-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Com foco em desenvolvimento web frontend, estou preparado para elevar seus projetos a um novo nível. Vamos juntos transformar suas ideias em realidade digital de forma criativa e inovadora.
        </motion.p>

        {/* Carrossel Swiper */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}  // Exibe 1 imagem por vez
          loop={true}  // O carrossel irá continuar rolando infinitamente
          autoplay={{
            delay: 2500, // Atraso de 2.5 segundos antes de trocar a imagem
            disableOnInteraction: false, // Não desativar a rotação ao interagir com o carrossel
          }}
          pagination={{ clickable: true }}  // Ativa a navegação por bolinhas
          breakpoints={{
            640: {
              slidesPerView: 1,  // 1 imagem por vez em telas pequenas
            },
            1024: {
              slidesPerView: 1,  // 1 imagem por vez em telas grandes
            },
          }}
        >
          {SeçãoAbordagemÚnicaItems.map((item, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="flex flex-col justify-center p-6 transition duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                {/* Imagem do serviço */}
                <motion.img
                  src={item.image}
                  alt={`Serviço ${index + 1}`}
                  className="w-full h-auto object-cover rounded-5xl shadow-lg sm:h-[500px] md:h-[600px] lg:h-auto" // Ajuste para aumentar a altura nas telas menores
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bolinhas de navegação personalizadas (se necessário) */}
        <div className="flex justify-center gap-4 mt-8">
          {SeçãoAbordagemÚnicaItems.map((_, index) => (
            <motion.div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 transform ${
                index === 0 ? "bg-[#00000000]" : "bg-gray-400"
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

export default SeçãoAbordagemÚnica;