import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the list of to-dos
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  // Handle form input changes
  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Add new to-do
  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo(""); // Clear input after adding
    }
  };

  // Toggle the completion status of a to-do
  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  // Delete a to-do
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="app">
      <h1>React To-Do List App</h1>
      
      {/* Input field to add a new to-do */}
      <div className="todo-input">
        <input 
          type="text" 
          value={newTodo} 
          onChange={handleInputChange} 
          placeholder="Add a new to-do"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* Displaying the list of to-dos */}
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            <span onClick={() => toggleTodo(index)}>{todo.text}</span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
