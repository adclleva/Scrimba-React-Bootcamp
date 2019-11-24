import React from "react"

import Header from "./Header"
import UserContext from "./UserContext"

class App extends React.Component {
    render() {
        const user = this.context
        return (
            <div>
                <Header />
                <main>
                    <p className="main">No new notifications, {user}! 🎉</p>
                </main>
            </div>
        )    
    }
}

App.contextType = UserContext // this allows the component to give us this.context.user for the UserContext instance

export default App