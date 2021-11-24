import React from 'react';
import logo from './logo.svg';
import './App.css';

// HOC
const reverse = (PassedComponent) => {
  return ({ children, ...props }) =>
    <PassedComponent {...props}>
      {children.split("").reverse().join("")}
    </PassedComponent>
}

// Normal component
const Name = (props) => <div>{props.children}</div>

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
