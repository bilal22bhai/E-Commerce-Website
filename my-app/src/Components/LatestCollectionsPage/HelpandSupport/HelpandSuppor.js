import React, { useState } from 'react';
import './HelpandSupport.css'; // Importing CSS for styling

const HelpandSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="help-support">
      {/* Help & Support with Dropdown Icon */}
      <span onClick={toggleMenu} className="help-support-toggle">
        Help & Support <span className={`dropdown-icon ${isOpen ? 'open' : ''}`}>&#9660;</span>
      </span>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="customcare-popup">
          <ul className="care-list">
            <li className="care-item">
              <a href="/Help-center" className="care-item-anchor">
                <span className="care-icon help-center">&#128172;</span> {/* Chat bubble icon */}
                Help Center
              </a>
            </li>
            <li className="care-item">
              <a href="/Contact-us" className="care-item-anchor">
                <span className="care-icon chatbot">&#128101;</span> {/* User icon */}
              Customer Care
              </a>
            </li>
            <li className="care-item">
              <a href="/Order-info" className="care-item-anchor">
                <span className="care-icon returns-refunds">&#128722;</span> {/* Shopping cart icon */}
                Order Information
              </a>
            </li>
            <li className="care-item">
              <a href="/Shipping-delivery" className="care-item-anchor">
                <span className="care-icon shipping-delivery">&#128666;</span> {/* Truck icon */}
                Shipping & Delivery
              </a>
            </li>
            <li className="care-item">
              <a href="/Payment-options" className="care-item-anchor">
                <span className="care-icon order-payment">&#128179;</span> {/* Credit card icon */}
                Payment Options
              </a>
            </li>
            <li className="care-item">
              <a href="/Returns-refunds" className="care-item-anchor">
                <span className="care-icon refund-money">&#128184;</span> {/* Money bag icon */}
                Returns & Refunds
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HelpandSupport;
