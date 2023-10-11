// import react and react-dom libraries. 

import React from "react";
import ReactDOM from "react-dom";

// Create a react component
const App = () =>{
    const text = "click me";
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter name:
            </label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>{text}</button>
        </div>
    );
}

// Take the react component and show it in the screen
ReactDOM.render(<App />, document.getElementById("root"));