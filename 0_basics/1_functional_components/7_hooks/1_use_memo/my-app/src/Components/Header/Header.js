import React, { useEffect } from "react";
import Person from "./Person/Person";

/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */
const Header = (props) => {
  console.log("Header - render - start");

  // -----------------
  // LIFECYCLE HOOKS / REACT HOOK - useEffect()
  // lets us express different kinds of side effects after a component renders.
  // Some effects might require cleanup so they return a function
  //
  // Similar to componentDidMount, componentDidUpdate
  // -----------------
  useEffect(() => {
    console.log("Header - useEffect without dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Header - useEffect without dependency - cleanup");
    };
  }); // <---- no-depencies => EVERY render !!

  useEffect(() => {
    console.log("Header - useEffect with empty dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Header - useEffect without dependency - cleanup");
    };
  }, []); // <---- EMPTY depency => run ONLY ONCE !!

  useEffect(() => {
    console.log("Header - useEffect with dependency - state has changed");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log(
        "Header - useEffect with dependency - state has changed - cleanup"
      );
    };
  }, [props]); // <---- [props] is dependency => each time props are changed !!!

  console.log("Header - render - return JSX");
  return (
    <div className="Header">
      <h1>Hello !!!</h1>
      <Person />
      <button onClick={props.clickHandler}>CLICK ON ME</button>
    </div>
  );
};

export default Header;
