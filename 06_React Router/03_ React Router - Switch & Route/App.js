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
                <Route exact path="/"> {/* We need the exact path here to get the home otherwise it will always go to the home page since the / is the first thing that the path sees */}
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