import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./WhatsAppButton.css"

const WhatsAppButton = () => {
  const phoneNumber = "8271025122"; // Replace with the recipient's phone number
  const message = "Hello! I'm contacting you via your app."; // Optional message

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a href={whatsappURL} target="_blank" rel="noopener noreferrer">
      <FontAwesomeIcon
        icon={faWhatsapp}
        style={{ 
        position: "fixed", // Ensure it's fixed
        right: "20px", // 20px from the right edge
        bottom: "20px", // 20px from the bottom edge
        fontSize: "70px", // Adjust icon size
        color: "green", // Set color to green
        cursor: "pointer",
       zIndex:"1000",}}
      />
    </a>
  );
};

export default WhatsAppButton;
