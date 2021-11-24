import React from 'react';
import Car from './Car/Car';
import { Component } from 'react';

/* --------------------------------------------------------- */
/* DUMB - CLASS - STATELESS COMPONENT */
/* --------------------------------------------------------- */
class Cars extends Component {

    // -----------------
    // LIFECYCLE HOOKS - CREATION
    // -----------------

    // 1.
    constructor(props) {
        super(props);

        console.log('Cars - Constructor');

        // Local state
        this.state = {};
    }

    // 2.
    static getDerivedStateFromProps(props, state) {
        console.log('Cars - getDerivedStateFromProps', props, state);
        return state;
    }

    // 3.
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

    // 4.
    componentDidMount() {
        console.log('Cars - componentDidMount');
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
        console.log('Cars - shouldComponentUpdate');
        return true;
    }

    // 3. 
    // render() ... as a last method in this class

    // 4.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Cars - getSnapshotBeforeUpdate', prevProps, prevState);
    }

    // 5.
    componentDidUpdate() {
        console.log('Cars - componentDidUpdate');
    }

    // -----------------
    // LIFECYCLE HOOKS - DESTROY
    // -----------------
    componentWillUnmount() {
        console.log('Cars - componentWillUnmount');
    }



}

export default Cars;