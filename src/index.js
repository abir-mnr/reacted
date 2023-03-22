// import react and react-dom libraries. 

import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () =>{
    return <h1>Hello world</h1>;
}

// Take the react component and show it in the screen
ReactDOM.render(<App />, document.getElementById("root"));