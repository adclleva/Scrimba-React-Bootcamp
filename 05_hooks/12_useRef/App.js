import React, {useState, useRef} from "react"

function App() {
    const [newTodoValue, setNewTodoValue] = useState("")
    const [todosList, setTodosList] = useState([])
    const inputRef = useRef(null) // it's common to have the initial value to null if we're grabbing an element on the screen, when the component renders, it has a null value
    
    function handleChange(event) {
        setNewTodoValue(event.target.value)
    }
    
    function addTodo(event) {
        event.preventDefault()
        setTodosList(prevTodosList => [...prevTodosList, newTodoValue])
        setNewTodoValue("")
        // console.log(inputRef) 
        // when we get {current: <input type="text" name="todo" value>} in the console bcause the useRef returns the object 
        // it has a current property and the value is the dom node
        inputRef.current.focus()
        // current points to the mounted button element right after the button is pressed
        
    }
    
    const allTodos = todosList.map((todo, index) => <p key={index}>{todo}</p>)
    
    return (
        <div>
            <form> {/* in react, input has a propert called ref and the inputRef will point to this ref*/}
                <input ref={inputRef} type="text" name="todo" value={newTodoValue} onChange={handleChange}/>
                <button onClick={addTodo}>Add todo item</button>
            </form>
            {allTodos}
        </div>
    )
}

export default App