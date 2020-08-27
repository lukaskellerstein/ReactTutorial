import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person/Person';
import Car from './Components/Car/Car';
import { useState } from 'react';

/* --------------------------------------------------------- */
/* SMART - FUNCTIONAL - STATEFUL COMPONENT */
/*
- should contain state
- should contain complex UI logic
*/
/* --------------------------------------------------------- */

// function App() {

//   // -----------------
//   // LOCAL STATE
//   // -----------------
//   const [myState, setMyState] = useState({
//     cars: [
//       { name: "Audi", HP: "200" },
//       { name: "BMW", HP: "300" },
//       { name: "Subaru", HP: "350" },
//     ],
//     someOther: "this is some other state variable"
//   });

//   const clickHandler = () => {
//     console.log('something to log');
//     console.log(myState.someOther);

//     // CHANGE / MUTATE THE STATE (PART OF THE STATE)
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     // This method REPLACES the whole state
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     setMyState({
//       ...myState, //have to specify the rest of the state
//       cars: [
//         { name: "Skoda", HP: Math.random() },
//         { name: "BMW", HP: "300" },
//         { name: "Subaru", HP: "350" },
//       ]
//     })
//   }

//   const changedHandler = (event) => {
//     // CHANGE / MUTATE THE STATE (PART OF THE STATE)
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     // This method REPLACES the whole state
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     setMyState({
//       ...myState, //have to specify the rest of the state
//       cars: [
//         { name: "Skoda", HP: Math.random() },
//         { name: event.target.value, HP: "300" },
//         { name: "Subaru", HP: "350" },
//       ]
//     })
//   }

//   return (
//     <div className="App">
//       <h1>Hello !!!</h1>

//       {/* A simple reference of component */}
//       <Person />
//       {/* A reference of component with input parameters */}
//       <Car name={myState.cars[0].name} HP={myState.cars[0].HP} />
//       <Car name={myState.cars[1].name} HP={myState.cars[1].HP} changed={changedHandler} />

//       {/* A component with input parameters */}
//       <Car name={myState.cars[2].name} HP={myState.cars[2].HP}> This is awesome car !!</Car>


//       <button onClick={clickHandler}>CLICK ON ME</button>
//     </div>
//   );
// }


/* --------------------------------------------------------- */
/* SMART - CLASS - STATEFUL COMPONENT */
/*
- should contain state
- should contain complex UI logic
*/
/* --------------------------------------------------------- */
class App extends Component {

  // I don't need to specify dummy constructor
  // constructor(props) {
  //   super(props);
  // }

  // -----------------
  // LOCAL STATE
  // -----------------
  state = {
    cars: [
      { name: "Audi", HP: "200" },
      { name: "BMW", HP: "300" },
      { name: "Subaru", HP: "350" },
    ],
    someOther: "this is some other state variable"
  }

  clickHandler = () => {
    console.log('changing the state');
    console.log(this.state.someOther);

    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //  This method DOESN'T REPLACES the whole state
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.setState({
      cars: [
        { name: "Skoda", HP: Math.random() },
        { name: "BMW", HP: "300" },
        { name: "Subaru", HP: "350" },
      ]
    })

    // DON'T USE DIRECT ACCES TO THE STATE !!!!!!
    // this.state.someOther = "changed state";
  }

  changedHandler = (event) => {
    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //  This method DOESN'T REPLACES the whole state
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.setState({
      cars: [
        { name: "Skoda", HP: Math.random() },
        { name: event.target.value, HP: "300" },
        { name: "Subaru", HP: "350" },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello !!!</h1>

        {/* A simple reference of component */}
        <Person />
        {/* A reference of component with input parameters */}
        <Car name={this.state.cars[0].name} HP={this.state.cars[0].HP} />
        <Car name={this.state.cars[1].name} HP={this.state.cars[1].HP} changed={this.changedHandler} />

        {/* A component with input parameters */}
        <Car name={this.state.cars[2].name} HP={this.state.cars[2].HP}> This is awesome car !!</Car>


        <button onClick={this.clickHandler}>CLICK ON ME</button>
      </div>
    );
  }
}

export default App;
