import React, { Component } from "react";
import "./App.css";
import ProductsListWithDataFetching from "./ProductListWithDataFetching";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductsListWithDataFetching />
      </div>
    );
  }
}

export default App;
