import { useState } from "react";

function Vote() {
    type resultProps = {
        yesCount: number;
        noCount: number;
    };
    const [result, setResult] = useState<resultProps>();
    const [vote, setVote] = useState<string>();

    const voteInputChange = (event:
        React.ChangeEvent<HTMLInputElement>) => {
        setVote(event.target.value);
    };

    async function postVote() {
        const data = await fetch("https://0wbaztinr8.execute-api.us-east-1.amazonaws.com/prod/vote", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ vote })
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

            <h2>Results</h2>
            <p>
                Coors is Water: {result?.yesCount} votes
            </p>
            <p>
                Coors is NOT Water: {result?.noCount} votes
            </p>
        </>

    )
}

export default Vote