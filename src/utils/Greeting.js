import React from "react"

function Greeting() {
    const firstName = "Donovan"
    const lastName = "Palmer"

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    const styles = {
        backgroundColor: "gray",
        fontSize: "30px"
    }

    if (hours < 12) {
        timeOfDay = "morning"
        styles.color = "yellow"
    } else if (hours >= 12 && hours <17) {
        timeOfDay = "afternoon"
        styles.color = "orange"
    } else {
        timeOfDay = "night"
        styles.color = "purple"
    }

  
    return(
        <div>
            <h1 style={styles}>My name is {`${firstName} ${lastName}`}</h1>
            <h2>Good {timeOfDay}!</h2>
        </div>
    )
}

export default Greeting