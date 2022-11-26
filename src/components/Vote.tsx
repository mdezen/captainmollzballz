import { useState, ChangeEvent } from "react";


function Vote() {
    // these initialize 2 stateful variables result and vote and says what type they are
    const [vote, setVote] = useState<string>();
    const [currentYesCount, setCurrentYesCount] = useState<number>();
    const [currentNoCount, setCurrentNoCount] = useState<number>();

    // this func is called when the input fields change (y/n radio buttons)
    // it takes in the change event and sets the vote variable to the value (y or n)
    const voteInputChange = (event:
        ChangeEvent<HTMLInputElement>) => {
        setVote(event.target.value);
    };

    async function postVote() {
// fetch makes an http request to that url and returns the response
// it sets data variable to that response which inlcudse the y/n vote counts
        const data = await fetch("https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/vote", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vote })
        });

// .json converts it to JSON form (a dictionary)
// yesCount and noCount just pull the yes /no count out of the jsonData dict
        const jsonData = await data.json();
        setCurrentYesCount(jsonData.body.yesCount);
        setCurrentNoCount(jsonData.body.noCount);
    };

    return (
        <>
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
            { currentYesCount 
                ? <VoteResults
                    yesCount={currentYesCount}
                    noCount={currentNoCount}
                /> 
                : null
            }
        </>

    )
}
export default Vote

// resultProps is a type we made up. It is a dictionary? with 2 key value pairs
type VoteResultProps = {
    yesCount: number | undefined;
    noCount: number | undefined;
};
function VoteResults ({yesCount, noCount}: VoteResultProps) { 
    return (
        <>
            <h2>Results</h2>
            <p>
                Coors is Water: {yesCount} votes
            </p>
            <p>
                Coors is NOT Water: {noCount} votes
            </p>
        </>
    )
}

