import React from "react";
import { useState } from "react";

function App() {

  const [headingText, setHeadingText] = useState("Hello");
  const [buttonHover, setButtonHover] = useState(false);

  function handleClick(){
    setHeadingText("Submitted");
  }
  function handleMouseOver() {
    setButtonHover(true);
  }

  function handleMouseOut() {
    setButtonHover(false);
  }
  const buttonStyle = {
    backgroundColor: buttonHover ? "lightgray" : "white",
    border: "1px solid black",
  };
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button onClick={handleClick}
       onMouseOver ={handleMouseOver}
       onMouseOut = {handleMouseOut}
       style = {buttonStyle}
      
      >
        Submit</button>
    </div>
  );
}

export default App;
