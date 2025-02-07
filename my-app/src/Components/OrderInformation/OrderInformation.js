import React from "react";
import "./OrderInformation.css"; // Import CSS for styling

const OrderInformation = () => {
  return (
    <div className="order-info-container">
      <h1 className="order-info-title">Order Information</h1>
      <p className="order-info-description">
        Track, manage, and view details of your orders with ease.
      </p>

      <div className="order-info-sections">
        <div className="info-box">
          <h2>Track Your Order</h2>
          <p>
            Enter your order ID to check the current status and estimated
            delivery time.
          </p>
          <button className="track-button">Track Order</button>
        </div>

        <div className="info-box">
          <h2>Order History</h2>
          <p>
            View details of your past orders, including items, pricing, and
            delivery dates.
          </p>
          <button className="view-history-button">View Order History</button>
        </div>

        <div className="info-box">
          <h2>Cancel or Modify Orders</h2>
          <p>
            Need to change something? Modify or cancel your order before it
            ships.
          </p>
          <button className="modify-button">Modify Order</button>
        </div>
      </div>
    </div>
  );
};

export default OrderInformation;
