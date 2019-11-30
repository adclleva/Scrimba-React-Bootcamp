import React from "react"
import { Link, Switch, Route } from "react-router-dom"
/** We need the Switch Route and Link components to show the user what we need */

import Home from "./Home"
import About from "./About"
import Contact from "./Contact"

function App() {    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>
            {/* Links go here */}
            
            <Switch>
                <Route exact path="/"> 
                    <Home />
                </Route>
                
                <Route exact path="/about">
                    <About />
                </Route>
                
                <Route exact path="/contact">
                    <Contact />
                </Route>
            </Switch>
            {/* Routes go here */}
            {/* Routes also need a a path to which to render on */}
        </div>
    )
}

export default App