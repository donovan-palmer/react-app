import React from "react"

function Joke(props) {
    return (
        <ul className="joke">
            <li style={{display: !props.joke.question && "none"}}>Question: {props.joke.question}</li>
            <li>Answer: {props.joke.punchLine}</li>
        </ul>
    )
}

export default Joke