import React from "react"
import {useParams, useHistory} from "react-router-dom"

import servicesData from "./servicesData"

function ServiceDetail() {
    const {serviceId} = useParams()
    const history = useHistory()
    const thisService = servicesData.find(service => service._id === serviceId)

    // {
//     length: 13, 
//     action: "PUSH", 
//     location: {
//         pathname: "/services/2", 
//         search: "", 
//         hash: "", 
//         state: null, 
//         key: "nulft8"
//     }, 
//     createHref: createHref(location), 
//     push: push(path, state), 
//     replace: replace(path, state), 
//     go: go(n), 
//     goBack: goBack(), 
//     goForward: goForward(), 
//     block: block(prompt), 
//     listen: listen(listener)
// } 

    function handleClick() {
        console.log("Submitting...")
        setTimeout(() => {
            history.push("/services")
        }, 2000)
        history.replace("")
    }
    
    return (
        <div>
            <h1>Service Detail Page</h1>
            <h3>{thisService.name} - ${thisService.price}</h3>
            <p>{thisService.description}</p>
            <button onClick={handleClick}>Go back to all services</button>
        </div>
    )
}

export default ServiceDetail