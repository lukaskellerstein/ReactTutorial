import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    count1: 0,
    count2: 0,
    count3: 0,
  };

  input1OnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") this.setState((state) => ({ count1: val }));
  };

  input2OnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") this.setState((state) => ({ count2: val }));
  };

  render() {
    console.log("render App");
    return (
      <div>
        <h1>
          Try to write into input multiple times same number and watch the logs
        </h1>

        {/*MANUAL PURE COMPONENT*/}
        <h1>Manual Pure component</h1>
        <h3> App state - count1 - {this.state.count1} </h3>
        <input onChange={input1OnChange} placeholder="Enter a Count1..." />
        <Count1 count={this.state.count1} />

        {/*PURE COMPONENT*/}
        <h1>Pure component</h1>
        <h3> App state - count2 - {this.state.count2} </h3>
        <input onChange={input2OnChange} placeholder="Enter a Count2..." />
        <Count2 count={this.state.count2} />

        {/*NORMAL COMPONENT*/}
        <h1>Normal component</h1>
        <h3> App state - count3 - {this.state.count3} </h3>
        <input
          onChange={(evt) => {
            const val = evt.target.value;
            if (val !== "")
              this.setState((state) => ({
                count3: val,
              }));
          }}
          placeholder="Enter a Count3..."
        />
        <Count3 count={this.state.count3} />
      </div>
    );
  }
}

// ---------------------------------
// MANUAL PURE COMPONENT
// ---------------------------------
class Count1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  inputOnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count: val }));
  };

  // THIS METHOD IS MAKING PURE COMPONENT
  shouldComponentUpdate(nextProps, nextState) {
    // Check shallow items - PROPS
    if (nextProps.count !== this.props.count) {
      return true;
    }
    // Check shallow items - STATE
    if (nextState.count !== this.state.count) {
      return true;
    }
    return false;
  }

  render() {
    console.log("render Count1");
    return (
      <div>
        <h4> Count1 Component state - {this.state.count} </h4>
        <input onChange={inputOnChange} placeholder="Enter a Count..." />
      </div>
    );
  }
}

// ---------------------------------
// PURE COMPONENT
// ---------------------------------
class Count2 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  inputOnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count: val }));
  };

  // DON'T HAVE TO WRITE MANUALLY
  // shouldComponentUpdate(nextProps, nextState) {
  //   // Check shallow items - PROPS
  //   if (nextProps.count !== this.nextProps.count) {
  //     return true
  //   }
  //   // Check shallow items - STATE
  //   if (nextState.count !== this.state.count) {
  //     return true
  //   }
  //   return false
  // }

  render() {
    console.log("render Count2");
    return (
      <div>
        <h4> Count2 Component state - {this.state.count} </h4>
        <input onChange={inputOnChange} placeholder="Enter a Count..." />
      </div>
    );
  }
}

// ---------------------------------
// NORMAL COMPONENT
// ---------------------------------
class Count3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count,
    };
  }

  inputOnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count: val }));
  };

  render() {
    console.log("render Count3");
    return (
      <div>
        <h4> Count3 Component state - {this.state.count} </h4>
        <input onChange={inputOnChange} placeholder="Enter a Count..." />
      </div>
    );
  }
}

export default App;
