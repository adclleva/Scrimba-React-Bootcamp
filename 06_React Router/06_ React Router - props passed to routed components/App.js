import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Profile from "./pages/profile/Profile"
import Info from "./pages/profile/Info"
import Settings from "./pages/profile/Settings"

import {Switch, Route} from "react-router-dom"

function App() {    
    return (
        <div>
            <Header />
            
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                {/* We wanted this to get the Routes in order for the Routes for the profile page to be completely replaced */}
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/profile/info">
                    <Info/>
                </Route>
                <Route exact path="/profile/settings">
                    <Settings/>
                </Route>
            </Switch>
            
            <Footer />
        </div>
    )
}

export default App
