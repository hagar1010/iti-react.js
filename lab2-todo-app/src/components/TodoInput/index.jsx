import { useState } from "react"
const TodoInput = ({ addTodo }) => {

    const [text, setText] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder="Enter To-Do Here..."
            value={text} 
            onChange={(myEvent) => {
                setText(myEvent.target.value)
            }} />
            <button type="submit">Add</button>
        </form>
    )
}
export default TodoInput