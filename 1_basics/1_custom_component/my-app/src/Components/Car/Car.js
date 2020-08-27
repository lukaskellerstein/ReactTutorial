
import React from 'react';
import { Component } from 'react';


/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/*
- simple component
- easily tested
- should NOT contain state
- should NOT contain complex UI logic
*/
/* --------------------------------------------------------- */

const Car = (props) => {
    return (
        <div onClick={props.click}>
            <div> I am a car - {props.name} - with HP {props.HP} !!!</div>
            <div>{props.children}</div>
            {/* TWO WAY DATABINDING */}
            <input value={props.name} onChange={props.changed} />
        </div>

    )
}


/* --------------------------------------------------------- */
/* SMART - CLASS - STATEFUL COMPONENT */
/*
- should contain state
- should contain complex UI logic
*/
/* --------------------------------------------------------- */

// class Car extends Component {

//     // I don't need to specify dummy constructor
//     // constructor(props) {
//     //     super(props);
//     // }

//     render() {
//         return (
//             <div>
//                 <div> I am a car - {this.props.name} - with HP {this.props.HP} !!!</div>
//                 <div>{this.props.children}</div>
//             </div>
//         )
//     }
// }


export default Car
