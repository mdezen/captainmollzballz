import './App.css'
import Suggestion from './components/Suggestion'
import Vote from './components/Vote'



function App() {
  return (
    <div>
      <div>
        <a href="https://5pm.fyi/" target="_blank">
          <img src="https://www.coorslight.com/sites/coorslight/files/inline-images/coorslight-can.png" className="logo" alt="Vite logo" />
        </a>
      </div>

      <Suggestion />

      <Vote />

    </div>
  )
}

export default App
