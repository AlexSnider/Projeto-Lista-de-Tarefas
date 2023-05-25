import { useState } from 'react'
import './App.css'
import Todo from './components/todo';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade x no sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Estudar react',
      category: 'Estudo',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Criar funcionalidade x no github',
      category: 'Trabalho',
      isCompleted: false,
    },
  ]);

  const addTodo = (text, category) => {
    const newTodos = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,
      },
    ];
    setTodos(newTodos);
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) =>
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
