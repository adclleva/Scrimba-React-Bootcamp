import React, {PureComponent} from "react"
import Parent from "./Parent"

// PureComponents solve the problem having having to re-render all the components that don't need re-rendering
// Sage advise is to not worry to much on optimization as it wastes time and money
// only try to optimize when you're having issues with speed
// since React is slowly transitioning to functional components, so we won't be using classes anyways

class GrandParent extends PureComponent {  
    render() {
        console.log("[👴🏼]   [ ]   [ ]   [ ] rendered")
        return (
            <div>
                <p>I'm a GrandParent Component</p>
                <Parent />
                <Parent />
            </div>
        )
    }
}

export default GrandParent