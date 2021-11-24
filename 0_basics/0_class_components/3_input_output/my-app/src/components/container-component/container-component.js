import React, { Component } from "react";
import MyComponent from "../my-component/my-component";

class ContainerComponent extends Component {
  log = (data) => {
    console.log(data);
  };

  render() {
    // SET PROPS-FUNCTION => AKA OUTPUT
    return <MyComponent onChange={this.log} />;
  }
}

export default ContainerComponent;
