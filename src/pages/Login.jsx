import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { auth } from "../Login/Firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaEnvelope, FaLock } from "react-icons/fa";
import googleLogo from '/public/icons/google.svg';
import Header from "../components/HeaderFooter/NavLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do modal
  const navigate = useNavigate();  

  const provider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");  
    } catch (error) {
      setError(error.message);  
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");  
    } catch (error) {
      setError(error.message);  
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");  
    } catch (error) {
      setError(error.message);  
    }
  };

  // Função para abrir o modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Adicionando o Header no topo */}
      
      <div className="flex flex-1 items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(bg-nova.png)' }}>
        <div className="w-full sm:max-w-sm md:max-w-md p-8 space-y-6 bg-black rounded-lg shadow-md bg-opacity-90 mt-8"> 
          <h2 className="text-3xl font-bold text-left text-gray-100">Cadastre-se para acessar seus dados </h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Input de Email */}
            <div className="flex items-center border border-gray-700 rounded-lg bg-gray-800">
              <FaEnvelope className="text-gray-400 text-xl ml-3" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>

            {/* Input de Senha */}
            <div className="flex items-center border border-gray-700 rounded-lg bg-gray-800">
              <FaLock className="text-gray-400 text-xl ml-3" />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              />
            </div>

            {/* Links de Esqueci a Senha e Redefinir Senha */}
            <div className="flex justify-between">
              <button type="button" className="text-sm text-blue-600 hover:underline" onClick={() => alert('Esqueci a senha')}>Esqueci a senha</button>
              <button type="button" className="text-sm text-blue-600 hover:underline" onClick={() => alert('Cadastro')}>Redefinir senha</button>
            </div>

            {/* Botão de Login */}
            <button type="submit" className="w-full p-3 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition">
              Login
            </button>
          </form>

          {/* Botão de Cadastrar */}
          <button onClick={handleRegister} className="w-full p-3 font-semibold text-white bg-green-500 rounded-lg hover:bg-green-600 transition">
            Cadastrar
          </button>

          {/* Botão de Login com Google */}
          <button onClick={handleGoogleLogin} className="flex items-center justify-center w-full p-3 font-semibold text-white bg-[#1b1b1b] rounded-lg hover:bg-[#303030] transition">
            <img src={googleLogo} alt="Google Logo" className="w-5 h-5 mr-2" />
            Login com Google
          </button>

          {/* Política de Privacidade */}
          <div className="text-center text-sm text-gray-600 mt-6">
            <p>Ao fazer login, você concorda com nossa 
              <button 
                onClick={openModal} 
                className="text-blue-600 hover:underline">
                Política de Privacidade
              </button>.
            </p>
          </div>
        </div>
      </div>

      {/* Modal da Política de Privacidade */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Política de Privacidade</h3>
            <div className="overflow-y-auto max-h-80">
              <p className="text-gray-600 mb-4">
                Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
              </p>
              <p className="text-gray-600 mb-4">
                1. **Coleta de Informações**: Coletamos informações pessoais quando você se registra em nosso site, como nome, e-mail e outros dados necessários para o processo de login.
              </p>
              <p className="text-gray-600 mb-4">
                2. **Uso das Informações**: Utilizamos suas informações pessoais para fornecer acesso ao nosso site, para melhorar a experiência do usuário e para enviar atualizações e notificações.
              </p>
              <p className="text-gray-600 mb-4">
                3. **Proteção de Dados**: Implementamos medidas de segurança para proteger suas informações pessoais. No entanto, nenhum método de transmissão pela internet ou método de armazenamento eletrônico é 100% seguro, por isso não podemos garantir sua segurança absoluta.
              </p>
              <p className="text-gray-600 mb-4">
                4. **Compartilhamento de Dados**: Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para fornecer serviços que você solicitou ou quando exigido por lei.
              </p>
              <p className="text-gray-600 mb-4">
                5. **Seus Direitos**: Você tem o direito de acessar, corrigir ou excluir suas informações pessoais a qualquer momento. Para isso, entre em contato conosco.
              </p>
              <p className="text-gray-600 mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade, entre em contato conosco.
              </p>
            </div>
            <div className="flex justify-end mt-4">
              <button onClick={closeModal} className="bg-red-500 text-white px-4 py-2 rounded">
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
