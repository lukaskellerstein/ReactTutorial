import React, { useEffect } from "react";

/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */

const Car = (props) => {
  console.log("Car - render - start");

  // -----------------
  // LIFECYCLE HOOKS / REACT HOOK - useEffect()
  // lets us express different kinds of side effects after a component renders.
  // Some effects might require cleanup so they return a function
  //
  // Similar to componentDidMount, componentDidUpdate
  // -----------------
  useEffect(() => {
    console.log("Car - useEffect without dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Car - useEffect without dependency - cleanup");
    };
  }); // <---- no-depencies => EVERY render !!

  useEffect(() => {
    console.log("Car - useEffect with empty dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Car - useEffect without dependency - cleanup");
    };
  }, []); // <---- EMPTY depency => run ONLY ONCE !!

  useEffect(() => {
    console.log("Car - useEffect with dependency - state has changed");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log(
        "Car - useEffect with dependency - state has changed - cleanup"
      );
    };
  }, [props]); // <---- [props] is dependency => each time props are changed !!!

  console.log("Car - render - return JSX", props);
  return (
    <div onClick={props.clicked}>
      <div>
        {" "}
        I am a car - {props.name} - with HP {props.HP} !!!
      </div>
      <div>{props.children}</div>
      {/* TWO WAY DATABINDING */}
      <input value={props.name} onChange={props.changed} />
    </div>
  );
};

export default Car;
