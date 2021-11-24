import React, { Component } from "react";

class MyComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "no text yet",
    };
  }

  inputOnChange = (evt) => {
    const val = evt.target.value;
    this.setState((state) => ({ ...state, text: val }));

    // CALL PROPS-FUNCTION => AKA OUTPUT
    if ("onChange" in this.props) {
      this.props.onChange(val);
    }
  };

  buttonClick = () => {
    const val = "Changed by click";
    this.setState((state) => ({ ...state, text: val }));

    // CALL PROPS-FUNCTION => AKA OUTPUT
    if ("onChange" in this.props) {
      this.props.onChange(val);
    }
  };

  render() {
    return (
      <div>
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
