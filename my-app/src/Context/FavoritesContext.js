import React, { createContext, useState, useContext } from "react";

// Create a Context for Favorites
const FavoritesContext = createContext();

// Create a provider to wrap around your app
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || [] // Initialize from localStorage
  );

  // Function to add a product to favorites
  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = [...prevFavorites, product];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Persist in localStorage
      return updatedFavorites;
    });
  };

  // Function to remove a product from favorites
  const removeFromFavorites = (productId) => {
    setFavorites((prevFavorites) => {
      const updatedFavorites = prevFavorites.filter(
        (product) => product.id !== productId
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites)); // Persist in localStorage
      return updatedFavorites;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the Favorites context
export const useFavorites = () => {
  return useContext(FavoritesContext);
};
