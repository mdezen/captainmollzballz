import { ChangeEvent, useEffect, useState } from 'react'
import './App.css'

type resultProps = {
  yesCount: number;
  noCount: number;
};

function App() {
  const [result, setResult] = useState<resultProps>();
  const [suggestion, setSuggestion] = useState<string>('');
  const [vote, setVote] = useState<string>();

  async function postSuggestion() {
    await fetch("https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/suggestion", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({suggestion})
    });
  };

  function suggestionInputChange(event:ChangeEvent<HTMLInputElement>) {
    setSuggestion(event.target.value);
  }
  const voteInputChange = (event:
    React.ChangeEvent<HTMLInputElement>) => {
    setVote(event.target.value);
  };
  
  async function postVote() {
    const data = await fetch("https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/vote", {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({vote})
    });
    const jsonData = await data.json();
    const yesCount = jsonData.body.yesCount;
    const noCount = jsonData.body.noCount;
    console.log(yesCount)
    setResult({
      yesCount: yesCount,
      noCount: noCount
    });
  };


  return (
    <div>
      <div>
        <a href="https://5pm.fyi/" target="_blank">
          <img src="https://www.coorslight.com/sites/coorslight/files/inline-images/coorslight-can.png" className="logo" alt="Vite logo" />
        </a>
      </div>

      <h2>Is Coors Water?</h2>
      <fieldset>
          <input 
            type="radio" 
            name="vote"
            id="voteYes" 
            value="yes"
            
            onChange={voteInputChange}
          />
          <label htmlFor='yes'>
            yes
            </label>

          <input 
            type="radio" 
            name="vote"
            id="voteNo" 
            value="no"
            
            onChange={voteInputChange}
          /><label htmlFor='no'>no</label>
          <button onClick={() => postVote()}>
            Submit
            </button>
        </fieldset>
      
      <h2>Results</h2>
        <p>
          Coors is Water: {result?.yesCount} votes
        </p>
        <p>
          Coors is NOT Water: {result?.noCount} votes
          </p>

      <div>
        <form>
          <input 
            type="text" 
            id="SuggestionText" 
            placeholder="Type your suggestion"
            onChange={suggestionInputChange}
          />
        </form>
        <button onClick={() => postSuggestion()}>
          Submit
          </button>
      </div>

    </div>
  )
}

export default App
