import React, { Component } from 'react';
import Person from './Person/Person';

/* --------------------------------------------------------- */
/* DUMB - CLASS - STATELESS COMPONENT */
/* --------------------------------------------------------- */
class Header extends Component {

    // -----------------
    // LIFECYCLE HOOKS - CREATION
    // -----------------

    // 1.
    constructor(props) {
        super(props);

        console.log('Header - Constructor');

        // Local state
        this.state = {};
    }

    // 2.
    static getDerivedStateFromProps(props, state) {
        console.log('Header - getDerivedStateFromProps', props, state);
        return state;
    }

    // 3.
    render() {
        console.log('Header - render');
        return (
            <div className="Header">
                <h1>Hello !!!</h1>
                <Person />
                <button onClick={this.props.clickHandler}>CLICK ON ME</button>
            </div>
        );
    }

    // 4.
    componentDidMount() {
        console.log('Header - componentDidMount');
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
        console.log('Header - shouldComponentUpdate');
        return true;
    }

    // 3. 
    // render() ... as a last method in this class

    // 4.
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('Header - getSnapshotBeforeUpdate', prevProps, prevState);
    }

    // 5.
    componentDidUpdate() {
        console.log('Header - componentDidUpdate');
    }

    // -----------------
    // LIFECYCLE HOOKS - DESTROY
    // -----------------
    componentWillUnmount() {
        console.log('Header - componentWillUnmount');
    }

}



export default Header;