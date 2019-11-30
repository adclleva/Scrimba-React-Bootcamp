import React from "react"
import {useParams} from "react-router-dom"
import servicesData from "./servicesData"

function ServiceDetail(props) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    // The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
    //console.log(useParams()) // when we click on the link and it goes to this page, we get the :serviceId as the key and 1 as the value depending if you click the first one
    const { serviceId } = useParams() // here we deconstruct the object that we get from params from the Route Component
    
    const currentServiceData = servicesData.find(service => {
        return serviceId === service._id
    })
    
    const { name, price, _id, description } = currentServiceData
    
    return (
        <div>
            <h3>{_id}: {name} - ${price}</h3>
            <p>{description}</p>
        </div>
    )
}

export default ServiceDetail

  // {
    //     "name": "Lawn Mowing",
    //     "price": 30,
    //     "_id": "1",
    //     "description": "Have a carpet-like lawn without any work."
    // },