
import React, { Component } from 'react';


/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/*
- simple component
- easily tested
- should NOT contain state
- should NOT contain complex UI logic
*/
/* --------------------------------------------------------- */

// const Person = () => {
//     return <div> I am a Person !!!</div>
// }


/* --------------------------------------------------------- */
/* SMART - CLASS - STATEFUL COMPONENT */
/*
- should contain state
- should contain complex UI logic
*/
/* --------------------------------------------------------- */


class Person extends Component {
    render() {
        return <div> I am a Person !!!</div>
    }
}


export default Person