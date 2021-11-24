import React, { Component } from "react";
import "./App.css";
import ProductsListWithSearch from "./ProductListWithSearch";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsListWithSearch />
      </div>
    );
  }
}

export default App;
