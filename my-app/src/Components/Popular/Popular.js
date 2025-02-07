import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";  
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div >
      
   
        <video autoPlay loop muted >
          <source
            src="https://example.com/banner-video.mp4" // Replace with your actual banner video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
  

      {/* Index Short Section */}
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-{data_product.length}</span> out of{" "}
          {data_product.length} products
        </p>
      </div>

      {/* Products Section */}
      <div className="shopcategory-products">
        {data_product.map((item, i) => {
          // Calculate discount percentage if old_price exists
          const discount =
            item.old_price && item.new_price
              ? Math.round(
                  ((item.old_price - item.new_price) / item.old_price) * 100
                )
              : 0;

          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
              discount={discount} // Pass discount percentage
            />
          );
        })}
      </div>

   
      
    </div>
  );
};

export default Popular;
