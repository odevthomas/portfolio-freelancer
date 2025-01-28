import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ClipboardList, Settings, Link, LogOut, Download, ClipboardCheck, ArrowUpRight } from 'lucide-react';

const Dashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("authenticated");
    window.location.href = "/";
  };

  const cards = [
    {
      title: "Documentação",
      icon: <BookOpen className="w-5 h-5" />,
      content: "Acesse toda documentação técnica, requisitos e guias de desenvolvimento do projeto."
    },
    {
      title: "Roadmap",
      icon: <ClipboardList className="w-5 h-5" />,
      content: [
        "UI/UX Design",
        "Autenticação",
        "Integração API",
        "Testes & QA"
      ]
    },
    {
      title: "Melhorias",
      icon: <Settings className="w-5 h-5" />, 
      content: [
        "Suporte Multilíngue",
        "Sistema de Notificações",
        "Otimização de Performance",
        "Analytics Dashboard"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur-sm bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            <button onClick={handleLogout} className="flex items-center space-x-2 text-red-500 hover:text-red-400">
              <span>Sair</span>
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm hover:border-red-500/50 transition-colors"
            >
              <div className="flex items-center space-x-3 text-red-500">
                {card.icon}
                <h2 className="text-xl font-semibold">{card.title}</h2>
              </div>
              {Array.isArray(card.content) ? (
                <ul className="mt-4 space-y-2">
                  {card.content.map((item, i) => (
                    <li key={i} className="flex items-center space-x-2 text-gray-400">
                      <ArrowUpRight className="w-4 h-4" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-4 text-gray-400">{card.content}</p>
              )}
              <div className="absolute inset-0 rounded-xl transition group-hover:bg-red-500/5" />
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm"
          >
            <div className="flex items-center space-x-3 text-red-500">
              <ClipboardCheck className="w-5 h-5" />
              <h2 className="text-xl font-semibold">Nova Solicitação</h2>
            </div>
            <form className="mt-4">
              <textarea 
                className="w-full h-24 bg-black/50 border border-white/10 rounded-lg p-3 text-white placeholder-gray-500 focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Descreva sua solicitação..."
              />
              <button className="mt-3 w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition-colors">
                Enviar
              </button>
            </form>
          </motion.div>
        </div>
      </main>

      <footer className="mt-auto py-6 text-center text-gray-500 text-sm">
        © 2024 Dashboard. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Dashboard;