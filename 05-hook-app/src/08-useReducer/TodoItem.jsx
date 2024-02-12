import  PropTypes from "prop-types"

export const TodoItem = ({ id, description, done, onDeleteTodo, onToggleTodo }) => {
  const touch = done ? 'line-through' : ''

  return (
    <li className="item">
      <span
        onClick={ () => onToggleTodo(id) }
        style={{textDecoration: touch}}
      >{ description }</span>
      <button onClick={() => onDeleteTodo(id)}>Borrar</button>
    </li>
  )
}

TodoItem.propTypes = {
  id: PropTypes.number,
  description: PropTypes.string,
  done: PropTypes.bool,
  onDeleteTodo: PropTypes.func,
  onToggleTodo: PropTypes.func
}
