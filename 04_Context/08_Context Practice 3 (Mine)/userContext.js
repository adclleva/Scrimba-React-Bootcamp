import React from "react"

const { Consumer, Provider} = React.createContext()

class UserContextProvider extends React.Component {
    state = {
        username: "adclleva"
    }    
    
    changeUsername = (newUsername) => { // we need this in order to change the state within the context
        const { username } = this.state
        this.setState({username: newUsername})
    }
    
    render() {
        const { username } = this.state
        
        return (
            <Provider value={{username: username, changeUsername: this.changeUsername}}> {/* here we pass an object as the value to the children*/}
                {this.props.children}
            </Provider>
        )
    }
}

export { UserContextProvider, Consumer as UserContextConsumer }