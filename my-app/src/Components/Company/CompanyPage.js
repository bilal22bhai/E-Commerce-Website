import React from 'react';
import './CompanyPage.css';

const CompanyPage = () => {
  return (
    <div className="company-page">
      <div className="content">
        <h1>Markhoor</h1>
        <p className="subtitle">
          Innovating the way you shop online. Quality and reliability in every click.
        </p>
        <div className="sections">
          <div className="section">
            <h2>About Us</h2>
            <p>
              Markhoor is a trusted e-commerce platform designed to deliver a seamless shopping experience. 
              With a focus on quality, innovation, and customer satisfaction, we aim to redefine online retail for everyone.
            </p>
          </div>

          <div className="section">
            <h2>Our Mission</h2>
            <p>
              To connect people with exceptional products through innovative technology and unparalleled service, 
              making online shopping simple, efficient, and enjoyable.
            </p>
          </div>

          <div className="section">
            <h2>Why Choose Markhoor?</h2>
            <ul>
              <li>Wide range of premium products.</li>
              <li>Secure and seamless shopping experience.</li>
              <li>Fast and reliable delivery.</li>
              <li>Customer-focused approach.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPage;
