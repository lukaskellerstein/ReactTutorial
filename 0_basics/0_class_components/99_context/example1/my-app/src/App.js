import React, { Component } from 'react';
import './App.css';

import Cars from './Components/Cars/Cars';
import MyGlobalContext from './Context/GlobalContext';

/* --------------------------------------------------------- */
/* SMART - CLASS - STATEFUL COMPONENT */
/*
- should contain state
- should contain complex UI logic
*/
/* --------------------------------------------------------- */
class App extends Component {
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
      showCars: true,
      globalText: ""
    }
  }

  // -----------------
  // METHODS (affecting the state)
  // -----------------
  clickHandler = () => {
    this.setState({
      showCars: !this.state.showCars
    })
  }

  addHandler = () => {
    console.log('addHandler');
    let copyArr = [{ id: Math.random(), name: "", HP: "" }, ...this.state.cars];
    this.setState({
      cars: copyArr
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

  globalTextChanged = (event) => {
    console.log('globalTextChanged', event.target.value);

    this.setState({
      globalText: event.target.value
    })
    // set it to the context
  }

  render() {
    console.log('App - render');

    // IF CONDITION
    let cars = null;
    if (this.state.showCars) {
      cars = (
        <div>
          <button onClick={this.addHandler}>Add new car</button>
          <Cars
            cars={this.state.cars}
            deleteHandler={this.deleteHandler}
            changedHandler={this.changedHandler} />
        </div>
      );
    }

    return (
      <div className="App">

        <div>Some Global Text</div>
        <input value={this.state.globalText} onChange={this.globalTextChanged}></input>

        <MyGlobalContext.Provider value={{ someVariable1: this.state.globalText }}>

          {/*CONDITIONAL ELEMENTS*/}
          {cars}

        </MyGlobalContext.Provider>

      </div>
    );
  }
}

export default App;
