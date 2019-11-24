import React from "react"
import ThemeContext from "./themeContext"
import PropTypes from "prop-types"

function Button(props) {
    return (
         <button className={`${props.theme}-theme`}>Switch Theme</button>      
    )    
}

Button.propTypes = { // this is so we can validate the data that we recieve for theme
    theme: PropTypes.oneOf(["light", "dark"])   
}

Button.defaultProps = { // this is just in case the developer forgets to incorporate the theme props
    theme: "dark"    
}

export default Button
