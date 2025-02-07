import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="admin-header">
      <div className="header-container">
        {/* Logo */}
        <div className="logo">
          <h1>Admin Panel</h1>
        </div>

        {/* Hamburger Button */}
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>

        {/* Navigation Links */}
        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/admin/dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/admin/products">Products</a>
            </li>
            <li>
              <a href="/admin/orders">Orders</a>
            </li>
            <li>
              <a href="/admin/settings">Settings</a>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>

        {/* User Profile */}
        <div className="user-profile">
          <img
            src="logo"
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "2px solid white",
            }}
          />
          <div className="username">Admin</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
