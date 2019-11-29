import React, {useState, useEffect} from "react"

/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */

function App() {
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(5)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function handleClick() {
        setTimeRemaining(5)
        setIsTimeRunning(true)
    }
    
    useEffect(() => {
        if(timeRemaining > 0 && isTimeRunning) {
            const timer = setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
            
            return () => clearTimeout(timer) // this is to avoid anyside effects
        } else if (timeRemaining  == 0) {
            setIsTimeRunning(false)
        }
        

    }, [timeRemaining, isTimeRunning]) // we need to put isTimeRunning in the useEffect because the use effect will not run because only the timeRemaining is changing
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button onClick={handleClick}>Start</button>
            <h1>Word count: ???</h1>
        </div>
    )
}

export default App
