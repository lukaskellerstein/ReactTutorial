import React, { Component } from "react";

class ProductCard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="product">
        <p>
          <b>Title:</b> {this.props.title}
        </p>
        <p>
          <b>Style:</b> {this.props.style}
        </p>
        <p>
          <b>Price:</b> {this.props.price}
        </p>
        <p>
          <b>Description:</b> {this.props.description}
        </p>
        <p>
          <b>Free shipping:</b> {this.props.isFreeShipping}
        </p>
        <hr />
      </div>
    );
  }
}

export default ProductCard;
