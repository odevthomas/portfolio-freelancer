import React, { useEffect, useState } from "react";
import { auth } from "../Login/Firebase";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaDownload, FaLink, FaCalendarAlt, FaInfoCircle } from "react-icons/fa";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // Adicionando estado de erro
  const navigate = useNavigate();
  
  const user = auth.currentUser;
  const db = getFirestore();

  useEffect(() => {
    if (!user) {
      navigate("/login"); // Se o usuário não estiver autenticado, redireciona para o login
    } else {
      const fetchUserData = async () => {
        try {
          const userDocRef = doc(db, "usuarios", user.uid); // Aqui usamos o ID do usuário autenticado para pegar seus dados
          const docSnap = await getDoc(userDocRef);
          
          if (docSnap.exists()) {
            setUserData(docSnap.data());
          } else {
            setError("Nenhum dado encontrado para este usuário."); // Mensagem de erro
            console.log("Nenhum dado encontrado para este usuário.");
          }
        } catch (err) {
          setError("Erro ao carregar os dados: " + err.message); // Mensagem de erro em caso de falha na consulta
          console.error("Erro ao carregar os dados:", err);
        } finally {
          setLoading(false); // Setando o carregamento como false após a consulta
        }
      };
      
      fetchUserData();
    }
  }, [user, db, navigate]);

  if (loading) {
    return <div>Carregando...</div>; // Se estiver carregando
  }

  if (error) {
    return <div className="text-red-500">{error}</div>; // Se houver erro
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Bem-vindo ao seu Dashboard, {user.displayName || "Usuário"}!</h1>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md text-white">
        <h2 className="text-2xl font-semibold mb-4">Projeto Final</h2>
        <div className="mb-4">
          <FaDownload className="inline-block mr-2" />
          <a href={userData.projetoFinal} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Baixar o Projeto Final
          </a>
        </div>
        
        <h2 className="text-2xl font-semibold mb-4">Informações do Domínio</h2>
        <div className="mb-4">
          <FaLink className="inline-block mr-2" />
          <a href={userData.dominio} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            Acessar o Domínio
          </a>
        </div>

        <h2 className="text-2xl font-semibold mb-4">Validade do Projeto</h2>
        <div className="mb-4">
          <FaCalendarAlt className="inline-block mr-2" />
          <span>{userData.validade}</span> {/* A validade pode ser formatada se for uma data */}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Último Serviço Realizado</h2>
        <div className="mb-4">
          <FaInfoCircle className="inline-block mr-2" />
          <p>{userData.ultimoServico.descricao}</p>
          <span className="text-gray-400">Realizado em: {userData.ultimoServico.dataServico}</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
