import React, {useState, useEffect} from "react"
import randomcolor from "randomcolor"

function App() {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("")
    
    // you can use multiple useEffects
    // we have the setInterval in a separate useEffect otherwise 
    // the useEffect would call and create multiple setIntervals everytime
    // count is rendered
    
    useEffect(() => {
        // we set the setInterval to an ID for the clean up
        const intervalId = setInterval(() => {
            setCount(prevCount => prevCount + 1)
        }, 1000)
        // clearInterval would end the given interval for the cleanup through returning the intervalId
        return () => clearInterval(intervalId)
    }, [])
    
    useEffect(() => {
        setColor(randomcolor())
    }, [count])
    
    return (
        <div>
            <h1 style={{color: color}}>{count}</h1>
        </div>
    )
}

export default App
