import React from "react";
import { motion } from "framer-motion"; // Para animações suaves no modal

const PrivacyPolicyAndTerms = ({ onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="p-8 bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {/* Título */}
        <h3 className="text-3xl font-bold text-white mb-6 text-center">
          Política de Privacidade e Termos de Uso
        </h3>
        
        {/* Política de Privacidade */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-3">Política de Privacidade</h4>
          <p className="text-gray-300 text-sm mb-3">
            A sua privacidade é importante para nós. Este site coleta apenas as informações essenciais para oferecer uma experiência personalizada e funcional. Todas as informações são tratadas com confidencialidade e em conformidade com as leis de proteção de dados.
          </p>
          <p className="text-gray-300 text-sm">
            Para mais detalhes sobre como usamos seus dados, acesse nossa <a href="#" className="text-blue-500 hover:underline">Política de Privacidade completa</a>.
          </p>
        </section>

        {/* Termos de Uso */}
        <section className="mb-6">
          <h4 className="text-xl font-semibold text-blue-500 mb-3">Termos de Uso</h4>
          <p className="text-gray-300 text-sm mb-3">
            Ao acessar este site, você concorda em cumprir nossos Termos de Uso. É proibido utilizar qualquer conteúdo deste site sem a devida autorização, bem como realizar práticas que possam comprometer a segurança ou o funcionamento da plataforma.
          </p>
          <p className="text-gray-300 text-sm">
            Recomendamos que leia nossos <a href="#" className="text-blue-500 hover:underline">Termos de Uso completos</a> para entender suas responsabilidades enquanto usuário.
          </p>
        </section>

        {/* Botões de Ação */}
        <div className="mt-6 flex justify-end items-center gap-x-4">
          <button 
            type="button" 
            onClick={onClose} 
            className="py-2 px-4 text-sm font-medium text-gray-800 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 transition-all"
          >
            Cancelar
          </button>
          <a 
            href="#"
            className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700 transition-all"
          >
            Aceitar Termos
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PrivacyPolicyAndTerms;
