import { useEffect, useState } from 'react'
import './styles/styles.css'
import NewItemForm from './components/NewItemForm'
import TodoList from './components/TodoList'
// import './App.css'

function App() {
  const [todos, setTodos] = useState(() => {
    const localValues = localStorage.getItem("ITEMS")

    if (localValues == null) return []

    return JSON.parse(localValues)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo=> todo.id !== id)
    })
  }

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos, 
        {id: crypto.randomUUID(), title, completed: false },
      ]
    })
  }

  return (
    <>
      <NewItemForm onSubmission={addTodo}/>
      <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App
