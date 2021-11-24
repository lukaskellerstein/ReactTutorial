import React, { Component } from "react";
import "./App.css";
import ContainerComponent from "./components/container-component/container-component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerComponent />
      </div>
    );
  }
}

export default App;
