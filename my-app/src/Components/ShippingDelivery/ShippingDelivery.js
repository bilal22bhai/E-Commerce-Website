import React from 'react';
import './ShippingDelivery.css'; // Import the external CSS file

const ShippingDelivery = () => {
  return (
    <div className="shipping-container">
      <h3 className="shipping-heading">Shipping & Delivery</h3>
      <p className="shipping-paragraph">
        We offer fast, reliable, and affordable shipping options for all your needs. Whether you're ordering locally or internationally, we've got you covered. Track your delivery in real-time and enjoy seamless shopping with us.
      </p>
      <div className="shipping-info-section">
        <div className="shipping-info-card">
          <h4 className="shipping-info-title">Fast Shipping</h4>
          <p className="shipping-info-text">Receive your orders within 1-3 business days.</p>
        </div>
        <div className="shipping-info-card">
          <h4 className="shipping-info-title">International Delivery</h4>
          <p className="shipping-info-text">We ship to over 550 cities in Pakist </p>
        </div>
        <div className="shipping-info-card">
          <h4 className="shipping-info-title">Real-Time Tracking</h4>
          <p className="shipping-info-text">Track your package from dispatch to doorstep.</p>
        </div>
      </div>
    </div>
  );
};

export default ShippingDelivery;
