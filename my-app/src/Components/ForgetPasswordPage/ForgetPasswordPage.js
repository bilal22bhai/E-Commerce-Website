import React, { useState } from 'react';
import './ForgetPasswordPage.css';

const ForgetPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setMessage('Please enter a valid email address.');
      return;
    }
    setMessage('A reset link has been sent to your email if it exists.');
    setEmail('');
  };

  return (
    <div className="forget-password-page">
      <div className="forget-password-container">
        <h1 className="forget-password-title">Forgot Password</h1>
        <p className="forget-password-subtitle">
          Enter your email address to receive a password reset link.
        </p>

        <form onSubmit={handleSubmit} className="forget-password-form">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
          <button type="submit" className="reset-button">
            Send Reset Link
          </button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="back-to-login">
          Remember your password?{' '}
          <span className="login-link">
            <a href="/login">Login</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;
