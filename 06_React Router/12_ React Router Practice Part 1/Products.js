import React from "react"
import productsData from "./productsData"

function Products() {    
    const products = productsData.map((product, index) => {
        return (
            <div key={index}>
                <h4>{product.id}: {product.name} - ${product.price}</h4>
                <hr/>
            </div>
        )
    })
    
    return (
        <div>
            <h1>Products Page</h1>
            {products}
        </div>
    )
}

export default Products

/**
 * ** Products Page **
    • Using an array of data for your products (provided for you), map over that data to show each item and some information on the products page as a list of available products.
 */

/**
 *     {
        id: 1,
        name: "Grumpy Cat Poster",
        description: "Everyone's favorite cat who loves to hate",
        price: 15
    },
 */