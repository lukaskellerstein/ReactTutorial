import React from 'react';
import Car from './Car/Car';
import { Component } from 'react';

/* --------------------------------------------------------- */
/* DUMB - CLASS - STATELESS COMPONENT */
/* --------------------------------------------------------- */
class Cars extends Component {

    constructor(props) {
        super(props);

        console.log('Cars - Constructor');

        // Local state
        this.state = {};
    }

    render() {
        console.log('Cars - render');
        return (
            <div>
                {/* FOR EACH */}
                {this.props.cars.map((car, index) => {
                    return (
                        <Car
                            key={car.id}
                            name={car.name}
                            HP={car.HP}
                            clicked={this.props.deleteHandler.bind(this, index)}
                            changed={(event) => this.props.changedHandler(event, index)} />
                    )
                })}
            </div>
        );
    }
}

export default Cars;