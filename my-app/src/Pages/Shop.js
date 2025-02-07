import React, { useContext, useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLatter from '../Components/NewsLetter/NewsLatter'
import { ShopContext } from '../Context/ShopContext'
import all_product from '../Components/Assets/all_product'
import { useFavorites } from "../Context/FavoritesContext"; // Import custom hook for favorites
import Item from "../Components/Item/Item";

const Shop = ({category}) => {
  const {search , } = useContext(ShopContext)
  const [product, setProduct] = useState([])
 const { addToFavorites, removeFromFavorites, favorites } = useFavorites(); // Get favorite methods

  const [sortOption, setSortOption] = useState(""); // State for sorting option
  console.log(product, search)
  useEffect(() => {
    // Filter products based on the search query
    const filtered = all_product.filter((product) => {
      const lowerSearchQuery = search.toLowerCase();
      return (
        product.name.toLowerCase().includes(lowerSearchQuery) ||
        product.description.toLowerCase().includes(lowerSearchQuery)
      );
    });

    setProduct(filtered)

    console.log("Filtered Items", filtered);
    
    // setFilteredProducts(filtered); 
  }, 
  [search, all_product]);

  // Sorting logic
  const sortedProducts = [...product].sort((a, b) => {
    if (sortOption === "priceLowToHigh") {
      return a.new_price - b.new_price; // Sort by price (low to high)
    } else if (sortOption === "priceHighToLow") {
      return b.new_price - a.new_price; // Sort by price (high to low)
    } else if (sortOption === "discountHighToLow") {
      return (
        (b.old_price - b.new_price) / b.old_price - (a.old_price - a.new_price) / a.old_price
      ); // Sort by discount percentage (high to low)
    }
    return 0; // Default (no sorting)
  });

  return (
    <div>
      {product.length > 0 && search && <div> 
           {/* Sorting and Display Information */}
      <div className="shopcategory-indexShort">
        <p>
          <span>Showing 1-{sortedProducts.length}</span> out of {sortedProducts.length} products
        </p>
        <div className="shopcategory-sort">
          <label htmlFor="sort-options">Sort by:</label>
          <select
            id="sort-options"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="">Select</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="discountHighToLow">Discount: High to Low</option>
            <option value="discountLowToHigh">Discount: Low to High</option>
          </select>
        </div>
      </div>

      {/* Products Section */}
      <div className="shopcategory-products">
        {sortedProducts && sortedProducts.length > 0 ? (
          sortedProducts.map((item, i) => {

              // Calculate discount percentage
              const discount =
                item.old_price && item.new_price
                  ? Math.round(((item.old_price - item.new_price) / item.old_price) * 100)
                  : 0;

              // Check if the product is in favorites
              const isFavorite = favorites.some((fav) => fav.id === item.id);

              return (
                <div key={i} className="product-item">
                  {/* Sale Tag for Discount */}
                  {discount > 0 && (
                    <div
                      className="product-tag product-tag-sale-item product-tag--absolute text-uppercase percent mb-1"
                      style={{ backgroundColor: "#e00b25", color: "#ffffff" }}
                    >
                      -{discount}%
                    </div>
                  )}
                  {/* Render the Item component */}
                  <Item
                    id={item.id}
                    name={item.name}
                    image={item.image}
                    new_price={item.new_price}
                    old_price={item.old_price}
                  />

                  {/* Favorite Button */}
                  <div>
                    <button
                      className="favorite-btn22"
                      onClick={() =>
                        isFavorite ? removeFromFavorites(item.id) : addToFavorites(item)
                      }
                    >
                      {isFavorite ? "❤️" : "♡"}
                    </button>
                  </div>
                </div>
              );
            
          })
        ) : (
          <p>No products available</p>
        )}
      </div>
      </div>}
      {!search && <div><Hero/>
      <Popular />
      <Offers/>
      <NewCollections/>
      <NewsLatter/></div>}
    </div>
  )
}

export default Shop
