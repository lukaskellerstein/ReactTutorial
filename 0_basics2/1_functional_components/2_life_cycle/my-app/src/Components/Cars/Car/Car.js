
import React, { useEffect } from 'react';

/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */

const Car = (props) => {
    console.log('Car - render');

    // -----------------
    // LIFECYCLE HOOKS / REACT HOOK - useEffect()
    // lets us express different kinds of side effects after a component renders. 
    // Some effects might require cleanup so they return a function
    //
    // Similar to componentDidMount, componentDidUpdate
    // -----------------
    useEffect(() => {
        console.log('Car - useEffect');

        // Cleanup - Similar to componentWillUnmount
        return () => {
            console.log('Car - cleanup');
        };
    });

    return (
        <div onClick={props.clicked}>
            <div> I am a car - {props.name} - with HP {props.HP} !!!</div>
            <div>{props.children}</div>
            {/* TWO WAY DATABINDING */}
            <input value={props.name} onChange={props.changed} />
        </div>
    )
}

export default Car
