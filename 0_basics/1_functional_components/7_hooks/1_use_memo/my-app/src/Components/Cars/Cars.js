import React, { useEffect } from "react";
import Car from "./Car/Car";

/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */

const Cars = (props) => {
  console.log("Cars - render - start");

  // -----------------
  // LIFECYCLE HOOKS / REACT HOOK - useEffect()
  // lets us express different kinds of side effects after a component renders.
  // Some effects might require cleanup so they return a function
  //
  // Similar to componentDidMount, componentDidUpdate
  // -----------------
  useEffect(() => {
    console.log("Cars - useEffect without dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Cars - useEffect without dependency - cleanup");
    };
  }); // <---- no-depencies => EVERY render !!

  useEffect(() => {
    console.log("Cars - useEffect with empty dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("Cars - useEffect without dependency - cleanup");
    };
  }, []); // <---- EMPTY depency => run ONLY ONCE !!

  useEffect(() => {
    console.log("Cars - useEffect with dependency - state has changed");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log(
        "Cars - useEffect with dependency - state has changed - cleanup"
      );
    };
  }, [props]); // <---- [props] is dependency => each time props are changed !!!

  console.log("Cars - render - return JSX", props);
  return (
    <div>
      {/* FOR EACH */}
      {props.cars.map((car, index) => {
        return (
          <Car
            key={car.id}
            name={car.name}
            HP={car.HP}
            clicked={props.deleteHandler.bind(this, index)}
            changed={(event) => props.changedHandler(event, index)}
          />
        );
      })}
    </div>
  );
};

export default Cars;
