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
        {/* TWO WAY DATABINDING !! value={this.state.text} !! */}
        <input
          type="text"
          value={this.state.text}
          onChange={this.inputOnChange}
        />
        <button onClick={this.buttonClick}>Change value</button>
        <div>{this.state.text}</div>
      </div>
    );
  }
}

export default MyComponent;
