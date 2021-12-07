import React, { useRef, useState } from "react";

const MyComponent = (props) => {
  const inputRef = useRef("initial value");

  const [myState, setState] = useState({
    text: "initial value in state",
  });

  const buttonClick = () => {
    // get the Ref value
    const val = inputRef.current.value;

    setState({
      ...myState,
      text: val,
    });

    // CALL PROPS-FUNCTION => AKA OUTPUT
    if ("onChange" in props) {
      props.onChange(val);
    }
  };

  return (
    <>
      <input type="text" ref={inputRef} />
      <button onClick={buttonClick}>Change value</button>
      <div>{myState.text}</div>
    </>
  );
};

export default MyComponent;
