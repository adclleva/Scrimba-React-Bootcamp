import React, {useState} from "react"

function App() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    const contacts = contactsData.map((contact, index) => {
        return (
            <h3 key={index}>{contact.firstName} {contact.lastName}</h3>
        )
    })
    
    function handleChange(event) { // sidenote: everytime we type inside the input-form, it gets rendered inside the app
        // update our inputData state
        const { name, value } = event.target
        
        setInputData(prevInputData => { // we only need to do this for multiple states
            return {
                ...prevInputData, // we need to utilize the old set of state with the new set of state in order to do this
                [name]: value
            }
        })
    }
    
    function handleSubmit(event) {
        // add the inputData to the contactsData array
        event.preventDefault() // this is to prevent the refreshing default functionality of default when the submit is given an event
        
        setContactsData(prevContacts => { // here we didn't need to return an object since we are returning one thing
            return [...prevContacts,inputData]
        })
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input 
                    placeholder="First Name"
                    name="firstName" 
                    value={inputData.firstName}
                    onChange={handleChange}
                />
                <input 
                    placeholder="Last Name"
                    name="lastName" 
                    value={inputData.lastName}
                    onChange={handleChange}
                />
                <br />
                <button>Add contact</button>
            </form>
            <h1>Contacts:</h1>
            {contacts}
        </>
    )
}

export default App