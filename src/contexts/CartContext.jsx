import React, { createContext, useState } from "react";

const initialValue = {
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
};

const CartContext = createContext(initialValue);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (cart.some((existingProduct) => existingProduct.id === product.id)) {
      return;
    }
    setCart([...cart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
