import React from "react";
import ProductItem from "../../Components/ProductItem"


const ProductsList = ({ products }) => {
  return (
    <div className="row">
      <div className="col-12">
        <h1>Lista de Productos</h1>
        <ul className="list-group">
          {products.map((product) => (
            <ProductItem key={product.id} productData={product} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
