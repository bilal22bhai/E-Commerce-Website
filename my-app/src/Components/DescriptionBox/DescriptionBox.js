import React from "react";
import "./DescriptionBox.css";
const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description </div>
        <div className="descriptionbox-nav-box fade">Reviews (122) </div>
      </div>
      <div className="decriptionbox-description">
        <p>
          xperience exceptional sound quality and comfort with our wireless
          Bluetooth headphones. Engineered with advanced noise-cancellation
          technology, these headphones allow you to immerse yourself fully in
          music or calls without distractions. The long-lasting battery ensures
          uninterrupted listening for up to 40 hours, while the lightweight
          design makes it perfect for travel or extended wear."
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
          dolor nam saepe ratione quisquam sapiente porro eius blanditiis ex
          fuga.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
