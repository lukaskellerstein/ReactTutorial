
import React, { Component } from 'react';

/* --------------------------------------------------------- */
/* DUMB - CLASS - STATELESS COMPONENT */
/* --------------------------------------------------------- */
class Person extends Component {

    // -----------------
    // LIFECYCLE HOOKS - CREATION
    // -----------------

    // 1.
    constructor(props) {
        super(props);

        console.log('Person - Constructor');

        // Local state
        this.state = {};
    }

    // 2.
    static getDerivedStateFromProps(props, state) {
        console.log('Person - getDerivedStateFromProps', props, state);
        return state;
    }

    // 3.
    render() {
        console.log('Person - render');
        return <div> I am a Person !!!</div>
    }

    // 4.
    componentDidMount() {
        console.log('Person - componentDidMount');
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
        console.log('Person - shouldComponentUpdate');
        return true;
    }

    // 3. 
    // render() ... as a last method in this class

    // 4.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Person - getSnapshotBeforeUpdate', prevProps, prevState);
    }

    // 5.
    componentDidUpdate() {
        console.log('Person - componentDidUpdate');
    }

    // -----------------
    // LIFECYCLE HOOKS - DESTROY
    // -----------------
    componentWillUnmount() {
        console.log('Person - componentWillUnmount');
    }

}


export default Person