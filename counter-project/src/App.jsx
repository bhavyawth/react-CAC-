import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(1)

  const addValue = () => {
     setCount(count + 1)
     setCount(count + 1)
     setCount(count + 1)
     setCount(count + 1)
  }
  const removeValue = () => {
    if (count === 0) alert( `Value already at the lowest !`)
    else setCount(count - 1)
  }
  return (
    <>
      <h1>Counter value : {count}</h1>

      <button onClick={addValue}>ADD</button>
      <br />
      <br />
      <button onClick={removeValue}>
        REMOVE</button>
    </>
  )
}

export default App
