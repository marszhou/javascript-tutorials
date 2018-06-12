import React from 'react'
import Todo from './Todo'

export default ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      ))}
    </ul>
  )
}
