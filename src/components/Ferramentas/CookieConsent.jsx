import React, { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const consent = document.cookie
      .split("; ")
      .find((row) => row.startsWith("cookieConsent="));

    if (consent && consent.split("=")[1] === "true") {
      setIsVisible(false);
    }
  }, []);

  const acceptCookies = () => {
    document.cookie = "cookieConsent=true; max-age=" + 60 * 60 * 24 * 30;
    setIsVisible(false);
  };

  const declineCookies = () => {
    document.cookie = "cookieConsent=false; max-age=" + 60 * 60 * 24 * 30;
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black bg-opacity-80 text-white z-50 p-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base">
          Usamos cookies para melhorar sua experiência. 
          <strong className="text-red-500">Aceite</strong> ou <strong className="text-red-500">Recuse</strong> conforme sua preferência.
        </p>
        <div className="flex gap-2 mt-2 md:mt-0">
          <button
            onClick={declineCookies}
            className="px-4 py-2 text-sm border border-white rounded-md hover:bg-white hover:text-black"
          >
            Recusar
          </button>
          <button
            onClick={acceptCookies}
            className="px-4 py-2 text-sm bg-red-600 rounded-md hover:bg-red-700"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
