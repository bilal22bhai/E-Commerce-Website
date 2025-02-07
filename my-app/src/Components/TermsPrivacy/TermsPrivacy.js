import React from 'react';
import './TermsPrivacy.css'; // Import the CSS file

const TermsPrivacy = () => {
  return (
    <div className="terms-container">
      <div className="terms-content">
        <h1>Terms of Use</h1>
        <p>
          Welcome to our e-commerce website. By accessing or using our website, 
          you agree to be bound by these terms and conditions. Please read them 
          carefully before using our services.
        </p>
        <h2>1. Account Creation</h2>
        <p>
          You may need to create an account to use some features of our website. 
          You are responsible for maintaining the confidentiality of your account 
          information.
        </p>
        <h2>2. Payment and Pricing</h2>
        <p>
          All prices listed on our website are subject to change without notice. 
          Payments must be made securely through our accepted methods.
        </p>
        <h2>3. Shipping and Returns</h2>
        <p>
          We offer various shipping options, and delivery times may vary. Please 
          refer to our shipping policy for more details. Returns must comply with 
          our return policy.
        </p>

        <h1>Privacy Policy</h1>
        <p>
          Your privacy is important to us. This Privacy Policy outlines how we 
          collect, use, and protect your information when you visit our website.
        </p>
        <h2>1. Information Collection</h2>
        <p>
          We may collect personal information such as your name, email address, 
          and payment details when you use our services.
        </p>
        <h2>2. Use of Information</h2>
        <p>
          We use your information to process orders, provide customer support, 
          and improve your shopping experience.
        </p>
        <h2>3. Data Security</h2>
        <p>
          We implement security measures to protect your data. However, no method 
          of transmission over the Internet is 100% secure.
        </p>
        
        <div className="contact-section">
          <h2>Contact Us</h2>
          <p>If you have any questions about our Terms of Use or Privacy Policy, please contact us at:</p>
          <p>Email:info@purelogics.net
          </p>
          <p>Phone: 04235456729</p>
        </div>
      </div>
    </div>
  );
};

export default TermsPrivacy;
