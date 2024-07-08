import React, { createContext, useState } from "react";

const initialValue = {
  favorites: [],
  addFavorite: () => {},
  removeFavorite: () => {},
};

const FavoritesContext = createContext(initialValue);

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (product) => {
    console.log("Adding favorite: ", product);
    setFavorites([...favorites, product]);
  };

  const removeFavorite = (productId) => {
    setFavorites(favorites.filter((product) => product.id !== productId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
