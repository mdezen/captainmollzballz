import { useState, ChangeEvent } from "react";

function Suggestion() {
    const [suggestion, setSuggestion] = useState<string>('');

    async function postSuggestion() {
        await fetch("https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/suggestion", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ suggestion })
        });
    };

    function suggestionInputChange(event: ChangeEvent<HTMLInputElement>) {
        setSuggestion(event.target.value);
    }
    return (
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
    )
}

export default Suggestion