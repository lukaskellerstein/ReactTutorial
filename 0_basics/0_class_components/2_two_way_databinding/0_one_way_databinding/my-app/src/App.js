import React, { Component } from "react";
import "./App.css";
import MyComponent from "./components/my-component/my-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyComponent />
      </div>
    );
  }
}

export default App;
