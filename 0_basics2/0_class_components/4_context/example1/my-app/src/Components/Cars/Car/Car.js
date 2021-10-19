
import React from 'react';
import { Component } from 'react';
import MyGlobalContext from '../../../Context/GlobalContext';

/* --------------------------------------------------------- */
/* DUMB - CLASS - STATELESS COMPONENT */
/* --------------------------------------------------------- */
class Car extends Component {

    static contextType = MyGlobalContext;

    constructor(props) {
        super(props);

        console.log('Car - Constructor');

        // Local state
        this.state = {};
    }

    render() {
        console.log('Car - render');
        return (
            <div>
                <div> I am a car - {this.props.name} - with HP {this.props.HP} !!!</div>
                <div>{this.props.children}</div>
                {/* TWO WAY DATABINDING */}
                <input value={this.props.name} onChange={this.props.changed} />
                <div>{this.context.someVariable1}</div>
                <div onClick={this.props.clicked}>| X |</div>
            </div>
        )
    }
}


export default Car
