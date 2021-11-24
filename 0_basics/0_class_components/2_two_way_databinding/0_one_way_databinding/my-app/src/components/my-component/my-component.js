import React, { Component } from "react";

class MyComponent extends Component {
  state = {
    text: "no text yet",
  };

  inputOnChange = (evt) => {
    const val = evt.target.value;
    this.setState((state) => ({ text: val }));
  };

  buttonClick = () => {
    this.setState((state) => ({ text: "Changed by click" }));
  };

  render() {
    return (
      <div>
        {/* ONE WAY DATABINDING - WE ARE NOT SETTING VALUE IN INPUT !! */}
        <input type="text" onChange={this.inputOnChange} />
        <button onClick={this.buttonClick}>Change value</button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default MyComponent;
