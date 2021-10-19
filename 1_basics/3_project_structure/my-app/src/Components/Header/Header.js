import React from 'react';
import Person from './Person/Person';


const Header = (props) => {
    return (
        <div className="Header">
            <h1>Hello !!!</h1>
            <Person />
            <button onClick={props.clickHandler}>CLICK ON ME</button>
        </div>
    );
}


export default Header;