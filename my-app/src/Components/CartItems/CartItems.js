import React, { useContext, useState } from "react";
import "./CartItems.css";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import { FaArrowRight } from "react-icons/fa";

const CartItems = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, updateCartQuantity } =
    useContext(ShopContext);

  // State for promo code and discount
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0); // Discount in percentage (e.g., 10 for 10%)
  const [error, setError] = useState("");

  // Valid promo codes
  const validPromoCodes = {
    SAVE10: 10, // 10% discount
    SAVE20: 20, // 20% discount
    FREESHIP: 0, // Free shipping, can handle separately if needed
  };

  const handleNavigate = () => {
    navigate("/ProceedTOCheckOut");
  };

  const handleApplyPromoCode = () => {
    if (promoCode in validPromoCodes) {
      setDiscount(validPromoCodes[promoCode]);
      setError(""); // Clear any error message
    } else {
      setDiscount(0); // Reset discount if invalid
      setError("Invalid promo code. Please try again.");
    }
  };

  const subtotal = getTotalCartAmount();
  const discountAmount = (subtotal * discount) / 100;
  const totalAfterDiscount = subtotal - discountAmount;

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className="cartitems-quantity-control">
                  <button
                    className="cartitems-quantity-decrease"
                    onClick={() => {
                      if (cartItems[e.id] > 1) {
                        updateCartQuantity(e.id, cartItems[e.id] - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    className="cartitems-quantity-input"
                    min="1"
                    value={cartItems[e.id]}
                    onChange={(event) => {
                      const newQuantity = Number(event.target.value);
                      if (newQuantity >= 1) {
                        updateCartQuantity(e.id, newQuantity);
                      }
                    }}
                  />
                  <button
                    className="cartitems-quantity-increase"
                    onClick={() => {
                      updateCartQuantity(e.id, cartItems[e.id] + 1);
                    }}
                  >
                    +
                  </button>
                </div>
                <p>${(e.new_price * cartItems[e.id]).toFixed(2)}</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt="Remove"
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${subtotal.toFixed(2)}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Discount</p>
              <p>{discount > 0 ? `- $${discountAmount.toFixed(2)} (${discount}%)` : "$0.00"}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${totalAfterDiscount.toFixed(2)}</h3>
            </div>
          </div>
          <button onClick={handleNavigate}>
            <span >
              <h5> Check Out <FaArrowRight /></h5>
            </span>
          
          </button>
        </div>
        <div className="cartitems-promocode1">
          <p>If you have a promo code, enter it here:</p>
          <div className="cartitems-promobox2">
            <input
              type="text"
              placeholder="Promo code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handleApplyPromoCode}>Submit</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
      </div>
    </div>
  );
};

export default CartItems;
