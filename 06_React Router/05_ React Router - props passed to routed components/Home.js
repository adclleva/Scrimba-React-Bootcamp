import React from "react"
import {useLocation, useParams, useHistory, useRouteMatch} from "react-router-dom"

function Home(props) {
    return (
        <h1>Home Page</h1>
    )
}

export default Home

// {
//     history: {
//         length: 32, 
//         action: "POP", 
//         location: {
//             pathname: "/", 
//             search: "", 
//             hash: "", 
//             state: null
//         }, 
//         createHref: createHref(location), 
//         push: push(path, state), 
//         replace: replace(path, state), 
//         go: go(n), 
//         goBack: goBack(), 
//         goForward: goForward(), 
//         block: block(prompt), 
//         listen: listen(listener)
//     }, 
//     location: {
//         pathname: "/", 
//         search: "", 
//         hash: "", 
//         state: null
//     }, 
//     match: {
//         path: "/", 
//         url: "/", 
//         isExact: true, 
//         params: {}
//     }, 
//     staticContext: null
// }
