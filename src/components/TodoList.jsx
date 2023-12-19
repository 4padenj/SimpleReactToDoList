import { useState } from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo, deleteTodo}) {

  return (
    <>
      <h1>
        My List
      </h1>
      <ul className='list'>
        {/* Short Circuting; if the first is true, then render the second */}
        {todos.length === 0 && "No Todos"}
        {todos.map(todo => {
          return(
            <TodoItem {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
            )
          })}
      </ul>
    </>
  )
}