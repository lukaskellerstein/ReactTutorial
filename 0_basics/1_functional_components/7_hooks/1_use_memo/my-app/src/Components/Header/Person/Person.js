import React, { useEffect } from "react";

/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */
const Person = () => {
  console.log("Person - render - start");

  // -----------------
  // LIFECYCLE HOOKS / REACT HOOK - useEffect()
  // lets us express different kinds of side effects after a component renders.
  // Some effects might require cleanup so they return a function
  //
  // Similar to componentDidMount, componentDidUpdate
  // -----------------
  useEffect(() => {
    console.log("Person - useEffect without dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Person - useEffect without dependency - cleanup");
    };
  }); // <---- no-depencies => EVERY render !!

  useEffect(() => {
    console.log("Person - useEffect with empty dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Person - useEffect without dependency - cleanup");
    };
  }, []); // <---- EMPTY depency => run ONLY ONCE !!

  console.log("Person - render - return JSX");
  return <div> I am a Person !!!</div>;
};

export default Person;
