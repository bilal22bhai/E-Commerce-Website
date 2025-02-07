import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [storeName, setStoreName] = useState('');
  const [logo, setLogo] = useState(null);
  const [paymentGateway, setPaymentGateway] = useState('');
  const [shippingMethod, setShippingMethod] = useState('');
  const [emailTemplate, setEmailTemplate] = useState('');

  const handleLogoUpload = (e) => {
    setLogo(URL.createObjectURL(e.target.files[0]));
  };

  const handleSave = (type) => {
    switch (type) {
      case 'general':
        alert(`General settings saved: ${storeName}`);
        break;
      case 'payment':
        alert(`Payment gateway configured: ${paymentGateway}`);
        break;
      case 'shipping':
        alert(`Shipping method saved: ${shippingMethod}`);
        break;
      case 'email':
        alert(`Email template saved`);
        break;
      default:
        break;
    }
  };

  return (
    <div className="settings-page">
      <h1 className="settings-title">Store Settings</h1>

      {/* General Settings */}
      <section className="settings-section">
        <h2 className="section-title">General Settings</h2>
        <div className="form-group">
          <label>Store Name</label>
          <input
            type="text"
            value={storeName}
            onChange={(e) => setStoreName(e.target.value)}
            placeholder="Enter your store name"
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Logo</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleLogoUpload}
            className="form-input"
          />
          {logo && <img src={logo} alt="Logo Preview" className="logo-preview" />}
        </div>
        <button
          className="save-button"
          onClick={() => handleSave('general')}
        >
          Save General Settings
        </button>
      </section>

      {/* Payment Settings */}
      <section className="settings-section">
        <h2 className="section-title">Payment Settings</h2>
        <div className="form-group">
          <label>Payment Gateway</label>
          <select
            value={paymentGateway}
            onChange={(e) => setPaymentGateway(e.target.value)}
            className="form-input"
          >
            <option value="">Select Payment Gateway</option>
            <option value="stripe">Stripe</option>
            <option value="paypal">PayPal</option>
            <option value="razorpay">Razorpay</option>
          </select>
        </div>
        <button
          className="save-button"
          onClick={() => handleSave('payment')}
        >
          Save Payment Settings
        </button>
      </section>

      {/* Shipping Settings */}
      <section className="settings-section">
        <h2 className="section-title">Shipping Settings</h2>
        <div className="form-group">
          <label>Shipping Method</label>
          <input
            type="text"
            value={shippingMethod}
            onChange={(e) => setShippingMethod(e.target.value)}
            placeholder="Enter shipping method"
            className="form-input"
          />
        </div>
        <button
          className="save-button"
          onClick={() => handleSave('shipping')}
        >
          Save Shipping Settings
        </button>
      </section>

      {/* Email Templates */}
      <section className="settings-section">
        <h2 className="section-title">Email Templates</h2>
        <div className="form-group">
          <label>Email Template</label>
          <textarea
            value={emailTemplate}
            onChange={(e) => setEmailTemplate(e.target.value)}
            placeholder="Write your email template here"
            className="form-input textarea"
          ></textarea>
        </div>
        <button
          className="save-button"
          onClick={() => handleSave('email')}
        >
          Save Email Template
        </button>
      </section>
    </div>
  );
};

export default Settings;
