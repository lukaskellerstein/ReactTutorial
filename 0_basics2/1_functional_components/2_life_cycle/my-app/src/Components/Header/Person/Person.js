
import React, { useEffect } from 'react';

/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */
const Person = () => {
    console.log('Person - render');

    // -----------------
    // LIFECYCLE HOOKS / REACT HOOK - useEffect()
    // lets us express different kinds of side effects after a component renders. 
    // Some effects might require cleanup so they return a function
    //
    // Similar to componentDidMount, componentDidUpdate
    // -----------------
    useEffect(() => {
        console.log('Person - useEffect');

        // Cleanup - Similar to componentWillUnmount
        return () => {
            console.log('Person - cleanup');
        };
    });

    return <div> I am a Person !!!</div>
}

export default Person