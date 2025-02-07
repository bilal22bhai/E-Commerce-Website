import React, { useState } from 'react';
import './ProceedTOCheckOut.css';
import { punjabCities } from '../Assets/all_product';

const ProceedTOCheckOut = () => {
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [city, setCity] = useState('');
  const [errors, setErrors] = useState({});
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!city) newErrors.city = 'Please select your city.';
    if (!address.trim()) newErrors.address = 'Please enter your shipping address.';
    if (!paymentMethod) newErrors.paymentMethod = 'Please select a payment method.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      setShowSuccessMessage(true); // Show the success message
    }
  };

  const handleCloseModal = () => {
    setShowSuccessMessage(false); // Close the modal
  };

  return (
    <div className="checkout-container">
      <h1 className="checkout-title">Proceed to Checkout</h1>

      {/* City Selection */}
      <div className="checkout-section">
        <h2>Select City</h2>
        <select
          className="checkout-select"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
            setErrors((prev) => ({ ...prev, city: '' })); // Clear error
          }}
        >
          <option value="">Select your city</option>
          {punjabCities.map((city, index) => (
            <option key={index} value={city.toLowerCase().replace(" ", "-")}>
              {city}
            </option>
          ))}
        </select>
        {errors.city && <p className="error-message">{errors.city}</p>}
      </div>

      {/* Address Section */}
      <div className="checkout-section">
        <h2>Shipping Address</h2>
        <textarea
          className="checkout-textarea"
          placeholder="Enter your full address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setErrors((prev) => ({ ...prev, address: '' })); // Clear error
          }}
        />
        {errors.address && <p className="error-message">{errors.address}</p>}
      </div>

      {/* Payment Method Section */}
      <div className="checkout-section">
        <h2>Payment Method</h2>
        <div className="checkout-radio-group">
          <label>
            <input
              type="radio"
              name="payment"
              value="credit-card"
              checked={paymentMethod === 'credit-card'}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setErrors((prev) => ({ ...prev, paymentMethod: '' })); // Clear error
              }}
            />
            Credit/Debit Card
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="paypal"
              checked={paymentMethod === 'paypal'}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setErrors((prev) => ({ ...prev, paymentMethod: '' })); // Clear error
              }}
            />
            PayPal
          </label>
          <label>
            <input
              type="radio"
              name="payment"
              value="cash-on-delivery"
              checked={paymentMethod === 'cash-on-delivery'}
              onChange={(e) => {
                setPaymentMethod(e.target.value);
                setErrors((prev) => ({ ...prev, paymentMethod: '' })); // Clear error
              }}
            />
            Cash on Delivery
          </label>
        </div>
        {errors.paymentMethod && <p className="error-message">{errors.paymentMethod}</p>}
      </div>

      {/* Order Review Section */}
      <div className="checkout-section">
        <h2>Order Review</h2>
        <p>Make sure your order details are correct before proceeding.</p>
        {/* Add logic to dynamically display cart or order details */}
      </div>

      {/* Submit Button */}
      <button className="checkout-submit-button" onClick={handleSubmit}>
        Proceed to Payment
      </button>

      {/* Success Modal */}
      {showSuccessMessage && (
        <div className="success-modal">
          <div className="modal-content">
            <h2>Thank You!</h2>
            <p>Thanks for Shopping. Your order has been successfully placed!</p>
            <button className="modal-close-button" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProceedTOCheckOut;
