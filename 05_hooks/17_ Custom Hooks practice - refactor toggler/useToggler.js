import {useState} from "react"
// since this isn't getting any props we can pass in anything
function useToggler(defaultToggleValue = false) {
    // Create the state
    const [isToggled, setIsToggled] = useState(defaultToggleValue)
    
    function toggle() {
        setIsToggled(prevToggle => !prevToggle)
    }
    
    return [isToggled, toggle]
}

export default useToggler