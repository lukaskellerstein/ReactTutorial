import React, { useState, useEffect } from 'react';
import './App.css';

import Header from '../Components/Header/Header';
import Cars from '../Components/Cars/Cars';

/* --------------------------------------------------------- */
/* SMART - FUNCTIONAL - STATEFUL COMPONENT */
/*
- should contain state
- should contain complex UI logic
*/
/* --------------------------------------------------------- */

function App() {
  console.log('App - render');


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
    showCars: true
  });


  // -----------------
  // LIFECYCLE HOOKS / REACT HOOK - useEffect()
  // lets us express different kinds of side effects after a component renders. 
  // Some effects might require cleanup so they return a function
  //
  // Similar to componentDidMount, componentDidUpdate
  // -----------------
  useEffect(() => {
    console.log('App - useEffect');

    // Cleanup - Similar to componentWillUnmount
    return () => {
      console.log('App - cleanup');
    };
  });



  // -----------------
  // METHODS
  // -----------------
  const clickHandler = () => {
    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // This method REPLACES the whole state
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    console.log(myState);
    setMyState({
      ...myState, //have to specify the rest of the state
      showCars: !myState.showCars
    })
  }

  const deleteHandler = (index) => {
    let copyArr = [...myState.cars];
    copyArr.splice(index, 1);

    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // This method REPLACES the whole state
    // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    setMyState({
      ...myState, //have to specify the rest of the state
      cars: copyArr
    })
  }

  const changedHandler = (event, index) => {
    let changedCar = {
      ...myState.cars[index]
    }
    changedCar.name = event.target.value;

    let changedCars = [...myState.cars];
    changedCars[index] = changedCar;

    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //  This method DOESN'T REPLACES the whole state
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    setMyState({
      ...myState, //have to specify the rest of the state
      cars: changedCars
    })
  }

  // IF CONDITION
  let cars = null;
  if (myState.showCars && myState.cars) {
    cars = (
      <Cars
        cars={myState.cars}
        deleteHandler={deleteHandler}
        changedHandler={changedHandler} />
    );
  }

  return (

    <div className="App">
      <Header clickHandler={clickHandler} />

      {/*CONDITIONAL ELEMENTS*/}
      {cars}
    </div>
  );
}


export default App;
