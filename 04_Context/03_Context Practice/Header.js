import React, {Component} from "react"
import UserContext from './UserContext'

class Header extends Component {
    static contextType = UserContext
    
    render() {
        const user = this.context
        return (
            <header>
                <p>Welcome, {user}!</p>
            </header>
        )    
    }
}

export default Header
