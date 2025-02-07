import React, { useState, useContext, useEffect } from "react";
import "./ProductDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [viewCount, setViewCount] = useState(12); // Starting view count (min)
  const [selectedSize, setSelectedSize] = useState(""); // State to track the selected size

  const handleMouseMove = (e) => {
    const img = e.target;
    const rect = img.getBoundingClientRect();

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPercent = (mouseX / rect.width) * 100;
    const yPercent = (mouseY / rect.height) * 100;

    setPosition({
      top: yPercent,
      left: xPercent,
    });
  };

  useEffect(() => {
    // Simulate the number of customers viewing the product dynamically
    const min = 12;
    const max = 45;
    
    let currentCount = min;

    const interval = setInterval(() => {
      // Randomly decide if the count should increase or decrease
      const randomChange = Math.random() < 0.5 ? 1 : -1; // Randomly choose 1 (increase) or -1 (decrease)
      const randomIncrement = Math.random() * 5; // Random increment between 0 and 5

      // Update the current count
      currentCount += randomChange * randomIncrement;

      if (currentCount < min) {
        currentCount = min; // Ensure the view count doesn't go below min
      } else if (currentCount > max) {
        currentCount = max; // Ensure the view count doesn't go above max
      }

      setViewCount(Math.floor(currentCount)); // Set the view count with rounded number
    }, 1000); // Update every second

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  // Handle Size Click
  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
          <img src={product.image} alt="" />
        </div>
        <div className="productdisplay-img">
          <div className="productdisplay-main-img-container">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt="Product"
              onMouseEnter={() => setZoom(true)}
              onMouseLeave={() => setZoom(false)}
              onMouseMove={handleMouseMove}
            />
            {zoom && (
              <div
                className="cool-image-listener"
                style={{
                  top: `${position.top}%`,
                  left: `${position.left}%`,
                  backgroundImage: `url(${product.image})`,
                  backgroundPosition: `${position.left}% ${position.top}%`,
                  backgroundSize: "250%", // Adjust the zoom level as needed
                }}
              />
            )}
          </div>
        </div>
      </div>
      <div className="productdisplay-right1">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-stars">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            {["M", "S", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className={`size-option ${selectedSize === size ? "selected" : ""}`}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>
        <p className="productdisplay-right-category">
          <span>Category :</span> Women, T-Shirt, Crop Top
        </p>
        <p className="productdisplay-right-category">
          <span>Tags:</span> Modern, Latest
        </p>
      

      {/* Fake View Section */}
      <div className="fake-view product-block">
        <span className="icon">👀</span>
        <span className="js-fake-view text-theme">
          {viewCount}
        </span>
        <span className="text">customers are viewing this product</span>
      </div>    </div>
    </div>
  );
};

export default ProductDisplay;
