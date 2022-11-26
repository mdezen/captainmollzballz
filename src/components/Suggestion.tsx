import { useState, ChangeEvent } from "react";

function Suggestion() {
    // use state changes suggestion ='' to suggestion= event.target.value and re-renders
    // the component 
    const [suggestion, setSuggestion] = useState<string>('');
    const [name, setName] = useState<string>('');

    // this is called when the button is clicked 
    // takes in the invoke url which inlcudes the resource 
    // invoke URL is where the API gateway is located
    // fetch makes an http request to that url and then returns the http response
    async function postSuggestion() {
        await fetch("https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/suggestion", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // sets the body of the request to srtrings in JSON form (key/value?) 
            body: JSON.stringify({ suggestion, name })
        });
    };

    
    // when the input text changes, it runs suggestionInputChange which 
    // takes in event with type ChangeEvent..... and passes event.target.value 
    // (the actual text) to setSuggestion
    function suggestionInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSuggestion(event.target.value);
    }

    function nameInputChange(event: ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }

    return (
        <div>
            <form>
            <label>
                Name:
                <input
                        type="text"
                        id="NameText"
                        placeholder="Type your Name"
                        onChange={nameInputChange}
                    />
            </label>
                <br></br>
                <label>
                    Suggestion:
                    <input
                        type="text"
                        id="SuggestionText"
                        placeholder="Type your suggestion"
                        onChange={suggestionInputChange}
                    />
                </label>
            </form>
            <button onClick={() => postSuggestion()}>
                Submit
            </button>
        </div>
    )
}

export default Suggestion


