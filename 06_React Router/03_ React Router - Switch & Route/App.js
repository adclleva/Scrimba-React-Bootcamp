import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About /> 
                </Route>
            </Switch>
        </div>
    )
}

export default App
// this is the newest way to do with by having a child component to the route
// this is the most recent and accepted one and you can pass down props to the component instance