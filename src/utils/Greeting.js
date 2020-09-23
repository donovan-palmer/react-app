import React from "react"

function Greeting() {
    const firstName = "Donovan"
    const lastName = "Palmer"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours <17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }

    return(
        <div>
            <h1>My name is {`${firstName} ${lastName}`}</h1>
            <h2>Good {timeOfDay}!</h2>
        </div>
    )
}

export default Greeting