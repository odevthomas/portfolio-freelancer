import React, { useState } from "react";
import { motion } from "framer-motion";

const ProjectSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    [
      "/Projetos/gil2.png",
      "/Projetos/gil2.png",
      "/Projetos/gil3.png",
    ],
    [
      "/Projetos/casalellit.jpg",
      "/Projetos/lellit1.png",
      "/Projetos/lellit2.png",
    ],
    [
      "/Projetos/lsgdigital.webp",
      "/Projetos/projeto3_img2.jpg",
      "/Projetos/projeto3_img3.jpg",
    ],
  ];

  const projectDetails = [
    {
      title: "Gil Barbosa Beauty Center",
      description:
        "Landing page focada em conversão, com design otimizado para a experiência do usuário. Criamos uma solução visualmente atrativa que destaca os serviços de beleza, facilitando a navegação e aumentando a taxa de conversão.",
      projectLink: "https://gil-barbosa-2024.vercel.app/gilbarbosabeautycenter",
      technologies: "React, Tailwind CSS, Firebase",
    },
    {
      title: "Casa L'Elit",
      description:
        "Site sofisticado e moderno para o salão de beleza, projetado para atrair clientes de noivas e eventos exclusivos. O design oferece uma navegação fluida e uma experiência visual única.",
      projectLink: "https://www.lellit.com.br",
      technologies: "React, Tailwind CSS",
    },
    {
      title: "SLG Digital",
      description:
        "Plataforma de gestão de produtividade e tarefas, com funcionalidades avançadas para otimizar a rotina de trabalho. Desenvolvi recursos como categorização de tarefas e notificações para melhorar a eficiência.",
      projectLink: "https://lsgdigital.com.br",
      technologies: "Vue.js, Firebase",
    },
  ];

  const handleImageChange = (direction, index) => {
    if (direction === "next") {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projectImages[index].length);
    } else {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? projectImages[index].length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <motion.section
      id="projetos"
      className="py-16 bg-gradient-to-b from-[#00001] to-[#2e2e2e] text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container mx-auto px-6">
        <h2 className="text-center text-4xl sm:text-5xl font-bold text-white mb-8">
          Criatividade e Tecnologia se Encontram
        </h2>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 p-8 rounded-lg bg-opacity-80">
            <p className="text-lg text-gray-300 mb-4 text-justify">
              Explore meu portfólio e descubra projetos que unem criatividade, performance e inovação. Cada um
              desses projetos é uma solução desenvolvida com foco na experiência do usuário.
            </p>
            <p className="text-lg text-gray-300 mb-4 text-justify">
              Com o uso das melhores ferramentas e tecnologias, crio soluções funcionais que atendem às necessidades
              específicas dos clientes, buscando sempre o equilíbrio entre design, usabilidade e escalabilidade.
            </p>
            <p className="text-lg text-gray-300 mb-4 text-justify">
              Meus projetos são desenvolvidos para ser intuitivos, eficientes e de alta performance, criando uma
              experiência única para os usuários.
            </p>

            <div className="flex justify-center mt-6">
              <a
                href="/Projetos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#f30d0d] hover:bg-[#d20c0c] text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Ver Mais Projetos
              </a>
            </div>
          </div>

          <div className="relative flex-1 w-full h-[600px] sm:h-[500px] overflow-hidden">
            <img
              src={projectImages[0][currentImageIndex]}
              alt="Imagem do projeto"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl transition duration-300 transform hover:grayscale-0 grayscale"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black opacity-60"></div>

            <div className="absolute inset-0 flex justify-between items-center px-6">
              <button
                onClick={() => handleImageChange("prev", 0)}
                className="text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300"
              >
                &#8249;
              </button>
              <button
                onClick={() => handleImageChange("next", 0)}
                className="text-white text-3xl p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition duration-300"
              >
                &#8250;
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-3xl sm:text-4xl font-bold text-[#f8f8f8] mb-6 text-center">
            Últimos Projetos Realizados
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectDetails.map((project, index) => (
              <div
                key={index}
                className="bg-[#222] p-6 rounded-xl text-center hover:bg-[#333] transition-all duration-300 transform hover:scale-105"
              >
                <h4 className="text-2xl font-bold text-white mb-4">{project.title}</h4>
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={projectImages[index][currentImageIndex]}
                    alt="Imagem do projeto"
                    className="w-full h-[250px] object-cover transition-transform duration-500 hover:scale-110 hover:grayscale-0 grayscale"
                  />
                </div>
                <p className="text-lg text-gray-200 mb-4 text-justify">{project.description}</p>
                <a
                  href={project.projectLink}
                  className="text-[#f30d0d] hover:text-[#d20c0c] text-lg font-semibold"
                >
                  Veja o projeto completo
                </a>
                <p className="mt-2 text-gray-400 text-sm">{project.technologies}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectSection;
