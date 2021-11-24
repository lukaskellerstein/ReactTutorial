import React, { useState } from "react";

const MyComponent = (props) => {
  const [myState, setMyState] = useState({
    text: "no text yet",
  });

  const inputOnChange = (evt) => {
    const val = evt.target.value;
    setMyState((state) => ({ ...state, text: val }));

    // CALL PROPS-FUNCTION => AKA OUTPUT
    if ("onChange" in props) {
      props.onChange(val);
    }
  };

  const buttonClick = () => {
    const val = "Changed by click";
    setMyState((state) => ({ ...state, text: val }));

    // CALL PROPS-FUNCTION => AKA OUTPUT
    if ("onChange" in props) {
      props.onChange(val);
    }
  };

  return (
    <div>
      <input type="text" value={myState.text} onChange={inputOnChange} />
      <button onClick={buttonClick}>Change value</button>
      <div>{myState.text}</div>
    </div>
  );
};

export default MyComponent;
