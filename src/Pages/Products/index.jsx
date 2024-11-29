import React, { useState, useEffect } from "react";
import ProductsList from "../../Components/ProductsList";


function Products() {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products"
        );
        const data = await response.json();
        setProductsList(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <ProductsList products={productsList} />
    </div>
  );
}

export default Products;