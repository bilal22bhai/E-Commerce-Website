import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { all_product , search , setSearch } = useContext(ShopContext);
  
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  // Toggle the visibility of the menu
  const toggleMenu = () => {
    setIsMenuVisible((prev) => !prev);
    console.log("Menu toggled. New state:", !isMenuVisible); // Debugging log
  };

  const handleSearchChange = (e) => {
    console.log("Search", search)
    setSearch(e.target.value)
    setSearchQuery(e.target.value); // Update the search query as user types
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Search Query Submitted:", searchQuery); // For debugging purposes
    // Navigate to the search page with the query
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      {/* Logo Section */}
<div className="nav-logo">
  <Link to="/" onClick={() => setIsMenuVisible(false)}>
    <img src={logo} alt="Logo" />
  </Link>
  <h1>
    <Link to="/" onClick={() => setIsMenuVisible(false)}>
      Markhoor
    </Link>
  </h1>
</div>


      {/* Hamburger Menu */}
      <div
        className={`hamburger ${isMenuVisible ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-menu ${isMenuVisible ? "nav-menu-visible" : ""}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuVisible(false)}>
            Shop
          </Link>
        </li>
        <li>
          <Link to="/mens" onClick={() => setIsMenuVisible(false)}>
            Men
          </Link>
        </li>
        <li>
          <Link to="/womens" onClick={() => setIsMenuVisible(false)}>
            Women
          </Link>
        </li>
        <li>
          <Link to="/kids" onClick={() => setIsMenuVisible(false)}>
            Kids
          </Link>
        </li>
      </ul>

      {/* Search Bar */}
      <div className="nav-search-bar">
        <form>
          <input
            type="text"
            placeholder="Seraching"
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </form>
      </div>

      {/* Cart Section */}
      <div className="nav-login-cart">
        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>
        <Link to="/cart" className="cart-icon-link">
          <img src={cart_icon} alt="Cart Icon" />
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
