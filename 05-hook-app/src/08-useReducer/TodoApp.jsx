import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodo } from "../hooks/useTodo"


export const TodoApp = () => {

  const { todos, todosCount, pendingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodo()

  return (
    <>
      <h3>Todo App ({ todosCount }) <span>pendientes: {pendingTodosCount}</span></h3>
      <hr />

      <main>
        <section>
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={ handleToggleTodo }
          />
        </section>
        <section>
          <h4>Agregar todo</h4>
          <TodoAdd
            handleNewTodo={handleNewTodo}
          />
        </section>
      </main>

    </>
  )
}
