import {useState} from "react"

//whenever this function is called, a new instance of state is made
function useCounter() {
    const [count, setCount] = useState(0)
    
    function increment() {
        setCount(prevCount => prevCount + 1)
    }
    // return whatever we want another component to have access to (count, increment)
    // we can return either an object or an array if you want the custom hook to be flexibly to the user or not
    return {count: count, increment: increment}
}

export default useCounter