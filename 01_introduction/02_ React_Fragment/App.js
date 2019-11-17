import React from "react"
import Child from "./Child"

function App() {
    return ( // fragements can change the relationships of child/parents within the DOM
             // it "flattens" the relationships
        <>
            <Child />
        </>
    )
}

export default App