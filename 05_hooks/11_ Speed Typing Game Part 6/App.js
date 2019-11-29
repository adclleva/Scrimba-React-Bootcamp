import React, {useState, useEffect} from "react"

/**
 * Challenge:
 * 
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */

function App() {
    const TIME_REMAINING = 5
    
    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(TIME_REMAINING)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState("???")
    
    function handleChange(e) {
        const {value} = e.target
        setText(value)
    }
    
    function calculateWordCount(text) {
        const wordsArr = text.trim().split(" ")
        return wordsArr.filter(word => word !== "").length
    }
    
    function startGame() {
        setTimeRemaining(TIME_REMAINING)
        setIsTimeRunning(true)
        setWordCount("???") 
        setText("")
    }
    
    function endGame() {
        setIsTimeRunning(false)
        setWordCount(calculateWordCount(text)) 
    }
    
    useEffect(() => {
        if(timeRemaining > 0 && isTimeRunning) {
            const timer = setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
            
            return () => clearTimeout(timer) // this is to avoid anyside effects
        } else if (timeRemaining  == 0) {
            endGame()
        }
        

    }, [timeRemaining, isTimeRunning]) // we need to put isTimeRunning in the useEffect because the use effect will not run because only the timeRemaining is changing
    
    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea
                onChange={handleChange}
                value={text}
                disabled={!isTimeRunning} // this disables the textarea so the user can't type in the area before the timer starts
            />
            <h4>Time remaining: {timeRemaining}</h4>
            <button 
                onClick={startGame}
                disabled={isTimeRunning} // this disables the button so the user can't press it when it starts
            >Start</button>
            <h1>Word count: {wordCount}</h1>
        </div>
    )
}

export default App
