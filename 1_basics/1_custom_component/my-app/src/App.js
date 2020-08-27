import React, { Component } from 'react';
import './App.css';

import Person from './Components/Person/Person';
import Car from './Components/Car/Car';

/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/*
- simple component
- easily tested
- should NOT contain state
- should NOT contain complex UI logic
*/
/* --------------------------------------------------------- */

// function App() {

//   const clickHandler = () => {
//     console.log('something to log');
//   }

//   return (
//     <div className="App">
//       <h1>Hello !!!</h1>

//       {/* A simple reference of component */}
//       <Person />
//       {/* A reference of component with input parameters */}
//       <Car name="Audi" HP="200" />
//       <Car name="BMW" HP="300"></Car>

//       {/* A component with input parameters */}
//       <Car name="Subaru" HP="350" click={clickHandler}> This is awesome car !!</Car>


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

  clickHandler = () => {
    console.log('something to log');
  }

  render() {
    return (
      <div className="App">
        <h1>Hello !!!</h1>

        {/* A simple reference of component */}
        <Person />
        {/* A reference of component with input parameters */}
        <Car name="Audi" HP="200" />
        <Car name="BMW" HP="300"></Car>

        {/* A component with input parameters */}
        <Car name="Subaru" HP="350" click={this.clickHandler}> This is awesome car !!</Car>


        <button onClick={this.clickHandler}>CLICK ON ME</button>
      </div>
    );
  }
}

export default App;
