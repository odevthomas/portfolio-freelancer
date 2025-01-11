import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./Firebase";

const Dashboard = () => {
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [user, setUser] = useState(null); // Estado do usuário autenticado
  const navigate = useNavigate(); // Hook para navegação

  // Verifica se o usuário está autenticado
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user); // Define o usuário autenticado
      } else {
        navigate("/login"); // Redireciona para a página de login se não estiver autenticado
      }
      setLoading(false); // Define que o carregamento foi concluído
    });

    return () => unsubscribe(); // Cleanup do listener
  }, [navigate]);

  if (loading) {
    return <p>Carregando...</p>; // Exibe enquanto verifica a autenticação
  }

  return (
    <div className="dashboard-container">
      <h2>Painel de Controle - {user ? user.email : "Usuário Desconhecido"}</h2>
      {/* Exiba as informações do projeto aqui */}
      <div className="project-info">
        <h3>Documentação do Projeto</h3>
        <p>Aqui estão as informações do seu projeto...</p>
        {/* Adicione imagens e outros detalhes do projeto */}
      </div>
    </div>
  );
};

export default Dashboard;
