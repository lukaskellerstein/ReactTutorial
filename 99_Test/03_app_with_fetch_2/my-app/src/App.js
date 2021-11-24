import React, { Component } from "react";
import "./App.css";
import ProductList from "./ProductList";

class App extends Component {
  constructor(props) {
    super(props);
    this.url = "https://fakestoreapi.com/products";
    this.state = {
      results: [],
      loading: true,
      error: "",
    };
  }

  async fetchData() {
    try {
      const data = await fetch(this.url);
      const json = await data.json();

      if (json) {
        this.setState({
          results: json,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: error.message,
      });
    }
  }

  async componentDidMount() {
    this.fetchData();
  }

  render() {
    const { results, loading, error } = this.state;

    if (loading || error) {
      return loading ? "Loading..." : error.message;
    }

    return (
      <div className="App">
        <ProductList results={results} />
      </div>
    );
  }
}

export default App;
