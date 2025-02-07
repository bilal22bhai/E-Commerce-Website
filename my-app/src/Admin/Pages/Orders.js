import React, { useState } from "react";
import "./Orders.css";

// Sample Order Data (this would normally come from an API or database)
const sampleOrders = [
  {
    id: 1,
    customerName: "Ahmed Khan",
    status: "Pending",
    totalPrice: 2500,
    shippingInfo: "House #123, Gulshan-e-Iqbal, Karachi",
    products: ["Men’s T-Shirt", "Jeans"],
    orderDate: "2025-01-01",
  },
  {
    id: 2,
    customerName: "Ayesha Ali",
    status: "Shipped",
    totalPrice: 3000,
    shippingInfo: "Flat #45, DHA Phase 5, Lahore",
    products: ["Women’s Kurta", "Dupatta"],
    orderDate: "2025-01-02",
  },
  {
    id: 3,
    customerName: "Zain Abbas",
    status: "Delivered",
    totalPrice: 1800,
    shippingInfo: "Plot #10, Satellite Town, Rawalpindi",
    products: ["Polo Shirt"],
    orderDate: "2025-01-03",
  },
  {
    id: 4,
    customerName: "Fatima Noor",
    status: "Pending",
    totalPrice: 2200,
    shippingInfo: "House #7, G-11, Islamabad",
    products: ["Women’s Scarf", "Trousers"],
    orderDate: "2025-01-04",
  },
  {
    id: 5,
    customerName: "Usman Siddiqui",
    status: "Shipped",
    totalPrice: 4000,
    shippingInfo: "Street #9, Model Town, Lahore",
    products: ["Formal Shirt", "Tie"],
    orderDate: "2025-01-05",
  },
  {
    id: 6,
    customerName: "Hina Shahid",
    status: "Delivered",
    totalPrice: 2700,
    shippingInfo: "House #15, Bahria Town, Karachi",
    products: ["Abaya"],
    orderDate: "2025-01-06",
  },
  {
    id: 7,
    customerName: "Ali Haider",
    status: "Pending",
    totalPrice: 3500,
    shippingInfo: "Apartment #33, Clifton Block 2, Karachi",
    products: ["Jacket", "Hoodie"],
    orderDate: "2025-01-07",
  },
  {
    id: 8,
    customerName: "Rabia Javed",
    status: "Shipped",
    totalPrice: 1200,
    shippingInfo: "House #98, Allama Iqbal Town, Lahore",
    products: ["Kids T-Shirt"],
    orderDate: "2025-01-08",
  },
  {
    id: 9,
    customerName: "Bilal Qureshi",
    status: "Delivered",
    totalPrice: 1500,
    shippingInfo: "Sector #4, Hayatabad, Peshawar",
    products: ["Men’s Cap"],
    orderDate: "2025-01-09",
  },
  {
    id: 10,
    customerName: "Sana Tariq",
    status: "Pending",
    totalPrice: 5000,
    shippingInfo: "Flat #12, Gulberg Greens, Islamabad",
    products: ["Women’s Maxi Dress"],
    orderDate: "2025-01-10",
  },
  {
    id: 11,
    customerName: "Hamza Malik",
    status: "Shipped",
    totalPrice: 2800,
    shippingInfo: "Street #5, Cantt, Multan",
    products: ["Men’s Suit"],
    orderDate: "2025-01-11",
  },
  {
    id: 12,
    customerName: "Nimra Faisal",
    status: "Delivered",
    totalPrice: 1600,
    shippingInfo: "House #3, Nazimabad Block 3, Karachi",
    products: ["Cotton Kurti"],
    orderDate: "2025-01-12",
  },
  {
    id: 13,
    customerName: "Farhan Riaz",
    status: "Pending",
    totalPrice: 1400,
    shippingInfo: "House #40, Samanabad, Lahore",
    products: ["Casual Shorts"],
    orderDate: "2025-01-13",
  },
  {
    id: 14,
    customerName: "Zara Naeem",
    status: "Shipped",
    totalPrice: 4500,
    shippingInfo: "Flat #2, Askari 10, Karachi",
    products: ["Women’s Bridal Dress"],
    orderDate: "2025-01-14",
  },
  {
    id: 15,
    customerName: "Shahzad Anwar",
    status: "Delivered",
    totalPrice: 3000,
    shippingInfo: "Street #6, Chaklala Scheme 3, Rawalpindi",
    products: ["Men’s Sherwani"],
    orderDate: "2025-01-15",
  },
  {
    id: 16,
    customerName: "Maria Aslam",
    status: "Pending",
    totalPrice: 2300,
    shippingInfo: "House #25, F-8/4, Islamabad",
    products: ["Women’s Lehenga"],
    orderDate: "2025-01-16",
  },
  {
    id: 17,
    customerName: "Saad Ahmed",
    status: "Shipped",
    totalPrice: 1300,
    shippingInfo: "Flat #78, PECHS, Karachi",
    products: ["Men’s Socks"],
    orderDate: "2025-01-17",
  },
  {
    id: 18,
    customerName: "Komal Nadeem",
    status: "Delivered",
    totalPrice: 3800,
    shippingInfo: "House #5, Gulshan-e-Ravi, Lahore",
    products: ["Women’s Sweater"],
    orderDate: "2025-01-18",
  },
  {
    id: 19,
    customerName: "Taimoor Zafar",
    status: "Pending",
    totalPrice: 1900,
    shippingInfo: "House #8, Westridge, Rawalpindi",
    products: ["Men’s Tracksuit"],
    orderDate: "2025-01-19",
  },
  {
    id: 20,
    customerName: "Madiha Anwar",
    status: "Shipped",
    totalPrice: 2200,
    shippingInfo: "Street #12, Clifton Block 5, Karachi",
    products: ["Silk Scarf"],
    orderDate: "2025-01-20",
  },
];

const Orders = () => {
  const [orders, setOrders] = useState(sampleOrders);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleStatusChange = (orderId, newStatus) => {
    const updatedOrders = orders.map((order) =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  const handleRefund = (orderId) => {
    alert(`Refund processed for Order #${orderId}`);
  };

  const handleReturn = (orderId) => {
    alert(`Return processed for Order #${orderId}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOrders = orders.filter(
    (order) =>
      order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const closeOrderDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <div className="orders-admin">
      <h2 className="orders-title">Manage Orders</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Search by Customer Name or Status..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <table className="orders-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Status</th>
            <th>Total Price</th>
            <th>Shipping Info</th>
            <th>Products</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} onClick={() => handleOrderClick(order)}>
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>
                <select
                  value={order.status}
                  onClick={(e) => e.stopPropagation()} // Prevent row click
                  onChange={(e) => handleStatusChange(order.id, e.target.value)}
                  className="status-select"
                >
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Delivered">Delivered</option>
                </select>
              </td>
              <td>${order.totalPrice}</td>
              <td>{order.shippingInfo}</td>
              <td>{order.products.join(", ")}</td>
              <td>
                <div className="space-button">
                  {" "}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRefund(order.id);
                    }}
                    className="action-button refund-button"
                  >
                    Refund
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleReturn(order.id);
                    }}
                    className="action-button return-button"
                  >
                    Return
                  </button>{" "}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedOrder && (
        <div className="order-modal" onClick={closeOrderDetails}>
          <div
            className="modal-content22"
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing the modal when clicking inside content
            }}
          >
            <button className="close-btn" onClick={closeOrderDetails}>
              ×
            </button>
            <h3 className="modal-title">Order Details</h3>
            <div className="modal-body">
              <p>
                <strong>Order ID:</strong> {selectedOrder.id}
              </p>
              <p>
                <strong>Customer Name:</strong> {selectedOrder.customerName}
              </p>
              <p>
                <strong>Status:</strong> {selectedOrder.status}
              </p>
              <p>
                <strong>Total Price:</strong> ${selectedOrder.totalPrice}
              </p>
              <p>
                <strong>Shipping Info:</strong> {selectedOrder.shippingInfo}
              </p>
              <p>
                <strong>Products:</strong> {selectedOrder.products.join(", ")}
              </p>
              <p>
                <strong>Order Date:</strong> {selectedOrder.orderDate}
              </p>
              <div className="progress-bar-container">
                <div
                  className={`progress-bar ${selectedOrder.status.toLowerCase()}`}
                  style={{
                    width:
                      selectedOrder.status === "Pending"
                        ? "33%"
                        : selectedOrder.status === "Shipped"
                        ? "66%"
                        : "100%",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
