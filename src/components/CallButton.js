// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // Import the Phone icon from FontAwesome

// const CallButton = () => {
//   // Phone number to call (can be dynamically set or hardcoded)
//   const phoneNumber = "8271025122";

//   return (
//     <a
//       href={`tel:${phoneNumber}`} // The `tel` link format allows users to call when clicked on mobile devices
//       className="call-button"
//       style={{
//         position: "fixed", // Keeps the button fixed on the screen
//         bottom: "20px", // 20px from the bottom of the screen
//         right: "20px", // 20px from the right side of the screen
//         backgroundColor: "#25d366", // WhatsApp green color or use your own for the call button
//         borderRadius: "50%", // Circular button
//         padding: "15px", // Padding around the icon
//         boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Shadow for the button
//         color: "white", // Icon color
//         fontSize: "30px", // Icon size
//         textAlign: "center", // Center the icon
//         lineHeight: "1", // Align the icon properly
//         cursor: "pointer",
//         marginBottom:"100px", // Pointer cursor on hover
//         zIndex: 1000, // Keep on top of other elements
//         transition: "transform 0.3s ease-in-out", // Smooth scaling on hover
//       }}
//     >

//       <FontAwesomeIcon icon={faPhoneAlt} /> {/* Phone icon from FontAwesome */}
//     </a>
//   );
// };

// export default CallButton;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'; // Import the Phone icon from FontAwesome
import './CallButton.css'; // Import the CSS file

const CallButton = () => {
  const phoneNumber = "8271025122"; // Phone number for the call button

  return (
    <div>
      {/* Flashback message */}
      {/* <div className="flashback-message">
        Book Appointment: {phoneNumber}
      </div> */}

      {/* Call button */}
      <a
        href={`tel:${phoneNumber}`} // The `tel` link format allows users to call when clicked on mobile devices
        className="call-button"
      >
        <FontAwesomeIcon icon={faPhoneAlt} /> {/* Phone icon from FontAwesome */}
      </a>
    </div>
  );
};

export default CallButton;
