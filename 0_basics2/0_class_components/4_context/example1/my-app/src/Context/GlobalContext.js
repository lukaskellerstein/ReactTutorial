import React from 'react';


const MyGlobalContext = React.createContext(
    { someVariable1: "", someVariable2: "" }
);

export default MyGlobalContext;