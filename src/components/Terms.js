// import React from 'react'
// import './Terms.css'

// const Terms = () => {
//   return (
//     <div> Terms & Conditions
//         <p>
//         By submitting the form above, you are allowing Medanta Health Advisors to call you back at your convenient time.
//         By entering your phone number/Email ID you agree that we may send you text notifications, text marketing offers and WhatSapp communications. By signing up you provide your consent to receive transactional and marketing communication from Medanta.
//         </p>
//     </div>
//   )
// }

// export default Terms;
import React from 'react';
import './Terms.css'; 
import Navbar from './Navbar/Navbar';
// Import the CSS file

const Terms = () => {
  return (
    <div>
      <Navbar/>
    {/* </div> */}
   
    <div className="terms-container">
 
      <h1>Terms & Conditions</h1>
      <p>
        By submitting the form above, you are allowing Max Dental  to call you back at your convenient time.
      </p>
      <p>
        By entering your phone number or email ID, you agree that we may send you text notifications, marketing offers, and WhatsApp communications. 
      </p>
      <p>
        By signing up, you provide your consent to receive transactional and marketing communication from Max Dental.
      </p>
    </div>
    </div>
  );
};

export default Terms;
