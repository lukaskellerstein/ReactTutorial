import React from "react";
import products from "../products.json";

const withSearch = (WrappedComponent) => {
  class WithSearch extends React.Component {
    state = {
      searchTerm: "",
    };
    handleSearch = (event) => {
      this.setState({ searchTerm: event.target.value });
    };

    render() {
      let { searchTerm } = this.state;
      let filteredProducts = filterProducts(searchTerm);

      return (
        <>
          <input
            onChange={this.handleSearch}
            value={searchTerm}
            type="text"
            placeholder="Search"
          />
          <WrappedComponent products={filteredProducts} />
        </>
      );
    }
  }

  return WithSearch;
};

const filterProducts = (searchTerm) => {
  searchTerm = searchTerm.toUpperCase();
  return products.filter((product) => {
    let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
    return str.indexOf(searchTerm) >= 0;
  });
};

export default withSearch;
