import { useState, useCallback } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);

  const addProduct = useCallback((product) => {
    setProducts((prev) => [...prev, product]);
  }, []);

  return { products, addProduct };
};

export default useProducts;
