import React, {Component} from "react"
import useToggler from "./useToggler"

function Favorite(props) {
    const [isToggleOn, toggle] = useToggler(true)
    return (
            <div>
                <h3>Click heart to favorite</h3>
                <h1>
                    <span 
                        onClick={toggle}
                    >
                        {isToggleOn ? "❤️" : "♡"}
                    </span>
                </h1>
            </div>
    ) 
}

export default Favorite
