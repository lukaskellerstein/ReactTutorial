import React, { useState } from "react";

const MyComponent = () => {
  const [myState, setMyState] = useState({
    text: "no text yet",
  });

  const inputOnChange = (evt) => {
    const val = evt.target.value;
    setMyState((state) => ({ ...state, text: val }));
  };

  const buttonClick = () => {
    setMyState((state) => ({ ...state, text: "Changed by click" }));
  };

  return (
    <div>
      {/* ONE WAY DATABINDING - WE ARE NOT SETTING VALUE IN INPUT !! */}
      <input type="text" onChange={inputOnChange} />
      <button onClick={buttonClick}>Change value</button>
      <div>{myState.text}</div>
    </div>
  );
};

export default MyComponent;
