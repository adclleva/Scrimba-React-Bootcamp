import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Button(props) {
    // const context = useContext(ThemeContext) // we can deconstruct the ThemeContext to the ones below
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <button 
            onClick={toggleTheme} 
            className={`${theme}-theme`}
        >
            Switch Theme
        </button>
    )    
}

export default Button
