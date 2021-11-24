import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// HOC
const reverse = (WrappedComponent) => {
  class Reverse extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <WrappedComponent {...this.props}>
          {this.props.children.split("").reverse().join("")}
        </WrappedComponent>
      );
    }
  }

  return Reverse;
};

// Normal component
class Name extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

// Component crated from HOC
const ReversedName = reverse(Name);

function App() {
  return (
    <div className="App">
      <Name>Hello world</Name>
      <ReversedName>Hello World</ReversedName>
    </div>
  );
}

export default App;
