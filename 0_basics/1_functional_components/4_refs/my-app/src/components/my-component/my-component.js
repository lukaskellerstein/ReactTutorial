import React, { useRef, useState, createRef } from "react";
import MyInput from "../my-input-component/my-input-component";
import MyList from "../my-list-component/my-list-component";

const MyComponent = (props) => {
  const input1Ref = useRef("initial value 1");
  const input2Ref = useRef("initial value 2");

  const listRef = useRef();

  const [myState, setState] = useState({
    text: "initial value in state",
  });

  const buttonClick = () => {
    // get the Ref value
    const val1 = input1Ref.current.value;
    const val2 = input2Ref.current.value;

    setState({
      ...myState,
      text1: val1,
      text2: val2,
    });

    // CALL PROPS-FUNCTION => AKA OUTPUT
    if ("onChange" in props) {
      props.onChange(val1);
    }

    console.log(listRef);
    console.log(listRef.current);
    listRef.current.myMethod();
    console.log(listRef.current.myVar);
  };

  return (
    <>
      {/* STANDARD INPUT */}
      <input type="text" ref={input1Ref} />
      {/* MY CUSTOM INPUT */}
      <MyInput type="text" ref={input2Ref} />
      <button onClick={buttonClick}>Change value</button>
      <div>Text1: {myState.text1}</div>
      <div>Text2: {myState.text2}</div>

      {/* MY CUSTOM LIST */}
      <MyList data={["aaa", "bbb", "ccc"]} ref={listRef} />
    </>
  );
};

export default MyComponent;
