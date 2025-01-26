import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../Login/Firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import googleLogo from '/public/icons/google.svg';
import Header from "../components/HeaderFooter/NavLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();

  const handleAuth = async (e, type) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      if (type === "login") {
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
      }
      navigate("/dashboard");
    } catch (error) {
      setError(
        error.code === "auth/wrong-password"
          ? "Senha incorreta. Tente novamente."
          : error.code === "auth/user-not-found"
          ? "Usuário não encontrado."
          : error.code === "auth/email-already-in-use"
          ? "Este email já está em uso."
          : "Ocorreu um erro. Tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
    } catch (error) {
      setError("Erro ao fazer login com Google. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-black">
      <Header />
      
      <div className="flex flex-1 items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md p-8 space-y-6 bg-gray-800 rounded-2xl shadow-2xl"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-white text-center"
          >
            {isRegisterMode ? "Criar Conta" : "Bem-vindo de volta"}
          </motion.h2>
          
          <AnimatePresence>
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="bg-red-500 bg-opacity-10 border border-red-500 text-red-500 px-4 py-2 rounded-lg text-center"
              >
                {error}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={(e) => handleAuth(e, isRegisterMode ? "register" : "login")} className="space-y-6">
            <div className="space-y-4">
              <div className="relative">
                <div className="flex items-center border border-gray-600 rounded-lg bg-gray-700 focus-within:border-blue-500 transition-colors">
                  <FaEnvelope className="text-gray-400 text-xl ml-3" />
                  <input
                    type="email"
                    placeholder="Seu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 bg-transparent text-white rounded-lg focus:outline-none placeholder-gray-400"
                  />
                </div>
              </div>

              <div className="relative">
                <div className="flex items-center border border-gray-600 rounded-lg bg-gray-700 focus-within:border-blue-500 transition-colors">
                  <FaLock className="text-gray-400 text-xl ml-3" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Sua senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full p-3 bg-transparent text-white rounded-lg focus:outline-none placeholder-gray-400"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-3 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex justify-between text-sm">
              <button type="button" className="text-blue-400 hover:text-blue-300 transition-colors">
                Esqueceu a senha?
              </button>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isLoading}
              className="w-full p-3 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Processando...
                </div>
              ) : (
                isRegisterMode ? "Criar conta" : "Entrar"
              )}
            </motion.button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 text-gray-400 bg-gray-800">ou continue com</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="flex items-center justify-center w-full p-3 font-semibold text-white bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-2" />
            Google
          </motion.button>

          <div className="text-center text-gray-400">
            {isRegisterMode ? "Já tem uma conta?" : "Ainda não tem uma conta?"}{" "}
            <button
              onClick={() => setIsRegisterMode(!isRegisterMode)}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              {isRegisterMode ? "Faça login" : "Registre-se"}
            </button>
          </div>

          <div className="text-center text-xs text-gray-500">
            Ao continuar, você concorda com nossos{" "}
            <button onClick={() => setIsModalOpen(true)} className="text-blue-400 hover:text-blue-300">
              Termos e Política de Privacidade
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              className="bg-gray-800 rounded-2xl p-6 max-w-lg w-full"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Política de Privacidade</h3>
              <div className="overflow-y-auto max-h-[60vh] text-gray-300 space-y-4">
                <p>
                  Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais.
                </p>
                <p>
                  1. <strong>Coleta de Informações</strong>: Coletamos informações pessoais quando você se registra em nosso site.
                </p>
                <p>
                  2. <strong>Uso das Informações</strong>: Utilizamos suas informações para melhorar sua experiência.
                </p>
                <p>
                  3. <strong>Proteção de Dados</strong>: Implementamos medidas de segurança robustas.
                </p>
                <p>
                  4. <strong>Seus Direitos</strong>: Você tem total controle sobre seus dados.
                </p>
              </div>
              <div className="mt-6 flex justify-end">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors"
                >
                  Entendi
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Login;
