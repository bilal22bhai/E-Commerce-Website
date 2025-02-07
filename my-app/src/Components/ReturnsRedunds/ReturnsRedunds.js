import React from 'react';
import './ReturnsRedunds.css';

const ReturnsRefunds = () => {
  return (
    <div className="container">
      <h3 className="heading">Returns & Refunds</h3>
      <p className="description">
        At our store, we ensure customer satisfaction with a hassle-free returns and refunds policy. Learn more about how to return your products and get refunds efficiently.
      </p>
      <div className="grid">
        <div className="card">
          <h4 className="card-title">Easy Returns</h4>
          <p className="card-text">
            Return products within 30 days of purchase, no questions asked.
          </p>
        </div>
        <div className="card">
          <h4 className="card-title">Quick Refunds</h4>
          <p className="card-text">
            Receive refunds within 7 business days after the return process.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReturnsRefunds;
