import React, {Component} from "react"
const {Provider, Consumer} = React.createContext()

/**
 * Challenge:
 * 1) Add state to hold the current theme
 * 2) Add a method for flipping the state between light and dark
 * 
 */

class ThemeContextProvider extends Component {
    state = {
        theme: "light"
    }
    
    toggleTheme = () => {
        this.setState(currentState => { // this is a cool way to toggle between the light and dark themes
            return {
                theme: currentState.theme == "light" ? "dark" : "light"
            }
        })    
    }
    
    render() {
        const { theme } = this.state
        return (
            <Provider value={{theme: theme, toggleTheme: this.toggleTheme}} > {/* the value from the provider passes in an object for the Consumer components*/}
                {this.props.children}
            </Provider>
        )
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer}
