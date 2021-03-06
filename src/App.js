import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Content from "./components/Content"
import ContactCard from "./components/ContactCard"
import Joke from "./components/Joke"
import jokesData from "./utils/jokesData"
import Product from "./components/Product"
import productsData from "./utils/vschoolProducts"
import Greeting from "./utils/Greeting"



//Components should be capital letter Camel Case standard. 
// Components can have child components, with HTML elements being the 
//base of the DOM model
function App() {
    const jokeComponents = jokesData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />)
    const productComponents = productsData.map(item => <Product key={item.id} product={item}/>)
    
    return (
        <div>
            <Header />
            <Greeting />
            <Content />

            <h1>JOKES</h1>
            <div> 
                {jokeComponents}  
            </div>

            <h1>PRODUCTS</h1>
            <div>
                {productComponents}
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