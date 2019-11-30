import React from "react"
import servicesData from "./servicesData"
import {Link} from "react-router-dom"

function ServicesList() {
    const services = servicesData.map((service, index) => {
        return (
            <div key={index}>
                <h3><Link to={`services/${service._id}`}>{service._id}: {service.name}</Link> - ${service.price}</h3>
            </div>
        )
    })
    return(
        <div>
            {services}
        </div>
    )
}

export default ServicesList

    // {
    //     "name": "Lawn Mowing",
    //     "price": 30,
    //     "_id": "1",
    //     "description": "Have a carpet-like lawn without any work."
    // },