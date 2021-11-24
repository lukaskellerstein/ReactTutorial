import React, { memo, useState } from "react";
import "./App.css";

const App = () => {
  const [myState, setMyState] = useState({
    count1: 11,
    count2: 22,
    count3: 33,
  });

  const input1OnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count1: val }));
  };

  const input2OnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count2: val }));
  };

  console.log("render App");

  return (
    <div>
      <h1>
        Try to write into input multiple times same number and watch the logs
      </h1>

      {/*MANUAL PURE COMPONENT*/}
      <h1>Manual Pure component</h1>
      <h3> App state - count1 - {myState.count1} </h3>
      <input onChange={input1OnChange} placeholder="Enter a Count1..." />
      <ManualPureComponent count={myState.count1} />

      {/*PURE COMPONENT*/}
      <h1>Pure component</h1>
      <h3> App state - count2 - {myState.count2} </h3>
      <input onChange={input2OnChange} placeholder="Enter a Count2..." />
      <PureComponent count={myState.count2} />

      {/*NORMAL COMPONENT*/}
      <h1>Normal component</h1>
      <h3> App state - count3 - {myState.count3} </h3>
      <input
        onChange={(evt) => {
          const val = evt.target.value;
          if (val !== "") setMyState((state) => ({ ...state, count3: val }));
        }}
        placeholder="Enter a Count3..."
      />
      <NormalComponent count={myState.count3} />
    </div>
  );
};

// ---------------------------------
// MANUAL PURE COMPONENT
// ---------------------------------

function arePropsEqual(prevProps, nextProps) {
  return prevProps.count === nextProps.count;
}

const Count1 = (props) => {
  let [myState, setMyState] = useState({
    count: props.count,
  });

  const inputOnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count: val }));
  };

  console.log("render Count1");

  return (
    <div>
      <h4> Count1 Component state - {myState.count} </h4>
      <input onChange={inputOnChange} placeholder="Enter a Count..." />
    </div>
  );
};
const ManualPureComponent = memo(Count1, arePropsEqual);

// ---------------------------------
// PURE COMPONENT
// ---------------------------------
const Count2 = (props) => {
  const [myState, setMyState] = useState({
    count: props.count,
  });

  const inputOnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count: val }));
  };

  console.log("render Count2");

  return (
    <div>
      <h4> Count2 Component state - {myState.count} </h4>
      <input onChange={inputOnChange} placeholder="Enter a Count..." />
    </div>
  );
};

const PureComponent = memo(Count2);

// ---------------------------------
// NORMAL COMPONENT
// ---------------------------------
const Count3 = (props) => {
  const [myState, setMyState] = useState({
    count: props.count,
  });

  const inputOnChange = (evt) => {
    const val = evt.target.value;
    if (val !== "") setMyState((state) => ({ ...state, count: val }));
  };

  console.log("render Count3");
  return (
    <div>
      <h4> Count3 Component state - {myState.count} </h4>
      <input onChange={inputOnChange} placeholder="Enter a Count..." />
    </div>
  );
};
const NormalComponent = Count3;

export default App;
