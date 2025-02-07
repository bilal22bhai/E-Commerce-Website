import React from "react";
import "./PaymentOptions.css";

const PaymentOptions = () => {
  return (
    <div className="payment-options-container">
      <h1 className="payment-title">Payment Options</h1>
      <p className="payment-description">
        Choose a payment method that suits your needs. We support various payment options to make your shopping experience seamless and secure.
      </p>

      <div className="payment-options-grid">
        {/* Visa */}
        <div className="payment-card">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
            alt="Visa"
            className="payment-icon"
          />
          <h2>Credit/Debit Cards</h2>
          <p>Pay securely using Visa, MasterCard, or other major cards.</p>
        </div>

        {/* Cash on Delivery */}
        <div className="payment-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2651/2651067.png"
            alt="Cash on Delivery"
            className="payment-icon"
          />
          <h2>Cash on Delivery</h2>
          <p>Prefer paying upon delivery? We’ve got you covered.</p>
        </div>




        {/* Bank Transfer */}
        <div className="payment-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1786/1786878.png"
            alt="Bank Transfer"
            className="payment-icon"
          />
          <h2>Bank Transfers</h2>
          <p>Direct bank transfers for a hassle-free experience.</p>
        </div>

        {/* EMI Plans */}
        <div className="payment-card">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Installment Plans"
            className="payment-icon"
          />
          <h2>Installment Plans</h2>
          <p>Enjoy flexible EMI options with participating banks.</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
