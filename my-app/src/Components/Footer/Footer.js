import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import footer_logo from "../Assets/logo_big.png";
import HelpandSupport from "../LatestCollectionsPage/HelpandSupport/HelpandSuppor";


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        
      </div>
      <ul className="footer-links">
  <li>
    <Link to="/company" className="footer-link">Company</Link>
  </li>
  <li>
    <Link to="/offices" className="footer-link">Offices</Link>
  </li>
  <li>
    <Link to="/about" className="footer-link">About</Link>
  </li>
  <li>
    <Link to="/contact" className="footer-link">Contact</Link>
  </li>
</ul>
<div className="footer-social-icon">
  <div className="footer-icons-container">
    <a href="https://www.instagram.com/purelogics.official/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram fa-2x"aria-hidden="true"></i>
    </a>
  </div>

  <div className="footer-icons-container">
    <a href="https://www.facebook.com/PureLogics" target="_blank" rel="noopener noreferrer">
      <i className="fab fa-facebook fa-2x" aria-hidden="true"></i>
    </a>
  </div>

  <div className="footer-icons-container">
  <a href="https://www.linkedin.com/company/purelogics" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin fa-2x" aria-hidden="true"></i>
  </a>
</div>

</div>
<div></div>
<HelpandSupport/>
      <div className="fotter-copyright">
        <hr />
        <p>  Copyright @ 2025 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
