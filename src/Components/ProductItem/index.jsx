import React from "react";

const ProductItem = ({ productData }) => {
  const { title, id, image } = productData;
  return (
    <li
      key={id}
      className="list-group-item d-flex justify-content-around align-items-center"
    >
      <div style={{ width: "50px", height: "50px" }}>
        <img
          src={image}
          alt={`${title}`}
          className="rounded-circle img-fluid"
        />
      </div>
      <span className="fs-1">
        {title}
      </span>
      <button className="btn btn-primary">Detalle</button>
    </li>
  );
};

export default ProductItem;
