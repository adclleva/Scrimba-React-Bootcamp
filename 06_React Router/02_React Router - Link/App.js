import React from "react"
import { Link } from "react-router-dom"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link> 
            <Link to="/about">About</Link>
            {/* Instead of anchor tags, we'll use Links for these 
                underneath the hood Link is rendering an anchor */}
        </div>
    )
}

export default App