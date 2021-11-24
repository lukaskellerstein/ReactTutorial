import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductsList extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <h2>Products</h2>
          </div>
        </div>
        <div>
          {this.props.products.map((product) => (
            <ProductCard key={product.sku} {...product} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductsList;
