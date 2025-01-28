import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaUser, FaLock } from 'react-icons/fa'; // Importando ícones

const Login = () => {
  const navigate = useNavigate();
  
  // Estado para armazenar email e senha
  const [email, setEmail] = useState("emailteste@exemplo.com");
  const [senha, setSenha] = useState("senhaTeste123");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticação simplificada
    localStorage.setItem("authenticated", "true");
    navigate("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <form className="bg-background p-8 rounded-lg shadow-lg w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl text-text mb-6 text-center">Entrar</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-text mb-2">Email</label>
          <div className="flex items-center bg-gray-800 rounded">
            <FaUser className="text-red-500 ml-2" />
            <input
              type="email"
              id="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-transparent px-3 py-2 text-text focus:outline-none"
            />
          </div>
        </div>
        <div className="mb-6">
          <label htmlFor="senha" className="block text-text mb-2">Senha</label>
          <div className="flex items-center bg-gray-800 rounded">
            <FaLock className="text-red-500 ml-2" />
            <input
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="w-full bg-transparent px-3 py-2 text-text focus:outline-none"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-text py-2 rounded hover:bg-red-700 transition-colors"
        >
          Entrar
        </button>
        <p className="text-center text-text mt-4">
          Não possui uma conta? <a href="/signup" className="text-primary hover:underline">Cadastre-se</a>
        </p>
      </form>
    </div>
  );
};

export default Login;