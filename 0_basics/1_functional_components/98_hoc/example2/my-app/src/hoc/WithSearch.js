import React, { useState } from "react";
import products from "../products.json";

const withSearch = (WrappedComponent) => {
  return () => {
    // -----------------
    // LOCAL STATE / REACT HOOK - useState()
    // -----------------
    const [myState, setMyState] = useState({
      searchTerm: "",
    });

    const handleSearch = (event) => {
      setMyState({
        ...myState,
        searchTerm: event.target.value,
      });
    };

    let filteredProducts = filterProducts(myState.searchTerm);

    return (
      <div>
        <input
          onChange={handleSearch}
          value={myState.searchTerm}
          type="text"
          placeholder="Search"
        />
        <WrappedComponent products={filteredProducts} />
      </div>
    );
  };
};

const filterProducts = (searchTerm) => {
  searchTerm = searchTerm.toUpperCase();
  return products.filter((product) => {
    let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
    return str.indexOf(searchTerm) >= 0;
  });
};

export default withSearch;
