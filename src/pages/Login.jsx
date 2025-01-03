import React from 'react';
import { motion } from 'framer-motion';
import { FaTools } from 'react-icons/fa';

const UnderConstruction = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-gray-900">
      <motion.div
        className="text-center text-white"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
        <FaTools size={100} className="text-[#f30d0d] animate-spin mb-4" />
        <h1 className="mt-8 text-6xl font-extrabold text-[#f30d0d]">
          Página em Construção
        </h1>
        <p className="mt-4 text-2xl font-light text-gray-300">
          Estamos construindo algo incrível para você!
        </p>
        <p className="mt-2 text-sm text-gray-400">
          Volte em breve para conferir as novidades!
        </p>
        <motion.button
          className="mt-6 px-6 py-3 text-lg text-white bg-[#f30d0d] rounded-full shadow-lg hover:bg-[#f30d0d] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Notificar-me
        </motion.button>
      </motion.div>
    </div>
  );
};

export default UnderConstruction;