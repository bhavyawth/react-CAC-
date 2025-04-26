import { useEffect, useState } from 'react'
import './App.css'
import TodoForm from './components/todoForm'
import TodoList from './components/todoList'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import { useDispatch, useSelector } from 'react-redux'
import { setTodos} from './features/todo/todoSlice.js'

function App() {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      dispatch(setTodos(todos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    
      <div>
      <TodoForm />
      <TodoList />
      </div>
    
  )
}

export default App
