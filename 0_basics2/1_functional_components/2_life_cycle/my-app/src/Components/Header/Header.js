import React, { useEffect } from 'react';
import Person from './Person/Person';


/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */
const Header = (props) => {
    console.log('Header - render');

    // -----------------
    // LIFECYCLE HOOKS / REACT HOOK - useEffect()
    // lets us express different kinds of side effects after a component renders. 
    // Some effects might require cleanup so they return a function
    //
    // Similar to componentDidMount, componentDidUpdate
    // -----------------
    useEffect(() => {
        console.log('Header - useEffect');

        // Cleanup - Similar to componentWillUnmount
        return () => {
            console.log('Header - cleanup');
        };
    });

    return (
        <div className="Header">
            <h1>Hello !!!</h1>
            <Person />
            <button onClick={props.clickHandler}>CLICK ON ME</button>
        </div>
    );
}

export default Header;