import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import Content from "./Content"
import Nav from "./Nav"


//Components should be capital letter Camel Case standard. 
// Components can have child components, with HTML elements being the 
//base of the DOM model
function App() {
    return (
        <div>
            <Header />
            <Nav />
            <Content />
            <Footer />
        </div>
    )
}

export default App