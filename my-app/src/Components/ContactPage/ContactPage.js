import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="contact-card">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-info">
          <strong>Phone:</strong>{' '}
          <a href="tel:+9234556729" className="contact-link">
            04235456729
          </a>
        </p>
        <p className="contact-info">
          <strong>Location:</strong>{' '}
          <a 
            href="https://maps.app.goo.gl/VWZmbuXw2Kjr5ECz7" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="contact-link"
          >
            Purelogics Software House. Map
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactPage;
