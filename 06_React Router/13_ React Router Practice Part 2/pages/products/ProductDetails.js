import React from "react"
import {useParams} from "react-router-dom"
import productsData from "./productsData"

function ProductDetails(props) {
    // console.log(useParams()) here we get the params key and the value
    // in this case for the first product we get {productId: "1"}
    // thus we need to "find" and get the specific product with the matched id data through the 'api'
    
    const {productId} = useParams()
    // console.log(useParams())
    
    const currentProduct = productsData.find(product => (product.id == productId)) // here we are comparing the useParams id(string) to the productsData id(id) but usually they will both be strings
    // otherwise it would not work
    // console.log(currentProduct)
    const { id, name, description, price } = currentProduct // here we are deconstructing the data from the specific data
    return (
        <>
            <h3>Product #{id}</h3>
            <h4>{name} - ${price}</h4>
            <p>{description}</p>
        </>
    )
}

export default ProductDetails

// {
//     id: 1,
//     name: "Grumpy Cat Poster",
//     description: "Everyone's favorite cat who loves to hate",
//     price: 15
// },