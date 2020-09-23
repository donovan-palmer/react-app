import React from "react"
import ReactDOM from "react-dom"

function MyInfo() {
  return (
    <div>
      <h1>Donovan Palmer</h1>
      <p>Im learning react</p>
      <ul>
        <li>California</li>
        <li>Japan</li>
        <li>Nantucket</li>
      </ul>
    </div>  
)
}



ReactDOM.render(
  <MyInfo/>,
  document.getElementById("root")
)