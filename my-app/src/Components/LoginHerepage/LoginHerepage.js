import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginHerepage.css'
const LoginHerepage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email.');
      return;
    }
    setError('');
    // Navigate to home page or dashboard on successful login
    navigate('/');
  };

  return (
    <div className="login-page">
      <div className="loginvvontainer">
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Access your account</p>

        <form onSubmit={handleSubmit} className="login-form">
          <div className="lobin-fields">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
            />
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit" className="login-button">Login</button>
        </form>

        <p className="login-forgot-password">
          <a href="/ForgetPasswordPage">Forgot Password?</a>
        </p>

        <p className="login-signup">
          Don't have an account?{' '}
          <span className="signup-link">
            <a href="/login">Sign Up</a>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginHerepage;
