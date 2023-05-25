import { useState } from 'react'

const Todo = ({ todo, deleteTodo }) => {
  return (
    <div className="todo">
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div>
        <button className='complete'>Completar</button>
        <button className='delete' onClick={() => deleteTodo(todo.id)}>Deletar</button>
      </div>
    </div>
  )
}

export default Todo