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
//       { id: Math.random(), name: "Audi", HP: "200" },
//       { id: Math.random(), name: "BMW", HP: "300" },
//       { id: Math.random(), name: "Subaru", HP: "350" },
//     ],
//     someOther: "this is some other state variable",
//     showCars: true
//   });


//   const clickHandler = () => {
//     // CHANGE / MUTATE THE STATE (PART OF THE STATE)
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     // This method REPLACES the whole state
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     console.log(myState);
//     setMyState({
//       ...myState, //have to specify the rest of the state
//       showCars: !myState.showCars
//     })
//   }

//   const deleteHandler = (index) => {
//     let copyArr = [...myState.cars];
//     copyArr.splice(index, 1);

//     // CHANGE / MUTATE THE STATE (PART OF THE STATE)
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     // This method REPLACES the whole state
//     // WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     setMyState({
//       ...myState, //have to specify the rest of the state
//       cars: copyArr
//     })
//   }

//   const changedHandler = (event, index) => {
//     let changedCar = {
//       ...myState.cars[index]
//     }
//     changedCar.name = event.target.value;

//     let changedCars = [...myState.cars];
//     changedCars[index] = changedCar;

//     // CHANGE / MUTATE THE STATE (PART OF THE STATE)
//     //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     //  This method DOESN'T REPLACES the whole state
//     //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//     setMyState({
//       ...myState, //have to specify the rest of the state
//       cars: changedCars
//     })
//   }

//   // IF CONDITION
//   let cars = null;
//   if (myState.showCars && myState.cars) {
//     cars = (
//       <div>
//         {/* FOR EACH */}
//         {myState.cars.map((car, index) => {
//           return (
//             <Car
//               key={car.id}
//               name={car.name}
//               HP={car.HP}
//               clicked={deleteHandler.bind(this, index)}
//               changed={(event) => changedHandler(event, index)} />
//           )
//         })}
//       </div>
//     )
//   }

//   return (

//     <div className="App">
//       <h1>Hello !!!</h1>

//       {/* A simple reference of component */}
//       <Person />

//       <button onClick={clickHandler}>CLICK ON ME</button>

//       {/*CONDITIONAL ELEMENTS*/}
//       {cars}
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
      { id: Math.random(), name: "Audi", HP: "200" },
      { id: Math.random(), name: "BMW", HP: "300" },
      { id: Math.random(), name: "Subaru", HP: "350" },
    ],
    someOther: "this is some other state variable",
    showCars: true
  }

  // buttonStyle = { //<------------------------------------- Global Style is read-only !!!!!
  //   backgroundColor: "green",
  //   color: "white"
  // }

  clickHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler = (index) => {
    let copyArr = [...this.state.cars];
    copyArr.splice(index, 1);
    this.setState({
      cars: copyArr
    })
  }

  changedHandler = (event, index) => {
    let changedCar = {
      ...this.state.cars[index]
    }
    changedCar.name = event.target.value;

    let changedCars = [...this.state.cars];
    changedCars[index] = changedCar;

    // CHANGE / MUTATE THE STATE (PART OF THE STATE)
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    //  This method DOESN'T REPLACES the whole state
    //  WARNING !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    this.setState({
      cars: changedCars
    })
  }

  render() {

    const buttonStyle = { //<------------------------------------- Style as JS object
      backgroundColor: "green",
      color: "white"
    }

    let h1Classes = "";
    if (this.state.cars.length > 2) {
      h1Classes = [].concat(["red", "bold"].join(' '))
    }

    // IF CONDITION
    let cars = null;
    if (this.state.showCars) {
      cars = (
        <div>
          {/* FOR EACH */}
          {this.state.cars.map((car, index) => {
            return (
              <Car
                key={car.id}
                name={car.name}
                HP={car.HP}
                clicked={this.deleteHandler.bind(this, index)}
                changed={(event) => this.changedHandler(event, index)} />
            )
          })}
        </div>
      );

      buttonStyle.backgroundColor = "red"; //<-------------------------------------Change style as JS object
    }


    return (
      <div className="App">
        <h1 className={h1Classes}>Hello !!!</h1>

        {/* A simple reference of component */}
        <Person />
        <button style={buttonStyle} //<-------------------------------------Set style as JS object
          onClick={this.clickHandler}>CLICK ON ME</button>

        {/*CONDITIONAL ELEMENTS*/}
        {cars}

      </div>
    );
  }
}

export default App;
