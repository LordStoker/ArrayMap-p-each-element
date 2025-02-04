import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    
    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
    
    return (
        <div>
            <button>Add Item</button>
            {thingsArray.map( thing =>{
                return <p>{thing}</p>
            })/* Insert the things here*/}
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));