import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Função para verificar se o consentimento já foi dado nas cookies
  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));

    // Se o consentimento já foi dado, não mostra o aviso
    if (consent && consent.split("=")[1] === "true") {
      setIsVisible(false);
    }
  }, []);

  // Função para aceitar cookies
  const acceptCookies = () => {
    document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 30; // Expira em 30 dias
    setIsVisible(false); // Esconde o aviso após aceitar
  };

  // Função para recusar cookies
  const declineCookies = () => {
    document.cookie = "cookieConsent=false; max-age=" + 60 * 60 * 24 * 30; // Expira em 30 dias
    setIsVisible(false); // Esconde o aviso após recusar
  };

  // Se o aviso não estiver visível, não renderiza o componente
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-95 text-white z-50 backdrop-blur-sm border-t border-red-600">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <div className="text-red-500 text-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10.174 13.409a.75.75 0 01-1.348 0l-4-7A.75.75 0 015.5 5h9a.75.75 0 01.674 1.082l-4 7z" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-1">Sua Privacidade Importa</h2>
            <p className="text-sm text-gray-300 max-w-2xl">
              Utilizamos cookies para melhorar sua experiência de navegação. 
              Eles nos ajudam a entender como você interage com nosso site e a personalizá-lo de acordo com suas preferências.
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-white hover:bg-white hover:text-black transition-colors duration-300 rounded-md"
          >
            Recusar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 transition-colors duration-300 rounded-md"
          >
            Aceitar Cookies
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
