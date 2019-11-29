import React, {useState} from "react"
import useCounter from "./useCounter"

function App() {
    // we can destructure the custom hook as an array for more flexibility to naming since the array is called through indexes and not names
    const [number, add] = useCounter()
    
    return (
        <div>
            <h1>The count is {number}</h1>
            <button onClick={add}>Add 1</button>
        </div>
    )
}

export default App