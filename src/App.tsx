import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'

type resultProps = {
  statusCode: number;
  body: string;
};


function App() {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState<resultProps>();
  const [suggestion, setSuggestion] = useState<string>('');

  async function getStatus() {
    const data = await fetch("https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/suggestion", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: 'i love evan' })
    });
    const jsonData = await data.json();
    setResult(jsonData);
  };

  function submitSuggestion() {
    // var input = document.getElementById("SuggestionText")?.value;
    alert(suggestion);
  }
  function suggestionInputChange(event:ChangeEvent<HTMLInputElement>) {
    setSuggestion(event.target.value);
  }

  return (
    <div className="App">
      <div>
        <form>
          <input 
            type="text" 
            id="SuggestionText" 
            placeholder="Type your suggestion"
            onChange={suggestionInputChange}
          />
          <button type="submit" onClick={submitSuggestion}>
            Submit
          </button>
        </form>
      </div>

      <div>
        <div>{result?.statusCode}</div>
        <div>{result?.body}</div>
      </div>

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

      <div>
        <button onClick={() => getStatus()}>
          status code is {result?.statusCode}
        </button>
      </div>

      <p className="read-the-docs">
        Click on the can to learn more
      </p>

    </div>
  )
}

export default App
