import React, { useEffect, useState } from "react";
import Cars from "../Components/Cars/Cars";
import Header from "../Components/Header/Header";
import "./App.css";

/* --------------------------------------------------------- */
/* SMART - FUNCTIONAL - STATEFUL COMPONENT */
/*
- should contain state
- should contain complex UI logic
*/
/* --------------------------------------------------------- */

function App() {
  console.log("App - render - start");

  // -----------------
  // LOCAL STATE / REACT HOOK - useState()
  // -----------------
  const [myState, setMyState] = useState({
    cars: [
      { id: Math.random(), name: "Audi", HP: "200" },
      { id: Math.random(), name: "BMW", HP: "300" },
      { id: Math.random(), name: "Subaru", HP: "350" },
    ],
    someOther: "this is some other state variable",
    showCars: true,
  });

  // -----------------
  // LIFECYCLE HOOKS / REACT HOOK - useEffect()
  // lets us express different kinds of side effects AFTER A COMPONENT RENDERS !!!
  // Some effects might require cleanup so they return a function
  //
  // Similar to componentDidMount, componentDidUpdate
  // -----------------
  useEffect(() => {
    console.log("App - useEffect without dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("App - useEffect without dependency - cleanup");
    };
  }); // <---- no-depencies, so it is run after EVERY render !!

  useEffect(() => {
    console.log("App - useEffect with empty dependency");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log("App - useEffect without dependency - cleanup");
    };
  }, []); // <---- EMPTY depency, so it is run ONLY ONCE !!

  useEffect(() => {
    console.log("App - useEffect with dependency - state has changed");

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log(
        "App - useEffect with dependency - state has changed - cleanup"
      );
    };
  }, [myState]); // <---- [myState] is dependency, it means this useEffect will be run each time state is changed !!!

  // -----------------
  // METHODS
  // -----------------
  const clickHandler = () => {
    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // This method REPLACES the whole state
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(
      "------------------------- CLICK in App.js ------------------------"
    );
    console.log("Changing the state", myState);
    console.log(
      "-------------------------------------------------------------------"
    );
    setMyState({
      ...myState, //have to specify the rest of the state
      showCars: !myState.showCars,
    });
  };

  const deleteHandler = (index) => {
    let copyArr = [...myState.cars];
    copyArr.splice(index, 1);

    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // This method REPLACES the whole state
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    console.log(
      "------------------------- DELETE CLICK in App.js ------------------------"
    );
    console.log("Changing the state", myState);
    console.log(
      "-------------------------------------------------------------------"
    );
    setMyState({
      ...myState, //have to specify the rest of the state
      cars: copyArr,
    });
  };

  const changedHandler = (event, index) => {
    let changedCar = {
      ...myState.cars[index],
    };
    changedCar.name = event.target.value;

    let changedCars = [...myState.cars];
    changedCars[index] = changedCar;

    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //  This method DOESN'T REPLACES the whole state
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    console.log(
      "------------------------- CHANGE CLICK in App.js ------------------------"
    );
    console.log("Changing the state", myState);
    console.log(
      "-------------------------------------------------------------------"
    );

    setMyState({
      ...myState, //have to specify the rest of the state
      cars: changedCars,
    });
  };

  // IF CONDITION
  let cars = null;
  if (myState.showCars && myState.cars) {
    cars = (
      <Cars
        cars={myState.cars}
        deleteHandler={deleteHandler}
        changedHandler={changedHandler}
      />
    );
  }

  console.log("App - render - return JSX");
  return (
    <div className="App">
      <Header clickHandler={clickHandler} />

      {/*CONDITIONAL ELEMENTS*/}
      {cars}
    </div>
  );
}

export default App;
