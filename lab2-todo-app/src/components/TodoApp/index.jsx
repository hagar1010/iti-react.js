import { useState } from "react"
import TodoInput from "../TodoInput"
import TodoItem from "../TodoItem"
// import { v4 as uuid } from 'uuid';
const TodoApp = () => {

    const [todos, setTodos] = useState([])
    const addTodo = (text) => {
        setTodos([...todos, { text, completed: false }])
    }

    const toggleTodo = (idx) => {
        //get index
        const newTodos = [...todos]
        newTodos[idx].completed = !newTodos[idx].completed
        setTodos(newTodos)
    }

    const deleteTodo = (idx) => {
        const newTodos = [...todos]
        newTodos.splice(idx, 1)
        setTodos(newTodos)
    }
    console.log(todos.length);

    return (
        <section>
            <TodoInput addTodo={addTodo} />
            <div>
                {
                    todos.length != 0 ?
                        todos.map((todo, idx) => {
                            // console.log(uuid());
                            return <TodoItem
                                key={idx}
                                todo={todo}
                                index={idx}
                                deleteTodo={deleteTodo}
                                toggleTodo={toggleTodo} />
                        })
                        :
                        <h2>NO TODOS</h2>
                }
            </div>
        </section>
    )
}
// const validate = (data , validator)=>{validator(data)}
// SOLID => Single Responsibility Principle
export default TodoApp