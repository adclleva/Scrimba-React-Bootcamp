import React from 'react'

function Callout(props) {
    return (
        <div className="callout">
            {props.children}
            <h4>The text above is props given to the "child" components and the text here and below is the text that's inside the child component</h4>
            <h5>This is cool because we can have the same "style" components with different content underneath</h5>
        </div>
    )
}

export default Callout 