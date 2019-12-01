import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router} from "react-router-dom"

import App from "./App"
// we wrap the Router with App so we don't have to worry about adding the Router capabilities anywhere else
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)
