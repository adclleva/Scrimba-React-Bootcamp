import React, {useState} from "react"

/**
 * Challenge:
 * 
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

function App() {
    const [text, setText] = useState("")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: ???</h4>
            <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
             {/* we do an anonymous function because the onClick will return an event because we dont want to execute a function inside an event handler */}
            
            {/*https://upmostly.com/tutorials/react-onclick-event-handling-with-examples this article explains the event handler of OnClick*/}
            
            <h1>Word count: ???</h1>
        </div>
    )
           
}

export default App
