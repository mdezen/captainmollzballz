import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://5pm.fyi/" target="_blank">
          <img src="https://www.coorslight.com/sites/coorslight/files/inline-images/coorslight-can.png" className="logo" alt="Vite logo" />
        </a>
      </div>
      
      <h1>Coors is Water</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          vote count is {count}
        </button>
      
      </div>
      <p className="read-the-docs">
        Click on the can to learn more
      </p>
    </div>
  )
}

export default App
 