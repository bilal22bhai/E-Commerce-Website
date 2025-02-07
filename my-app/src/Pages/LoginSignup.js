import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './CSS/LoginSignup.css'; // Import the CSS file

const LoginSignup = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {/* Back Button and Heading */}
        <div className="loginsignup-header">
          <button onClick={handleBack} className="back-button">← Back</button>
          <h1>Sign Up</h1>
        </div>

        {/* Input Fields */}
        <div className="loginsignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
        </div>

        {/* Action Button */}
        <button className="submit-button"><a href="/shop" style={{textDecoration:"none", color:"white"}}>Continue</a></button>

{/* Login Redirect */}
<p className="loginsignup-login">
  Already have an account?{" "}
  <span className="login-link">
    <a href="/LoginHerepage">Login Here</a>
  </span>
</p>


        {/* Terms and Agreement */}
        <div className="loginsignup-agree">
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            By continuing, I agree to the <a href="/termsprivacy">Terms of Use& Privacy Policy</a> 
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
