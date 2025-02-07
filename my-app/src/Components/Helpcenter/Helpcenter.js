import React from "react";
import "./Helpcenter.css"; // Import CSS file for styling

const HelpCenter = () => {
  return (
    <div className="markhoor-help-center">
      <h1 className="help-center-title">Markhoor Help Center</h1>
      <div className="faq-section">
        <h2 className="faq-heading">How can we assist you?</h2>
        <ul className="faq-list">
          <li className="faq-item">How do I place an order on Markhoor?</li>
          <li className="faq-item">How to use vouchers?</li>
          <li className="faq-item">How to update my payment methods?</li>
          <li className="faq-item">What is Markhoor's refund policy?</li>
          <li className="faq-item">What are the delivery timelines?</li>
        </ul>
      </div>

      <div className="contact-section">
        <h2>Contact Customer Care</h2>
        <p>Our team is here to help you, 24/7.</p>
        <button className="contact-button">Get in Touch</button>
        <div className="contact-info">
          <h3>Call Us</h3>
          <p>03176113561-MARKHOOR</p>
         
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
