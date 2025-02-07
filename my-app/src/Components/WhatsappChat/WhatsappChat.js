import React from 'react';
import './WhatsappChat.css'; // Custom CSS for styling

const WhatsappChat = () => {
  const phoneNumber = "923090422122"; // Replace with your phone number
  const message = "Hello! Thank you for reaching out. How can we assist you today?";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="whatsapp-container">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <div className="whatsapp-button">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp" 
            className="whatsapp-icon" 
          />
     
        </div>
      </a>
    </div>
  );
};

export default WhatsappChat;
