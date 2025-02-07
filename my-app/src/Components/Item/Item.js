import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  // Calculate discount percentage if old_price exists
  const discount =
    props.old_price && props.new_price
      ? Math.round(((props.old_price - props.new_price) / props.old_price) * 100)
      : 0;

  return (
    <div className="item" style={{ position: "relative" }}>
      {/* Sale Tag */}
      {discount > 0 && (
        <div
          className="product-tag product-tag-sale-item product-tag--absolute text-uppercase percent mb-1"
          style={{ backgroundColor: "#e00b25", color: "#ffffff" }}
        >
          -{discount}%
        </div>
      )}

      {/* Product Image */}
      <Link to={`/product/${props.id}`}>
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="item-image"
        />
      </Link>

      {/* Product Details */}
      <p className="item-name">{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">${props.new_price}</div>
        {props.old_price && (
          <div className="item-price-old">${props.old_price}</div>
        )}
      </div>
    </div>
  );
};

export default Item;

