import React, { useState, useEffect } from 'react';
import './WhatsAppButton.css'; // Importando o arquivo de estilos

const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Mostrar o botão após 2 segundos
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    // Mostrar tooltip após 4 segundos
    const tooltipTimer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  const handleClick = () => {
    window.open(
      'https://api.whatsapp.com/send?phone=551999042072&text=Oi%20Thomas!%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20um%20projeto.%20Vamos%20conversar%3F',
      '_blank'
    );
  };

  if (!isVisible) return null;

  return (
    <>
      {showTooltip && (
        <div className="whatsapp-tooltip">
          <div className="tooltip-content">
            <span className="tooltip-text">Fale Comigo</span>
            <span className="online-indicator"></span>
            <button 
              className="close-tooltip"
              onClick={() => setShowTooltip(false)}
            >
              ×
            </button>
          </div>
          <div className="tooltip-arrow"></div>
        </div>
      )}

      <button
        onClick={handleClick}
        className="whatsapp-button"
        aria-label="Iniciar conversa no WhatsApp"
        onMouseEnter={() => !showTooltip && setShowTooltip(true)}
      >
        <div className="button-content">
          <img
            src="/wpp-icon.svg"
            alt="WhatsApp"
            className="whatsapp-icon z-10"
          />
          <div className="ripple-effect"></div>
        </div>
      </button>
    </>
  );
};

export default WhatsAppButton;
