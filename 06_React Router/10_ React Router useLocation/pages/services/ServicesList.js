import React from "react"
import {Link, useLocation} from "react-router-dom"

import servicesData from "./servicesData"

function ServicesList() {
    const location = useLocation()
    console.log(location)
    
// {for useLocation we mostly look at the pathname, search, and the state
//     pathname: "/services", this shows us the full path in the application
//     search: "",  this refers to the query string in the path for example, 
//     anything after the ? in here "?something=hello&blah=goodbye"
//     hash: "", 
//     state: null, 
//     key: "qyfp8w"
// }
    const services = servicesData.map(service => (
        <div key={service._id}>
            <h3><Link to={`/services/${service._id}`}>{service.name}</Link> - ${service.price}</h3>
        </div>
    ))
    return (
        <div>
            <h1>Services List Page</h1>
            {services}
        </div>
    )
}

export default ServicesList