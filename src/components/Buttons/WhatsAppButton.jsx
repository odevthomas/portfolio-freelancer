import React from 'react';
import './WhatsAppButton.css'; // Importando o arquivo de estilos

const WhatsAppButton = () => {
  const whatsappInfo = {
    phoneNumber: "551999042072",
    chatMessage: "Oi, Thomas! Cheguei pelo site, podemos conversar um pouco?",
    buttonColor: "#208537", // Cor do botão
  };

  const handleClick = () => {
    const message = encodeURIComponent(whatsappInfo.chatMessage);
    window.open(`https://api.whatsapp.com/send?phone=${whatsappInfo.phoneNumber}&text=${message}`, '_blank');
  };

  return (
    <div>
      <div
        onClick={handleClick}
        className="whatsapp-button" // Classe para aplicar o estilo
      >
        <img
          src="/icons/wpp-icon.svg" // Substitua pelo caminho do ícone do WhatsApp
          alt="WhatsApp"
          style={{ width: '30px', height: '30px' }}
        />
      </div>
      {/* Mensagem Flutuante */}
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
        }}
      >
 Marque seu Horário      </div>
    </div>
  );
};

export default WhatsAppButton;