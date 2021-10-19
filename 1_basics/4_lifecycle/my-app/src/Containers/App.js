import React, { Component } from 'react';
import './App.css';

import Header from '../Components/Header/Header';
import Cars from '../Components/Cars/Cars';
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
//       <Cars
//         cars={myState.cars}
//         deleteHandler={deleteHandler}
//         changedHandler={changedHandler} />
//     );
//   }

//   return (

//     <div className="App">
//       <Header clickHandler={clickHandler} />

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

  // -----------------
  // LIFECYCLE HOOKS - CREATION
  // -----------------

  // 1.
  constructor(props) {
    super(props);

    console.log('Constructor');

    // -----------------
    // LOCAL STATE
    // -----------------
    this.state = {
      cars: [
        { id: Math.random(), name: "Audi", HP: "200" },
        { id: Math.random(), name: "BMW", HP: "300" },
        { id: Math.random(), name: "Subaru", HP: "350" },
      ],
      someOther: "this is some other state variable",
      showCars: true
    }
  }

  // 2.
  static getDerivedStateFromProps(props, state) {
    console.log('App - getDerivedStateFromProps', props, state);
    return state;
  }

  // 3.
  // render() ... as a last method in this class

  // 4.
  componentDidMount() {
    console.log('App - componentDidMount');
  }


  // -----------------
  // LIFECYCLE HOOKS - UPDATING
  //
  // When props or state is changed
  // -----------------

  // 1.
  // static getDerivedStateFromProps(){ }

  // 2.
  shouldComponentUpdate() {
    console.log('App - shouldComponentUpdate');
    return true;
  }

  // 3. 
  // render() ... as a last method in this class

  // 4.
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('App - getSnapshotBeforeUpdate', prevProps, prevState);
  }

  // 5.
  componentDidUpdate() {
    console.log('App - componentDidUpdate');
  }


  // -----------------
  // LIFECYCLE HOOKS - DESTROY
  // -----------------
  componentWillUnmount() {
    console.log('App - componentWillUnmount');
  }


  // -----------------
  // METHODS (affecting the state)
  // -----------------
  clickHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  deleteHandler = (index) => {
    console.log('deleteHandler', index);
    let copyArr = [...this.state.cars];
    copyArr.splice(index, 1);
    console.log('deleteHandler', copyArr);
    this.setState({
      cars: copyArr
    })
  }

  changedHandler = (event, index) => {
    console.log('changedHandler', index);

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

    // IF CONDITION
    let cars = null;
    if (this.state.showCars) {
      cars = (
        <Cars
          cars={this.state.cars}
          deleteHandler={this.deleteHandler}
          changedHandler={this.changedHandler} />
      );
    }

    return (
      <div className="App">

        <Header clickHandler={this.clickHandler} />

        {/*CONDITIONAL ELEMENTS*/}
        {cars}

      </div>
    );
  }
}

export default App;
