import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ handleNewTodo }) => {

  const { onResetForm, onIputChange, description } = useForm({ description: '' })

  const onNewTodo = (e) => {
    e.preventDefault()

    if(description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime() * 2,
      description,
      done: false
    }
    handleNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onNewTodo}>
      <input
        name="description"
        type="text"
        placeholder="Hace tarea de react...!"
        value={description}
        onChange={onIputChange}
      />
      <button>Agregar</button>
    </form>
  )
}
