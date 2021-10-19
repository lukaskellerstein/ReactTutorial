import React from 'react';
import Car from './Car/Car';

const Cars = (props) => {
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