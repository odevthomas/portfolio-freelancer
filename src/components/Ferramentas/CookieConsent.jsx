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
    <section className="fixed bottom-4 left-1/2 transform -translate-x-1/2 max-w-md p-4 bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-2xl shadow-lg z-50">
      <h2 className="font-semibold text-gray-800 dark:text-white">🍪 Cookie Notice</h2>

      <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
        We use cookies to ensure that we give you the best experience on our website.{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Read cookies policies
        </a>
        .
      </p>

      <div className="flex items-center justify-between mt-4 gap-x-4">
        {/* Botão para gerenciar preferências */}
        <button
          className="text-xs text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 underline focus:outline-none"
          onClick={declineCookies}
        >
          Manage your preferences
        </button>

        {/* Botões para aceitar ou recusar cookies */}
        <div className="flex gap-x-4">
          <button
            className="text-xs text-gray-800 bg-gray-100 font-medium rounded-lg hover:bg-gray-200 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
            onClick={declineCookies}
          >
            Decline
          </button>
          <button
            className="text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none"
            onClick={acceptCookies}
          >
            Accept
          </button>
        </div>
      </div>
    </section>
  );
};

export default CookieConsent;
