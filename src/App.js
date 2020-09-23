import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Content from "./components/Content"
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import Greeting from "./utils/Greeting"

//Components should be capital letter Camel Case standard. 
// Components can have child components, with HTML elements being the 
//base of the DOM model
function App() {
    return (
        <div>
            <Header />
            <Greeting />
            <Content />
            <div className="jokes">
                <Joke
                    joke={{punchLine: "It's hard to explain puns to kleptomaniacs because they always take things literally."}}
                />
                <Joke
                    joke={{question: "What's the best thing about Switzerland?", punchLine: "I don't know, but the flag is a big plus!"}}
                />

                <Joke
                    joke={{question: "Did you hear about the mathematician who's afraid of negative numbers?", punchLine: "He'' stop at nothing to avoid them!"}}
                />

                <Joke
                    joke={{question: "Hear about the new restaurant called Karma?", punchLine: "There's no menu: You get what you deserve"}}
                />

                <Joke
                    joke={{question: "Did you hear about the actor who fell through the floorboards?", punchLine: "He was just going through a stage."}}
                />

                <Joke
                    joke={{question: "Did you hear about the claustrophobic astronaut?", punchLine: "He just needed a little space."}}
                />
            </div>
            <div className="contacts">
                <ContactCard 
                    contact={{name: "Mr. Whiskerson", imgUrl: "http://placekitten.com/300/200", phone: "(212) 555-1234", email: "mr.whiskaz@catnap.meow"}}
                />

                <ContactCard 
                    contact={{name: "Fluffykins", imgUrl: "http://placekitten.com/400/200", phone: "(212) 555-2345", email:"fluff@me.com"}}
                />

                <ContactCard 
                    contact={{name: "Destroyer", imgUrl: "http://placekitten.com/400/300", phone: "(212) 555-3456", email: "ofworlds@yahoo.com"}}
                />

                <ContactCard 
                   contact={{name: "Felix", imgUrl: "http://placekitten.com/200/100", phone: "(212) 555-4567", email: "thecat@hotmail.com"}}
                />
                
            </div>

            <Footer />
        </div>
    )
}

export default App