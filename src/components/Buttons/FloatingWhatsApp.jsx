"use client"; // Indica que este módulo deve ser tratado como cliente


import React, { useState } from 'react';

const WhatsAppButton = () => {
  const whatsappInfo = {
    phoneNumber: "5519998917724", // Substitua pelo seu número
    buttonImage: "/icons/wpp.svg", // Imagem do botão
    buttonColor: "#7e6657", // Cor do botão
  };

  const [isOpen, setIsOpen] = useState(false); // Controle de visibilidade do menu
  const [isVibrating, setIsVibrating] = useState(false); // Controle do efeito de vibração

  const options = [
    { label: "Agendar um horário", text: "Gostaria de agendar um horário." },
    { label: "Dúvidas sobre serviços", text: "Tenho dúvidas sobre os serviços." },
    { label: "Promoções atuais", text: "Quais são as promoções atuais?" },
  ];

  const handleOptionClick = (text) => {
    const url = `https://wa.me/${whatsappInfo.phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank'); // Abre o WhatsApp Web em uma nova aba
    setIsOpen(false); // Fecha o menu após enviar a mensagem
  };

  const handleClickButton = () => {
    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 500); // Duração da vibração (meia segundo)
    setIsOpen(!isOpen); // Alterna a visibilidade do menu
  };

  return (
    <div style={{ position: "fixed", bottom: "70px", right: "20px", zIndex: 99 }}>
      <div
        style={{
          backgroundColor: whatsappInfo.buttonColor,
          borderRadius: "50%",
          padding: "15px",
          boxShadow: isVibrating ? "0 8px 20px rgba(0, 0, 0, 0.4)" : "0 4px 10px rgba(0, 0, 0, 0.3)",
          cursor: "pointer",
          transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
          transform: isOpen ? 'scale(1.1)' : 'scale(1)',
          animation: isVibrating ? 'vibrate 0.1s infinite' : 'none', // Efeito de vibração
        }}
        onClick={handleClickButton}
      >
        <img src={whatsappInfo.buttonImage} alt="WhatsApp" style={{ width: '35px', height: '35px' }} />
      </div>
      {isOpen && (
        <div style={{
          position: 'absolute',
          bottom: '80px',
          right: '0',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '0 3px 15px rgba(0, 0, 0, 0.2)',
          zIndex: 9998,
          padding: '10px',
          width: '250px',
          animation: 'fadeIn 0.3s',
          transition: 'transform 0.3s ease-out',
        }}>
          <div style={{
            backgroundColor: '#7e6657',
            color: '#FFFFFF',
            borderRadius: '10px',
            padding: '10px',
            marginBottom: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
            position: 'relative',
            paddingBottom: '20px',
            fontSize: '16px',
          }}>
            Agende seu horário!
            <div style={{
              content: '""',
              position: 'absolute',
              left: '50%',
              bottom: '-20px',
              marginLeft: '-10px',
              borderLeft: '10px solid transparent',
              borderRight: '10px solid transparent',
              borderTop: '10px solid #d1c3bd',
            }} />
          </div>
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option.text)}
              style={{
                backgroundColor: '#7b6e65',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '5px',
                padding: '18px',
                margin: '5px 0',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                width: '100%',
                fontSize: '14px',
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#d1c3bd'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#7e6657'}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes vibrate {
          0% { transform: translateX(0); }
          20% { transform: translateX(-3px); }
          40% { transform: translateX(3px); }
          60% { transform: translateX(-3px); }
          80% { transform: translateX(3px); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppButton;