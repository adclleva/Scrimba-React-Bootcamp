import React, {useState, useEffect} from "react"

/**
 * Challenge:
 * 
 * 1. Create state to hold the current value of the countdown timer.
 *    Display this time in the "Time Remaining" header
 * 
 * 2. Set up an effect that runs every time the `timeRemaining` changes
 *    The effect should wait 1 second, then decrement the `timeRemaining` by 1
 * 
 *    Hint: use `setTimeout` instead of `setInterval`. This will help you avoid
 *    a lot of extra work.
 * 
 *    Warning: there will be a bug in this, but we'll tackle that next
 */

function App() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    // useEffect takes in a function and also an array of the states that change and will trigger 
    useEffect(() =>{
        const timer = setTimeout(() =>{ // setTimeout takes in a function and a number for milliseconds 
            if (timeRemaining > 0) { 
                setTimeRemaining(timeRemaining => timeRemaining - 1)
            }
        }, 1000)
    
        return () => clearTimeout(timer)    
    },[timeRemaining])
    
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
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={() => console.log(calculateWordCount(text))}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
