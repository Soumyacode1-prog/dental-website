// import React from 'react'

// const Privacy = () => {
//   return (
//     <div>
//       <h1>Privacy Policy</h1>
//       <p>At Max Dental Clinic & Hospital, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our website and services.</p>
//       <h2>1. Information We Collect</h2>
// <p>We collect the following types of information:

// Personal Information: Name, contact details (phone number, email), and billing information.
// Payment Information: Payment details provided during transactions, which are securely processed through Razorpay.
// Website Usage Information: Data collected via cookies and analytics to improve your experience.</p>
// <h2>Refund Process</h2>
// <p>To initiate a refund, email us at may200mpl@gmail.com with the subject “Refund Request” and provide relevant details, including proof of payment.
// Once the refund is approved, it will be processed through Razorpay.</p>
// <h2>Processing Time</h2>
// <p>1.Refunds will be credited to the customer's bank account within 2-3 working days from the date of approval.
// You will receive a confirmation email once the refund is initiated.</p>
// <h2>Data Sharing & Security</h2>
// <p>We do not share your personal or payment information with third parties, except for payment processing through Razorpay or as required by law.
// All data is securely stored and encrypted to prevent unauthorized access.</p>
// <h2>Contact Us</h2>
// <p>If you have any questions or concerns about this Privacy Policy, please contact us at:
// Email: may200mpl@gmail.com
// Phone: 8271025122,9608408632
// </p>
//       </div>
//   )
// }

// export default Privacy



import React from 'react';
import './Privacy.css';
import Navbar from './Navbar/Navbar';

const Privacy = () => {
  return (
    <div>
      <Navbar/>
    {/* </div> */}
    <div className="privacy-container">
      
      <h1>Privacy Policy</h1>  
      <p>At Max Dental Clinic & Hospital, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, store, and protect your data when you use our website and services.</p>
      
      <h2>1. Information We Collect</h2>
      <p>We collect the following types of information:</p>
      <ul>
        <li><strong>Personal Information:</strong> Name, contact details (phone number, email), and billing information.</li>
        <li><strong>Payment Information:</strong> Payment details provided during transactions, which are securely processed through Razorpay.</li>
        <li><strong>Website Usage Information:</strong> Data collected via cookies and analytics to improve your experience.</li>
      </ul>
      
      <h2>2. Refund Process</h2>
      <p>To initiate a refund, email us at <a href="mailto:maxhospitaldoctor@gmail.com">maxhospitaldoctor@gmail.com</a> with the subject “Refund Request” and provide relevant details, including proof of payment. Once the refund is approved, it will be processed through Razorpay.</p>
      
      <h2>3. Processing Time</h2>
      <p>Refunds will be credited to the customer's bank account within <strong>2-3 working days</strong> from the date of approval. You will receive a confirmation email once the refund is initiated.</p>
      
      <h2>4. Data Sharing & Security</h2>
      <p>We do not share your personal or payment information with third parties, except for payment processing through Razorpay or as required by law. All data is securely stored and encrypted to prevent unauthorized access.</p>
      
      <h2>5. Contact Us</h2>
      <div className="contact-info">
        <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
        <p><strong>Email:</strong> <a href="mailto:maxhospitaldoctor@gmail.com">maxhospitaldoctor@gmail.com</a></p>
        <p><strong>Phone:</strong> +91 8271025122, +91 9608408632</p>
      </div>
    </div>
    </div>
  );
};

export default Privacy;
