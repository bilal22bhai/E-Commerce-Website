import React from "react";
import "./Exploremoreman";
import all_product from "../Assets/all_product";
import { Link } from "react-router-dom";

const Exploremoreman = () => {
  return (
    <div className="new-collections">
      <div className="collections">
        {all_product.map((item) => {
          return (
            item.category === "Exploremoreman" && (
              <div className="item" key={item.id}>
                <Link to={`/product/${item.id}`}>
                  <img 
                    onClick={() => window.scrollTo(0, 0)}
                    src={item.image}
                    alt={item.name}
                    // className="item-image"
                  />
                </Link>
                <p>{item.name}</p>
                <div className="item-prices">
                  <div className="item-price-new">
                    ${item.new_price.toFixed(2)}
                  </div>
                  <div className="item-price-old">
                    ${item.old_price.toFixed(2)}
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default Exploremoreman;
