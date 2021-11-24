import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = (props) => {
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {props.products.map((product) => (
          <ProductCard key={product.sku} {...product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
