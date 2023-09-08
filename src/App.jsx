import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='header'>
      <h1>Gym Tracking App</h1>
    </div>
  )
}

export default App
