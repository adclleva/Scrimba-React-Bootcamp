import React, {useState} from "react"
import {Link, Switch, Route, Redirect} from "react-router-dom"

// https://reacttraining.com/react-router/web/example/auth-workflow
// when you redirect, it changes the whole route directly 

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/private">Private</Link>
            
            <Switch>
                <Route exact path="/">
                    <h1>Home page, anyone is allowed here</h1>
                </Route>
                <Route path="/private">
                    {
                        isLoggedIn ?
                        <h1>Protected page, must be logged in to be here</h1> :
                        <Redirect to="/login" />
                        {/* the app will load and render this redirect component and immediately direct us to a different path*/}
                        {/* we usually use redirect when we do authentication usually*/}
                    }
                </Route> {/* sometimes people wrap this Route with a protected route */}
                <Route path="/login">
                    <button onClick={() => setIsLoggedIn(true)}>Log in</button>
                </Route>
            </Switch>
        </div>
    )
}

export default App