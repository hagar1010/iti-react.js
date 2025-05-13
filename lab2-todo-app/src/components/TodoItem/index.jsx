// import PropTypes from 'prop-types'

const TodoItem = ({ todo, index, deleteTodo, toggleTodo }) => {
    return (
        <div className="todo-item">
            <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} >
                {index+1}. &nbsp;&nbsp;&nbsp;&nbsp; {todo.text}
            </p>
            <div>
                <span onClick={() => toggleTodo(index)}>
                    {
                        todo.completed ?
                            <span>&#9745;</span>
                            :
                            <span>&#9744;</span>
                    }
                </span>
                <button onClick={() => deleteTodo(index)}>Delete</button>
            </div>
        </div>
    )
}
// TodoItem.propTypes = {
//     todo: PropTypes.shape({
//         text: PropTypes.string,
//         completed: PropTypes.bool
//     }).isRequired,
//     index: PropTypes.number.isRequired,
//     deleteTodo: PropTypes.func.isRequired,
//     toggleTodo: PropTypes.func.isRequired
// }
export default TodoItem