import React from "react"
import { UserContextConsumer } from "./userContext"

function Header() {
    return (
        <header>
            <UserContextConsumer>
                {usernameContextObj => (
                    <p>Welcome, {usernameContextObj.username}!</p>
                )}
            </UserContextConsumer>
        </header>
    )
}

export default Header
