import React from 'react';
import './WhatsAppButton.css'; // Importando o arquivo de estilos

const WhatsAppButton = () => {
  const whatsappInfo = {
    phoneNumber: "551999042072",
    chatMessage: "Oi, Thomas! Cheguei pelo site, podemos conversar um pouco?",
    buttonColor: "#dc0000", // Cor do botão
  };

  const handleClick = () => {
    const message = encodeURIComponent(whatsappInfo.chatMessage);
    window.open(`https://api.whatsapp.com/send?phone=${whatsappInfo.phoneNumber}&text=${message}`, '_blank');
  };

  // Função que verifica se está online ou offline
  const isOnline = () => {
    const now = new Date();
    const day = now.getDay(); // 0 = domingo, 1 = segunda, ..., 6 = sábado
    const hours = now.getHours();
    
    // Verifica se é um dia útil (segunda a sexta) e se está dentro do horário de funcionamento
    return day >= 1 && day <= 5 && (hours < 22 && hours >= 9);
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="whatsapp-button" 
      >
        <img
          src="/whatsapp-icon.svg"
          alt="WhatsApp"
          style={{ width: '30px', height: '30px' }}
        />
      </div>
      <div 
        style={{
          position: "fixed",
          bottom: "100px",
          right: "30px",
          backgroundColor: "#000001",
          color: "#fff",
          padding: "10px",
          borderRadius: "15px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          fontWeight: "bold",
          zIndex: 99999,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div 
          style={{
            width: '10px',
            height: '10px',
            borderRadius: '50%',
            backgroundColor: isOnline() ? 'green' : 'red', // Verde se online, vermelho se offline
            marginRight: '10px',
          }}
        />
        {isOnline() ? "Online" : "Offline"}
      </div>
    </div>
  );
};

export default WhatsAppButton;