import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const SearchResults = () => {
  const { products } = useContext(ShopContext); // Ensure ShopContext provides products
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query") || ""; 

  const [filteredProducts, setFilteredProducts] = useState([]);

  // Debugging logs
  console.log("Search Query:", searchQuery);
  console.log("All Products from Context:", products);

  useEffect(() => {
    if (searchQuery) {
      // Filter products based on search query
      const results = products?.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(results);

      // Debugging logs
      console.log("Filtered Products:", results);
    }
  }, [searchQuery, products]);

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
