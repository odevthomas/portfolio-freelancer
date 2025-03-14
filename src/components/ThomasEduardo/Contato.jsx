import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../HeaderFooter/NavbarContato';
import Footer from '../HeaderFooter/Footer';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados para seu servidor ou serviço de e-mail
    alert('Mensagem enviada com sucesso!');
    setFormData({
      nome: '',
      email: '',
      mensagem: '',
    });
  };

  return (
    <>
      <Header />
      <section
        id="contato"
        className="relative w-full min-h-screen bg-gradient-to-b from-black via-[#000000] to-black flex items-center justify-center px-6 py-12 md:py-16"
      >
        <div className="w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="text-left space-y-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h3
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                Entre em Contato
              </motion.h3>
              <motion.p
                className="text-white/80 text-base sm:text-lg md:text-xl leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Tem alguma dúvida ou quer conversar? Envie-nos uma mensagem e responderemos o mais rápido possível.
              </motion.p>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6 w-full max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <label htmlFor="nome" className="text-white">Nome</label>
                <input
                  type="text"
                  name="nome"
                  id="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 bg-transparent border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Seu nome"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="text-white">E-mail</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 bg-transparent border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Seu e-mail"
                  required
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="text-white">Mensagem</label>
                <textarea
                  name="mensagem"
                  id="mensagem"
                  value={formData.mensagem}
                  onChange={handleChange}
                  className="w-full mt-2 p-4 bg-transparent border-2 border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Sua mensagem"
                  rows="4"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="group flex items-center gap-2 bg-transparent border-2 border-white/20 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-blue-500 hover:border-blue-500 transition-all duration-300 transform hover:scale-105"
                whileHover={{ scale: 1.1 }}
              >
                Enviar Mensagem
              </motion.button>
            </motion.form>
          </div>
        </div>

        {/* Animação dos círculos */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500 rounded-full filter blur-3xl animate-pulse"></div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contato;
