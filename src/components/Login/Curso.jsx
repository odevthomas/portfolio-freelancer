import React from 'react';
import { FaWater, FaRegEye, FaOilCan, FaCalendarAlt, FaHandSparkles, FaRegNewspaper } from 'react-icons/fa'; // Ícones

const Curso = () => {
  return (
    <section className="bg-gradient-to-b from-[#171717] to-[#171717] py-16 text-white">
      <div className="container mx-auto text-center px-6 sm:px-8">
        {/* Título da seção */}
        <h2 className="text-4xl sm:text-5xl font-extrabold text-[#F1A7B6] mb-8">
          Cuidados com as Extensões de Cílios
        </h2>

        {/* Parágrafo explicativo */}
        <p className="text-lg sm:text-xl text-gray-300 mb-12">
          Para garantir que suas extensões de cílios permaneçam lindas e duradouras, siga essas simples recomendações:
        </p>

        {/* Lista de cuidados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center bg-[#00000080] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 fffn-out">
            <FaWater className="text-4xl text-[#F1Afffb-4" />
            <h3 className="text-xl font-semibold text-[#F1A7B6] mb-4">1. Evite molhar os cílios nas primeiras 24 horas</h3>
            <p className="text-gray-200 text-center">
              Evite contato com água nas primeiras 24 horas após a aplicação para garantir a fixação correta da cola.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000080] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 fffn-out">
            <FaRegEye className="text-4xl text-[#F1Afffb-4" />
            <h3 className="text-xl font-semibold text-[#F1A7B6] mb-4">2. Use produtos sem óleo</h3>
            <p className="text-gray-200 text-center">
              Prefira produtos de limpeza sem óleo, pois o óleo pode enfraquecer a cola e reduzir a durabilidade das extensões.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000080] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 fffn-out">
            <FaOilCan className="text-4xl text-[#F1Afffb-4" />
            <h3 className="text-xl font-semibold text-[#F1A7B6] mb-4">3. Evite esfregar os olhos</h3>
            <p className="text-gray-200 text-center">
              Não esfregue os olhos para evitar que as extensões se soltem ou danifiquem os cílios naturais.
            </p>
          </div>

          <div className="flex flex-col items-center bg-[#00000080] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 fffn-out">
            <FaCalendarAlt className="text-4xl text-[#Ffff mb-4" />
            <h3 className="text-xl font-semibold text-[#F1A7B6] mb-4">4. Realize manutenções regulares</h3>
            <p className="text-gray-200 text-center">
              Para manter o volume e a forma, agende manutenções a cada 2-3 semanas.
            </p>
          </div>

          {/* Novo cuidado 1 */}
          <div className="flex flex-col items-center bg-[#00000080] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 fffn-out">
            <FaHandSparkles className="text-4xl text-[#fff] mb-4" />
            <h3 className="text-xl font-semibold text-[#F1A7B6] mb-4">5. Evite o uso de maquiagem à prova d'água</h3>
            <p className="text-gray-200 text-center">
              Maquiagem à prova d'água pode dificultar a remoção e afetar a durabilidade das extensões. Use produtos mais leves para garantir a longevidade das extensões.
            </p>
          </div>

          {/* Novo cuidado 2 */}
          <div className="flex flex-col items-center bg-[#00000080] p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 fffn-out">
            <FaRegNewspaper className="text-4xl text-[#fff] mb-4" />
            <h3 className="text-xl font-semibold text-[#F1A7B6] mb-4">6. Evite exposição excessiva ao calor</h3>
            <p className="text-gray-200 text-center">
              Evite exposições prolongadas ao calor, como saunas e secadores de cabelo diretamente nos cílios, para não prejudicar a cola e as extensões.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curso;
