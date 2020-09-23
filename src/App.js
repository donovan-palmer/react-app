import React from "react"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Content from "./components/Content"
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
            <Footer />
        </div>
    )
}

export default App