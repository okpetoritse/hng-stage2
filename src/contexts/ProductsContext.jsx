import React, { createContext, useState, useEffect } from "react";
import { products } from "@/data/products"; // Adjust the path as necessary

const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulate fetching data
    setProducts(products);
  }, []);

  return (
    <ProductsContext.Provider value={{ products }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
