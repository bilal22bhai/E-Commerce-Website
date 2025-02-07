import React from "react";
import "./Contact.css"; // Importing CSS file for styling

const Contact = () => {
  return (
    <div className="customer-care-container">
      <h1 className="customer-care-title">Customer Care Service</h1>
      <p className="customer-care-subtitle">
        We’re here to help you with any issues or inquiries you may have.
      </p>

      <div className="customer-care-info">
        <div className="info-box">
          <h2>Contact Us</h2>
          <p>Our customer service team is available to assist you:</p>
         
          <h3>Call Us</h3>
          <p className="contact-number">03176113561</p>
        </div>

        <div className="info-box">
          <h2>Email Support</h2>
          <p>Feel free to email us for detailed queries:</p>
          <p className="email">support@markhoor.com</p>
        </div>

        <div className="info-box">
          <h2>FAQs</h2>
          <p>
            Have a question? Visit our <a href="/help-center">Help Center</a>{" "}
            for quick answers.
          </p>
        </div>
      </div>

      <div className="feedback-section">
        <h2>Feedback</h2>
        <p>We value your feedback to improve our services.</p>
        <button className="feedback-button">Submit Feedback</button>
      </div>
    </div>
  );
};

export default Contact;
