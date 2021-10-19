
import React from 'react';
import { Component } from 'react';


/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */

// const Car = (props) => {
//     return (
//         <div onClick={props.clicked}>
//             <div> I am a car - {props.name} - with HP {props.HP} !!!</div>
//             <div>{props.children}</div>
//             {/* TWO WAY DATABINDING */}
//             <input value={props.name} onChange={props.changed} />
//         </div>
//     )
// }


/* --------------------------------------------------------- */
/* DUMB - CLASS - STATELESS COMPONENT */
/* --------------------------------------------------------- */

class Car extends Component {


    // -----------------
    // LIFECYCLE HOOKS - CREATION
    // -----------------

    // 1.
    constructor(props) {
        super(props);

        console.log('Car - Constructor');

        // Local state
        this.state = {};
    }

    // 2.
    static getDerivedStateFromProps(props, state) {
        console.log('Car - getDerivedStateFromProps', props, state);
        return state;
    }

    // 3.
    render() {
        console.log('Car - render');
        return (
            <div onClick={this.props.clicked}>
                <div> I am a car - {this.props.name} - with HP {this.props.HP} !!!</div>
                <div>{this.props.children}</div>
                {/* TWO WAY DATABINDING */}
                <input value={this.props.name} onChange={this.props.changed} />
            </div>
        )
    }

    // 4.
    componentDidMount() {
        console.log('Car - componentDidMount');
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
        console.log('Car - shouldComponentUpdate');
        return true;
    }

    // 3. 
    // render() ... as a last method in this class

    // 4.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Car - getSnapshotBeforeUpdate', prevProps, prevState);
    }

    // 5.
    componentDidUpdate() {
        console.log('Car - componentDidUpdate');
    }

    // -----------------
    // LIFECYCLE HOOKS - DESTROY
    // -----------------
    componentWillUnmount() {
        console.log('Car - componentWillUnmount');
    }

}


export default Car
