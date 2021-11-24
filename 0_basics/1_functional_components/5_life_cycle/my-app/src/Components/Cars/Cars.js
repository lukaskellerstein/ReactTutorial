import React, { useEffect } from 'react';
import Car from './Car/Car';


/* --------------------------------------------------------- */
/* DUMB - FUNCTIONAL - STATELESS COMPONENT */
/* --------------------------------------------------------- */

const Cars = (props) => {
    console.log('Cars - render');

    // -----------------
    // LIFECYCLE HOOKS / REACT HOOK - useEffect()
    // lets us express different kinds of side effects after a component renders. 
    // Some effects might require cleanup so they return a function
    //
    // Similar to componentDidMount, componentDidUpdate
    // -----------------
    useEffect(() => {
        console.log('Cars - useEffect');

        // Cleanup - Similar to componentWillUnmount
        return () => {
            console.log('Cars - cleanup');
        };
    });

    return (
        <div>
            {/* FOR EACH */}
            {props.cars.map((car, index) => {
                return (
                    <Car
                        key={car.id}
                        name={car.name}
                        HP={car.HP}
                        clicked={props.deleteHandler.bind(this, index)}
                        changed={(event) => props.changedHandler(event, index)} />
                )
            })}
        </div>
    );
}

export default Cars;