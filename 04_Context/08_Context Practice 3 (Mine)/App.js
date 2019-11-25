/**
 * Challenge: Add the ability for the user to choose a new username
 * 
 * 1. Add state to this component to hold the new username in a controlled form
 * (https://reactjs.org/docs/forms.html#controlled-components)
 * (https://scrimba.com/p/p7P5Hd/cW8Jdfy)
 * 
 * 2. Change userContext into a component that has state and provides the ability
 * to change the user's username. Make sure to export the provider and consumer
 * as named exports and update their uses anywhere else in the app
 * 
 * 3. Give this App component the ability to update the username in context when the
 * button is clicked
*/

import React from "react"

import Header from "./Header"
import {UserContextConsumer} from "./userContext"

class App extends React.Component {
    state = {
        newUsername: ""
    }
    
    handleChange = (e) => {
        const {name, value} = e.target
        this.setState({[name]: value})
    }
    
    render() {    
        const { newUsername } = this.state
        return (
                <UserContextConsumer>
                    { usernameContextObj => (
                        <div>
                            <Header />
                                <main>
                                <p className="main">No new notifications, {usernameContextObj.username}! 🎉</p>
                                </main>

                                <input
                                type="text"
                                name="newUsername"
                                placeholder="New username"
                                value={newUsername}
                                onChange={this.handleChange}
                                />
                            <button onClick={() => usernameContextObj.changeUsername(newUsername)}>Change Username</button> {/*onClick or onChange takes in an event thus why we use an anonymous function to call the changeUsername from the context object*/}

                        </div>
                    )}
                </UserContextConsumer>                
        )
    }
}

export default App