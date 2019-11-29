import React, { useState } from "react"

/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 * 
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */
// important note is that you can't define a variable using any declaritive statement inside a class
function App() {
    const [count, setCount] = useState(0)
    const [text, setText] = useState("")
    
    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }
    console.log(text)
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time reminaing: ???</h4>
            <button>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
